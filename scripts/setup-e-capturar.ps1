# =============================================================================
# run_pipeline.ps1
# Pipeline completo: subir Grafana, aplicar identidade visual, capturar telas,
# e gerar o PPTX com screenshots reais embutidos.
#
# Uso (no PowerShell do Windows, na pasta do projeto):
#     cd E:\01_Projetos\"Curso Grafana"
#     .\scripts\run_pipeline.ps1
#
# Pré-requisitos:
#     - Windows 10/11 com WSL2 OU Docker Desktop
#     - 4 GB de RAM livre
# =============================================================================

$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)
$root = Get-Location
Write-Host "==> Diretório do projeto: $root" -ForegroundColor Cyan

# -----------------------------------------------------------------------------
# 1) Detectar WSL2 ou Docker Desktop
# -----------------------------------------------------------------------------
function Test-WSL {
    try { wsl --status 2>&1 | Out-Null; return $LASTEXITCODE -eq 0 } catch { return $false }
}
function Test-Docker {
    try { docker --version 2>&1 | Out-Null; return $LASTEXITCODE -eq 0 } catch { return $false }
}

$useWSL = $false
$useDocker = $false

if (Test-WSL) { $useWSL = $true; Write-Host "  WSL2 detectado" -ForegroundColor Green }
if (Test-Docker) { $useDocker = $true; Write-Host "  Docker detectado" -ForegroundColor Green }

if (-not $useWSL -and -not $useDocker) {
    Write-Host "ERRO: nem WSL2 nem Docker Desktop encontrado." -ForegroundColor Red
    Write-Host "Instale um dos dois e rode novamente." -ForegroundColor Red
    exit 1
}

# -----------------------------------------------------------------------------
# 2) Verificar/Instalar Docker dentro do WSL (se for usar WSL)
# -----------------------------------------------------------------------------
if ($useWSL -and -not $useDocker) {
    Write-Host "`n==> Instalando Docker dentro do WSL2" -ForegroundColor Yellow
    wsl -e bash -c "curl -fsSL https://get.docker.com -o /tmp/get-docker.sh && sudo sh /tmp/get-docker.sh"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERRO: falha ao instalar Docker no WSL." -ForegroundColor Red
        exit 1
    }
    $useDocker = $true
}

# -----------------------------------------------------------------------------
# 3) Subir o ambiente Grafana (lab/dia2 - mais rico)
# -----------------------------------------------------------------------------
Write-Host "`n==> Subindo o ambiente (lab/dia2)" -ForegroundColor Yellow
Push-Location "$root/lab/dia2"
if ($useWSL) {
    wsl -e bash -c "cd /mnt/e/01_Projetos/Curso\ Grafana/lab/dia2 && docker compose up -d"
} else {
    docker compose up -d
}
Pop-Location

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO: falha ao subir containers." -ForegroundColor Red
    exit 1
}

Write-Host "  Aguardando Grafana inicializar..." -ForegroundColor Gray
Start-Sleep -Seconds 15

# -----------------------------------------------------------------------------
# 4) Instalar Python e Playwright
# -----------------------------------------------------------------------------
Write-Host "`n==> Verificando Python e Playwright" -ForegroundColor Yellow
try {
    python --version 2>&1 | Out-Null
} catch {
    Write-Host "ERRO: Python não está instalado. Instale Python 3.10+ antes de continuar." -ForegroundColor Red
    exit 1
}

# Instala dependências Python
pip install playwright pillow 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "AVISO: pip falhou. Tentando com --break-system-packages..." -ForegroundColor Yellow
    pip install --break-system-packages playwright pillow 2>&1 | Out-Null
}

# Instala Chromium do Playwright
python -m playwright install chromium 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "AVISO: instalação do Chromium pode ter falhado. Continuando..." -ForegroundColor Yellow
}

# -----------------------------------------------------------------------------
# 5) Aplicar identidade visual da escola (se logo e cores existirem)
# -----------------------------------------------------------------------------
$logoPath = "$root/assets/logo/logo.png"
$palettePath = "$root/assets/palette.json"
if ((Test-Path $logoPath) -and (Test-Path $palettePath)) {
    Write-Host "`n==> Aplicando identidade visual da escola" -ForegroundColor Yellow
    python "$root/scripts/apply_brand.py"
} else {
    Write-Host "`n==> Identidade visual da escola NÃO encontrada" -ForegroundColor Yellow
    Write-Host "  Para personalizar, coloque em:" -ForegroundColor Gray
    Write-Host "    $logoPath" -ForegroundColor Gray
    Write-Host "    $palettePath" -ForegroundColor Gray
}

# -----------------------------------------------------------------------------
# 6) Capturar telas reais
# -----------------------------------------------------------------------------
Write-Host "`n==> Capturando telas do Grafana" -ForegroundColor Yellow
python "$root/scripts/capture_grafana_screenshots.py"

# -----------------------------------------------------------------------------
# 7) Regenerar o PPTX com as imagens embutidas
# -----------------------------------------------------------------------------
Write-Host "`n==> Regenerando o PPTX com as imagens" -ForegroundColor Yellow
Push-Location "$root/docs"
node generate_pptx_with_screenshots.js
Pop-Location

Write-Host "`n==> Pipeline concluído!" -ForegroundColor Green
Write-Host "  PPTX:  $root/docs/Grafana_Visualizando_Dados_V1.pptx" -ForegroundColor Cyan
Write-Host "  PDF:   $root/docs/Grafana_Visualizando_Dados_V1.pdf" -ForegroundColor Cyan
Write-Host "  ZIP:   $root/Curso_Grafana_V1_pacote_completo.zip" -ForegroundColor Cyan
