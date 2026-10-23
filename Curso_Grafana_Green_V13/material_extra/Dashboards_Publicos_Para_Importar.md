# Material extra — Dashboards públicos para importar

Curso Grafana • Green Tecnologia • Fábio Silva

Dashboards prontos do catálogo oficial (grafana.com/grafana/dashboards) que os alunos podem importar para ver como é um painel profissional. Confira cada página antes da aula: IDs e revisões mudam com o tempo.

## Como importar (vale para todos)

1. Dashboards → New → Import.
2. Digite o ID na caixa "Grafana.com dashboard URL or ID" e clique em Load (ou envie um arquivo .json em "Upload dashboard JSON file").
3. Escolha a fonte de dados (Prometheus ou Loki) na lista e clique em Import.
4. Se aparecer "No data", confira a fonte escolhida e o período no canto superior direito.

## Lista

| ID | Nome | Fonte | Para que serve na aula |
|----|------|-------|------------------------|
| 1860 | Node Exporter Full | Prometheus | O "wow": CPU, memória, disco e rede com variáveis. Exige o node-exporter coletando. https://grafana.com/dashboards/1860 |
| 12515 | Node Exporter Full (variante) | Prometheus | Alternativa ao 1860. https://grafana.com/grafana/dashboards/12515 |
| 14282 | cAdvisor / Docker containers | Prometheus | Consumo de cada container do laboratório. Exige cAdvisor (a confirmar no stack). |
| 3662 | Prometheus 2.0 Overview | Prometheus | O Prometheus monitorando a si mesmo: scrape, séries, retenção. |
| 3590 | Grafana Internals | Prometheus | Grafana monitorando o próprio Grafana. |
| 12019 | Loki Dashboard quick search | Loki | Noite de logs. Arquivo já incluso em `dashboards/loki-quick-search-12019.json`. |

Os IDs 1860 e 12515 foram verificados na pesquisa; 14282, 3662 e 3590 vêm de conhecimento prévio e precisam ser conferidos.

## Sugestão de uso

- Demonstração: importar o 1860 ao vivo e comentar as variáveis (instância, job) e as linhas recolhidas.
- Exercício extra: importar o 12019 e ligar à fonte Loki.
- Discussão: o que muda entre importar e construir do zero? Onde está o JSON do painel (Dashboard settings → JSON Model)?
