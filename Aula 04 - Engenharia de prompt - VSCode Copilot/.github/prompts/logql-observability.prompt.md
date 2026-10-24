---
name: logql-observability
description: Cria ou explica uma consulta LogQL conforme os logs e o pipeline Alloy do laboratório.
argument-hint: "O que deseja buscar? Ex.: erros ou logs acima de 500 ms"
agent: ask
---

Analise as referências do projeto:

- [Logs JSON da aplicação](../../app-demo/app.py)
- [Pipeline de coleta Alloy](../../stack/alloy/config.alloy)
- [Serviços e volumes Compose](../../stack/compose.yaml)

Com base somente nos campos JSON e labels configurados nesses arquivos, responda ao objetivo informado: **${input:logGoal:Descreva o filtro ou os campos desejados}**.

Apresente:

1. A consulta LogQL em um bloco de código.
2. Quais filtros usam labels de stream e quais usam campos extraídos por `| json`.
3. Como formatar os campos solicitados com `line_format`, se aplicável.
4. Como validar no Grafana Explore usando a fonte Loki.

Não invente labels ou campos, não afirme que executou a consulta e não edite arquivos. Se faltar contexto, indique qual arquivo deve ser anexado pelo aluno.
