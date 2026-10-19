#!/usr/bin/env bash
# =============================================================================
# Dia 3 - Script 02: Instalar Grafana via repositório oficial
# Execute: sudo bash 02-install-grafana.sh
# O que faz:
#   - Adiciona repositório APT oficial da Grafana Labs
#   - Instala o pacote grafana (versão 11.3.0)
#   - Recarrega systemd
# =============================================================================

set -euo pipefail

# Verifica root
if [[ $EUID -ne 0 ]]; then
  echo "ERRO: execute como root."
  exit 1
fi

echo "==> Criando diretório de chaves APT"
install -d -m 0755 /etc/apt/keyrings

echo "==> Baixando chave de assinatura da Grafana Labs"
# A chave GPG garante que o apt confie nos pacotes do repositório oficial.
curl -fsSL https://apt.grafana.com/gpg.key | gpg --dearmor -o /etc/apt/keyrings/grafana.gpg
chmod 0644 /etc/apt/keyrings/grafana.gpg

echo "==> Adicionando repositório ao sources.list.d"
# A entrada faz o apt buscar pacotes em https://apt.grafana.com
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" \
  > /etc/apt/sources.list.d/grafana.list
chmod 0644 /etc/apt/sources.list.d/grafana.list

echo "==> Atualizando índice de pacotes"
apt-get update -y

echo "==> Instalando Grafana 11.3.0"
# --no-install-recommends evita pacotes sugeridos desnecessários
apt-get install -y --no-install-recommends grafana=11.3.0

echo "==> Recarregando systemd"
systemctl daemon-reload

echo "OK - Grafana instalado. Próximo passo: 03-configure.sh"
