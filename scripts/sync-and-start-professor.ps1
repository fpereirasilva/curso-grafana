param(
    [string]$PublicIp,
    [string]$ResourceGroupName = "RG_CURSO_GRAFANA",
    [string]$PipName = "vm-grafana-professor-ip",
    [string]$AdminUsername = "azureuser",
    [string]$SshKeyPath = "C:\Users\FabioSilva\.ssh\id_rsa"
)

$ErrorActionPreference = "Stop"

# Se não informou o IP, busca dinamicamente da Azure
if (-not $PublicIp) {
    Write-Host "[*] Buscando IP público da VM na Azure..." -ForegroundColor Yellow
    $PublicIp = az network public-ip show --resource-group $ResourceGroupName --name $PipName --query ipAddress --output tsv
}

if (-not $PublicIp) {
    Write-Error "Não foi possível obter o IP público da VM. Verifique se o Resource Group e a VM foram criados."
}

Write-Host "=============================================================" -ForegroundColor Cyan
Write-Host "🚀 SINCRONIZANDO E SUBINDO STACK DO PROFESSOR EM: $PublicIp" -ForegroundColor Cyan
Write-Host "=============================================================" -ForegroundColor Cyan

$localLabPath = "E:\01_Projetos\Curso Grafana\lab\professor"

Write-Host "[*] Compactando arquivos locais para envio..." -ForegroundColor Yellow
$tempZip = "$env:TEMP\lab-professor.tar.gz"

# Usando tar nativo do Windows para criar tar.gz
Push-Location "E:\01_Projetos\Curso Grafana\lab"
tar -czf $tempZip professor
Pop-Location

Write-Host "[*] Aguardando porta SSH (22) responder..." -ForegroundColor Yellow
$sshReady = $false
$retries = 15
while (-not $sshReady -and $retries -gt 0) {
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $tcp.Connect($PublicIp, 22)
        $tcp.Close()
        $sshReady = $true
    } catch {
        Write-Host "[...] SSH ainda inicializando na VM... aguardando 10s ($retries tentativas restantes)" -ForegroundColor DarkGray
        Start-Sleep -Seconds 10
        $retries--
    }
}

Write-Host "[*] Enviando arquivos para a VM Azure via SCP..." -ForegroundColor Yellow
scp -o StrictHostKeyChecking=no -i $SshKeyPath $tempZip "${AdminUsername}@${PublicIp}:/tmp/lab-professor.tar.gz"

Write-Host "[*] Descompactando e iniciando containers Docker na VM..." -ForegroundColor Yellow
$remoteCmds = @'
set -e
echo "[VM] Descompactando lab do professor..."
mkdir -p /home/azureuser/lab
tar -xzf /tmp/lab-professor.tar.gz -C /home/azureuser/lab
cd /home/azureuser/lab/professor

echo "[VM] Aguardando daemon do Docker responder..."
until docker info > /dev/null 2>&1; do
  echo "Aguardando docker iniciar..."
  sleep 3
done

echo "[VM] Subindo a stack de observabilidade com build do app-telemetry..."
docker compose down -v || true
docker compose up -d --build

echo "[VM] Status dos containers:"
docker compose ps
'@

ssh -o StrictHostKeyChecking=no -i $SshKeyPath "${AdminUsername}@${PublicIp}" $remoteCmds

Remove-Item $tempZip -Force -ErrorAction SilentlyContinue

Write-Host "=============================================================" -ForegroundColor Green
Write-Host "✅ STACK DO PROFESSOR ATIVA E POPULADA COM SUCESSO!" -ForegroundColor Green
Write-Host "Acesse o Grafana agora em: http://${PublicIp}:3000" -ForegroundColor Cyan
Write-Host "Login: admin / Senha: admin" -ForegroundColor Yellow
Write-Host "=============================================================" -ForegroundColor Green
