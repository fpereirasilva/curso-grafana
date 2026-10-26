#!/usr/bin/env bash
# =============================================================================
# deploy-aws.sh — Provisionamento Automatizado do Lab Grafana Aula 05 na AWS
# Conta: 3934-3929-0493 | Região: us-east-1 | Instância: t3.small (Ubuntu 22.04)
# =============================================================================

set -euo pipefail

REGION="us-east-1"
INSTANCE_TYPE="t3.small"
KEY_NAME="curso-grafana-aws-key"
KEY_FILE="$HOME/.ssh/${KEY_NAME}.pem"
SG_NAME="sg-curso-grafana-aula05"
TAG_NAME="vm-grafana-aula05-aws"

echo "================================================================="
echo "🚀 PROVISIONANDO LAB GRAFANA AULA 05 NA AWS (us-east-1)"
echo "================================================================="

# 1. Validar identidade AWS
echo "[*] Verificando credenciais AWS..."
CALLER=$(aws sts get-caller-identity --region "$REGION" --output json)
ACCOUNT=$(echo "$CALLER" | grep -o '"Account": "[^"]*' | cut -d'"' -f4)
ARN=$(echo "$CALLER" | grep -o '"Arn": "[^"]*' | cut -d'"' -f4)
echo "[OK] Conectado na conta AWS: $ACCOUNT"
echo "[OK] Identidade: $ARN"

# 2. Obter VPC e Subnet Padrão
echo "[*] Localizando VPC padrão em $REGION..."
VPC_ID=$(aws ec2 describe-vpcs --region "$REGION" --filters "Name=isDefault,Values=true" --query "Vpcs[0].VpcId" --output text)
if [ "$VPC_ID" = "None" ] || [ -z "$VPC_ID" ]; then
    echo "[!] VPC padrão não encontrada, buscando a primeira VPC disponível..."
    VPC_ID=$(aws ec2 describe-vpcs --region "$REGION" --query "Vpcs[0].VpcId" --output text)
fi
echo "[OK] VPC Selecionada: $VPC_ID"

SUBNET_ID=$(aws ec2 describe-subnets --region "$REGION" --filters "Name=vpc-id,Values=$VPC_ID" --query "Subnets[0].SubnetId" --output text)
echo "[OK] Subnet Selecionada: $SUBNET_ID"

# 3. Criar ou Obter Security Group
echo "[*] Configurando Security Group: $SG_NAME..."
SG_ID=$(aws ec2 describe-security-groups --region "$REGION" --filters "Name=group-name,Values=$SG_NAME" "Name=vpc-id,Values=$VPC_ID" --query "SecurityGroups[0].GroupId" --output text 2>/dev/null || echo "None")

if [ "$SG_ID" = "None" ] || [ -z "$SG_ID" ]; then
    SG_ID=$(aws ec2 create-security-group --region "$REGION" --group-name "$SG_NAME" --description "Security Group Curso Grafana - Aula 05 APM" --vpc-id "$VPC_ID" --query "GroupId" --output text)
    echo "[OK] Security Group criado: $SG_ID"

    # Regras de Entrada (Inbound)
    PORTS=(22 3000 9090 3100 3200 8000)
    for PORT in "${PORTS[@]}"; do
        aws ec2 authorize-security-group-ingress --region "$REGION" --group-id "$SG_ID" --protocol tcp --port "$PORT" --cidr 0.0.0.0/0 >/dev/null
        echo "    -> Porta $PORT liberada"
    done
else
    echo "[OK] Security Group existente: $SG_ID"
fi

# 4. Criar ou Obter Par de Chaves SSH
echo "[*] Configurando Key Pair SSH: $KEY_NAME..."
mkdir -p "$HOME/.ssh"
KEY_EXISTS=$(aws ec2 describe-key-pairs --region "$REGION" --key-names "$KEY_NAME" --query "KeyPairs[0].KeyName" --output text 2>/dev/null || echo "None")

if [ "$KEY_EXISTS" = "None" ] || [ ! -f "$KEY_FILE" ]; then
    if [ "$KEY_EXISTS" != "None" ]; then
        aws ec2 delete-key-pair --region "$REGION" --key-name "$KEY_NAME" >/dev/null
    fi
    aws ec2 create-key-pair --region "$REGION" --key-name "$KEY_NAME" --query "KeyMaterial" --output text > "$KEY_FILE"
    chmod 400 "$KEY_FILE"
    echo "[OK] Nova chave SSH gerada e salva em: $KEY_FILE"
else
    echo "[OK] Chave SSH já existente: $KEY_FILE"
fi

# 5. Obter AMI Ubuntu 22.04 LTS mais recente
echo "[*] Buscando AMI Ubuntu 22.04 LTS mais recente em $REGION..."
AMI_ID=$(aws ec2 describe-images --region "$REGION" \
    --owners 099720109477 \
    --filters "Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*" \
              "Name=state,Values=available" \
    --query "sort_by(Images, &CreationDate)[-1].ImageId" \
    --output text)
echo "[OK] AMI Selecionada: $AMI_ID"

# 6. Preparar User Data Script (Instala Docker, Docker Compose e sobe a stack no boot)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STACK_TAR="/tmp/grafana-aula05-stack.tar.gz"

echo "[*] Compactando stack do lab para transferência..."
tar -czf "$STACK_TAR" -C "$SCRIPT_DIR" docker-compose.yml prometheus.yml loki-config.yaml tempo-config.yaml promtail-config.yaml grafana app-telemetry

USERDATA_FILE="/tmp/user_data_aws.sh"
cat << 'EOF' > "$USERDATA_FILE"
#!/bin/bash
set -e
export DEBIAN_FRONTEND=noninteractive

# Atualizar e instalar dependências
apt-get update -y
apt-get install -y ca-certificates curl gnupg lsb-release htop jq git

# Instalar Docker oficial
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

systemctl enable --now docker
usermod -aG docker ubuntu

mkdir -p /home/ubuntu/aws-aula05
chown -R ubuntu:ubuntu /home/ubuntu/aws-aula05
EOF

# 7. Lançar Instância EC2
echo "[*] Lançando instância EC2 $INSTANCE_TYPE ($TAG_NAME)..."
INSTANCE_ID=$(aws ec2 run-instances --region "$REGION" \
    --image-id "$AMI_ID" \
    --instance-type "$INSTANCE_TYPE" \
    --key-name "$KEY_NAME" \
    --security-group-ids "$SG_ID" \
    --subnet-id "$SUBNET_ID" \
    --associate-public-ip-address \
    --block-device-mappings '[{"DeviceName":"/dev/sda1","Ebs":{"VolumeSize":20,"VolumeType":"gp3"}}]' \
    --user-data "file://$USERDATA_FILE" \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=$TAG_NAME},{Key=Curso,Value=Grafana-V1-Aula05}]" \
    --query "Instances[0].InstanceId" \
    --output text)

echo "[OK] Instância EC2 criada: $INSTANCE_ID"
echo "[*] Aguardando instância ficar no estado RUNNING..."
aws ec2 wait instance-running --region "$REGION" --instance-ids "$INSTANCE_ID"

PUBLIC_IP=$(aws ec2 describe-instances --region "$REGION" --instance-ids "$INSTANCE_ID" --query "Reservations[0].Instances[0].PublicIpAddress" --output text)
echo "[OK] Instância RUNNING! IP Público: $PUBLIC_IP"

# 8. Aguardar SSH e Inicialização do Docker
echo "[*] Aguardando porta SSH (22) e Docker ficarem prontos na EC2..."
for i in {1..30}; do
    if ssh -o StrictHostKeyChecking=no -o ConnectTimeout=5 -i "$KEY_FILE" ubuntu@"$PUBLIC_IP" "docker --version" >/dev/null 2>&1; then
        echo "[OK] Docker operacional na EC2!"
        break
    fi
    echo "    ... aguardando inicialização ($i/30)"
    sleep 6
done

# 9. Copiar stack e iniciar containers
echo "[*] Enviando arquivos da stack para a EC2..."
scp -o StrictHostKeyChecking=no -i "$KEY_FILE" "$STACK_TAR" ubuntu@"$PUBLIC_IP":/home/ubuntu/

ssh -o StrictHostKeyChecking=no -i "$KEY_FILE" ubuntu@"$PUBLIC_IP" bash << 'REMOTECMD'
set -e
cd /home/ubuntu/aws-aula05
tar -xzf /home/ubuntu/grafana-aula05-stack.tar.gz
rm -f /home/ubuntu/grafana-aula05-stack.tar.gz

# Configurar systemd para persistir nos reboots
sudo bash -c 'cat << UNIT > /etc/systemd/system/grafana-aula05.service
[Unit]
Description=Curso Grafana - Lab Aula 05 APM Traces
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/ubuntu/aws-aula05
ExecStart=/usr/bin/docker compose up -d
ExecStop=/usr/bin/docker compose stop
TimeoutStartSec=180

[Install]
WantedBy=multi-user.target
UNIT'

sudo systemctl daemon-reload
sudo systemctl enable grafana-aula05.service

echo "[*] Subindo os 6 containers via Docker Compose..."
sudo docker compose up -d --build
REMOTECMD

echo "================================================================="
echo "🎉 AMBIENTE AWS AULA 05 100% OPERACIONAL E POPULADO!"
echo "================================================================="
echo "Grafana Web:  http://${PUBLIC_IP}:3000   (Login: admin / admin)"
echo "Prometheus:   http://${PUBLIC_IP}:9090"
echo "Loki:         http://${PUBLIC_IP}:3100"
echo "Tempo:        http://${PUBLIC_IP}:3200"
echo "E-Commerce:   http://${PUBLIC_IP}:8000/metrics"
echo "SSH:          ssh -i ${KEY_FILE} ubuntu@${PUBLIC_IP}"
echo "================================================================="
echo "Dashboard '05 - E-Commerce APM e Traces' já importado nativamente!"
echo "================================================================="
