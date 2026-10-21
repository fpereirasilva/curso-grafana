#!/usr/bin/env bash
# =============================================================================
# 📊 CURSO GRAFANA: VISUALIZANDO DADOS & OBSERVABILIDADE
# Instrutor: Fábio Silva
# Script: parar-lab.sh — Finalizador do Laboratório dos Alunos
# =============================================================================
#
# 🎯 OBJETIVO DESTE SCRIPT:
# Este script encerra com segurança todos os containers Docker em execução do curso,
# liberando os recursos de processamento (CPU) e memória RAM da máquina do aluno.
#
# 💾 PRESERVAÇÃO DE DADOS (IMPORTANTE):
# O comando 'docker compose down' utilizado aqui NÃO apaga os seus dados, dashboards
# criados ou configurações salvas. Eles ficam preservados nos volumes Docker.
# Quando você rodar 'bash iniciar-lab.sh' novamente, seus dashboards continuarão lá!
#
# 🚀 COMO EXECUTAR:
#   bash parar-lab.sh
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

clear
echo "================================================================="
echo "🛑 ENCERRANDO O LABORATÓRIO DO CURSO GRAFANA"
echo "   Liberando recursos de CPU e memória na sua máquina..."
echo "================================================================="
echo ""

# 1. Encerra a stack oficial da V9 (tutorial-environment)
LAB_DIR="$SCRIPT_DIR/Curso_Grafana_Green_V9/lab/tutorial-environment"
if [ -d "$LAB_DIR" ]; then
  echo "[*] Parando containers do laboratório oficial (tutorial-environment)..."
  cd "$LAB_DIR" 2>/dev/null || true
  docker compose -p green-fundamentals down 2>/dev/null || true
fi

# 2. Encerra outros laboratórios modulares (Dia 1, 2, 4) se estiverem ativos
for dia in dia1 dia2 dia4; do
  if [ -d "$SCRIPT_DIR/lab/$dia" ]; then
    echo "[*] Verificando e finalizando possíveis containers em lab/$dia..."
    cd "$SCRIPT_DIR/lab/$dia" 2>/dev/null || true
    docker compose down 2>/dev/null || true
  fi
done

echo ""
echo "================================================================="
echo "✅ TODOS OS CONTAINERS FORAM FINALIZADOS COM SUCESSO!"
echo "================================================================="
echo "💡 Seus dados, dashboards e configurações permanecem salvos nos volumes."
echo "🔄 Para iniciar novamente na próxima aula: bash iniciar-lab.sh"
echo "================================================================="
echo ""
