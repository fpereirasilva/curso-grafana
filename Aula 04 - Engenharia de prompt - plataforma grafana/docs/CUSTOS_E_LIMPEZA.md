# 💰 Análise de Custos e Guia de Limpeza — Aula 04

## 1. Dimensionamento e Custo Estimado (Azure eastus2)

| Recurso | SKU / Especificação | Preço Estimado / Hora | Preço para Aula de 3h |
| :--- | :--- | :--- | :--- |
| **VM Linux** | `Standard_D2s_v3` (2 vCPU, 8 GB RAM) | ~USD 0.096 / hora | ~USD 0.29 |
| **Disco Gerenciado** | 32 GB Standard SSD LRS | ~USD 0.003 / hora | ~USD 0.01 |
| **IP Público Estático** | Standard IPv4 | ~USD 0.005 / hora | ~USD 0.02 |
| **Rede Virtual / NSG** | VNet + Subnet + NSG | Gratuito | USD 0.00 |
| **Total Estimado da Aula** | | **~USD 0.104 / hora** | **~USD 0.32 (R$ 1,80)** |

## 2. Como evitar custos após a aula?

### Opção A: Desalocar a VM (Mantém configurações intactas para futuras demonstrações)
Ao desalocar a VM, o custo de CPU e memória é **zerado imediatamente**. Permanece apenas o custo do disco (~R$ 0,15 ao dia):
```powershell
.\scripts\parar-ambiente-azure.ps1
```

### Opção B: Exclusão Definitiva (Custo Zero Absoluto)
Ao final do módulo do curso, exclua o Resource Group inteiro:
```powershell
.\scripts\limpar-ambiente-azure.ps1
```
