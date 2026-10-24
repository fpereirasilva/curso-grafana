# 🗝️ Gabarito Oficial — Exercícios com GitHub Copilot (Aula 04)

### Resposta do Desafio 1 (PromQL com Copilot):
- **Prompt Recomendado:** `/promql-observability` com o objetivo “RPS de respostas HTTP 200”, anexando `app-demo/app.py` e `stack/prometheus/prometheus.yml`.
- **Resposta Esperada do Copilot:**
  ```promql
  sum(rate(http_requests_total{service="ecommerce-lab", status="200"}[2m]))
  ```
  Também é válida a forma `sum by (status) (...)`, que deixa o agrupamento explícito.

### Resposta do Desafio 2 (LogQL com Copilot):
- **Prompt Recomendado:** `/logql-observability`, anexando `app-demo/app.py` e `stack/alloy/config.alloy`.
- **Resposta Esperada do Copilot:**
  ```logql
  {service="ecommerce-lab"} | json | level="ERROR" | line_format "{{.timestamp}} [{{.request_id}}] Rota: {{.route}} Duração: {{.duration_ms}}ms Erro: {{.message}}"
  ```

### Resposta do Desafio 3 (Regra de alerta proposta no Chat):
- **Regra adicional; preserve as regras existentes:**
  ```yaml
  - alert: HighHttpErrorRate20Percent
    expr: |
      100 * sum(rate(http_requests_total{service="ecommerce-lab", status=~"5.."}[2m]))
      / clamp_min(sum(rate(http_requests_total{service="ecommerce-lab"}[2m])), 0.001) > 20
    for: 1m
    labels:
      severity: critical
      service: ecommerce-lab
      environment: lab
    annotations:
      summary: "Taxa crítica de erros 5xx acima de 20%"
      description: "Mais de 20% das requisições ao e-commerce falharam na janela avaliada."
  ```
  A regra existente `HighHttpErrorRate` usa 15% e `for: 30s`; o exercício pede uma regra adicional, não a substituição silenciosa da regra atual.

### Resposta do Desafio 4 (Investigação de Causa Raiz):
- O endpoint `/checkout` usa `chaos=latency` para dormir de 0,6 a 1,2 segundos. `chaos=error` dorme de 0,02 a 0,08 segundos e retorna HTTP 500 com log `level="ERROR"`. Sem `chaos=error`, ainda há 5% de chance de erro no modo normal.
- O gerador prioriza latência nos múltiplos de 15; só depois verifica os múltiplos de 20 para erros. Logo, múltiplos de 60 geram latência, não erro.
- Uma query LogQL para testar a latência alta é `{service="ecommerce-lab"} | json | duration_ms > 500`. A regra `HighLatencyP95` avalia o p95 acima de 0,5 segundos em uma janela de 2 minutos, por 30 segundos.
