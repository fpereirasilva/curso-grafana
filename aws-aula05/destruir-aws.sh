#!/usr/bin/env bash
# Deletar todos os recursos do lab na AWS
set -euo pipefail
REGION="us-east-1"
TAG_NAME="vm-grafana-aula05-aws"
SG_NAME="sg-curso-grafana-aula05"
KEY_NAME="curso-grafana-aws-key"

echo "================================================================="
echo "⚠️  DESTRUINDO AMBIENTE AULA 05 NA AWS"
echo "================================================================="

# 1. Terminar Instâncias
echo "[*] Encerrando instâncias EC2 com tag $TAG_NAME..."
INSTANCE_IDS=$(aws ec2 describe-instances --region "$REGION" \
    --filters "Name=tag:Name,Values=$TAG_NAME" "Name=instance-state-name,Values=running,stopped" \
    --query "Reservations[].Instances[].InstanceId" --output text)

if [ -n "$INSTANCE_IDS" ]; then
    echo "[*] Terminando instâncias: $INSTANCE_IDS"
    aws ec2 terminate-instances --region "$REGION" --instance-ids $INSTANCE_IDS >/dev/null
    echo "[*] Aguardando terminação..."
    aws ec2 wait instance-terminated --region "$REGION" --instance-ids $INSTANCE_IDS
    echo "[OK] Instâncias finalizadas."
fi

# 2. Deletar Security Group
echo "[*] Removendo Security Group $SG_NAME..."
SG_ID=$(aws ec2 describe-security-groups --region "$REGION" --filters "Name=group-name,Values=$SG_NAME" --query "SecurityGroups[0].GroupId" --output text 2>/dev/null || echo "None")
if [ "$SG_ID" != "None" ] && [ -n "$SG_ID" ]; then
    aws ec2 delete-security-group --region "$REGION" --group-id "$SG_ID" 2>/dev/null || echo "[!] SG em uso ou já removido."
fi

# 3. Deletar Key Pair
echo "[*] Removendo Key Pair $KEY_NAME..."
aws ec2 delete-key-pair --region "$REGION" --key-name "$KEY_NAME" 2>/dev/null || true
rm -f "$HOME/.ssh/${KEY_NAME}.pem"

echo "================================================================="
echo "✅ AMBIENTE AWS COMPLETAMENTE REMOVIDO COM SUCESSO!"
echo "================================================================="
