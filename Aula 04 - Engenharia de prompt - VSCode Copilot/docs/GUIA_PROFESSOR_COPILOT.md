# 🎓 Guia do Professor — Aula 04: Observabilidade com VS Code e GitHub Copilot

## 1. Objetivo Didático da Aula
Demonstrar como usar o **GitHub Copilot Chat no VS Code** para formular, validar e explicar consultas e configurações de observabilidade, mantendo o aluno responsável por revisar contexto, respostas e alterações.

## 2. Comparativo Didático (Claude Sonnet 5.5 Code CLI vs. VS Code Copilot)
| Dimensão | Claude Sonnet 5.5 Code CLI (Terminal) | VS Code + GitHub Copilot (IDE) |
| :--- | :--- | :--- |
| **Interface** | Terminal / CLI Autônoma | Interface gráfica da IDE, editor visual e painel de chat |
| **Contexto** | Especificações JSON, `CLAUDE.md`, agentes e harness próprios do Claude Code | `.github/copilot-instructions.md`, prompt files `.github/prompts/*.prompt.md` e arquivos anexados ao Chat |
| **Execução** | Execução autônoma de ferramentas, chamadas de API e diagnósticos | Interação humano-no-loop: sugestões inline, chat e Tasks do VS Code |
| **Melhor Caso** | Automação completa de ponta a ponta, pipelines e orquestração | Desenvolvimento interativo de código, refatoração de regras e consultas |

## 3. Roteiro Prático da Demonstração (3 horas)
1. **Abertura e Configuração (20 min):** Abrir a pasta no VS Code, confirmar acesso ao Copilot Chat e mostrar as instruções de `.github/copilot-instructions.md`.
2. **Ambiente do laboratório (30 min):** Se houver autorização e orçamento, executar a Task `1. Azure: Criar Ambiente no Azure` pelo Command Palette (`Tasks: Run Task`). Caso contrário, usar o ambiente local ou uma instância já preparada.
3. **Engenharia de Prompt para PromQL (35 min):** Abrir `/promql-observability`, anexar `app-demo/app.py` e `stack/prometheus/prometheus.yml`, e pedir RPS, p95 e explicação das regras de alerta.
4. **Engenharia de Prompt para LogQL (35 min):** Abrir `/logql-observability`, anexar `app-demo/app.py` e `stack/alloy/config.alloy`, e validar filtros JSON no Loki.
5. **Simulação de Incidentes e Diagnóstico (35 min):** Com o ambiente pronto, executar a Task `3. Lab: Gerar Tráfego e Simular Caos`; usar `/investigate-observability-incident` com os arquivos de código, tráfego, alertas e Alloy anexados.
6. **Encerramento e Custos (15 min):** Revisar a Task `4. Azure: Desalocar VM`. A Task `5. Azure: Deletar Resource Group` é destrutiva e só deve ser executada após conferir assinatura, escopo e autorização explícita.

> O provisionamento Azure gera custos. Os exemplos e Tasks não concedem autorização de deploy; confirme a assinatura e os recursos antes de executar. Desalocar a VM interrompe a cobrança de computação, mas disco, IP e outros recursos podem continuar cobrando. O NSG do template permite 22, 3000 e 9090 apenas a partir do `teacherIp`; as portas 8000 e 8088 não são liberadas por esse template.

## 4. Recursos Utilizados
- **Resource Group Azure:** `rgaula4copilot` (eastus2)
- **VM:** `vm-copilot-grafana` (`Standard_D2s_v3`)
- **Grafana:** porta `3000` (credencial didática local `admin/admin`; não usar em produção)
- **Prometheus:** porta `9090`
- **Aplicação e receptor:** portas internas `8000` e `8088`; o NSG atual não as publica.

Os nomes acima refletem os argumentos padrão dos scripts. Confira os scripts e parâmetros de deploy antes da aula: os defaults de `infra/main.bicep` e `infra/main.bicepparam` diferem dos nomes passados pelo script.
