# ✍️ Exercícios Práticos com GitHub Copilot — Aula 04

Nesta atividade, você resolverá os desafios utilizando a ajuda do GitHub Copilot Chat no VS Code (`@workspace`).

---

### Desafio 1: Criando uma Consulta PromQL de Tráfego com @workspace
1. Abra o painel do Copilot Chat (`Ctrl+Alt+I`).
2. Peça ao Copilot para inspecionar `app-demo/app.py` e gerar uma consulta PromQL que calcule a taxa de requisições por segundo (RPS) apenas para requisições bem-sucedidas (`status="200"`).
3. Abra o Grafana no navegador (`:3000`), cole a consulta no **Explore** e valide o resultado.

### Desafio 2: Extraindo Campos de Log com LogQL e Copilot
1. Abra o arquivo `stack/alloy/config.alloy` no editor.
2. No chat do Copilot, pergunte: `@workspace Com base no arquivo aberto, como montar uma consulta LogQL que filtre o level "ERROR" e me mostre a duração e o request_id?`
3. Execute a query gerada pelo Copilot na fonte Loki dentro do Grafana.

### Desafio 3: Criando uma Nova Regra de Alerta com o Copilot
1. Abra o arquivo `stack/prometheus/rules/alert.rules.yml`.
2. Pressione `Ctrl+I` no editor e instrua o Copilot inline:
   `"Crie uma regra de alerta para Erros 5xx excessivos que dispare se a taxa passar de 20% das requisições por mais de 1 minuto."`
3. Valide a sintaxe gerada.

### Desafio 4: Investigando Causa Raiz de um Incidente com /explain
1. Durante a injeção de falhas com o script `gerar-trafego.ps1`, selecione a função `checkout()` no arquivo `app-demo/app.py`.
2. Use o comando `/explain` no chat e pergunte: `"Quais condições levam a função a retornar HTTP 500 ou causar latência superior a 500ms?"`
3. Explique como correlacionar essas condições aos dados visualizados no painel do Grafana.
