# Lab Dia 3 - Instalação completa no Ubuntu

## Pré-requisitos
- Ubuntu 22.04 LTS (ou 20.04) limpo
- Acesso a internet
- Usuário com `sudo`
- Portas 3000, 9090 e 9100 livres

## Sequência de execução

```bash
# 1. Preparar sistema (atualiza, instala pré-requisitos, cria usuário)
sudo bash 01-prepare.sh

# 2. Instalar Grafana 11.3 via APT oficial
sudo bash 02-install-grafana.sh

# 3. Configurar Grafana e provisionar datasource Prometheus
sudo bash 03-configure.sh

# 4. Instalar Prometheus
sudo bash 04-install-prometheus.sh

# 5. Instalar Node Exporter
sudo bash 05-install-node-exporter.sh

# 6. Validar tudo
sudo bash 06-validate.sh
```

## Estrutura
- `01-prepare.sh` — pacote, diretórios, firewall
- `02-install-grafana.sh` — repositório e pacote
- `03-configure.sh` — grafana.ini, datasource, systemd
- `04-install-prometheus.sh` — binário, config, systemd
- `05-install-node-exporter.sh` — binário, systemd
- `06-validate.sh` — checks de saúde

Cada script é **idempotente**: pode ser re-executado sem quebrar. Em caso de erro,
leia a mensagem: os scripts usam `set -euo pipefail` e abortam na primeira falha.

## Acessos após tudo subir
| Serviço        | URL                            | User     | Pass   |
|----------------|--------------------------------|----------|--------|
| Grafana        | http://localhost:3000          | admin    | admin  |
| Prometheus     | http://localhost:9090          | -        | -      |
| Node Exporter  | http://localhost:9100/metrics  | -        | -      |

## Próximo passo (Dia 4 do curso)
- Substituir `admin/admin` e mover para SQLite/Postgres gerenciado.
- Habilitar TLS (Caddy/Nginx na frente).
- Provisionar dashboards a partir de arquivos YAML (file-based provisioning).
- Configurar Alertmanager e canais externos (e-mail, Slack, webhook).
