#!/usr/bin/env bash
# Parar a instância para custo ZERO de computação
set -euo pipefail
REGION="us-east-1"
TAG_NAME="vm-grafana-aula05-aws"

echo "[*] Localizando instância EC2 ($TAG_NAME)..."
INSTANCE_ID=$(aws ec2 describe-instances --region "$REGION" \
    --filters "Name=tag:Name,Values=$TAG_NAME" "Name=instance-state-name,Values=running" \
    --query "Reservations[0].Instances[0].InstanceId" --output text)

if [ "$INSTANCE_ID" != "None" ] && [ -n "$INSTANCE_ID" ]; then
    echo "[*] Parando instância $INSTANCE_ID..."
    aws ec2 stop-instances --region "$REGION" --instance-ids "$INSTANCE_ID"
    echo "[OK] Instância parada! Custo de CPU/RAM zerado."
else
    echo "[INFO] Nenhuma instância em execução encontrada."
fi
