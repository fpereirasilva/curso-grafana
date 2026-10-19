#!/usr/bin/env bash
set -euo pipefail

echo "============================================================="
echo "🚀 SUBINDO REDUNDÂNCIA DO CURSO GRAFANA NO HOMELAB SUSE"
echo "============================================================="

DEST_DIR="/opt/curso-grafana"
mkdir -p "$DEST_DIR"

# Copiar arquivos do professor para o diretório de produção no SUSE
cp -r /home/azureuser/lab/professor/* "$DEST_DIR/" 2>/dev/null || true

cd "$DEST_DIR"

# Criar override de portas para não colidir com Cockpit (:9090) e KesherApp (:8080)
cat << 'YAML' > docker-compose.override.yml
services:
  grafana:
    ports:
      - "3002:3000"

  prometheus:
    ports:
      - "9091:9090"

  cadvisor:
    build:
      context: ./docker-exporter
      dockerfile: Dockerfile
    image: custom-cadvisor-exporter
    restart: unless-stopped
    ports:
      - "8082:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro

  public-data:
    build:
      context: ./public-data-collector
      dockerfile: Dockerfile
    image: custom-public-data-collector
    container_name: lab-public-data-prof
    restart: unless-stopped
    ports:
      - "8086:8085"
    networks:
      - obs-net
YAML

echo "[*] Subindo containers no SUSE..."
docker compose up -d --build

sleep 10
echo "============================================================="
echo "✅ REDUNDÂNCIA DO CURSO GRAFANA ATIVA NO HOMELAB!"
echo "Grafana Local:    http://100.100.113.94:3002 (admin / admin)"
echo "Prometheus Local: http://100.100.113.94:9091"
echo "Alertmanager:     http://100.100.113.94:9093"
echo "============================================================="
