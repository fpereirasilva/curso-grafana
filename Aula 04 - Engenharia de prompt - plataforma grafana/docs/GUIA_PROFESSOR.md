# 🎓 Guia do Professor — Aula 04: Engenharia de Prompt e Plataforma Grafana

## 1. Visão Geral da Aula
Nesta aula prática, os alunos aprendem como projetar, arquitetar e implantar uma plataforma de observabilidade moderna (Grafana, Prometheus, Loki, Alloy e Alertmanager) no Azure utilizando **Engenharia de Prompt estruturada** com o **Claude Sonnet 5.5 Code**.

## 2. Roteiro Sugerido (Duração: 3 horas)
1. **Abertura (20 min):** Apresentação do desafio e da arquitetura conceitual de observabilidade.
2. **Engenharia de Prompt com Claude Sonnet 5.5 Code (35 min):** Apresentação do `PROMPT_Grafana_Azure_Claude_Code_Compacto.json`, contratos de agentes e harness.
3. **Métricas e PromQL (30 min):** Exploração das métricas `/metrics` do E-Commerce, consultas de taxa de requisições e latência.
4. **Logs e LogQL (30 min):** Pipeline do Grafana Alloy lendo logs JSON, ingestion no Loki e consultas com filtros de erro.
5. **Dashboards no Grafana (25 min):** Criação e exploração do painel unificado de métricas e logs.
6. **Incidente Didático e Alertas (25 min):** Injeção de latência/erros com `gerar-trafego.ps1`, disparo de alertas no Prometheus/Alertmanager e chegada no Notification Receiver.
7. **Encerramento e Limpeza (15 min):** Comandos de desalocação e boas práticas de custos em nuvem.

## 3. Endpoints e Credenciais no Azure
- **Resource Group:** `rgaula4grafana` (Região: eastus2)
- **VM:** `vm-aula4-grafana` (`Standard_D2s_v3`)
- **Grafana URL:** `http://<IP_PUBLICO>:3000` (Login: `admin` / `admin`)
- **Prometheus URL:** `http://<IP_PUBLICO>:9090`
- **E-Commerce API:** `http://<IP_PUBLICO>:8000/checkout`
- **Receptor de Alertas:** `http://<IP_PUBLICO>:8088/alerts`

## 4. Comandos de Operação Rápida
```powershell
# 1. Iniciar gerador de tráfego com injeção de falhas:
.\scripts\gerar-trafego.ps1 -TargetHost <IP_PUBLICO>

# 2. Desalocar a VM após a aula (Custo zero de computação):
.\scripts\parar-ambiente-azure.ps1

# 3. Excluir o Resource Group ao final do curso:
.\scripts\limpar-ambiente-azure.ps1
```
