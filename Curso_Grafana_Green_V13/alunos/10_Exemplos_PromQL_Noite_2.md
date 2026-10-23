# 10 exemplos PromQL — Noite 2

Material opcional para o ambiente do professor ou para um Linux com node_exporter coletado pelo Prometheus. O laboratório Grafana News da apostila não inclui essas métricas por padrão. Os exercícios obrigatórios 2.1–2.3 continuam usando tns_request_duration_seconds_count.

No Grafana, abra Explore, escolha a fonte Prometheus, selecione Código e execute uma consulta por vez. Comece com Última hora. Para rate, aguarde pelo menos duas amostras, com uma janela suficientemente maior que o scrape_interval. Os exemplos usam [5m] para facilitar a leitura. Em painéis, pode usar [$__rate_interval] com o intervalo de coleta da fonte configurado corretamente.

As consultas preservam os labels disponíveis. Se uma mesma instância for coletada por jobs diferentes, selecione um job para evitar misturar coletas. Para escolher um host, acrescente instance="valor-do-label" nos seletores de métricas. Não copie o nome do servidor sem conferir o label instance da sua instalação.

Os resultados dependem dos collectors e labels presentes no ambiente. Estes exemplos foram revisados conceitualmente, sem nova execução na VM do professor. No data não equivale a zero.

## 1. CPU em uso — %

```promql
100 * (1 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])))
```

Média da fração de tempo sem idle entre os núcleos, por instância. Inclui modos como iowait e steal: interprete como tempo não ocioso, sem concluir saturação apenas por este número.

Pergunta para discussão: Por que aplicar rate antes de tirar a média entre os núcleos?

## 2. Memória RAM em uso — %

```promql
100 * (1 - node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)
```

Estimativa de memória usada considerando a disponibilidade informada pelo Linux. MemAvailable inclui memória recuperável, por isso evita tratar todo cache como memória indisponível.

Pergunta para discussão: Por que MemFree e MemAvailable levam a interpretações diferentes?

## 3. Espaço indisponível no filesystem raiz — %

```promql
100 * (1 - node_filesystem_avail_bytes{mountpoint="/",fstype!~"tmpfs|devtmpfs|overlay|rootfs"} / node_filesystem_size_bytes{mountpoint="/",fstype!~"tmpfs|devtmpfs|overlay|rootfs"})
```

Percentual do filesystem que não está disponível a processos sem privilégios. Usa avail, portanto pode incluir blocos reservados além dos já ocupados. Não mede atividade de I/O.

Pergunta para discussão: O disco pode estar quase cheio mesmo com taxa de leitura igual a zero?

## 4. Espaço disponível no filesystem raiz — GiB

```promql
node_filesystem_avail_bytes{mountpoint="/",fstype!~"tmpfs|devtmpfs|overlay|rootfs"} / 1024^3
```

Capacidade disponível a processos sem privilégios, em gibibytes. Se não aparecer, confira os labels mountpoint e fstype. A raiz pode estar exposta com outro caminho em uma instalação containerizada.

Pergunta para discussão: Por que dividir bytes por 1024 elevado a 3 e não aplicar rate?

## 5. Rede recebida por interface — Mbps

```promql
8 * rate(node_network_receive_bytes_total{device!="lo"}[5m]) / 1000000
```

Taxa média de recepção em megabits por segundo. Cada série preserva instance e device. Escolha a interface desejada e evite somar interfaces físicas, bridges e veth que contem o mesmo tráfego.

Pergunta para discussão: O que muda se retirar o fator 8 da expressão?

## 6. Rede enviada por interface — Mbps

```promql
8 * rate(node_network_transmit_bytes_total{device!="lo"}[5m]) / 1000000
```

Taxa média de transmissão por interface em megabits por segundo. Compara direção de tráfego e não largura de banda disponível. Um valor baixo pode apenas indicar pouco tráfego.

Pergunta para discussão: Receber e transmitir precisam ter o mesmo valor?

## 7. Leitura de disco por dispositivo — MiB/s

```promql
rate(node_disk_read_bytes_total{device!~"loop.*|ram.*"}[5m]) / 1024^2
```

Volume médio lido por segundo no dispositivo. Preserve o label device. Não some camadas físicas, partições e device mapper sem conhecer a topologia. A taxa não mede latência da operação.

Pergunta para discussão: É possível ter taxa de leitura baixa e latência alta?

## 8. Gravação de disco por dispositivo — MiB/s

```promql
rate(node_disk_written_bytes_total{device!~"loop.*|ram.*"}[5m]) / 1024^2
```

Volume médio gravado por segundo no dispositivo. O counter acumula bytes e rate transforma o acumulado em taxa, considerando resets. Cache e buffering podem separar a gravação da aplicação do I/O observado.

Pergunta para discussão: Por que o valor acumulado em bytes não significa MiB por segundo?

## 9. Carga média de 1 minuto por CPU lógica — razão

```promql
node_load1 / count without (cpu, mode) (node_cpu_seconds_total{mode="idle"})
```

Load médio de um minuto dividido pela quantidade de CPUs lógicas do alvo. Não é percentual de CPU. No Linux, o load inclui tarefas executáveis e em espera ininterruptível, frequentemente por I/O. Acima de 1 exige investigação, sem provar saturação por si só.

Pergunta para discussão: Como o load pode subir enquanto a utilização de CPU permanece baixa?

## 10. Tempo desde o boot — dias

```promql
(time() - node_boot_time_seconds) / 86400
```

Diferença entre o instante da consulta e o timestamp do boot, convertida em dias. É tempo desde a inicialização do sistema, não disponibilidade histórica do serviço nem tempo desde o restart do exporter.

Pergunta para discussão: Reiniciar apenas o node_exporter deveria zerar esse valor?

## Painéis e unidades

Para CPU, RAM e filesystem percentual, use Percent (0–100). As outras expressões já convertem o valor para a unidade do título: GiB, Mbps, MiB/s ou dias. Use unidade customizada compatível ou mantenha None com o título explícito, evitando converter o resultado duas vezes. Time series mostra tendência; Stat mostra um valor resumido; Gauge serve para percentual com limite conhecido. Em Stat, configure conscientemente Last, Mean ou outra redução: Mean depende do período exibido.

O JSON opcional em exemplos-importaveis/aluno/10-node-exporter-variados.json contém os dez painéis. Ao importar, selecione a fonte Prometheus que possui node_exporter. Ele não instala o exporter, não cria a fonte e não contém dados históricos nem alertas.

Referências: [node_exporter](https://github.com/prometheus/node_exporter), [funções PromQL](https://prometheus.io/docs/prometheus/latest/querying/functions/), [intervalo de rate no Grafana](https://grafana.com/docs/grafana/latest/datasources/prometheus/template-variables/).
