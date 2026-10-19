param(
    [string]$ResourceGroupName = "RG_CURSO_GRAFANA",
    [string]$Location = "eastus2",
    [string]$VmName = "vm-grafana-professor",
    [string]$VmSize = "Standard_B2s",
    [string]$AdminUsername = "azureuser",
    [string]$SshKeyPath = "C:\Users\FabioSilva\.ssh\id_rsa.pub"
)

$ErrorActionPreference = "Stop"

Write-Host "=============================================================" -ForegroundColor Cyan
Write-Host "🚀 PROVISIONAMENTO AMBIENTE DO PROFESSOR (AZURE - CURSO GRAFANA)" -ForegroundColor Cyan
Write-Host "=============================================================" -ForegroundColor Cyan

# 1. Verificar Azure CLI
Write-Host "[*] Verificando autenticação no Azure CLI..." -ForegroundColor Yellow
$accountJson = az account show --output json | ConvertFrom-Json
Write-Host "[OK] Conectado na assinatura: $($accountJson.name) ($($accountJson.id))" -ForegroundColor Green

# 2. Criar Resource Group
Write-Host "[*] Criando/Verificando Resource Group: $ResourceGroupName em $Location..." -ForegroundColor Yellow
az group create --name $ResourceGroupName --location $Location --output table

# 3. Criar Network Security Group (NSG) com as portas necessárias
$nsgName = "${VmName}-nsg"
Write-Host "[*] Criando Network Security Group: $nsgName..." -ForegroundColor Yellow
az network nsg create --resource-group $ResourceGroupName --name $nsgName --location $Location --output table

# Regras NSG
$rules = @(
    @{ Name="Allow-SSH"; Port=22; Priority=1000; Description="Acesso SSH administrativo" },
    @{ Name="Allow-Grafana"; Port=3000; Priority=1010; Description="Acesso Web UI Grafana" },
    @{ Name="Allow-Prometheus"; Port=9090; Priority=1020; Description="Acesso Web UI Prometheus" },
    @{ Name="Allow-Alertmanager"; Port=9093; Priority=1030; Description="Acesso Web UI Alertmanager" },
    @{ Name="Allow-Loki"; Port=3100; Priority=1040; Description="Acesso API Loki" },
    @{ Name="Allow-Tempo"; Port=3200; Priority=1050; Description="Acesso API Tempo" }
)

foreach ($r in $rules) {
    Write-Host "[*] Configurando regra NSG: $($r.Name) na porta $($r.Port)..." -ForegroundColor DarkGray
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

# 4. Criar IP Público
$pipName = "${VmName}-ip"
Write-Host "[*] Criando IP Público com DNS: $pipName..." -ForegroundColor Yellow
$dnsLabel = "grafana-prof-$(Get-Random -Minimum 1000 -Maximum 9999)"
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
Write-Host "[*] Criando Interface de Rede (NIC): $nicName..." -ForegroundColor Yellow
az network nic create `
    --resource-group $ResourceGroupName `
    --name $nicName `
    --vnet-name $vnetName `
    --subnet $subnetName `
    --network-security-group $nsgName `
    --public-ip-address $pipName `
    --output table

# 7. Cloud-init para instalar Docker e Docker Compose automaticamente
$cloudInitPath = [System.IO.Path]::GetTempFileName()
@'
#cloud-config
package_upgrade: true
packages:
  - apt-transport-https
  - ca-certificates
  - curl
  - gnupg
  - lsb-release
  - git
  - htop
  - jq
runcmd:
  - mkdir -p /etc/apt/keyrings
  - curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  - echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
  - apt-get update -y
  - apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  - systemctl enable --now docker
  - usermod -aG docker azureuser
  - mkdir -p /home/azureuser/lab-professor
  - chown -R azureuser:azureuser /home/azureuser/lab-professor
'@ | Set-Content -Path $cloudInitPath -Encoding utf8

# 8. Criar Máquina Virtual
Write-Host "[*] Criando Máquina Virtual $VmName ($VmSize) com Ubuntu 22.04 LTS..." -ForegroundColor Yellow
az vm create `
    --resource-group $ResourceGroupName `
    --name $VmName `
    --nics $nicName `
    --image "Canonical:0001-com-ubuntu-server-jammy:22_04-lts-gen2:latest" `
    --size $VmSize `
    --admin-username $AdminUsername `
    --ssh-key-values $SshKeyPath `
    --custom-data $cloudInitPath `
    --output table

Remove-Item -Path $cloudInitPath -Force -ErrorAction SilentlyContinue

# 9. Obter IP Público e FQDN
$publicIp = az network public-ip show --resource-group $ResourceGroupName --name $pipName --query ipAddress --output tsv
$fqdn = az network public-ip show --resource-group $ResourceGroupName --name $pipName --query dnsSettings.fqdn --output tsv

Write-Host "=============================================================" -ForegroundColor Green
Write-Host "🎉 VM DO PROFESSOR CRIADA COM SUCESSO!" -ForegroundColor Green
Write-Host "IP Público:  $publicIp" -ForegroundColor Yellow
Write-Host "FQDN/Host:   $fqdn" -ForegroundColor Yellow
Write-Host "Acesso SSH:  ssh $AdminUsername@$publicIp" -ForegroundColor Yellow
Write-Host "Grafana:     http://${publicIp}:3000 (admin / admin)" -ForegroundColor Cyan
Write-Host "Prometheus:  http://${publicIp}:9090" -ForegroundColor Cyan
Write-Host "Alertmanager:http://${publicIp}:9093" -ForegroundColor Cyan
Write-Host "=============================================================" -ForegroundColor Green
