# 🤖 Catálogo de Prompts para o GitHub Copilot Chat no VS Code

Neste laboratório da **Aula 04**, você utiliza a extensão **GitHub Copilot Chat** dentro do **VS Code** para arquitetar, diagnosticar e estender uma plataforma de observabilidade moderna.

---

## 💡 Como Usar os Agentes de Contexto no Copilot Chat

No painel do Copilot Chat (`Ctrl+Alt+I` ou `Ctrl+I` no editor):
- **`@workspace`**: Dá acesso a todos os arquivos, configurações e arquitetura do projeto aberto no VS Code.
- **`#file`**: Foca o Copilot em um arquivo específico (ex: `#file:compose.yaml`).
- **`/explain`**: Pede uma explicação técnica detalhada do trecho ou arquivo selecionado.
- **`/fix`**: Solicita a correção de um erro ou ajuste de sintaxe.

---

## 🎯 1. Prompts para PromQL (Métricas do Prometheus)

### Prompt 1.1 — Cálculo de RPS por Status
> **Prompt para o Copilot:**
> `@workspace Baseado nas métricas exportadas pela aplicação em app-demo/app.py, crie uma consulta PromQL eficiente que calcule a taxa de requisições por segundo (RPS) agrupada por código HTTP de resposta (status) nos últimos 2 minutos.`

### Prompt 1.2 — Percentil 95 (p95) de Latência
> **Prompt para o Copilot:**
> `@workspace Analise a métrica http_request_duration_seconds definida em app-demo/app.py. Como calcular o percentil 95 de tempo de resposta em segundos usando histogram_quantile? Me explique a função de rate aplicada aos buckets.`

### Prompt 1.3 — Regra de Alerta de Target DOWN
> **Prompt para o Copilot:**
> `@workspace Crie uma nova regra de alerta para o arquivo stack/prometheus/rules/alert.rules.yml que dispare se o target 'ecommerce-app' ficar fora do ar (up == 0) por mais de 30 segundos, com severidade crítica e anotação explicando como reiniciar o container.`

---

## 🎯 2. Prompts para LogQL (Logs no Loki e Alloy)

### Prompt 2.1 — Parser de Logs JSON
> **Prompt para o Copilot:**
> `@workspace Olhando o formato de log estruturado gerado em app-demo/app.py e coletado pelo Alloy em stack/alloy/config.alloy, monte uma consulta LogQL que filtre o stream {service="ecommerce-lab"}, faça o parse do JSON e retorne apenas requisições com status 500.`

### Prompt 2.2 — Filtro por Duração (Latência Alta nos Logs)
> **Prompt para o Copilot:**
> `@workspace Crie uma consulta LogQL no Loki para listar os logs onde o campo 'duration_ms' seja superior a 500ms, exibindo apenas o timestamp, a rota e o request_id.`

---

## 🎯 3. Prompts para Infraestrutura e Bicep (Azure)

### Prompt 3.1 — Auditoria de Segurança no NSG
> **Prompt para o Copilot:**
> `@workspace Revise o arquivo infra/main.bicep. Quais regras de segurança estão definidas no Network Security Group? Como posso restringir as portas 3000 e 9090 para permitir acesso apenas ao IP do meu computador?`

### Prompt 3.2 — Análise de Custos com Copilot
> **Prompt para o Copilot:**
> `@workspace Com base nos recursos do Azure definidos em infra/main.bicep (Standard_D2s_v3, StandardSSD_LRS 32GB e IP Público), qual é a estimativa de custo para manter essa VM ligada por 4 horas durante uma aula prática?`

---

## 🎯 4. Prompts para Investigação de Incidentes (Troubleshooting)

### Prompt 4.1 — Diagnóstico de Alerta Disparado
> **Prompt para o Copilot:**
> `@workspace O webhook em notification-receiver recebeu um alerta com status firing do tipo 'HighLatencyP95'. Olhando o código de app-demo/app.py e os scripts de geração de tráfego, qual parâmetro de requisição causou esse comportamento e como correlacionar esse pico com os logs do Loki?`
