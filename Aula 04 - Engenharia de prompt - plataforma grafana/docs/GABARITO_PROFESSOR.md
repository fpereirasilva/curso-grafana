# 🗝️ Gabarito Oficial do Professor — Aula 04

### Resposta do Exercício 1:
- **Consulta de Targets:** `up` (Retorna `prometheus`, `node-exporter` e `ecommerce-app`, todos com valor 1).
- **Percentual de Erros 5xx:**
  ```promql
  100 * sum(rate(http_requests_total{service="ecommerce-lab", status=~"5.."}[5m])) / clamp_min(sum(rate(http_requests_total{service="ecommerce-lab"}[5m])), 0.001)
  ```

### Resposta do Exercício 2:
- **Busca por texto simples:** `{service="ecommerce-lab"} |= "pagamento"`
- **Filtro de erros via JSON:**
  ```logql
  {service="ecommerce-lab"} | json | level="ERROR"
  ```

### Resposta do Exercício 3:
- A correlação é feita observando a janela temporal do pico e aplicando no LogQL:
  ```logql
  {service="ecommerce-lab"} | json | duration_ms > 500
  ```
  Os alunos devem anotar o campo `request_id` gerado pelo microserviço Flask.

### Resposta do Exercício 4:
- No endpoint `/alerts`, os alertas gerados pelo Prometheus passam de `status: "firing"` para `status: "resolved"` graças à flag `send_resolved: true` no `alertmanager.yml`.
