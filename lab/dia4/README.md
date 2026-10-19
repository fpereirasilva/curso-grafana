# Laboratório Dia 4 — Multi-Stack: Métricas, Logs e Traces (Loki e Tempo)

Neste laboratório você terá a experiência completa dos três pilares da observabilidade moderna:
- **Métricas** com Prometheus + Node Exporter + cAdvisor
- **Logs Estruturados** com Grafana Loki + Promtail
- **Traces Distribuídos** com Grafana Tempo + OpenTelemetry
- **Aplicação Demo (Loja Virtual)** com tráfego gerado em tempo real e injeção de falhas controladas

---

## Como subir o ambiente

```bash
cd lab/dia4
docker compose up -d
```

Aguarde cerca de 30 a 45 segundos para que todos os containers subam e a aplicação inicie o warm-up com 50 transações simuladas.

Confira o status:
```bash
docker compose ps
```

Acesse o Grafana:
- URL: **http://localhost:3000**
- Usuário: `admin`
- Senha: `admin`

---

## O que você vai encontrar pronto

1. **Data Sources já configurados e testados**:
   - `Prometheus` (Métricas)
   - `Loki` (Logs - com integração automática para o Tempo)
   - `Tempo` (Traces - com visualização de spans e integração com Loki)

2. **Dashboards Oficiais na pasta 'Laboratório Professor - Demonstração'**:
   - `01 - Visão geral do host`
   - `02 - Host dinâmico`
   - `03 - Containers`
   - `04 - Central de Logs (Loki)`
   - `05 - E-Commerce APM e Traces`

---

## Exercício Estrela: A "Santíssima Trindade" (Logs ➔ Traces)

1. No menu lateral do Grafana, clique em **Explore** (ícone da bússola).
2. Selecione o data source **Loki**.
3. Rode a query para buscar falhas no checkout da loja:
   ```logql
   {job="docker-containers"} |= "ERROR"
   ```
4. Expanda qualquer linha de erro vermelha.
5. Repare no campo **trace_id**: haverá um botão azul ao lado dele!
6. Clique no botão do **TraceID**.
7. O Grafana abrirá automaticamente o painel do **Tempo** mostrando a árvore de spans daquela transação específica, indicando onde ocorreu a falha no gateway de pagamento!
