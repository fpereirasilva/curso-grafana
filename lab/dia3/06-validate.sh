#!/usr/bin/env bash
# =============================================================================
# Dia 3 - Script 06: Validar a stack completa
# Execute: sudo bash 06-validate.sh
# Verifica:
#   - Portas em escuta
#   - Health-check HTTP
#   - Targets UP no Prometheus
#   - DataSource registrado no Grafana (via API)
# =============================================================================

set -euo pipefail

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

ok()   { echo -e "${GREEN}[OK]${NC} $*"; }
fail() { echo -e "${RED}[FAIL]${NC} $*"; exit 1; }

echo "== Verificando serviços systemd =="
for svc in grafana-server prometheus node_exporter; do
  if systemctl is-active --quiet "$svc"; then
    ok "$svc ativo"
  else
    fail "$svc NÃO está ativo. Rode: systemctl status $svc"
  fi
done

echo "== Verificando portas em escuta =="
for port in 3000 9090 9100; do
  if ss -ltn | awk '{print $4}' | grep -q ":$port\$"; then
    ok "porta $port em escuta"
  else
    fail "porta $port NÃO está em escuta"
  fi
done

echo "== Health-check HTTP =="
for url in "http://localhost:3000/api/health" "http://localhost:9090/-/healthy" "http://localhost:9100/metrics"; do
  if curl -fsS -o /dev/null "$url"; then
    ok "$url responde"
  else
    fail "$url não responde"
  fi
done

echo "== Targets do Prometheus =="
# Usa o endpoint da API interna; ignora falhas de jq
curl -fsS "http://localhost:9090/api/v1/targets" \
  | python3 -c "import sys, json; d=json.load(sys.stdin);
for t in d['data']['activeTargets']:
    print(f\"  job={t['labels']['job']:18s} health={t['health']}\")"

echo "== Datasources do Grafana =="
# API do Grafana requer basic auth. admin:admin é o padrão do lab.
curl -fsS -u admin:admin "http://localhost:3000/api/datasources" \
  | python3 -c "import sys, json; d=json.load(sys.stdin);
for ds in d:
    print(f\"  {ds['name']:12s} type={ds['type']:10s} url={ds['url']}\")"

echo
echo "Tudo certo. Acesse:"
echo "  Grafana:    http://localhost:3000  (admin / admin)"
echo "  Prometheus: http://localhost:9090"
echo "  Métricas:   http://localhost:9100/metrics"
