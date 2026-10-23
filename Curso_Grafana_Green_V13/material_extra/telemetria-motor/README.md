# Telemetria de motor de carro (simulada)

Material extra do Curso Grafana • Green Tecnologia • Fábio Silva

Um mini "carro" que gera telemetria como se viesse de um scanner OBD-II: rotação, velocidade, acelerador, carga, temperatura do arrefecimento e do óleo, pressão do óleo, bateria, marcha, combustível, distância e códigos de falha. Serve para praticar gauges, thresholds, state timeline, `rate()` e `increase()` em counters, e alertas.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `simulador.py` | Expõe as métricas `car_*` em `:8090/metrics`. Só depende de `prometheus-client`. |
| `Dockerfile` e `docker-compose.telemetria.yml` | Sobem o simulador como container. |
| `prometheus-scrape.yml` | Job para acrescentar ao `prometheus.yml`. |
| `telemetria-motor-dashboard.json` | Dashboard importável (17 painéis, variável `veiculo`, atualização a cada 5 s). |

## Como subir

1. Sem Docker: `pip install prometheus-client` e `python simulador.py`. Abra http://localhost:8090/metrics e confira as linhas `car_engine_rpm`.
2. Com Docker: `docker compose -f docker-compose.telemetria.yml up -d --build`.
3. Acrescente o job de `prometheus-scrape.yml` ao `prometheus.yml` e reinicie o Prometheus (`docker restart <container-prometheus>`).
4. Em Status → Targets do Prometheus, confira `telemetria-motor` como UP.
5. No Grafana: Dashboards → New → Import → Upload JSON → escolha a fonte Prometheus → Import.

Para ver o ciclo completo mais rápido, defina `ACELERA=10` (cada minuto real equivale a 10 de simulação). O defeito de superaquecimento aparece depois de 1000 s simulados.

## Roteiro de aula (20 a 30 min)

1. **Ler as séries no Explore.** Digite `car_engine_rpm`, `car_coolant_temp_celsius` e `car_distance_km_total`. Qual delas só cresce? Por que?
2. **Gauge versus counter.** Rode `rate(car_fuel_used_liters_total[1m])` (litros por segundo) e `increase(car_distance_km_total[5m])` (km na janela).
3. **Consumo.** No painel "Consumo instantâneo", divida `rate` de litros por `rate` de km. Discuta por que dividir counters resolve e dividir gauges não.
4. **Thresholds.** Edite o painel de temperatura e mude o limite vermelho de 112 para 100. O que muda?
5. **Defeito.** Aguarde o superaquecimento: a temperatura passa de 112 °C, a pressão do óleo cai e o painel de DTC fica vermelho (P0217 e P0524).
6. **Desafio (alerta).** Crie uma regra de alerta: `car_coolant_temp_celsius > 112` por 30 s, com rótulo `severidade=critica`.

## Consultas usadas

```promql
car_engine_rpm{veiculo="demo-01"}
sum(increase(car_distance_km_total[$__range]))
sum(rate(car_fuel_used_liters_total[1m])) / (sum(rate(car_distance_km_total[1m])) > 0.001) * 100
sum(car_dtc_active)
```

## Observações

- Os dados são sintéticos: não representam um modelo real de veículo.
- Teste antes da aula: o simulador foi verificado (as métricas saem corretamente), mas o dashboard ainda não foi importado em um Grafana com o simulador coletado. Confira os painéis e ajuste se algum ficar sem dados.
