#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "================================================================="
echo "🚀 INICIANDO LABORATÓRIO DO CURSO GRAFANA (LINUX / UBUNTU)"
echo "================================================================="

# 1. Checar se o Docker está instalado e ativo
if ! command -v docker >/dev/null 2>&1; then
  echo "[ERRO] Docker não foi encontrado no sistema."
  echo "Instale o Docker antes de continuar: https://docs.docker.com/engine/install/ubuntu/"
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "[ERRO] O serviço do Docker não está respondendo ou seu usuário não tem permissão."
  echo "Tente: sudo systemctl start docker e sudo usermod -aG docker $USER"
  exit 1
fi

# 2. Executar o laboratório oficial da V9 (Aplicação News + Grafana + Webhook)
LAB_DIR="$SCRIPT_DIR/Curso_Grafana_Green_V9/lab-alunos"
if [ -d "$LAB_DIR" ]; then
  echo "[*] Subindo containers do laboratório oficial..."
  cd "$LAB_DIR"
  docker compose up -d

  echo ""
  echo "================================================================="
  echo "✅ LABORATÓRIO NO AR COM SUCESSO!"
  echo "================================================================="
  echo "📊 Grafana:             http://localhost:3300 (ou :3000)"
  echo "📰 Aplicação de Notícias: http://localhost:38081"
  echo "📬 Receptor de Webhooks:  http://localhost:38090"
  echo ""
  echo "💡 Para parar o laboratório: bash parar-lab.sh"
  echo "📖 Guia completo: cat GUIA_PRATICO_DO_ALUNO.txt"
  echo "================================================================="
else
  echo "[AVISO] Pasta V9 não encontrada. Subindo laboratório base (lab/dia1)..."
  cd "$SCRIPT_DIR/lab/dia1"
  docker compose up -d
  echo "📊 Grafana disponível em: http://localhost:3000 (admin / admin)"
fi
