---
name: investigate-observability-incident
description: Investiga uma falha simulada correlacionando código, tráfego, alertas e logs.
argument-hint: "Descreva o alerta ou sintoma observado"
agent: ask
---

Analise as referências do laboratório:

- [Aplicação Flask e métricas](../../app-demo/app.py)
- [Gerador de tráfego e falhas](../../scripts/gerar-trafego.ps1)
- [Regras de alerta](../../stack/prometheus/rules/alert.rules.yml)
- [Coleta de logs](../../stack/alloy/config.alloy)

Investigue o sintoma informado: **${input:incident:Descreva o alerta ou sintoma}**.

Correlacione somente os caminhos que aparecem no código e nas configurações. Considere a ordem das condições no gerador de tráfego e diferencie evidência do código de dados observados em uma instância em execução.

Apresente:

1. Hipóteses ordenadas e a evidência nos arquivos.
2. Queries PromQL e LogQL para testar as hipóteses.
3. Campos ou labels que permitem correlacionar a consulta (`service`, `status`, `request_id`, `duration_ms`).
4. Próximo passo de validação no Grafana/Prometheus/Loki.

Não afirme que consultou serviços em execução, não execute correções e não edite arquivos.
