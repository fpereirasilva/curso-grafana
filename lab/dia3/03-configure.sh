#!/usr/bin/env bash
# =============================================================================
# Dia 3 - Script 03: Configurar e iniciar o Grafana
# Execute: sudo bash 03-configure.sh
# O que faz:
#   - Aplica configurações (admin, porta, base de dados SQLite)
#   - Provisiona datasource Prometheus
#   - Habilita e inicia o serviço systemd
# =============================================================================

set -euo pipefail

if [[ $EUID -ne 0 ]]; then
  echo "ERRO: execute como root."
  exit 1
fi

CONF=/etc/grafana/grafana.ini
BACKUP="/etc/grafana/grafana.ini.bak.$(date +%s)"

# Faz backup da configuração original
cp -a "$CONF" "$BACKUP"
echo "==> Backup de $CONF em $BACKUP"

echo "==> Ajustando grafana.ini"

# Habilita o servidor HTTP na porta 3000
sed -i 's/^;http_port = 3000/http_port = 3000/' "$CONF"

# Define usuário e senha admin (altere em produção!)
sed -i 's/^;admin_user = admin/admin_user = admin/' "$CONF"
sed -i 's/^;admin_password = admin/admin_password = admin/' "$CONF"

# Usa SQLite local (default) - dados ficam em /var/lib/grafana/grafana.db
sed -i 's/^;data = /data = /' "$CONF"

# Caminho dos provisionings
sed -i 's|^;provisioning = conf/provisioning|provisioning = /etc/grafana/provisioning|' "$CONF"

echo "==> Provisionando datasource Prometheus"

mkdir -p /etc/grafana/provisioning/datasources

cat > /etc/grafana/provisioning/datasources/prometheus.yml <<'YAML'
apiVersion: 1

datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://localhost:9090
    isDefault: true
    editable: true
    jsonData:
      timeInterval: "15s"
YAML

# Permissões corretas
chown -R grafana:grafana /etc/grafana/provisioning

echo "==> Recarregando systemd e habilitando o serviço"
systemctl daemon-reload
systemctl enable grafana-server
systemctl restart grafana-server

echo "==> Aguardando 5s para o serviço iniciar"
sleep 5

echo "==> Status do serviço"
systemctl --no-pager status grafana-server || true

echo
echo "OK - Grafana configurado."
echo "Acesse: http://localhost:3000  (admin / admin)"
echo "Troque a senha no primeiro login (Authentication > Users > admin > Change password)."
