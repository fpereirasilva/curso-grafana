# 🎓 Guia do Professor — Aula 04: Observabilidade com VS Code e GitHub Copilot

## 1. Objetivo Didático da Aula
Demonstrar aos alunos como utilizar a extensão **GitHub Copilot Chat no Visual Studio Code** como um assistente inteligente de observabilidade e DevOps, trabalhando diretamente no fluxo diário do desenvolvedor/SRE.

## 2. Comparativo Didático (Claude Sonnet 5.5 Code CLI vs. VS Code Copilot)
| Dimensão | Claude Sonnet 5.5 Code CLI (Terminal) | VS Code + GitHub Copilot (IDE) |
| :--- | :--- | :--- |
| **Interface** | Terminal / CLI Autônoma | Interface gráfica da IDE, editor visual e painel de chat |
| **Contexto** | Especificações JSON, Harness, `CLAUDE.md` e Agentes | Arquivo `.github/copilot-instructions.md`, `@workspace` e `#file` |
| **Execução** | Execução autônoma de ferramentas, chamadas de API e diagnósticos | Interação humano-no-loop: sugestões inline, chat e Tasks do VS Code |
| **Melhor Caso** | Automação completa de ponta a ponta, pipelines e orquestração | Desenvolvimento interativo de código, refatoração de regras e consultas |

## 3. Roteiro Prático da Demonstração (3 horas)
1. **Abertura e Configuração (20 min):** Abrir a pasta no VS Code, mostrar a extensão GitHub Copilot e a leitura do `.github/copilot-instructions.md`.
2. **Provisionamento no Azure via Tasks do VS Code (30 min):** Executar a Task `1. Azure: Criar Ambiente no Azure` diretamente pelo VS Code (`Ctrl+Shift+P -> Tasks: Run Task`).
3. **Engenharia de Prompt para PromQL (35 min):** Abrir o chat do Copilot com `@workspace` e pedir para gerar queries de RPS, p95 e regras de alerta.
4. **Engenharia de Prompt para LogQL (35 min):** Selecionar o trecho de logs do `app.py` e usar o Copilot para criar filtros JSON no Loki.
5. **Simulação de Incidentes e Diagnóstico (35 min):** Rodar a Task `3. Lab: Gerar Tráfego e Simular Caos` e pedir ao Copilot para diagnosticar a causa raiz usando as métricas e logs.
6. **Desprovisionamento Seguro (15 min):** Executar a Task `4. Azure: Desalocar VM` ou `5. Azure: Deletar Resource Group`.

## 4. Recursos Utilizados
- **Resource Group Azure:** `rgaula4copilot` (eastus2)
- **VM:** `vm-copilot-grafana` (`Standard_D2s_v3`)
- **Grafana:** `http://<IP>:3000` (admin/admin)
- **Prometheus:** `http://<IP>:9090`
