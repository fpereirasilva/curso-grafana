#!/usr/bin/env bash
set -euo pipefail

SUBSCRIPTION_ID="b34ce124-5fd1-47a1-ba7c-acbf5367c573"
RG_NAME="RG_CURSO_GRAFANA"
LOCATION="eastus2"
VM_NAME="vm-grafana-professor"
VM_SIZE="Standard_D2s_v3"
ADMIN_USER="azureuser"
SSH_PUB_KEY="$HOME/.ssh/id_rsa.pub"
SSH_PRIV_KEY="$HOME/.ssh/id_rsa"

echo "================================================================="
echo "🚀 CRIAR AMBIENTE DO PROFESSOR — CURSO GRAFANA GREEN (AZURE)"
echo "================================================================="

az account set --subscription "$SUBSCRIPTION_ID"
az group create --name "$RG_NAME" --location "$LOCATION" --output table

# NSG
az network nsg create --resource-group "$RG_NAME" --name "${VM_NAME}-nsg" --location "$LOCATION" --output table
for port in 22 3000 9090 9093 3100 3200; do
  priority=$((1000 + port / 10))
  if [ "$port" -eq 9093 ]; then priority=1950; fi
  az network nsg rule create \
    --resource-group "$RG_NAME" \
    --nsg-name "${VM_NAME}-nsg" \
    --name "Allow-${port}" \
    --priority "$priority" \
    --access Allow \
    --direction Inbound \
    --protocol Tcp \
    --destination-port-ranges "$port" \
    --output none
done

# IP Publico e Rede
DNS_LABEL="grafana-prof-$RANDOM"
az network public-ip create --resource-group "$RG_NAME" --name "${VM_NAME}-ip" --location "$LOCATION" --allocation-method Static --sku Standard --dns-name "$DNS_LABEL" --output table
az network vnet create --resource-group "$RG_NAME" --name "${VM_NAME}-vnet" --address-prefixes 10.10.0.0/16 --subnet-name subnet-grafana --subnet-prefixes 10.10.1.0/24 --output table
az network nic create --resource-group "$RG_NAME" --name "${VM_NAME}-nic" --vnet-name "${VM_NAME}-vnet" --subnet subnet-grafana --network-security-group "${VM_NAME}-nsg" --public-ip-address "${VM_NAME}-ip" --output table

# VM
az vm create \
  --resource-group "$RG_NAME" \
  --name "$VM_NAME" \
  --nics "${VM_NAME}-nic" \
  --image "Canonical:0001-com-ubuntu-server-jammy:22_04-lts-gen2:latest" \
  --size "$VM_SIZE" \
  --admin-username "$ADMIN_USER" \
  --ssh-key-values "$(cat "$SSH_PUB_KEY")" \
  --output table

PUBLIC_IP=$(az network public-ip show --resource-group "$RG_NAME" --name "${VM_NAME}-ip" --query ipAddress -o tsv)
echo "================================================================="
echo "✅ VM CRIADA: $PUBLIC_IP"
echo "Para subir os containers, execute o script de sync."
echo "================================================================="
