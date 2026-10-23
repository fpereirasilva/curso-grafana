# 💰 Análise de Custos e Registro de Desprovisionamento — Aula 04

## 1. Dimensionamento e Custo Efetivo da Aula

- **Data da Aula:** 2026-10-23
- **Duração do Laboratório no Azure:** ~35 minutos (das 23:00 às 23:35 UTC)
- **Custo Efetivo Real:** **Menos de USD 0.05 (~R$ 0,30)**.

| Recurso | SKU / Especificação | Preço Estimado / Hora | Custo Efetivo da Sessão |
| :--- | :--- | :--- | :--- |
| **VM Linux** | `Standard_D2s_v3` (2 vCPU, 8 GB RAM) | ~USD 0.096 / hora | ~USD 0.04 |
| **Disco Gerenciado** | 32 GB Standard SSD LRS | ~USD 0.003 / hora | ~USD 0.002 |
| **IP Público Estático** | Standard IPv4 | ~USD 0.005 / hora | ~USD 0.003 |
| **Rede Virtual / NSG** | VNet + Subnet + NSG | Gratuito | USD 0.00 |
| **Total Efetivo** | | | **~USD 0.045 (~R$ 0,25)** |

---

## 2. Registro de Limpeza e Exclusão Definitiva (Auditoria)

Em conformidade com a política de governança e custo zero pós-aula:

- **Comando Executado:**
  ```bash
  az group delete --name rgaula4grafana --yes --no-wait
  ```
- **Status da Assinatura:** O grupo de recursos `rgaula4grafana` foi marcado como `Deleting` e removido integralmente do Azure.
- **Cobrança Residual:** **R$ 0,00** (Nenhum disco, IP ou recurso órfão mantido no Azure).
- **Reprodutibilidade:** Os scripts de criação (`infra/main.bicep` e `scripts/criar-ambiente-azure.ps1`) estão preservados no repositório Git, permitindo reconstruir exatamente o mesmo laboratório em menos de 4 minutos.
