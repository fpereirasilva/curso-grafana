# Mais 10 exercícios de PromQL - Noite 2

Fábio Silva | Green Tecnologia

Complemento opcional aos exercícios 2.1 a 2.6. O professor pode selecionar atividades para a prática guiada e para a consolidação; os dez exemplos não são uma nova carga obrigatória para o mesmo bloco.

## Preparação comum

1. Abra o Grafana do laboratório em http://localhost:3300. Entre em Explore (Explorar), selecione Prometheus e ative Code (Código). A fonte precisa conter a métrica tns_request_duration_seconds_count do Grafana News.
2. Abra a aplicação em outra aba: http://localhost:38081. Esses endereços pertencem ao laboratório local do curso; em outro ambiente use os endereços informados pelo professor.
3. Para gerar atividade, atualize a página inicial 10 a 15 vezes. Para variar as rotas, publique um link e clique no pequeno triângulo de votação à esquerda dele. Clicar no título abre o site do link.
4. Após gerar atividade, aguarde 10 a 20 segundos (pelo menos duas coletas no laboratório) e clique em Run query. O rate precisa de duas amostras por série dentro da janela; não precisa aguardar cinco minutos completos.
5. Use Type: Range e Last 5 minutes, salvo indicação diferente. Em Options (Opções), o campo Type permite selecionar Instant para consultar um único instante. Depois desses exercícios, retorne a Range.
6. Os filtros route!="metrics" e route!="/metrics" retiram a rota de coleta nas duas grafias. O filtro route=~"/?vote" aceita vote e /vote. Leia os labels do seu ambiente antes de adaptar os exemplos.

**Se aparecer No data:** confirme a fonte, execute a métrica sem filtros, confira os labels, gere atividade e aguarde a coleta. Zero com uma série presente é diferente de ausência de série. Os valores variam entre ambientes.

**Validação:** consultas revisadas a partir do laboratório empacotado e da documentação PromQL. Este complemento não inclui uma nova execução no ambiente do professor nem novas capturas de tela.

## Exercício 2.7 - Consultar a taxa por status sem a coleta

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Cole a consulta abaixo no Explore e clique em Run query.
2. Na aplicação, atualize a página inicial e publique um link. Aguarde a coleta e execute a consulta novamente.
3. Escolha Last 5 minutes e compare os códigos na legenda, como 200 e 302, se estiverem presentes.
4. Registre um status HTTP, sua taxa aproximada e a unidade. Explique por que a rota de coleta ficou fora do resultado.

**Consulta a utilizar:**

```promql
sum by (status_code) (
  rate(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[5m])
)
```

**Unidade:** requisições por segundo (req/s).

**Resultado esperado:** Uma série por status HTTP observado, somando as rotas selecionadas.

**Atenção à interpretação:** Não é necessário provocar erros. Um status só aparece depois de existir uma série correspondente; 302 representa redirecionamento e não significa, por si só, falha.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.8 - Cruzar rota e status HTTP

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Execute a consulta abaixo e localize route e status_code na legenda.
2. Atualize a aplicação, publique um link e vote nele. Aguarde 10 a 20 segundos e execute Run query.
3. Escolha Last 5 minutes e compare duas combinações de rota e status.
4. Registre as duas combinações, suas taxas e a unidade. Compare o número de séries com o exercício 2.7.

**Consulta a utilizar:**

```promql
sum by (route, status_code) (
  rate(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[5m])
)
```

**Unidade:** req/s por combinação de rota e status.

**Resultado esperado:** Cada combinação observada de rota e status aparece separadamente.

**Atenção à interpretação:** O agrupamento mantém dois labels. As combinações disponíveis dependem do tráfego já produzido; elas não precisam coincidir entre alunos.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.9 - Isolar as requisições de votação

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Abra a aplicação e vote em um link pelo pequeno triângulo à esquerda do título. Se não houver link, publique um primeiro.
2. Aguarde 10 a 20 segundos. Cole a consulta abaixo no Explore e clique em Run query.
3. Escolha Last 5 minutes e observe a taxa antes e depois de mais algumas ações de votação.
4. Registre a unidade e explique qual rota foi selecionada pela expressão /?vote.

**Consulta a utilizar:**

```promql
sum(
  rate(tns_request_duration_seconds_count{
    route=~"/?vote"
  }[5m])
)
```

**Unidade:** requisições à rota de votação por segundo (req/s).

**Resultado esperado:** Uma série com a taxa agregada das requisições à rota vote ou /vote.

**Atenção à interpretação:** A consulta conta requisições à rota, incluindo os status existentes. Ela não mede usuários únicos nem garante que todos os votos foram aceitos. Sem série dessa rota, pode haver No data.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.10 - Consultar a taxa total da aplicação

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Execute a consulta abaixo e observe que o resultado não está separado por rota.
2. Atualize a página inicial, publique um link e vote. Aguarde a coleta e execute Run query novamente.
3. Escolha Last 5 minutes. Compare com a consulta por rota do exercício 2.2, aplicando nela os mesmos filtros que excluem metrics.
4. Registre a taxa total e explique o que a retirada de by (route) fez com as séries.

**Consulta a utilizar:**

```promql
sum(
  rate(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[5m])
)
```

**Unidade:** requisições por segundo (req/s).

**Resultado esperado:** Uma única série reúne a taxa das rotas selecionadas.

**Atenção à interpretação:** Para comparar a soma com as rotas, use os mesmos filtros e o mesmo instante de avaliação. O total não inclui a coleta em /metrics.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.11 - Estimar o volume em dez minutos

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Execute a consulta abaixo e escolha Last 30 minutes para visualizar a evolução do volume estimado.
2. Atualize a aplicação, publique um link e vote. Aguarde a coleta e execute Run query novamente.
3. Leia o ponto mais recente: ele representa o aumento estimado do contador nos dez minutos anteriores àquele instante.
4. Registre o valor e a unidade. Explique por que esse resultado é volume de requisições, enquanto rate representa req/s.

**Consulta a utilizar:**

```promql
sum(
  increase(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[10m])
)
```

**Unidade:** requisições estimadas nos dez minutos anteriores.

**Resultado esperado:** O resultado apresenta um volume estimado por janela móvel de dez minutos.

**Atenção à interpretação:** O increase pode retornar decimais por extrapolação. Não some os pontos do gráfico: as janelas se sobrepõem. Um laboratório recém-iniciado ainda não possui dez minutos completos de histórico.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.12 - Encontrar as rotas com maior taxa

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Em Options, altere Type para Instant. Execute a consulta abaixo para consultar o ranking no instante final do período.
2. Gere atividade em rotas diferentes na aplicação, aguarde a coleta e clique em Run query.
3. Leia o resultado na tabela. Troque topk(3, por topk(1, e execute novamente para manter somente a maior taxa.
4. Registre a rota líder e sua taxa. Ao terminar, volte Type para Range.

**Consulta a utilizar:**

```promql
topk(3,
  sum by (route) (
    rate(tns_request_duration_seconds_count{
      route!="metrics", route!="/metrics"
    }[5m])
  )
)
```

**Unidade:** requisições por segundo (req/s).

**Resultado esperado:** Até três rotas com as maiores taxas no instante consultado; com topk(1), apenas a primeira.

**Atenção à interpretação:** Instant evita confundir o ranking atual com várias classificações ao longo do tempo. Em Range, a legenda pode reunir mais de três rotas quando as líderes mudam. topk não garante ordenação das linhas na tela.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.13 - Calcular a participação das requisições de votação

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Na aplicação, atualize a página inicial e vote em um link para criar tráfego nos dois grupos. Aguarde a coleta.
2. Cole a consulta completa no Explore e clique em Run query.
3. Escolha Last 5 minutes. Gere mais requisições pela página inicial ou pela votação e execute a consulta novamente.
4. Registre o percentual e explique seu numerador e denominador. A participação pode aumentar ou diminuir conforme as ações realizadas.

**Consulta a utilizar:**

```promql
100 *
sum(rate(tns_request_duration_seconds_count{
  route=~"/?vote"
}[5m]))
/
sum(rate(tns_request_duration_seconds_count{
  route!="metrics", route!="/metrics"
}[5m]))
```

**Unidade:** porcentagem (%).

**Resultado esperado:** A parcela da taxa total selecionada que pertence à rota de votação.

**Atenção à interpretação:** Não é percentual de usuários nem de votos aceitos. Se o denominador for zero, a divisão não tem percentual válido; se a série de votação não existir, pode aparecer No data. Gere atividade antes de interpretar.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.14 - Filtrar rotas acima de uma taxa

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Execute a consulta abaixo com o limite didático de 0.02 req/s.
2. Atualize a página inicial várias vezes, aguarde a coleta e execute Run query novamente.
3. Escolha Last 5 minutes e observe quais rotas possuem pontos acima do limite. Se nenhuma passar, reduza temporariamente o limite para 0.
4. Registre o limite usado, uma rota retornada e sua taxa. Explique por que uma série pode desaparecer da consulta filtrada.

**Consulta a utilizar:**

```promql
sum by (route) (
  rate(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[5m])
) > 0.02
```

**Unidade:** requisições por segundo (req/s).

**Resultado esperado:** Apenas pontos cuja taxa excede o limite aparecem; o valor retornado continua sendo a própria taxa.

**Atenção à interpretação:** Sem bool, a comparação filtra valores, em vez de devolver 0 ou 1. Nenhuma rota acima do limite pode resultar em No data. O número 0.02 é um exemplo de aula, não um limite de produção nem uma regra de alerta configurada.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.15 - Contar séries por rota

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Selecione Type: Instant em Options. Execute primeiro a métrica tns_request_duration_seconds_count e examine os labels na tabela.
2. Substitua pela consulta abaixo e clique em Run query. Observe a quantidade de séries associadas a cada rota.
3. Compare uma rota com a consulta bruta: status, instância ou outros labels diferentes podem gerar séries distintas para a mesma rota.
4. Registre uma rota, seu número de séries e a unidade. Explique por que esse número não representa requisições; depois volte Type para Range.

**Consulta a utilizar:**

```promql
count by (route) (
  tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }
)
```

**Unidade:** séries temporais por rota.

**Resultado esperado:** Uma contagem das séries presentes por rota no instante consultado.

**Atenção à interpretação:** count conta séries, inclusive séries com valor zero. O valor acumulado do contador não altera essa contagem; a criação ou remoção de combinações de labels pode alterá-la.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Exercício 2.16 - Comparar janelas de um e cinco minutos

**Tipo:** Consulta no navegador, durante o bloco guiado e a consolidação autônoma.

1. Com Type: Range, cole a primeira expressão em A. Clique em Add query (Adicionar consulta) e cole a segunda em B, também na fonte Prometheus.
2. Escolha Last 15 minutes e clique em Run query para exibir as duas consultas no mesmo período.
3. Gere uma sequência rápida de atualizações na aplicação, aguarde a coleta e execute Run query novamente.
4. Compare A e B para a mesma rota e no mesmo instante. Registre qual janela responde mais rapidamente à mudança e confirme a unidade das duas.

**Consulta A - janela de 1 minuto:**

```promql
sum by (route) (
  rate(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[1m])
)
```

**Consulta B - janela de 5 minutos:**

```promql
sum by (route) (
  rate(tns_request_duration_seconds_count{
    route!="metrics", route!="/metrics"
  }[5m])
)
```

**Unidade:** requisições por segundo (req/s), nas duas consultas.

**Resultado esperado:** A janela de um minuto tende a reagir mais rapidamente; a de cinco minutos tende a suavizar oscilações.

**Atenção à interpretação:** A consulta A não precisa ser sempre maior que B. Last 15 minutes define a extensão exibida, enquanto [1m] e [5m] definem o cálculo de cada ponto. As duas curvas continuam em req/s.

**Registro do aluno:** data/hora; rota ou status (se aplicável); valor e unidade; uma frase de interpretação; captura do resultado.

## Referências

- [Tutorial oficial: Grafana Fundamentals](https://grafana.com/tutorials/grafana-fundamentals/)
- [Prometheus: funções rate e increase](https://prometheus.io/docs/prometheus/latest/querying/functions/)
- [Prometheus: agrupamentos, topk, count e comparações](https://prometheus.io/docs/prometheus/latest/querying/operators/)
