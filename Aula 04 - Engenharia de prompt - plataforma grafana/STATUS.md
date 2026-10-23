# 📊 STATUS DO PROJETO — AULA 04 GRAFANA + ENGENHARIA DE PROMPT COM IA

- **Data de Execução:** 2026-10-23
- **Resource Group Azure:** `rgaula4grafana` (Região: `eastus2`)
- **Assinatura:** `b34ce124-5fd1-47a1-ba7c-acbf5367c573` (Visual Studio Enterprise)
- **VM:** `vm-aula4-grafana` (`Standard_D2s_v3`, 2 vCPU, 8 GB RAM, Ubuntu 22.04 LTS)
- **IP Público:** **`20.230.76.242`** | **FQDN:** `grafana-aula4-lab.eastus2.cloudapp.azure.com`
- **Metodologia:** Engenharia de Prompt Estruturada + Claude Sonnet 5.5 Code CLI

---

## 🌐 Endpoints Ativos para a Aula

| Serviço | URL | Credenciais / Notas |
| :--- | :--- | :--- |
| **Grafana OSS** | **`http://20.230.76.242:3000`** | `admin` / `admin` (Provisionado com Prometheus e Loki) |
| **Prometheus** | **`http://20.230.76.242:9090`** | 3 Targets UP (`ecommerce-app`, `node-exporter`, `prometheus`) |
| **API E-Commerce** | **`http://20.230.76.242:8000/checkout`** | `POST` ou `GET` com suporte a `?chaos=latency` e `?chaos=error` |
| **Alertas Webhook** | **`http://20.230.76.242:8088/alerts`** | Histórico de alertas `firing` e `resolved` do Alertmanager |

---

## 🚦 Progresso por Fase da Especificação (100% Concluído)

| Fase | Descrição | Status | Evidência Comprovada |
| :---: | :--- | :---: | :--- |
| **1** | Descoberta e Verificação Azure | 🟢 PASS | Resource Group `rgaula4grafana` criado no Azure eastus2; assinatura validada. |
| **2** | Estrutura do Projeto e Harness | 🟢 PASS | Pastas `harness/`, `context/`, `memory/`, `.claude/`, `stack/`, `docs/` montadas. |
| **3** | Preparação de Código e Templates | 🟢 PASS | Bicep, compose.yaml, configs de Prometheus, Loki, Alloy, Grafana e app gerados. |
| **4** | Plano Azure e Custos | 🟢 PASS | SKU `Standard_D2s_v3` provisionado; estimativa de ~R$ 1,80 para 3h de aula. |
| **5** | Implantação de Infraestrutura | 🟢 PASS | VM criada no Azure, Docker 29.9.2 instalado e 8 containers em execução. |
| **6** | Configuração de Fontes e Dashboards | 🟢 PASS | Datasources Prometheus e Loki provisionados; Dashboard E-Commerce importado. |
| **7** | Validação Ponta a Ponta | 🟢 PASS | Targets UP, logs ingeridos no Loki via Alloy, alerta `HighLatencyP95` testado. |
| **8** | Entrega de Documentação | 🟢 PASS | Guias do Professor e Aluno, Exercícios com Gabarito e Políticas de Parada e Custos. |

---

## 🛠️ Comandos de Operação em Aula

```powershell
# Gerar tráfego didático contínuo com injeção de latência e erros:
.\scripts\gerar-trafego.ps1 -TargetHost 20.230.76.242

# Desalocar a VM ao término da aula (custo zero de CPU/RAM):
.\scripts\parar-ambiente-azure.ps1

# Excluir o ambiente definitivamente:
.\scripts\limpar-ambiente-azure.ps1
```
