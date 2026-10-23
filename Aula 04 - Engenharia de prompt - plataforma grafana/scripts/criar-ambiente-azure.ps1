param(
    [string]$SubscriptionId = "b34ce124-5fd1-47a1-ba7c-acbf5367c573",
    [string]$ResourceGroupName = "rgaula4grafana",
    [string]$Location = "eastus2",
    [string]$VmName = "vm-aula4-grafana",
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
Write-Host "[*] Selecionando assinatura Azure: $SubscriptionId..." -ForegroundColor Yellow
az account set --subscription $SubscriptionId

# 2. Assegurar Resource Group rgaula4grafana
Write-Host "[*] Verificando Resource Group: $ResourceGroupName em $Location..." -ForegroundColor Yellow
az group create --name $ResourceGroupName --location $Location --tags Projeto=CursoGrafana Aula=04 Metodo=EngenhariaDePrompt --output none

# 3. Detectar IP público do professor para NSG
$teacherIp = (Invoke-RestMethod -Uri "https://api.ipify.org?format=json").ip
Write-Host "[*] IP do Professor detectado: $teacherIp" -ForegroundColor Yellow

# 4. Ler chave pública SSH
$sshKey = Get-Content -Raw $SshPublicKeyPath

# 5. Deploy via Bicep
Write-Host "[*] Iniciando deployment Bicep (VM, VNet, NSG, IP Público)..." -ForegroundColor Yellow
$bicepPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "infra\main.bicep"

$deployResult = az deployment group create `
    --resource-group $ResourceGroupName `
    --template-file $bicepPath `
    --parameters location=$Location vmName=$VmName vmSize=$VmSize adminUsername=$AdminUsername sshPublicKey="$sshKey" teacherIp="$teacherIp" `
    --output json | ConvertFrom-Json

$publicIp = $deployResult.properties.outputs.publicIpAddress.value
$fqdn = $deployResult.properties.outputs.fqdn.value

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
