# Lab Dia 1 - Subindo o ambiente

## Pré-requisitos
- Docker Desktop ou Docker Engine + Docker Compose v2 instalados.
- Portas 3000 (Grafana), 9090 (Prometheus) e 9100 (Node Exporter) livres.

## Subir
```bash
docker compose up -d
docker compose ps
```

## Acessar
- Grafana:    http://localhost:3000  (admin / admin)
- Prometheus: http://localhost:9090
- Métricas:   http://localhost:9100/metrics

## Verificar
```bash
# Prometheus tem que ter o target "node-exporter" como UP
curl -s http://localhost:9090/api/v1/targets | jq '.data.activeTargets[] | {job:.labels.job, health:.health}'
```

## Derrubar
```bash
docker compose down        # mantém volumes
docker compose down -v     # zera tudo
```

## Solução de problemas
- **Grafana não sobe**: `docker compose logs -f grafana`
- **Prometheus não raspa node-exporter**: ver `targets` em http://localhost:9090/targets
- **Porta ocupada**: edite `docker-compose.yml` (linha `ports:`) e troque para 13000, 19090 etc.
