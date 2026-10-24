---
name: promql-observability
description: Cria ou explica uma consulta PromQL a partir das métricas reais deste laboratório.
argument-hint: "O que deseja medir? Ex.: RPS por status ou p95 de latência"
agent: ask
---

Analise as referências do projeto:

- [Instrumentação da aplicação](../../app-demo/app.py)
- [Scrape do Prometheus](../../stack/prometheus/prometheus.yml)
- [Regras de alerta existentes](../../stack/prometheus/rules/alert.rules.yml)

Com base somente nas métricas, labels e configuração presentes nesses arquivos, responda ao objetivo informado: **${input:metricGoal:Descreva a métrica ou pergunta PromQL}**.

Apresente:

1. A consulta PromQL em um bloco de código.
2. A métrica, os labels e a janela usados.
3. Uma explicação curta da agregação e de `rate()` quando aplicável.
4. Como validar a consulta no Grafana Explore com a fonte Prometheus.

Não invente métricas, não afirme que executou a consulta e não edite arquivos. Se faltar contexto, indique qual arquivo deve ser anexado pelo aluno.
