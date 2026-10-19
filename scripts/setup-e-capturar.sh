#!/usr/bin/env bash
# =============================================================================
# run_pipeline.sh - versão para WSL/Linux
# Sobe o lab, aplica a identidade visual, captura telas e regenera o PPTX
# =============================================================================

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "==> Diretório do projeto: $ROOT"

# -----------------------------------------------------------------------------
# 1) Verificar Docker
# -----------------------------------------------------------------------------
if ! command -v docker &>/dev/null; then
    echo "ERRO: Docker não encontrado. Instale o Docker Desktop ou docker-engine primeiro."
    exit 1
fi

# -----------------------------------------------------------------------------
# 2) Subir o lab/dia2
# -----------------------------------------------------------------------------
echo
echo "==> Subindo o ambiente (lab/dia2)"
cd "$ROOT/lab/dia2"
docker compose up -d
cd "$ROOT"

echo "  Aguardando Grafana inicializar..."
sleep 15

# -----------------------------------------------------------------------------
# 3) Verificar Python e Playwright
# -----------------------------------------------------------------------------
if ! command -v python3 &>/dev/null; then
    echo "ERRO: Python 3 não encontrado."
    exit 1
fi

echo
echo "==> Instalando Playwright (se necessário)"
python3 -m pip install --quiet --break-system-packages playwright pillow 2>/dev/null || \
    python3 -m pip install --quiet playwright pillow

python3 -m playwright install chromium 2>/dev/null || true

# -----------------------------------------------------------------------------
# 4) Identidade visual (se houver logo + paleta)
# -----------------------------------------------------------------------------
if [[ -f "$ROOT/assets/logo/logo.png" && -f "$ROOT/assets/palette.json" ]]; then
    echo
    echo "==> Aplicando identidade visual da escola"
    python3 "$ROOT/scripts/apply_brand.py"
else
    echo
    echo "==> Identidade visual não configurada. Pulando."
    echo "  Para personalizar, coloque em:"
    echo "    $ROOT/assets/logo/logo.png"
    echo "    $ROOT/assets/palette.json"
fi

# -----------------------------------------------------------------------------
# 5) Capturar telas
# -----------------------------------------------------------------------------
echo
echo "==> Capturando telas do Grafana"
python3 "$ROOT/scripts/capture_grafana_screenshots.py"

# -----------------------------------------------------------------------------
# 6) Regenerar o PPTX com as imagens
# -----------------------------------------------------------------------------
echo
echo "==> Regenerando o PPTX com as imagens"
cd "$ROOT/docs"
node generate_pptx_with_screenshots.js
cd "$ROOT"

echo
echo "==> Pipeline concluído!"
echo "  PPTX: $ROOT/docs/Grafana_Visualizando_Dados_V1.pptx"
echo "  PDF:  $ROOT/docs/Grafana_Visualizando_Dados_V1.pdf"
