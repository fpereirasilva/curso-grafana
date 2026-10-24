# Prompts para GitHub Copilot Chat — VS Code

Use este catálogo com a pasta do laboratório aberta no VS Code. As instruções em `.github/copilot-instructions.md` fornecem contexto geral; os arquivos `.github/prompts/*.prompt.md` oferecem tarefas reutilizáveis que aparecem como comandos `/...` no Chat.

## Fluxo recomendado

1. Abra **esta pasta do projeto** no VS Code e entre no GitHub Copilot.
2. Abra o Chat pelo ícone **Chat** ou pelo Command Palette (`Chat: New Chat`). Atalhos variam conforme sistema, versão e personalização.
3. Para usar contexto explícito, anexe arquivos pelo seletor de contexto do Chat ou use referências `#file` quando sugeridas pelo VS Code. Não presuma que o Copilot carregou a workspace inteira.
4. Use Ask para analisar sem editar. Para uma alteração, escolha Agent/Edit conforme a versão, revise a proposta e o diff antes de aceitar ou executar ações.
5. Digite `/` para localizar os prompt files:
   - `/promql-observability` — consulta ou explicação PromQL.
   - `/logql-observability` — consulta ou explicação LogQL.
   - `/investigate-observability-incident` — correlação de incidente.

Os prompt files do workspace são descobertos pelo harness Local do VS Code. Se não aparecerem, confirme o harness selecionado e a pasta aberta; os exemplos avulsos abaixo continuam disponíveis para copiar no Chat.

> `@workspace`, `/explain` e `/fix` podem aparecer em versões, extensões ou fluxos específicos, mas não são pré-requisitos destes exercícios. Use as opções disponíveis na sua instalação e forneça contexto explícito quando necessário.

## Prompts avulsos

### PromQL — RPS por código HTTP

Anexe `app-demo/app.py` e `stack/prometheus/prometheus.yml` e pergunte:

> Com base nas métricas e labels realmente definidos nesses arquivos, escreva uma consulta PromQL para calcular RPS por código HTTP nos últimos 2 minutos. Explique por que usa `rate()` e `sum by (status)`. Não altere arquivos.

Consulta esperada:

```promql
sum by (status) (
  rate(http_requests_total{service="ecommerce-lab"}[2m])
)
```

### PromQL — p95 de latência

Anexe `app-demo/app.py` e pergunte:

> Verifique os buckets e labels do histograma `http_request_duration_seconds`. Monte a consulta PromQL de p95 em segundos e explique a necessidade de manter `le` na agregação. Não invente métricas.

Consulta esperada:

```promql
histogram_quantile(
  0.95,
  sum by (le) (
    rate(http_request_duration_seconds_bucket{service="ecommerce-lab"}[2m])
  )
)
```

### PromQL — taxa de erro

Anexe `app-demo/app.py` e `stack/prometheus/rules/alert.rules.yml` e pergunte:

> Calcule o percentual de respostas HTTP 5xx sobre todas as requisições em 2 minutos. Proteja o denominador contra zero e informe que a regra existente `HighHttpErrorRate` usa 15% e `for: 30s`; não altere essa regra.

Consulta de referência (resultado em porcentagem):

```promql
100 *
sum(rate(http_requests_total{service="ecommerce-lab", status=~"5.."}[2m]))
/
clamp_min(sum(rate(http_requests_total{service="ecommerce-lab"}[2m])), 0.001)
```

### LogQL — erros e campos JSON

Anexe `app-demo/app.py` e `stack/alloy/config.alloy` e pergunte:

> Confirme os labels de stream e os campos JSON configurados. Escreva uma consulta LogQL para filtrar logs de erro e exibir timestamp, `request_id`, rota, duração em ms e mensagem. Não altere arquivos.

Consulta de referência:

```logql
{service="ecommerce-lab"} | json | level="ERROR"
```

Para formatar o resultado:

```logql
{service="ecommerce-lab"} | json | level="ERROR"
| line_format "{{.timestamp}} [{{.request_id}}] {{.route}} {{.duration_ms}}ms {{.message}}"
```

### LogQL — latência acima de 500 ms

Anexe `app-demo/app.py` e `stack/alloy/config.alloy` e pergunte:

> Gere uma consulta LogQL que selecione logs com duração superior a 500 ms. Explique a diferença entre labels de stream e campos extraídos pelo parser `| json`.

Consulta esperada:

```logql
{service="ecommerce-lab"} | json | duration_ms > 500
```

### Prometheus — revisar uma regra de alerta

Anexe `stack/prometheus/rules/alert.rules.yml` e `app-demo/app.py` e pergunte:

> Revise as regras existentes e explique a expressão, o threshold, o `for` e os labels do alerta `ServiceDown`. Se sugerir uma mudança, apresente o diff separadamente e preserve as regras não relacionadas.

### Bicep — revisar o NSG sem abrir portas

Anexe `infra/main.bicep` e `scripts/criar-ambiente-azure.ps1` e pergunte:

> Liste as portas e os CIDRs realmente permitidos pelo NSG. Explique como o script define `teacherIp` e mostre uma proposta segura para restringir acesso, sem editar nem implantar recursos. Não recomende abrir portas internas à Internet.

### Azure — avaliar custos sem inventar preços

Anexe `infra/main.bicep` e pergunte:

> Liste os recursos, SKUs, armazenamento e região que este template tenta criar. Explique quais dados ainda são necessários para estimar o custo de 4 horas e indique como validar preços atuais na calculadora oficial do Azure. Não invente uma cotação nem execute o deploy.

### Investigar uma falha simulada

Anexe `app-demo/app.py`, `scripts/gerar-trafego.ps1`, `stack/prometheus/rules/alert.rules.yml` e `stack/alloy/config.alloy` e pergunte:

> Correlacione as condições de `chaos=latency` e `chaos=error` com as métricas, regras de alerta e campos JSON de log. Considere a ordem dos casos no gerador de tráfego. Dê queries PromQL e LogQL para verificar a hipótese; não afirme que consultou serviços em execução.

## Referências oficiais do VS Code

- [Prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [Custom instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions)
