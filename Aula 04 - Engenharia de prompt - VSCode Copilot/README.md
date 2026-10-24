# 🚀 Aula 04 — Engenharia de Prompt e Observabilidade no VS Code com GitHub Copilot

Este laboratório ensina como utilizar a engenharia de prompt dentro da IDE mais popular do mercado (**Visual Studio Code**) com o **GitHub Copilot Chat** para projetar, implantar e operar uma plataforma completa de observabilidade com **Grafana OSS, Prometheus, Loki, Grafana Alloy e Alertmanager** no Microsoft Azure.

---

## 📁 Estrutura do Workspace

```text
Aula 04 - Engenharia de prompt - VSCode Copilot/
├── .github/
│   ├── copilot-instructions.md       # Instruções de workspace do Copilot
│   └── prompts/                      # Prompt files reutilizáveis como comandos /...
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
2. **Abra o GitHub Copilot Chat:**
   - Use o ícone **Chat** ou `Ctrl+Shift+P` -> `Chat: New Chat` (atalhos variam por instalação).
   - Para contexto preciso, anexe os arquivos relevantes pelo seletor do Chat ou use referências `#file` sugeridas pelo VS Code. Não suponha que todos os arquivos foram carregados.
   - Digite `/` no Chat para escolher `/promql-observability`, `/logql-observability` ou `/investigate-observability-incident`.
   - Se os prompt files não aparecerem, confirme que está usando o harness Local do VS Code e que a pasta aberta é a raiz deste projeto.
3. **Execute Tarefas pelo VS Code:**
   - Pressione `Ctrl+Shift+P` -> selecione `Tasks: Run Task`.
   - Você verá os atalhos para:
     - `1. Azure: Criar Ambiente no Azure`
     - `2. Azure: Sincronizar e Subir Stack`
     - `3. Lab: Gerar Tráfego e Simular Caos`
     - `4. Azure: Desalocar VM (Pausar Custos)`
     - `5. Azure: Deletar Resource Group (Limpeza Total)`

> **Atenção:** as Tasks de Azure podem criar recursos cobrados, desalocar uma VM ou excluir um Resource Group. Desalocar interrompe a cobrança de computação da VM, mas discos, IPs e outros recursos podem continuar gerando custos. Confira a assinatura e o escopo, e só execute operações de Azure quando estiverem autorizadas. A exclusão do Resource Group é destrutiva.

O NSG permite SSH (22), Grafana (3000) e Prometheus (9090) apenas a partir do IP público detectado no provisionamento. As portas da aplicação demo e dos demais serviços não são expostas diretamente; acesse a aplicação por `http://localhost:8000/checkout` após abrir o túnel SSH impresso pelo script.

### Registro da implantação de validação

A implantação de validação foi concluída em 23/10/2026. A stack foi testada e aprovada; em seguida, o Resource Group `rgaula4copilot` e os recursos nele contidos foram excluídos. Não há endpoints ativos dessa implantação. O escopo, os resultados dos testes e a estimativa de custo constam em [docs/VALIDACAO_IMPLANTACAO_AZURE.md](docs/VALIDACAO_IMPLANTACAO_AZURE.md).

---

## 📖 Documentação Didática

Consulte a pasta `docs/` para o roteiro da aula e os exercícios. O catálogo `PROMPTS_COPILOT_CHAT.md` explica o fluxo atual do Chat e os arquivos reutilizáveis em `.github/prompts/`.

O arquivo `.github/copilot-instructions.md` fornece instruções de projeto ao Copilot Chat; `.vscode/settings.json` habilita explicitamente o uso dessas instruções neste workspace. Essas instruções não substituem o contexto explícito em cada pergunta e não se aplicam às sugestões inline.

Referências: [Prompt files no VS Code](https://code.visualstudio.com/docs/agent-customization/prompt-files) e [Custom instructions no VS Code](https://code.visualstudio.com/docs/agent-customization/custom-instructions).
