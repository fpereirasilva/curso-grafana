# 📖 Guia do Aluno — Aula 04: Observabilidade com VS Code e GitHub Copilot

Bem-vindo à Aula 04! Hoje você aprenderá a usar o **GitHub Copilot no Visual Studio Code** para acelerar seu trabalho diário com observabilidade, Grafana, Prometheus e Loki.

---

## 🛠️ 1. Preparando o seu VS Code
1. Abra a pasta `Aula 04 - Engenharia de prompt - VSCode Copilot` em **File -> Open Folder...**.
2. Entre no GitHub Copilot e verifique se o Chat está disponível. A instalação e os nomes dos comandos podem variar conforme a versão do VS Code e as extensões habilitadas.
3. O arquivo `.github/copilot-instructions.md` fornece orientações gerais do projeto ao Chat. Ele não garante que todos os arquivos foram lidos; anexe as fontes relevantes à pergunta.

## 💬 2. Abrindo o Chat e escolhendo o contexto
- Abra o Chat pelo ícone **Chat** ou pelo Command Palette (`Ctrl+Shift+P` -> `Chat: New Chat`). Atalhos de teclado variam e podem ser personalizados.
- Para perguntas de leitura, use Ask quando disponível. Para propor edições ou executar ferramentas, use Agent/Edit conforme a versão e revise cada alteração.
- Anexe arquivos com o seletor de contexto do Chat. Referências `#file` também podem ser usadas quando o VS Code as oferecer.
- `Ctrl+I` pode abrir o Chat Inline em algumas configurações; sugestões inline não necessariamente recebem as instruções do projeto.

## 🚀 3. Prompt files da aula
No Chat, digite `/` e selecione um prompt file. Informe o objetivo quando solicitado e confira os arquivos de contexto indicados:

- `/promql-observability`: gera ou explica queries PromQL a partir das métricas reais.
- `/logql-observability`: cria queries LogQL usando o JSON e os labels configurados.
- `/investigate-observability-incident`: investiga a simulação correlacionando código, tráfego, métricas, alertas e logs.

Os prompt files ficam em `.github/prompts/`. O arquivo `PROMPTS_COPILOT_CHAT.md` também contém exemplos avulsos para copiar e adaptar.
Se os comandos não aparecerem, confirme que o VS Code está usando o harness Local e que a raiz desta pasta está aberta como workspace.

## 🧪 4. Exercícios e Tasks
Consulte `docs/EXERCICIOS_COPILOT.md` para os desafios e `docs/GABARITO_COPILOT.md` para as respostas esperadas.

Para executar uma Task do VS Code, use `Ctrl+Shift+P` -> `Tasks: Run Task`. As Tasks Azure podem criar recursos cobrados ou excluir um Resource Group; confira a assinatura e só as execute com autorização do professor. Desalocar a VM interrompe a cobrança de computação, mas discos, IPs e outros recursos podem continuar gerando custos. A limpeza total é destrutiva.
