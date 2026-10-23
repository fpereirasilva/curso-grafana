# 🗝️ Gabarito Oficial — Exercícios com GitHub Copilot (Aula 04)

### Resposta do Desafio 1 (PromQL com Copilot):
- **Prompt Recomendado:** `@workspace Em app-demo/app.py, qual consulta PromQL calcula a taxa de requisições com status 200 por segundo?`
- **Resposta Esperada do Copilot:**
  ```promql
  sum(rate(http_requests_total{service="ecommerce-lab", status="200"}[1m]))
  ```

### Resposta do Desafio 2 (LogQL com Copilot):
- **Prompt Recomendado:** `@workspace Como consultar logs de erro no Loki desestruturando o JSON para ver request_id e duration_ms?`
- **Resposta Esperada do Copilot:**
  ```logql
  {service="ecommerce-lab"} | json | level="ERROR" | line_format "{{.timestamp}} [{{.request_id}}] Rota: {{.route}} Duração: {{.duration_ms}}ms Erro: {{.message}}"
  ```

### Resposta do Desafio 3 (Regra de Alerta via Copilot Inline):
- **Código YAML gerado pelo Copilot:**
  ```yaml
  - alert: HighHttpErrorRate20Percent
    expr: sum(rate(http_requests_total{service="ecommerce-lab", status=~"5.."}[1m])) / sum(rate(http_requests_total{service="ecommerce-lab"}[1m])) > 0.20
    for: 1m
    labels:
      severity: critical
      service: ecommerce-lab
      environment: lab
    annotations:
      summary: "Taxa crítica de erros 5xx acima de 20%"
      description: "Mais de 20% das requisições ao e-commerce falharam no último minuto."
  ```

### Resposta do Desafio 4 (Investigação de Causa Raiz):
- O Copilot explica que o endpoint `/checkout` avalia o parâmetro `chaos`: se `chaos=latency`, força `sleep` entre 0.6s e 1.2s; se `chaos=error`, força retorno imediato de HTTP 500 com mensagem de gateway indisponível e grava o log estruturado com `level="ERROR"`.
