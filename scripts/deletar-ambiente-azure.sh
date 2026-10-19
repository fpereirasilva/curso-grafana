#!/usr/bin/env bash
set -euo pipefail

SUBSCRIPTION_ID="b34ce124-5fd1-47a1-ba7c-acbf5367c573"
RG_NAME="RG_CURSO_GRAFANA"

echo "================================================================="
echo "🗑️  DELETAR AMBIENTE DO CURSO GRAFANA GREEN NA AZURE"
echo "================================================================="

az account set --subscription "$SUBSCRIPTION_ID"

if ! az group exists --name "$RG_NAME" | grep -q "true"; then
  echo "[INFO] O Resource Group '$RG_NAME' não existe ou já foi excluído."
  exit 0
fi

read -p "Tem certeza que deseja DELETAR PERMANENTEMENTE o Resource Group '$RG_NAME'? (s/N) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[SsYy]$ ]]; then
  echo "[CANCELADO] Operação abortada."
  exit 0
fi

echo "[*] Excluindo Resource Group '$RG_NAME' na Azure..."
az group delete --name "$RG_NAME" --yes --no-wait

echo "================================================================="
echo "✅ AMBIENTE AZURE ENVIADO PARA EXCLUSÃO DEFINITIVA COM SUCESSO!"
echo "================================================================="
