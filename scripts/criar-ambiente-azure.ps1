param(
    [string]$SubscriptionId = "b34ce124-5fd1-47a1-ba7c-acbf5367c573",
    [string]$ResourceGroupName = "RG_CURSO_GRAFANA",
    [string]$Location = "eastus2",
    [string]$VmName = "vm-grafana-professor",
    [string]$VmSize = "Standard_D2s_v3",
    [string]$AdminUsername = "azureuser",
    [string]$SshPublicKeyPath = "$env:USERPROFILE\.ssh\id_rsa.pub",
    [string]$SshPrivateKeyPath = "$env:USERPROFILE\.ssh\id_rsa",
    [switch]$SkipStackDeploy
)

$ErrorActionPreference = "Stop"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "🚀 CRIAR AMBIENTE DO PROFESSOR — CURSO GRAFANA GREEN (AZURE)" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan

# 1. Definir Assinatura do Visual Studio Enterprise
Write-Host "[*] Definindo assinatura Azure: $SubscriptionId..." -ForegroundColor Yellow
az account set --subscription $SubscriptionId
$account = az account show --output json | ConvertFrom-Json
Write-Host "[OK] Conectado na assinatura: $($account.name) ($($account.id))" -ForegroundColor Green

# 2. Criar Resource Group
Write-Host "[*] Criando Resource Group: $ResourceGroupName em $Location..." -ForegroundColor Yellow
az group create --name $ResourceGroupName --location $Location --output table

# 3. Criar Network Security Group (NSG) com as regras
$nsgName = "${VmName}-nsg"
Write-Host "[*] Criando NSG: $nsgName..." -ForegroundColor Yellow
az network nsg create --resource-group $ResourceGroupName --name $nsgName --location $Location --output table

$rules = @(
    @{ Name="Allow-SSH"; Port=22; Priority=1000 },
    @{ Name="Allow-Grafana"; Port=3000; Priority=1010 },
    @{ Name="Allow-Prometheus"; Port=9090; Priority=1020 },
    @{ Name="Allow-Loki"; Port=3100; Priority=1040 },
    @{ Name="Allow-Tempo"; Port=3200; Priority=1050 },
    @{ Name="Allow-Alertmanager"; Port=9093; Priority=1950 }
)

foreach ($r in $rules) {
    Write-Host "    -> Liberando porta $($r.Port) ($($r.Name))..." -ForegroundColor DarkGray
    az network nsg rule create `
        --resource-group $ResourceGroupName `
        --nsg-name $nsgName `
        --name $r.Name `
        --priority $r.Priority `
        --access Allow `
        --direction Inbound `
        --protocol Tcp `
        --destination-port-ranges $r.Port `
        --output none
}

# 4. Criar IP Público com DNS dinâmico
$pipName = "${VmName}-ip"
$dnsLabel = "grafana-prof-$(Get-Random -Minimum 10000 -Maximum 99999)"
Write-Host "[*] Criando IP Público: $pipName com DNS $dnsLabel..." -ForegroundColor Yellow
az network public-ip create `
    --resource-group $ResourceGroupName `
    --name $pipName `
    --location $Location `
    --allocation-method Static `
    --sku Standard `
    --dns-name $dnsLabel `
    --output table

# 5. Criar VNet e Subnet
$vnetName = "${VmName}-vnet"
$subnetName = "subnet-grafana"
Write-Host "[*] Criando VNet: $vnetName..." -ForegroundColor Yellow
az network vnet create `
    --resource-group $ResourceGroupName `
    --name $vnetName `
    --address-prefixes 10.10.0.0/16 `
    --subnet-name $subnetName `
    --subnet-prefixes 10.10.1.0/24 `
    --output table

# 6. Criar Placa de Rede (NIC)
$nicName = "${VmName}-nic"
Write-Host "[*] Criando Placa de Rede (NIC): $nicName..." -ForegroundColor Yellow
az network nic create `
    --resource-group $ResourceGroupName `
    --name $nicName `
    --vnet-name $vnetName `
    --subnet $subnetName `
    --network-security-group $nsgName `
    --public-ip-address $pipName `
    --output table

# 7. Criar a VM Ubuntu 22.04 LTS (Standard_D2s_v3)
Write-Host "[*] Criando VM $VmName ($VmSize) com Ubuntu 22.04 LTS..." -ForegroundColor Yellow
$sshKeyContent = Get-Content -Raw $SshPublicKeyPath
az vm create `
    --resource-group $ResourceGroupName `
    --name $VmName `
    --nics $nicName `
    --image "Canonical:0001-com-ubuntu-server-jammy:22_04-lts-gen2:latest" `
    --size $VmSize `
    --admin-username $AdminUsername `
    --ssh-key-values $sshKeyContent `
    --output table

# 8. Obter IP Público e FQDN
$publicIp = az network public-ip show --resource-group $ResourceGroupName --name $pipName --query ipAddress --output tsv
$fqdn = az network public-ip show --resource-group $ResourceGroupName --name $pipName --query dnsSettings.fqdn --output tsv

Write-Host "=================================================================" -ForegroundColor Green
Write-Host "✅ VM AZURE CRIADA COM SUCESSO!" -ForegroundColor Green
Write-Host "IP Público:  $publicIp" -ForegroundColor Yellow
Write-Host "DNS:         $fqdn" -ForegroundColor Yellow
Write-Host "SSH:         ssh -i $SshPrivateKeyPath ${AdminUsername}@${publicIp}" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Green

if ($SkipStackDeploy) {
    Write-Host "[INFO] Flag -SkipStackDeploy passada. Concluído sem subir a stack." -ForegroundColor Yellow
    exit 0
}

# 9. Instalar Docker e subir a stack com o script sync
Write-Host "[*] Aguardando inicialização do SSH da VM..." -ForegroundColor Yellow
$sshReady = $false
$retries = 20
while (-not $sshReady -and $retries -gt 0) {
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $tcp.Connect($publicIp, 22)
        $tcp.Close()
        $sshReady = $true
    } catch {
        Write-Host "    ... aguardando SSH (tentativas restantes: $retries)" -ForegroundColor DarkGray
        Start-Sleep -Seconds 6
        $retries--
    }
}

Write-Host "[*] Instalando Docker na VM..." -ForegroundColor Yellow
$installDockerCmd = @'
sudo apt-get update -y
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release htop jq git
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo systemctl enable --now docker
sudo usermod -aG docker azureuser

# Configurar auto-start no boot via systemd
sudo bash -c 'cat << UNIT > /etc/systemd/system/curso-grafana-lab.service
[Unit]
Description=Curso Grafana - Lab Professor Multi-Stack
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/azureuser/lab/professor
ExecStart=/usr/bin/docker compose up -d
ExecStop=/usr/bin/docker compose stop
TimeoutStartSec=180

[Install]
WantedBy=multi-user.target
UNIT'
sudo systemctl daemon-reload
sudo systemctl enable curso-grafana-lab.service
'@

ssh -o StrictHostKeyChecking=no -i $SshPrivateKeyPath "${AdminUsername}@${publicIp}" $installDockerCmd

# 10. Chamar o script de sync para enviar e subir os 10 containers
Write-Host "[*] Sincronizando e iniciando os 10 containers da stack mestre..." -ForegroundColor Yellow
$syncScript = Join-Path $PSScriptRoot "sync-and-start-professor.ps1"
if (Test-Path $syncScript) {
    & $syncScript -PublicIp $publicIp -ResourceGroupName $ResourceGroupName -AdminUsername $AdminUsername -SshKeyPath $SshPrivateKeyPath
}

Write-Host "=================================================================" -ForegroundColor Green
Write-Host "🎉 AMBIENTE AZURE 100% OPERACIONAL E POPULADO!" -ForegroundColor Green
Write-Host "Grafana Web: http://${publicIp}:3000 (admin / admin)" -ForegroundColor Cyan
Write-Host "Prometheus:  http://${publicIp}:9090" -ForegroundColor Cyan
Write-Host "Alertmanager:http://${publicIp}:9093" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Green
