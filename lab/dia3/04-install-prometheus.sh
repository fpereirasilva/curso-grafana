#!/usr/bin/env bash
# =============================================================================
# Dia 3 - Script 04: Instalar e configurar Prometheus
# Execute: sudo bash 04-install-prometheus.sh
# O que faz:
#   - Cria usuário prometheus
#   - Baixa o binário oficial
#   - Cria diretórios de config e dados
#   - Gera arquivo prometheus.yml mínimo
#   - Configura serviço systemd
# =============================================================================

set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "ERRO: execute como root."
  exit 1
fi

VER=2.55.1
BIN=/usr/local/bin/prometheus
DIR=/etc/prometheus
DATA=/var/lib/prometheus

echo "==> Criando usuário prometheus"
if ! id prometheus &>/dev/null; then
  adduser --system --no-create-home --shell /bin/false --group prometheus
fi

echo "==> Criando diretórios"
install -d -o prometheus -g prometheus -m 0755 "$DIR" "$DATA"

echo "==> Baixando Prometheus ${VER}"
cd /tmp
curl -fsSLO "https://github.com/prometheus/prometheus/releases/download/v${VER}/prometheus-${VER}.linux-amd64.tar.gz"
tar -xzf "prometheus-${VER}.linux-amd64.tar.gz"

echo "==> Instalando binários"
install -o root -g root -m 0755 "prometheus-${VER}.linux-amd64/prometheus" "$BIN"
install -o root -g root -m 0755 "prometheus-${VER}.linux-amd64/promtool" /usr/local/bin/promtool
cp -r "prometheus-${VER}.linux-amd64/consoles" "$DIR/"
cp -r "prometheus-${VER}.linux-amd64/console_libraries" "$DIR/"
chown -R prometheus:prometheus "$DIR/consoles" "$DIR/console_libraries"

echo "==> Criando prometheus.yml mínimo"
cat > "$DIR/prometheus.yml" <<'YAML'
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files: []

scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]

  - job_name: "node"
    static_configs:
      - targets: ["localhost:9100"]
YAML
chown prometheus:prometheus "$DIR/prometheus.yml"

echo "==> Criando unit systemd"
cat > /etc/systemd/system/prometheus.service <<'UNIT'
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
  --config.file=/etc/prometheus/prometheus.yml \
  --storage.tsdb.path=/var/lib/prometheus \
  --web.console.templates=/etc/prometheus/consoles \
  --web.console.libraries=/etc/prometheus/console_libraries \
  --web.enable-lifecycle
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
UNIT

echo "==> Habilitando Prometheus"
systemctl daemon-reload
systemctl enable --now prometheus

echo "OK - Prometheus instalado. UI em http://localhost:9090"
