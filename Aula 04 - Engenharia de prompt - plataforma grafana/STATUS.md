# 📊 STATUS DO PROJETO — AULA 04 GRAFANA + ENGENHARIA DE PROMPT COM IA

- **Data de Execução:** 2026-10-23
- **Resource Group Azure:** `rgaula4grafana` (Região: `eastus2`)
- **Assinatura:** `b34ce124-5fd1-47a1-ba7c-acbf5367c573` (Visual Studio Enterprise)
- **Metodologia:** Engenharia de Prompt Estruturada + Claude Sonnet 5.5 Code CLI
- **Estado Atual da Infraestrutura:** 🛑 **DESPROVISIONADO / EXCLUÍDO (CUSTO ZERO)**

---

## 🏁 Ciclo de Vida da Demonstração (Concluído)

1. **Implementação e Provisionamento:** A infraestrutura e os 8 containers de observabilidade foram provisionados, validados e demonstrados em sala de aula.
2. **Validação Ponta a Ponta:** Foram validados os fluxos de métricas com Prometheus, logs estruturados com Loki e Alloy, criação de painel no Grafana e teste de disparo e recuperação de alertas no Alertmanager.
3. **Desprovisionamento Definitivo:** O Resource Group `rgaula4grafana` foi excluído do Azure via `az group delete --name rgaula4grafana --yes`, garantindo que não existam cobranças residuais de computação, rede ou armazenamento.
4. **Preservação de Conhecimento:** Todo o código, templates Bicep, compose.yaml, configurações, documentação didática, exercícios e gabarito permanecem preservados neste repositório para consulta e replicação em turmas futuras.

---

## 🚦 Registro de Auditoria das Fases

| Fase | Descrição | Status | Evidência Comprovada |
| :---: | :--- | :---: | :--- |
| **1** | Descoberta e Verificação Azure | 🟢 PASS | Resource Group `rgaula4grafana` criado no Azure eastus2; assinatura validada. |
| **2** | Estrutura do Projeto e Harness | 🟢 PASS | Pastas `harness/`, `context/`, `memory/`, `.claude/`, `stack/`, `docs/` montadas. |
| **3** | Preparação de Código e Templates | 🟢 PASS | Bicep, compose.yaml, configs de Prometheus, Loki, Alloy, Grafana e app gerados. |
| **4** | Plano Azure e Custos | 🟢 PASS | SKU `Standard_D2s_v3` provisionado; estimativa de ~R$ 1,80 para 3h de aula. |
| **5** | Implantação de Infraestrutura | 🟢 PASS | VM criada no Azure, Docker 29.9.2 instalado e 8 containers em execução. |
| **6** | Configuração de Fontes e Dashboards | 🟢 PASS | Datasources Prometheus e Loki provisionados; Dashboard E-Commerce importado. |
| **7** | Validação Ponta a Ponta | 🟢 PASS | Targets UP, logs ingeridos no Loki via Alloy, alerta `HighLatencyP95` testado. |
| **8** | Entrega de Documentação | 🟢 PASS | Guias do Professor e Aluno, Exercícios com Gabarito e Políticas de Custos entregues. |
| **9** | Limpeza e Desprovisionamento | 🟢 PASS | `az group delete --name rgaula4grafana --yes` executado. Custo residual: **R$ 0,00**. |

---

## 🔄 Como Recriar o Ambiente para uma Nova Turma

Basta executar o script de provisionamento pelo PowerShell ou WSL:
```powershell
.\scripts\criar-ambiente-azure.ps1
.\scripts\sincronizar-e-iniciar.ps1
```
