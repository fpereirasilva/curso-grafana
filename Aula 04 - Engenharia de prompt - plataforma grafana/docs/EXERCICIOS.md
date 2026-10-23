# ✍️ Exercícios Práticos — Aula 04

### Exercício 1: Inspeção de Métricas e PromQL
1. Abra a aba **Explore** no Grafana e selecione a fonte **Prometheus**.
2. Execute a consulta `up` e identifique quantos targets estão ativos.
3. Calcule o percentual de requisições com falha (HTTP 5xx) em relação ao total nos últimos 5 minutos.

### Exercício 2: Investigação de Incidentes com LogQL no Loki
1. Alterne para a fonte **Loki** no Explore.
2. Busque por todos os logs que contenham a palavra "pagamento".
3. Usando o parser `| json`, monte uma consulta que exiba apenas os logs com `level="ERROR"` e ordene pelos mais recentes.

### Exercício 3: Correlação Métrica + Log
1. Durante a injeção de falhas com o script `gerar-trafego.ps1`, observe no dashboard o gráfico de latência p95 subir.
2. Imediatamente no painel de logs, localize o `request_id` correspondente à requisição que demorou mais de 500ms.

### Exercício 4: Validação de Alertas no Alertmanager
1. Acesse o endpoint do Notification Receiver (`http://<IP>:8088/alerts`).
2. Verifique se o alerta `HighLatencyP95` ou `HighHttpErrorRate` foi recebido e se o status foi alterado para `resolved` após a normalização do tráfego.
