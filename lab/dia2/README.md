# Lab Dia 2 - Dashboards dinâmicos, variáveis e alertas

## Subir
```bash
docker compose up -d
```

## Endereços
- Grafana:        http://localhost:3000  (admin / admin)
- Prometheus:     http://localhost:9090
- Alertmanager:   http://localhost:9093
- cAdvisor:       http://localhost:8080
- Node Exporter:  http://localhost:9100

## O que o aluno pratica
1. **Variáveis**: dropdown `$host` em "02 - Host dinâmico (variáveis)" muda todos os painéis.
2. **Novos tipos de painel**: gauge, table, bar gauge (barchart), heatmap.
3. **PromQL avançado**: `topk`, agregação por label, `rate`, `$__rate_interval`.
4. **Alertas Prometheus** (em `alerts.yml`): HostCPUAlta, HostDiscoAlto, HostDown.
5. **Alertas Grafana** (provisionados em `provisioning/alerting/alerting.yml`).
6. **Containers com cAdvisor**: dashboard "03 - Containers (cAdvisor)".

## Acompanhar alertas
- Prometheus: http://localhost:9090/alerts
- Alertmanager: http://localhost:9093/#/alerts
- Grafana: engrenagem > Alerting > Alert rules
