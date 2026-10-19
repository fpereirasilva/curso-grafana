#!/usr/bin/env bash
# =============================================================================
# Dia 3 - Script 01: Preparar Ubuntu
# Execute: sudo bash 01-prepare.sh
# O que faz:
#   - Atualiza pacotes
#   - Instala utilitários de suporte (curl, apt-transport-https, gnupg)
#   - Cria usuário e diretórios do Grafana
#   - Habilita serviços do firewall
# =============================================================================

set -euo pipefail

# -e: abortar se qualquer comando falhar
# -u: falhar se variável não definida
# -o pipefail: falhar se qualquer comando em um pipe falhar

# Verifica se está rodando como root
if [[ $EUID -ne 0 ]]; then
  echo "ERRO: execute como root. Exemplo: sudo bash $0"
  exit 1
fi

echo "==> Atualizando índice de pacotes"
apt-get update -y

echo "==> Instalando pré-requisitos"
apt-get install -y \
  curl \
  apt-transport-https \
  software-properties-common \
  gnupg \
  lsb-release \
  ca-certificates

echo "==> Criando usuário 'grafana' (sem login, sem senha)"
# O Grafana roda com seu próprio usuário. Criá-lo manualmente evita que o
# pacote gere um UID aleatório (que pode variar entre hosts).
if ! id grafana &>/dev/null; then
  adduser --system --no-create-home --shell /bin/false --group grafana
fi

echo "==> Criando diretórios de trabalho"
install -d -o grafana -g grafana -m 0755 /var/lib/grafana
install -d -o grafana -g grafana -m 0755 /var/log/grafana
install -d -o root  -g root  -m 0755 /etc/grafana
install -d -o root  -g root  -m 0755 /etc/grafana/provisioning

echo "==> Liberando portas 3000 (Grafana) e 9090 (Prometheus) no UFW"
if command -v ufw &>/dev/null && ufw status | grep -q "Status: active"; then
  ufw allow 3000/tcp comment "Grafana"
  ufw allow 9090/tcp comment "Prometheus"
fi

echo "OK - ambiente preparado."
