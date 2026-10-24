param(
    [string]$SubscriptionId = "b34ce124-5fd1-47a1-ba7c-acbf5367c573",
    [string]$ResourceGroupName = "rgaula4copilot",
    [string]$Location = "eastus2",
    [string]$VmName = "vm-copilot-grafana",
    [string]$VmSize = "Standard_D2s_v3",
    [string]$AdminUsername = "labadmin",
    [string]$SshPublicKeyPath = "$env:USERPROFILE\.ssh\id_rsa.pub",
    [string]$SshPrivateKeyPath = "$env:USERPROFILE\.ssh\id_rsa"
)

$ErrorActionPreference = "Stop"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "🚀 AULA 04 — ENGENHARIA DE PROMPT + PLATAFORMA GRAFANA NO AZURE" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan

# 1. Definir Assinatura do Visual Studio Enterprise
Write-Host ("[*] Selecionando assinatura Azure: {0}..." -f $SubscriptionId) -ForegroundColor Yellow
az account set --subscription $SubscriptionId
if ($LASTEXITCODE -ne 0) {
    throw "Não foi possível selecionar a assinatura Azure ${SubscriptionId}."
}

# 2. Assegurar Resource Group rgaula4copilot
Write-Host ("[*] Verificando Resource Group: {0} em {1}..." -f $ResourceGroupName, $Location) -ForegroundColor Yellow
az group create --name $ResourceGroupName --location $Location --tags Projeto=CursoGrafana Aula=04 Metodo=EngenhariaDePrompt --output none
if ($LASTEXITCODE -ne 0) {
    throw "Não foi possível criar ou validar o Resource Group ${ResourceGroupName}."
}

# 3. Detectar IP público do professor para NSG
$teacherIp = (Invoke-RestMethod -Uri "https://api.ipify.org?format=json").ip
if (-not $teacherIp) {
    throw "Não foi possível detectar o IP público para restringir o NSG."
}
$parsedTeacherIp = $null
try {
    $parsedTeacherIp = [System.Net.IPAddress]::Parse($teacherIp)
} catch {
    throw "O IP detectado para o NSG não é um endereço IPv4 válido."
}
if ($parsedTeacherIp.AddressFamily -ne [System.Net.Sockets.AddressFamily]::InterNetwork) {
    throw "O IP detectado para o NSG não é um endereço IPv4 válido."
}
Write-Host "[*] IP do Professor detectado: $teacherIp" -ForegroundColor Yellow

# 4. Ler chave pública SSH
if (-not (Test-Path -LiteralPath $SshPublicKeyPath)) {
    throw "A chave pública SSH não foi encontrada: $SshPublicKeyPath"
}
$sshKey = (Get-Content -Raw -LiteralPath $SshPublicKeyPath).Trim()
if (-not $sshKey) {
    throw "A chave pública SSH está vazia: $SshPublicKeyPath"
}

# 5. Deploy via Bicep
Write-Host "[*] Iniciando deployment Bicep (VM, VNet, NSG, IP Público)..." -ForegroundColor Yellow
$bicepPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "infra\main.bicep"
$deploymentArgs = @(
    "deployment", "group", "create",
    "--resource-group", $ResourceGroupName,
    "--template-file", $bicepPath,
    "--parameters",
    "location=$Location",
    "vmName=$VmName",
    "vmSize=$VmSize",
    "adminUsername=$AdminUsername",
    "sshPublicKey=$sshKey",
    "teacherIp=$teacherIp",
    "--output", "json"
)
$deploymentOutput = az @deploymentArgs
if ($LASTEXITCODE -ne 0) {
    throw "O deployment Bicep falhou. Consulte a mensagem da Azure CLI acima."
}
$deployResult = $deploymentOutput | ConvertFrom-Json

$publicIp = $deployResult.properties.outputs.publicIpAddress.value
$fqdn = $deployResult.properties.outputs.fqdn.value
if (-not $publicIp -or -not $fqdn) {
    throw "O deployment terminou sem retornar o IP público e o FQDN esperados."
}

Write-Host "=================================================================" -ForegroundColor Green
Write-Host "✅ INFRAESTRUTURA AZURE PROVISIONADA COM SUCESSO!" -ForegroundColor Green
Write-Host "IP Público:  $publicIp" -ForegroundColor Yellow
Write-Host "FQDN:        $fqdn" -ForegroundColor Yellow
Write-Host "SSH:         ssh -i $SshPrivateKeyPath ${AdminUsername}@${publicIp}" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Green

return @{
    PublicIp = $publicIp
    Fqdn = $fqdn
    AdminUsername = $AdminUsername
    ResourceGroup = $ResourceGroupName
}
