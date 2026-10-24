# Validação da implantação Azure — Aula 04

**Data:** 23/10/2026
**Resultado:** implantação testada e aprovada; ambiente removido após a validação.

## Escopo implantado

- **Assinatura:** laboratório Visual Studio Enterprise.
- **Resource Group:** `rgaula4copilot`, região `eastus2`.
- **Máquina virtual:** `vm-copilot-grafana`, Ubuntu 22.04 LTS, `Standard_D2s_v3` (2 vCPU, 8 GiB de memória).
- **Armazenamento:** disco do sistema Standard SSD LRS de 32 GiB.
- **Rede:** IP público Standard, VNet, subnet, NIC e NSG.
- **Acesso de entrada:** SSH (22), Grafana (3000) e Prometheus (9090), restritos ao IP público do professor detectado durante o provisionamento. As portas da aplicação demo e dos demais serviços não foram abertas publicamente.
- **Stack:** oito containers — Grafana, Prometheus, Loki, Alloy, Alertmanager, Node Exporter, aplicação demo e receptor de notificações.

## Testes e validações

- A VM permaneceu no estado `running` durante os testes.
- Os oito containers foram listados como ativos pelo Docker Compose.
- Grafana respondeu HTTP 200 em `/api/health`; versão reportada: 11.3.0.
- Prometheus respondeu HTTP 200 em `/-/ready`.
- A API de alvos do Prometheus reportou os três alvos configurados (`ecommerce-app`, `node-exporter` e o próprio Prometheus) com estado `up`.
- As fontes de dados Prometheus e Loki foram localizadas na API autenticada do Grafana.
- A rota `/checkout` da aplicação demo retornou HTTP 200 quando testada localmente na VM.
- O acesso SSH e os endpoints web expostos estavam limitados ao IP autorizado pela regra do NSG.

## Estimativa de custo consultada

Estimativa indicativa baseada no Azure Retail Prices API para `eastus2`, antes de impostos, sem tráfego de saída, descontos, créditos ou outros encargos:

| Recurso | Tarifa consultada | Estimativa para 30 dias contínuos |
|---|---:|---:|
| VM Linux `Standard_D2s_v3` | US$ 0,096/h | US$ 69,12 |
| IP IPv4 público Standard | US$ 0,005/h | US$ 3,60 |
| Disco Standard SSD LRS E4 (32 GiB) | US$ 2,40/mês | US$ 2,40 |
| **Total estimado** |  | **US$ 75,12** |

Esse valor era uma projeção de referência, não uma medição da fatura nem uma garantia do preço efetivamente cobrado. Créditos da assinatura, descontos, impostos e tráfego podem alterar o total. Referência: [Azure Retail Prices API](https://prices.azure.com/api/retail/prices).

## Remoção e estado final

Após a aprovação dos testes, foi executado `az group delete --name rgaula4copilot --subscription b34ce124-5fd1-47a1-ba7c-acbf5367c573 --yes`. A verificação posterior de `az group exists` retornou `false`, confirmando que o Resource Group foi removido. A exclusão do grupo removeu também a VM, o disco, o IP público e os recursos de rede pertencentes a ele.

**Estado atual:** ambiente removido; não usar os IPs ou URLs exibidos durante os testes. Para repetir a aula, provisionar novamente com `scripts/criar-ambiente-azure.ps1` e iniciar a stack com `scripts/sincronizar-e-iniciar.ps1`.
