# ✍️ Exercícios Práticos com GitHub Copilot — Aula 04

Nesta atividade, use o GitHub Copilot Chat no VS Code e os prompt files desta workspace. Anexe os arquivos indicados em cada exercício; não presuma que o Copilot carregou todo o repositório.

---

### Desafio 1: RPS de respostas HTTP 200 com PromQL
1. Abra o Chat pelo ícone ou pelo Command Palette (`Chat: New Chat`).
2. Digite `/promql-observability`, informe que quer RPS de respostas `status="200"` e anexe `app-demo/app.py` e `stack/prometheus/prometheus.yml`.
3. Peça a consulta, a explicação dos labels e uma nota sobre a janela de `rate()`. Não peça alterações de código.
4. Se o ambiente estiver autorizado e em execução, valide a query em **Grafana -> Explore -> Prometheus**.

### Desafio 2: Extraindo campos de log com LogQL
1. Digite `/logql-observability` no Chat.
2. Anexe `app-demo/app.py` e `stack/alloy/config.alloy` e peça uma consulta que filtre `level="ERROR"` e apresente `duration_ms` e `request_id`.
3. Execute a query no Explore com a fonte Loki apenas se o ambiente estiver disponível; diferencie campos extraídos com `| json` de labels de stream.

### Desafio 3: Propondo uma regra de alerta de 5xx
1. No Chat, selecione Agent/Edit quando disponível e anexe `stack/prometheus/rules/alert.rules.yml` e `app-demo/app.py`.
2. Peça para adicionar uma regra separada `HighHttpErrorRate20Percent`, com taxa de 5xx acima de 20% por 1 minuto, protegendo a divisão por zero.
3. Instrua o Copilot a preservar as regras existentes e mostrar o diff. Revise o diff antes de aceitá-lo.
4. Compare a nova regra com a regra já existente `HighHttpErrorRate` (15%, `for: 30s`). Valide a sintaxe YAML e a expressão PromQL antes de qualquer reload do Prometheus.

### Desafio 4: Investigando causa raiz com contexto explícito
1. Anexe `app-demo/app.py`, `scripts/gerar-trafego.ps1`, `stack/prometheus/rules/alert.rules.yml` e `stack/alloy/config.alloy`.
2. Digite `/investigate-observability-incident` e pergunte quais caminhos geram HTTP 500 ou latência acima de 500 ms.
3. Peça queries PromQL e LogQL para testar a hipótese e explique a ordem dos casos `chaos=latency` e `chaos=error` no gerador.
4. Só afirme correlação com dados observados se você realmente executar as queries no ambiente.
