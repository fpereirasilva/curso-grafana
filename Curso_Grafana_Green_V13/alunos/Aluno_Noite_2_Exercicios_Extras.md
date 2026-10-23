# Noite 2 — Desafios opcionais

## Desafios opcionais (2.4 a 2.6)


Depois de concluir 2.1 a 2.3, quem terminar antes das 22h15 pode continuar. Os desafios são opcionais e usam as mesmas telas. As capturas de referência vieram do ambiente do professor (loja virtual); no seu laboratório use as consultas `tns_`.

### Desafio 2.4 — Filtrar por label: tirar o scrape

**Objetivo:** usar um filtro de label dentro do seletor para responder uma pergunta mais específica.

1. No Explore, com Prometheus e Code ativos, clique no editor da consulta A e use Ctrl+A para substituir o texto.
2. Cole a consulta abaixo e clique em Run query (ou Shift+Enter). Ela é a taxa por rota do exercício 2.2, sem a rota `metrics`.
3. Compare a legenda com a do exercício 2.2: qual série desapareceu? Por que ela existia?
4. Troque o filtro por `{status_code="200"}` e execute de novo. Quais rotas continuam aparecendo?
5. Registre a pergunta que cada consulta responde e a unidade (req/s).

```promql
sum(rate(tns_request_duration_seconds_count{route!="metrics"}[5m])) by (route)
```

**Resultado esperado:** a rota `metrics` (coleta do Prometheus) não aparece. Ficam apenas as rotas geradas por ações na aplicação, como root, post e vote.

**Se não funcionar:** em No data, confirme a fonte Prometheus e gere tráfego na aplicação. Um filtro que não corresponde a nenhuma série devolve No data, e isso é diferente de zero. Use `!=` (diferente de) e aspas retas, sem espaços dentro das chaves.

**Captura de referência (ambiente do professor):** `sum(rate(http_requests_total{status="500"}[5m])) by (endpoint)`. O filtro `{status="500"}` reduz a legenda a poucas séries.

![Filtro por label: taxa de erros 500 por endpoint](capturas/51-taxa-erros-500-por-endpoint.jpg)
### Desafio 2.5 — Taxa ou total: rate e increase

**Objetivo:** distinguir "quantos por segundo" de "quantos na janela".

1. Execute a consulta abaixo. O resultado é **o aumento estimado de requisições na janela de 5 minutos**, e não req/s.
2. Anote o valor de uma rota na aba Raw.
3. Execute a consulta do exercício 2.2 (`rate`) e anote o valor da mesma rota.
4. Multiplique a taxa por 300 (segundos de 5 minutos). No mesmo instante e com a mesma janela, increase corresponde a rate multiplicado por 300; a comparação manual pode sofrer arredondamento ou diferença de horário.
5. Explique por que a comparação exige o mesmo instante de avaliação, janela e seleção de séries.

```promql
sum(increase(tns_request_duration_seconds_count[5m])) by (route)
```

**Resultado esperado:** o gráfico mostra contagens em vez de frações. No ambiente do professor, uma rota teve `increase` ≈ 82 e `rate` ≈ 0,27 req/s; 0,27 × 300 ≈ 80.

**Se não funcionar:** compare as consultas no mesmo instante e com a mesma janela e filtros. increase é rate multiplicado pela duração da janela; os dois usam a mesma extrapolação. Instantes diferentes ou arredondamentos podem alterar a comparação manual. O resultado pode ser fracionário. Em um laboratório recém-iniciado, com poucas atualizações, os totais serão pequenos.

**Captura de referência (ambiente do professor):** `sum(increase(http_requests_total[5m])) by (endpoint)`.

![Total na janela com increase](capturas/52-increase-por-endpoint.jpg)
### Desafio 2.6 — Latência: percentil 95 com histograma

**Objetivo:** ler uma distribuição de duração e entender por que p95 não é média nem máximo.

1. Execute a consulta abaixo. O resultado está em **segundos**.
2. Leia a legenda e identifique qual rota tem o p95 mais alto.
3. Execute a segunda consulta (média de duração por rota) e compare com o p95 da mesma rota.
4. Escreva, em uma ou duas frases, o que significa "95% das requisições foram atendidas em até X segundos".

```promql
histogram_quantile(0.95, sum(rate(tns_request_duration_seconds_bucket[5m])) by (le, route))
```

Média para comparação:

```promql
sum(rate(tns_request_duration_seconds_sum[5m])) by (route)
  / sum(rate(tns_request_duration_seconds_count[5m])) by (route)
```

**Resultado esperado:** compare p95 e média: são resumos diferentes da distribuição. O p95 não é obrigatoriamente maior que a média em toda distribuição. No ambiente do professor, duas rotas tinham p95 próximo de 0,45 s, e as demais ficavam perto de 0,23 s; as médias eram menores (0,09 s a 0,22 s).

**Se não funcionar:** mantenha `le` no `by (...)`. Sem ele, `histogram_quantile` não encontra os buckets. Com poucas requisições, o percentil pode oscilar ou aparecer como NaN: gere mais tráfego e aguarde novas coletas. O percentil é estimado a partir de faixas (buckets); por isso o valor é aproximado.

**Captura de referência (ambiente do professor):** `histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, endpoint))`.

![Percentil 95 por endpoint](capturas/53-p95-por-endpoint.jpg)
