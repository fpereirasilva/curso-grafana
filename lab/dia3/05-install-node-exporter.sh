#!/usr/bin/env bash
# =============================================================================
# Dia 3 - Script 05: Instalar Node Exporter (métricas do host)
# Execute: sudo bash 05-install-node-exporter.sh
# O que faz:
#   - Cria usuário node_exporter
#   - Baixa o binário oficial
#   - Configura serviço systemd escutando na porta 9100
# =============================================================================

set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "ERRO: execute como root."
  exit 1
fi

VER=1.8.2
BIN=/usr/local/bin/node_exporter

echo "==> Criando usuário node_exporter"
if ! id node_exporter &>/dev/null; then
  adduser --system --no-create-home --shell /bin/false --group node_exporter
fi

echo "==> Baixando Node Exporter ${VER}"
cd /tmp
curl -fsSLO "https://github.com/prometheus/node_exporter/releases/download/v${VER}/node_exporter-${VER}.linux-amd64.tar.gz"
tar -xzf "node_exporter-${VER}.linux-amd64.tar.gz"

echo "==> Instalando binário"
install -o root -g root -m 0755 "node_exporter-${VER}.linux-amd64/node_exporter" "$BIN"

echo "==> Criando unit systemd"
cat > /etc/systemd/system/node_exporter.service <<'UNIT'
[Unit]
Description=Prometheus Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
UNIT

systemctl daemon-reload
systemctl enable --now node_exporter

echo "OK - Node Exporter instalado. Métricas em http://localhost:9100/metrics"
