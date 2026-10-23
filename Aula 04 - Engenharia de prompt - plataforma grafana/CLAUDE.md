# Instruções do Projeto — Laboratório Grafana Aula 04 (Engenharia de Prompt)

Este repositório implementa uma plataforma didática de observabilidade no Microsoft Azure com **Grafana OSS, Prometheus, Loki, Grafana Alloy e Alertmanager**, desenvolvida com **Engenharia de Prompt e Claude Sonnet 5.5 Code**.

## 1. Documentos de Referência Obrigatórios
- `README.md`: Instruções de inicialização e visão geral.
- `PROMPT_Grafana_Azure_Claude_Code_Compacto.json`: Especificação técnica principal e regras contratuais.
- `STATUS.md`: Estado consolidado das fases do projeto.
- `harness/policies.yaml` e `harness/state.json`: Políticas operacionais e rastreabilidade.

## 2. Parâmetros de Infraestrutura Azure
- **Resource Group:** `rgaula4grafana` (Região: `eastus2`)
- **Assinatura:** `b34ce124-5fd1-47a1-ba7c-acbf5367c573` (Visual Studio Enterprise)
- **VM:** `vm-aula4-grafana` (`Standard_D2s_v3`, 2 vCPU, 8 GB RAM, Ubuntu 22.04 LTS)
- **Usuário:** `labadmin`

## 3. Diretrizes de Execução
- Sempre preservar recursos existentes fora de `rgaula4grafana`.
- Não expor portas internas desnecessariamente; manter o NSG restrito.
- Utilizar o script `scripts/parar-ambiente-azure.ps1` ao término das aulas para desalocar recursos e zerar custos de computação.
