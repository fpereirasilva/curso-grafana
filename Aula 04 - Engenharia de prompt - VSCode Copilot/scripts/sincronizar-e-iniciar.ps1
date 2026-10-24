param(
    [string]$ResourceGroupName = "rgaula4copilot",
    [string]$VmName = "vm-copilot-grafana",
    [string]$AdminUsername = "labadmin",
    [string]$SshPrivateKeyPath = "$env:USERPROFILE\.ssh\id_rsa"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $SshPrivateKeyPath)) {
    throw "A chave privada SSH não foi encontrada: $SshPrivateKeyPath"
}

Write-Host "[*] Buscando IP Público da VM $VmName no RG $ResourceGroupName..." -ForegroundColor Yellow
$publicIp = az network public-ip show --resource-group $ResourceGroupName --name "${VmName}-ip" --query ipAddress --output tsv

if ($LASTEXITCODE -ne 0 -or -not $publicIp) {
    throw "Não foi possível obter o IP Público da VM."
}

Write-Host "[OK] IP Público: $publicIp" -ForegroundColor Green

# 1. Aguardar porta SSH responder
Write-Host "[*] Aguardando porta 22 responder..." -ForegroundColor Yellow
$ready = $false
$retries = 25
while (-not $ready -and $retries -gt 0) {
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $tcp.Connect($publicIp, 22)
        $tcp.Close()
        $ready = $true
    } catch {
        Start-Sleep -Seconds 4
        $retries--
    }
}

if (-not $ready) {
    throw "A porta SSH da VM não respondeu após as tentativas. Verifique o estado da VM e a regra de acesso."
}

# 2. Instalar Docker e Compose na VM via SSH
Write-Host "[*] Instalando Docker Engine e Compose Plugin na VM..." -ForegroundColor Yellow
$setupCmd = @'
set -e
if ! command -v docker &> /dev/null; then
  sudo apt-get update -y
  sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release git htop jq
  sudo mkdir -p /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg --yes
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update -y
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  sudo systemctl enable --now docker
  sudo usermod -aG docker labadmin
fi
mkdir -p /home/labadmin/aula4-observabilidade/stack
mkdir -p /home/labadmin/aula4-observabilidade/app-demo
mkdir -p /home/labadmin/aula4-observabilidade/notification-receiver
'@

ssh -o StrictHostKeyChecking=accept-new -i $SshPrivateKeyPath "${AdminUsername}@${publicIp}" $setupCmd
if ($LASTEXITCODE -ne 0) {
    throw "Falha ao instalar Docker ou preparar os diretórios na VM."
}

# 3. Copiar os arquivos locais para a VM usando tar + ssh
Write-Host "[*] Sincronizando arquivos da stack, app-demo e receptor para a VM..." -ForegroundColor Yellow
$baseDir = (Get-Item $PSScriptRoot).Parent.FullName

# Compactar e enviar via SSH
Push-Location $baseDir
try {
    tar -czf lab-files.tar.gz stack app-demo notification-receiver
    if ($LASTEXITCODE -ne 0) {
        throw "Falha ao compactar os arquivos da stack."
    }
    scp -o StrictHostKeyChecking=accept-new -i $SshPrivateKeyPath lab-files.tar.gz "${AdminUsername}@${publicIp}:/home/labadmin/aula4-observabilidade/"
    if ($LASTEXITCODE -ne 0) {
        throw "Falha ao copiar os arquivos da stack para a VM."
    }
} finally {
    if (Test-Path -LiteralPath (Join-Path $baseDir "lab-files.tar.gz")) {
        Remove-Item -LiteralPath (Join-Path $baseDir "lab-files.tar.gz") -Force
    }
    Pop-Location
}

# 4. Extrair e subir a stack via docker compose up -d
Write-Host "[*] Subindo todos os containers via Docker Compose na VM..." -ForegroundColor Yellow
$startCmd = @'
set -e
cd /home/labadmin/aula4-observabilidade
tar -xzf lab-files.tar.gz
rm -f lab-files.tar.gz
cd stack
sudo docker compose up -d --build
sudo docker compose ps
'@

ssh -o StrictHostKeyChecking=accept-new -i $SshPrivateKeyPath "${AdminUsername}@${publicIp}" $startCmd
if ($LASTEXITCODE -ne 0) {
    throw "Falha ao iniciar ou verificar os containers da stack."
}

Write-Host "=================================================================" -ForegroundColor Green
Write-Host "🎉 STACK DA AULA 04 EM EXECUÇÃO NO AZURE!" -ForegroundColor Green
Write-Host "Grafana:       http://${publicIp}:3000 (admin / admin)" -ForegroundColor Yellow
Write-Host "Prometheus:    http://${publicIp}:9090" -ForegroundColor Yellow
Write-Host "App Demo (via túnel): http://localhost:8000/checkout" -ForegroundColor Yellow
Write-Host "Túnel SSH:     ssh -L 3000:localhost:3000 -L 8000:localhost:8000 -L 9090:localhost:9090 -i $SshPrivateKeyPath ${AdminUsername}@${publicIp}" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Green
