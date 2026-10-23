# 🚀 Aula 04 — Engenharia de Prompt e Observabilidade no VS Code com GitHub Copilot

Este laboratório ensina como utilizar a engenharia de prompt dentro da IDE mais popular do mercado (**Visual Studio Code**) com o **GitHub Copilot Chat** para projetar, implantar e operar uma plataforma completa de observabilidade com **Grafana OSS, Prometheus, Loki, Grafana Alloy e Alertmanager** no Microsoft Azure.

---

## 📁 Estrutura do Workspace

```text
Aula 04 - Engenharia de prompt - VSCode Copilot/
├── .github/
│   └── copilot-instructions.md       # Instruções de contexto oficiais do Copilot
├── .vscode/
│   ├── settings.json                 # Configurações do workspace (Copilot em pt-BR)
│   └── tasks.json                    # Tarefas integradas no menu do VS Code (Deploy, Caos, Limpeza)
├── PROMPTS_COPILOT_CHAT.md           # Banco de prompts guiados para PromQL, LogQL e Bicep
├── infra/
│   ├── main.bicep                    # Infraestrutura como Código no Azure (VM, VNet, NSG)
│   └── main.bicepparam               # Parâmetros de infraestrutura
├── stack/
│   ├── compose.yaml                  # 8 serviços orquestrados com Docker Compose
│   ├── grafana/                      # Provisionamento automático de fontes e dashboards
│   ├── prometheus/                   # Configuração de raspagem e regras de alerta
│   ├── loki/                         # Backend de logs monolítico com retenção 24h
│   ├── alloy/                        # Pipeline do coletor Grafana Alloy
│   └── alertmanager/                 # Roteamento de alertas e webhook interno
├── app-demo/                         # API Flask didática gerando métricas e logs JSON
├── notification-receiver/            # Webhook para visualização de alertas firing/resolved
├── scripts/                          # Scripts de automação PowerShell adaptados (rgaula4copilot)
└── docs/
    ├── GUIA_PROFESSOR_COPILOT.md     # Roteiro da aula para o instrutor
    ├── GUIA_ALUNO_COPILOT.md         # Manual prático do aluno no VS Code
    ├── EXERCICIOS_COPILOT.md         # 4 desafios práticos usando o Copilot
    └── GABARITO_COPILOT.md           # Respostas e prompts comentados
```

---

## ⚡ Início Rápido no VS Code

1. **Abra esta pasta no VS Code:**
   - `File -> Open Folder...` e selecione esta pasta.
2. **Abra o Copilot Chat:**
   - Pressione `Ctrl+Alt+I` e use o `@workspace` para fazer perguntas sobre qualquer parte do projeto.
3. **Execute Tarefas pelo VS Code:**
   - Pressione `Ctrl+Shift+P` -> selecione `Tasks: Run Task`.
   - Você verá os atalhos para:
     - `1. Azure: Criar Ambiente no Azure`
     - `2. Azure: Sincronizar e Subir Stack`
     - `3. Lab: Gerar Tráfego e Simular Caos`
     - `4. Azure: Desalocar VM (Pausar Custos)`
     - `5. Azure: Deletar Resource Group (Limpeza Total)`

---

## 📖 Documentação Didática

Consulte a pasta `docs/` para o roteiro completo da aula, exercícios práticos e o catálogo em `PROMPTS_COPILOT_CHAT.md`.
