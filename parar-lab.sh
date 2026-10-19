#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "================================================================="
echo "🛑 ENCERRANDO CONTAINERS DO CURSO GRAFANA"
echo "================================================================="

# Parar V9 se existir
if [ -d "$SCRIPT_DIR/Curso_Grafana_Green_V9/lab-alunos" ]; then
  cd "$SCRIPT_DIR/Curso_Grafana_Green_V9/lab-alunos" 2>/dev/null || true
  docker compose down 2>/dev/null || true
fi

# Parar labs adicionais se estiverem rodando
for dia in dia1 dia2 dia4; do
  if [ -d "$SCRIPT_DIR/lab/$dia" ]; then
    cd "$SCRIPT_DIR/lab/$dia" 2>/dev/null || true
    docker compose down 2>/dev/null || true
  fi
done

echo "[OK] Todos os containers foram parados com sucesso! Volumes preservados."
