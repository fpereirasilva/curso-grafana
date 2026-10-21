# Guia do professor — V10

## Noite 1

### Slide 1 — Visualizando dados com Grafana

Abertura do curso. O bloco inicial da primeira noite está incluído nos 85 minutos de teoria.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 2 — Sobre o instrutor

Noite 1 — Teoria
18h31–18h32 (1 minutos).
Apresentação breve. Não atribuir certificações ou tempo de experiência de outro instrutor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 3 — Base do curso

Noite 1 — Teoria
18h32–18h33 (1 minutos).
Explicar que o pacote da turma usa portas adaptadas. GitHub ou Google Drive serão definidos pelo professor para distribuição.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 4 — Organização das cinco noites

Noite 1 • Teoria • 18h33–18h34
Explique a organização antes de iniciar o conteúdo. Noites 1, 3, 4 e 5 mantêm teoria 18h30–19h55, demonstração 19h55–20h20, intervalo 20h20–20h45, exercícios comentados 20h45–21h00, prática 21h00–22h15 e correção 22h15–22h30.
Na Noite 2, métricas ocupa a teoria 18h30–20h20. O ambiente deve estar preparado antes da aula; durante a teoria, trabalhe os exemplos e as perguntas sem abrir uma demonstração de métricas. Depois do intervalo, a turma entra no Grafana e executa os exercícios 2.1–2.3 com o professor das 20h45 às 21h20. Consolidação autônoma 21h20–22h15; correção 22h15–22h30. Os exemplos importáveis continuam opcionais.
TRANSIÇÃO
Confirme que a turma sabe quando apenas discutir os exemplos e quando executar. Mostre o roteiro da noite e siga os conceitos previstos.

### Slide 5 — As cinco noites

Noite 1 — Teoria
18h34–18h35 (1 minutos).
Orientar a turma a manter os resultados entre as noites. Docker é o caminho executável deste pacote. Ubuntu nativo tem roteiro na apostila e scripts futuros, após teste do professor no Azure.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 6 — Noite 1 — Fundamentos e arquitetura

TRANSIÇÃO — Teoria
18h35–18h40 (5 minutos)
ABERTURA SUGERIDA
“Hoje vamos preparar nosso ambiente e conhecer a aplicação que nos acompanhará nas cinco noites. O objetivo é entender de onde vêm os dados antes de configurar gráficos.”
CONEXÃO COM O CURSO ONLINE
Localize Introduction, Prerequisites, Set up the sample application, Grafana News e Open Grafana no tutorial Fundamentals. Diga que a turma usará o mesmo exemplo, com endereços adaptados no pacote da aula.
PREPARAÇÃO DO PROFESSOR
Antes da aula, confirme Docker e Compose e faça o download inicial. Abra a aplicação em localhost:38081 e o Grafana em localhost:3300. Deixe o caderno disponível. Confira o áudio e a internet se optar por mostrar o vídeo de observabilidade. O ambiente didático permite acesso anônimo.
CONDUÇÃO
Explique aplicação, Grafana, Prometheus e Loki em linguagem simples. Demonstre uma publicação e um voto. Peça aos alunos que repitam e identifiquem a fonte Prometheus. Reserve a revisão para conferir quem ainda precisa de ajuda no ambiente.
PERGUNTAS PARA A TURMA
“Qual serviço apresenta os dados?” “Qual é a aplicação observada?” “O endereço do navegador é igual ao endereço entre containers?”
CRITÉRIO DE SAÍDA
Cada aluno abre aplicação e Grafana e identifica a conexão Prometheus. Não avance deixando falhas de acesso sem encaminhamento.
GANCHO PARA A PRÓXIMA NOITE
“Agora que sabemos de onde vêm os dados, vamos consultar quantas requisições a aplicação recebe.”
FORMATO DA NOITE
Teoria até 19h55. Depois, 25 minutos de demonstração sem prática individual. Intervalo 20h20–20h45. Exercícios comentados 20h45–21h00. Folha liberada para execução 21h00. Prática até 22h15, correção até 22h30.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 7 — O que é observabilidade?

18h40–18h43 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Explique que ter muitos gráficos não garante observabilidade. É preciso conseguir relacionar sinais a uma pergunta real. Um serviço pode estar disponível e ainda falhar em uma operação importante. O curso começa pela interpretação, antes de ensinar os cliques.

PERGUNTA À TURMA
Um HTTP 200 garante que a experiência do usuário foi boa?

RESPOSTA ESPERADA
Não. Também precisamos observar duração, conteúdo e resultado da operação.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 8 — Monitoramento e investigação

18h43–18h46 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
São capacidades complementares. Ferramentas de monitoramento também podem coletar sinais ricos. Evite definir produtos como Zabbix ou Nagios somente por ping e up/down. O contraste aqui é entre perguntas e usos, não entre produtos antigos e novos.

PERGUNTA À TURMA
Um alerta explica sozinho a causa de uma falha?

RESPOSTA ESPERADA
Não. Ele indica uma condição que precisa ser investigada.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 9 — Métricas: medidas ao longo do tempo

18h46–18h49 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Dê exemplos de unidade e período. 12 requisições por segundo é uma taxa, não o total acumulado. A mesma métrica pode ter séries diferentes para cada rota, instância ou código HTTP. Métricas resumem; não preservam cada detalhe de uma requisição.

PERGUNTA À TURMA
O número 42 é suficiente para interpretar um painel?

RESPOSTA ESPERADA
Não. Precisamos da unidade, do período e do que foi medido.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

### Slide 10 — Logs: registros de eventos

18h49–18h52 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Use um erro simulado de pagamento como exemplo. Um log é evidência do que a aplicação registrou; sua mensagem pode ser incompleta. Logs estruturados em JSON facilitam extração de campos, mas exigem cuidado com volume e dados sensíveis. Não apresentar log como prova automática da causa.

PERGUNTA À TURMA
Qual a vantagem de registrar o nome do serviço e o horário?

RESPOSTA ESPERADA
Permite localizar e relacionar o evento no intervalo da investigação.

REFERÊNCIA
https://grafana.com/docs/loki/latest/get-started/overview/

### Slide 11 — Traces: caminho de uma requisição

18h52–18h55 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Descreva checkout, autenticação, consulta de banco e gateway de pagamento. Spans pai e filhos mostram relações e sobreposição no tempo. Não somar durações de etapas paralelas como se fossem sempre sequenciais. A aplicação precisa ser instrumentada para produzir esses dados.

PERGUNTA À TURMA
Uma etapa de pagamento pode fazer parte do mesmo trace do checkout?

RESPOSTA ESPERADA
Sim. Ela pode ser um span associado à mesma requisição.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

### Slide 12 — Métricas, logs e traces juntos

18h55–18h58 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Exemplo: a latência sobe, surge um log de timeout e um trace mostra demora no gateway. Essa combinação sustenta uma hipótese mais específica. Proximidade no tempo não basta para provar causalidade. Explicar as três fontes de sinal sem usar MELT como se fosse uma lista de apenas três itens.

PERGUNTA À TURMA
Um pico no gráfico e um log próximo garantem relação causal?

RESPOSTA ESPERADA
Não. A correlação precisa ser verificada no contexto e, quando possível, pelo trace_id.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 13 — Vídeo: observabilidade

Noite 1 — Teoria
18h58–19h01 (3 minutos).
Referência do canal Grafana: What is Observability? | Grafana for Beginners Ep. 1. Reserve o tempo da aula para um trecho selecionado e a discussão, não para exibição integral se ultrapassar o bloco. A referência completa fica para estudo posterior.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 14 — O que é o Grafana?

19h01–19h04 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
O Grafana é a interface principal do curso. Prometheus, Loki e Tempo guardam a telemetria deste laboratório. O Grafana guarda configurações, dashboards e outras informações operacionais, mas não substitui esses backends de métricas, logs e traces. Não dizer que traduz automaticamente qualquer linguagem: nós escrevemos as consultas ou usamos o builder.

PERGUNTA À TURMA
Quem armazena as métricas do laboratório: Grafana ou Prometheus?

RESPOSTA ESPERADA
Prometheus; o Grafana consulta e apresenta os resultados.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 15 — Grafana: vantagens e limites

19h04–19h07 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Um dashboard bonito pode conter uma consulta errada. O Grafana precisa de fontes acessíveis e de unidades corretas. Segurança, autenticação e recursos avançados variam por edição e configuração. Não atribuir SAML, cache de consultas ou permissões avançadas a toda instalação OSS.

PERGUNTA À TURMA
O Grafana corrige automaticamente uma métrica coletada com labels errados?

RESPOSTA ESPERADA
Não. A instrumentação, a coleta e a consulta precisam ser corrigidas.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 16 — O que é o Prometheus?

19h07–19h10 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Apresente o fluxo pull: o Prometheus faz a requisição de scrape e recebe amostras de /metrics. Exporters traduzem informações do host ou de serviços para o formato de exposição. Grafana consulta o Prometheus pela API. A configuração local do professor usa scrape_interval de 5s, não um padrão universal.

PERGUNTA À TURMA
Quem inicia o scrape neste laboratório?

RESPOSTA ESPERADA
O Prometheus.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

### Slide 17 — Prometheus: vantagens e limites

19h10–19h13 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Cada combinação de labels cria uma série. IDs de usuário ou de requisição tendem a gerar muitas séries. Coleta periódica pode perder mudanças entre amostras; métricas de monitoramento não são a fonte ideal para faturamento exato. Escala e longa retenção podem exigir outra arquitetura. Não afirmar que pull é sempre superior a push.

PERGUNTA À TURMA
Trace_id é uma boa label para toda métrica?

RESPOSTA ESPERADA
Em geral não: pode criar cardinalidade muito alta.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

### Slide 18 — Counter, gauge e distribuições

19h13–19h16 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Foque counter e gauge para os iniciantes. Counter não deve diminuir fora de resets; rate trata resets de contadores. Histogram agrupa observações em buckets; summary pode calcular quantis no cliente. Aprofundar histograma apenas como contexto, pois o curso básico não depende de cálculo de p95.

PERGUNTA À TURMA
Memória disponível é counter ou gauge?

RESPOSTA ESPERADA
Gauge, porque pode aumentar ou diminuir.

REFERÊNCIA
https://prometheus.io/docs/concepts/metric_types/

### Slide 19 — O que é o Loki?

19h16–19h19 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
No modelo do Loki, o índice se apoia em labels e metadados, sem indexar cada palavra do corpo do log como um índice de texto completo tradicional. Os dados dos logs são compactados em chunks. É preciso um coletor ou uma aplicação enviando os eventos.

PERGUNTA À TURMA
O Loki lê sozinho todos os arquivos de cada servidor?

RESPOSTA ESPERADA
Não. Um agente ou cliente precisa coletar e enviar os logs.

REFERÊNCIA
https://grafana.com/docs/loki/latest/get-started/overview/

### Slide 20 — Loki: vantagens e limites

19h19–19h22 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Evite prometer economia percentual universal ou dizer que qualquer instalação dispensa recursos. A seleção do fluxo e do intervalo afeta a quantidade de dados lidos. Trace_id deve ficar como campo do evento ou metadado adequado, evitando um fluxo indexado por cada requisição.

PERGUNTA À TURMA
Por que reduzir o período antes de pesquisar uma mensagem?

RESPOSTA ESPERADA
Porque reduz o conjunto de dados examinado e melhora o foco da investigação.

REFERÊNCIA
https://grafana.com/docs/loki/latest/get-started/overview/

### Slide 21 — O que é o Tempo?

19h22–19h25 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
A aplicação do professor usa OpenTelemetry e envia para tempo:4318/v1/traces, conforme o código local. Grafana consulta o Tempo pela porta de API 3200. Essas portas têm funções diferentes: ingestão de spans e consulta. O diagrama separa os caminhos de logs e traces.

PERGUNTA À TURMA
Promtail envia os spans da aplicação ao Tempo?

RESPOSTA ESPERADA
Não. Neste laboratório, a aplicação envia spans por OpenTelemetry/OTLP.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

### Slide 22 — Tempo: vantagens e limites

19h25–19h28 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Uma captura de trace é tão completa quanto a instrumentação e a amostragem permitem. Nem toda requisição precisa estar retida. Atributo error=true não é necessariamente igual a status OpenTelemetry Error; isso foi observado na aplicação demo. Não tratar um trace como causalidade comprovada por si só.

PERGUNTA À TURMA
Ter Tempo instalado garante traces de qualquer aplicação?

RESPOSTA ESPERADA
Não. A aplicação ou um mecanismo de instrumentação precisa produzir e enviar spans.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

### Slide 23 — PromQL: consulta de métricas

19h28–19h31 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Mostre a consulta do tutorial: sum(rate(tns_request_duration_seconds_count[5m])) by (route). Ler de dentro para fora. A janela 5m fornece as amostras para a taxa; o filtro de tempo da tela controla o período exibido. A prática detalhada ficará na Noite 2.

PERGUNTA À TURMA
A janela [5m] e Last 1 hour são a mesma configuração?

RESPOSTA ESPERADA
Não. Uma é a janela da função e a outra é o período consultado/exibido.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

### Slide 24 — LogQL: consulta de logs

19h31–19h34 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Use como exemplo do professor, sem afirmar que a label service existe no Grafana News. No tutorial, o seletor usa filename. |= encontra texto; | json extrai campos quando o conteúdo é JSON válido. O envelope Docker do professor exige primeiro expor o campo log antes de tratar os campos da aplicação.

PERGUNTA À TURMA
O filtro de texto substitui a seleção de um fluxo?

RESPOSTA ESPERADA
Não. Primeiro selecionamos os fluxos, depois filtramos seu conteúdo.

REFERÊNCIA
https://grafana.com/docs/loki/latest/query/

### Slide 25 — TraceQL: consulta de traces

19h34–19h37 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Diferencie procurar uma lista de traces com uma expressão TraceQL de abrir diretamente um trace por ID. A expressão mostra recursos de serviço. Um segundo exemplo para discussão é { duration > 200ms }, sem garantir que o dado exista em todo período. A prática de rastreamento é complementar ao tutorial básico.

PERGUNTA À TURMA
O nome do serviço e o TraceID têm a mesma função?

RESPOSTA ESPERADA
Não. O serviço identifica a aplicação; TraceID identifica uma requisição/rastreamento.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

### Slide 26 — Promtail: papel no laboratório

19h37–19h40 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Promtail não recebe os spans do OpenTelemetry deste laboratório e não envia dados ao Tempo. A configuração local aponta para /loki/api/v1/push. Explicar posições de leitura e coleta contínua sem aprofundar o arquivo de estado. Promtail atingiu EOL em 02/03/2026.

PERGUNTA À TURMA
Qual é o destino dos logs enviados pelo Promtail?

RESPOSTA ESPERADA
Loki.

REFERÊNCIA
https://grafana.com/docs/loki/latest/send-data/promtail/

### Slide 27 — Promtail e a migração para Alloy

19h40–19h43 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
É uma explicação de ciclo de vida, não uma migração executada. Grafana Alloy é uma distribuição de coletor com capacidades para diferentes sinais. O curso não afirma que Alloy já esteja rodando na VM ou que simplesmente trocar a imagem preserve a configuração. Usar as instruções oficiais de conversão.

PERGUNTA À TURMA
O diagrama com Alloy descreve a VM já alterada?

RESPOSTA ESPERADA
Não. Ele mostra a evolução possível; a VM observada usa o fluxo legado.

REFERÊNCIA
https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/

### Slide 28 — Arquitetura do ambiente do professor

19h43–19h46 (3 minutos)

ARQUITETURA EDITÁVEL
Portas internas do ambiente de referência. O Grafana inicia consultas aos backends. Prometheus inicia a coleta dos endpoints /metrics. Promtail envia logs ao Loki. A aplicação envia spans ao Tempo pela porta 4318; 3200 é a API de consulta. Loki e Tempo são componentes separados. A VM observada teve adaptações de coleta de containers descritas no histórico. O arquivo Compose local não comprova que todas as versões e flags foram mantidas na VM. O módulo de dados públicos citado no dossiê não foi verificado e não é apresentado como parte validada desta figura.

PERGUNTA
Qual sinal percorre cada caminho e quem inicia a comunicação?

Fontes: arquivos locais docker-compose.yml, prometheus.yml, tempo-config.yaml e app.py do professor; telas observadas nesta sessão.
https://grafana.com/tutorials/grafana-fundamentals/
https://prometheus.io/docs/introduction/overview/
https://prometheus.io/docs/concepts/metric_types/
https://grafana.com/docs/loki/latest/get-started/overview/
https://grafana.com/docs/loki/latest/query/
https://grafana.com/docs/tempo/latest/traceql/
https://grafana.com/docs/loki/latest/send-data/promtail/
https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/
https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#smtp
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/
https://grafana.com/docs/grafana/v11.3/developers/http_api/alerting_provisioning/

### Slide 29 — Coleta de métricas: modelo pull

19h46–19h49 (3 minutos)

ARQUITETURA EDITÁVEL
A seta representa o pedido de coleta, não um push iniciado pelo exporter. A resposta retorna as amostras ao Prometheus. scrape_interval de 5s foi lido no arquivo prometheus.yml local do professor; não é recomendação universal nem prova do estado de cada target agora. O serviço containers foi descrito como exportador customizado na VM. Targets e sua saúde devem ser conferidos no Prometheus antes de cada aula. O grafana consulta o Prometheus, não os exporters diretamente neste fluxo.

PERGUNTA
Qual sinal percorre cada caminho e quem inicia a comunicação?

Fontes: arquivos locais docker-compose.yml, prometheus.yml, tempo-config.yaml e app.py do professor; telas observadas nesta sessão.
https://grafana.com/tutorials/grafana-fundamentals/
https://prometheus.io/docs/introduction/overview/
https://prometheus.io/docs/concepts/metric_types/
https://grafana.com/docs/loki/latest/get-started/overview/
https://grafana.com/docs/loki/latest/query/
https://grafana.com/docs/tempo/latest/traceql/
https://grafana.com/docs/loki/latest/send-data/promtail/
https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/
https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#smtp
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/
https://grafana.com/docs/grafana/v11.3/developers/http_api/alerting_provisioning/

### Slide 30 — Caminhos separados de logs e traces

19h49–19h51 (2 minutos)

ARQUITETURA EDITÁVEL
No código local da aplicação do professor, OTLPSpanExporter usa http://tempo:4318/v1/traces. OTLP gRPC 4317 é uma alternativa suportada/configurada, não o protocolo usado pelo trecho observado. Promtail envia para a API HTTP do Loki e não participa do envio de spans ao Tempo. Não confundir um log contendo trace_id com um span: são registros distintos correlacionados por contexto. Promtail EOL em 02/03/2026; apresentar Alloy como sucessor de coleta, sem alegar migração executada.

PERGUNTA
Qual sinal percorre cada caminho e quem inicia a comunicação?

Fontes: arquivos locais docker-compose.yml, prometheus.yml, tempo-config.yaml e app.py do professor; telas observadas nesta sessão.
https://grafana.com/tutorials/grafana-fundamentals/
https://prometheus.io/docs/introduction/overview/
https://prometheus.io/docs/concepts/metric_types/
https://grafana.com/docs/loki/latest/get-started/overview/
https://grafana.com/docs/loki/latest/query/
https://grafana.com/docs/tempo/latest/traceql/
https://grafana.com/docs/loki/latest/send-data/promtail/
https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/
https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#smtp
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/
https://grafana.com/docs/grafana/v11.3/developers/http_api/alerting_provisioning/

### Slide 31 — Tutorial do aluno e demonstração

19h51–19h53 (2 minutos)

EXPLICAÇÃO DO PROFESSOR
Não apresentar as fontes e os geradores do professor como já incluídos no pacote do aluno. Esta separação evita que o aluno cole uma consulta node_cpu em uma fonte que só expõe tns_. As instalações Docker e nativa são rotas para o Grafana; subir somente Grafana não cria automaticamente Prometheus, Loki e Tempo.

PERGUNTA À TURMA
Por que uma consulta do host pode retornar No data no tutorial?

RESPOSTA ESPERADA
Porque a fonte local pode não conter essa métrica ou seus labels.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 32 — Preparação para a demonstração

19h53–19h55 (2 minutos)

EXPLICAÇÃO DO PROFESSOR
Os pré-requisitos da turma são Docker em execução, Compose e acesso aos arquivos. O professor primeiro demonstra; a turma executa após intervalo e comentário dos exercícios. A instalação nativa ainda não foi testada nesta etapa. Não prometer que o script já foi validado no Azure.

PERGUNTA À TURMA
Em que momento os alunos começam a executar a folha?

RESPOSTA ESPERADA
Às 21h00, depois dos exercícios comentados.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 33 — Noite 1 — Demonstração

TRANSIÇÃO — Demonstração
19h55–19h56 (1 minutos)
Apresente o fluxo completo no seu ambiente. A turma observa e registra dúvidas. Não solicitar execução simultânea. Mostre ação, resultado e interpretação. Termine às 20h20 para preservar o intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 34 — Demonstração: instalação Docker

Noite 1 — Demonstração
19h56–20h00 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Comando completo, numa linha: docker compose -p green-fundamentals up -d --build. Executar na pasta lab/tutorial-environment. Mostrar que o primeiro download pode demorar. O aluno ainda não executa o exercício.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 35 — A aplicação Grafana News

Noite 1 — Demonstração
20h00–20h04 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Título sugerido: Documentação Grafana. URL: https://grafana.com/docs/. Resultado esperado: o link aparece na página e recebe votos. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 36 — Primeiro acesso

Noite 1 — Demonstração
20h04–20h08 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Mostre a tela inicial sem personalizar o produto. Explique que uma instalação com autenticação possui uma experiência de entrada diferente. O acesso anônimo é parte deste ambiente didático local. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 37 — Fonte de dados

Noite 1 — Demonstração
20h08–20h11 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Abrir a fonte Prometheus, identificar http://prometheus:9090 e realizar Save & test, quando disponível. Não cadastrar uma segunda fonte sem necessidade. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 38 — Demonstração: roteiro Ubuntu

Noite 1 — Demonstração
20h11–20h14 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Nesta entrega, mostrar os exemplos da apostila, sem executar scripts de instalação ainda não criados. Na edição aprovada após o teste Azure, este bloco passa a mostrar o procedimento validado. A instalação do Grafana não equivale a instalar toda a stack de fontes e aplicação.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 39 — Ambiente real do professor

20h14–20h17 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Abra o dashboard 01 na pasta Laboratório Professor - Demonstração.
2. Leia cada unidade e o período selecionado.
3. Compare o valor atual com a curva histórica.

RESULTADO OBSERVADO
Quatro indicadores e duas curvas com dados.

ORIENTAÇÃO AO PROFESSOR
Este ambiente é complementar ao Grafana News do tutorial oficial. Os valores são uma fotografia da captura e variam durante a aula. O filtro de disco foi corrigido pela interface de /rootfs para /. Uma reprovisão pode substituir a alteração salva; sincronizar a consulta no arquivo de provisionamento antes de recriar o ambiente.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 40 — Fontes de dados do laboratório

20h17–20h20 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Abra Connections > Data sources.
2. Identifique o Prometheus padrão e o Loki com URL interna configurada.
3. Diferencie o endereço do navegador e a URL entre os serviços.

RESULTADO OBSERVADO
Fontes identificadas, com suas funções explicadas.

ORIENTAÇÃO AO PROFESSOR
Há também uma fonte chamada loki-1. Ela não foi usada nos testes; escolha Loki. A presença da fonte Alertmanager não comprova entrega de notificações. Não há credenciais nos slides.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 41 — Intervalo

Noite 1 — Intervalo
20h20–20h45 (25 minutos).
Antes de sair, preserve o estado da demonstração. Anuncie o retorno às 20h45. Não iniciar a prática da turma durante o intervalo. Na volta, explicar a folha antes de liberá-la.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 42 — Noite 1 — Exercícios
comentados

TRANSIÇÃO — Exercícios comentados
20h45–20h46 (1 minutos)
Mostre cada tarefa, o caminho de execução ou navegação, o resultado esperado e os erros comuns. A folha do aluno fica separada do gabarito. Ao final deste bloco, às 21h00, entregue ou libere a folha da noite.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 43 — Exercício 1.1 — Obter e iniciar o laboratório Docker

20h46–20h51 (5 minutos)
EXERCÍCIO COMENTADO 1.1
Baixe o pacote oficial da turma pelo GitHub ou Google Drive quando o professor disponibilizar o link.
Extraia ou clone a pasta completa e abra lab/tutorial-environment.
Confirme Docker ativo e inicie com o script de entrada ou Compose.
Abra a aplicação e o Grafana nos endereços locais do pacote.
COMENTÁRIO DO PROFESSOR
Comente onde o aluno abre o terminal e por que o download deve incluir os arquivos completos. GitHub e Drive são opções de distribuição: os links da turma ainda serão definidos. O clone direto do repositório upstream usa outras portas.
CRITÉRIO DE CORREÇÃO
Ambiente local iniciado e dois endereços acessíveis.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 44 — Exercício 1.2 — Gerar atividade conhecida

20h51–20h56 (5 minutos)
EXERCÍCIO COMENTADO 1.2
Na aplicação Grafana News, publique um link com título e URL válidos.
Vote no link e atualize a página.
Registre o horário e descreva as ações feitas.
COMENTÁRIO DO PROFESSOR
Mostre os campos Title e URL. Explique que a ação conhecida será usada para interpretar métricas, sem ainda pedir consultas.
CRITÉRIO DE CORREÇÃO
Link publicado, voto registrado e anotação do horário.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 45 — Exercício 1.3 — Reconhecer os recursos do Grafana

20h56–21h00 (4 minutos)
EXERCÍCIO COMENTADO 1.3
Localize Explore, Dashboards e Connections.
Abra a fonte Prometheus já existente.
Identifique a URL interna e teste a conexão quando disponível.
Escreva uma frase sobre o papel de cada recurso.
COMENTÁRIO DO PROFESSOR
Comente o caminho do menu, a diferença entre fonte e painel e a URL interna. Não crie fontes duplicadas como primeira tentativa de corrigir um erro.
CRITÉRIO DE CORREÇÃO
Fonte identificada e explicação dos recursos de navegação.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 46 — Noite 1 — Prática do aluno

TRANSIÇÃO — Prática do aluno
21h00–21h00 (0 minutos)
Agora libere alunos/Aluno_Noite_1.md. A turma trabalha no ambiente local até 22h15. Circule entre os alunos e ajude primeiro nas falhas que bloqueiam toda a prática. Os critérios e os comandos estão na folha.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 47 — Agora é com você

Noite 1 — Prática do aluno
21h00–22h15 (75 minutos).
PRÁTICA DO ALUNO — 75 MINUTOS
1.1: 25 minutos. Ambiente local iniciado e dois endereços acessíveis.
1.2: 25 minutos. Link publicado, voto registrado e anotação do horário.
1.3: 25 minutos. Fonte identificada e explicação dos recursos de navegação.
Não refazer toda a demonstração durante a prática. Ajude por evidências e use os comentários dos exercícios para orientar a correção. O roteiro Ubuntu é complementar e sua execução fica condicionada à liberação dos scripts após o teste Azure.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 48 — Correção e fechamento

Noite 1 — Correção
22h15–22h30 (15 minutos).
CORREÇÃO — 15 MINUTOS
1.1: Ambiente local iniciado e dois endereços acessíveis.
1.2: Link publicado, voto registrado e anotação do horário.
1.3: Fonte identificada e explicação dos recursos de navegação.
Peça uma resposta explicada, não apenas um print. Retome uma dificuldade comum e o gancho para a próxima noite. Na Noite 5, concluir com o projeto e continuidade.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Noite 2

### Slide 49 — Fundamentos de métricas

Noite 2 • Teoria • 18h30–18h35 (5 minutos)

EXPLICAÇÃO
Apresente a pergunta que organiza a noite: quando uma curva muda, o que exatamente mudou? Conduza os conceitos com quadro, slides e perguntas, sem abrir o Grafana neste bloco. Diga que a aula ganhará profundidade pelo raciocínio, pelas comparações e pelos exemplos, e que a aplicação virá no exercício guiado depois do intervalo. A turma deve sair sabendo explicar o número antes de discutir cor ou formato do gráfico.
EXEMPLO COM NÚMEROS — DIDÁTICO
Escreva apenas 80 no quadro e pergunte se é bom ou ruim. Acrescente, uma informação por vez: 80 requisições, em um minuto, na rota de votação. Depois troque para 80 segundos de espera. O número é igual, mas a interpretação muda porque mudaram unidade, intervalo e objeto observado.
PERGUNTA E RESPOSTA
Pergunta: um painel bonito garante uma conclusão correta? Resposta: precisamos primeiro conhecer a origem e a definição da medição.
CONDUÇÃO
Peça a dois alunos que expliquem o mesmo exemplo com palavras próprias. Se mencionarem apenas um número, solicite unidade e tempo. Confirme a sequência de horários e a folha da Noite 2; os alunos farão juntos os primeiros passos e depois continuarão sozinhos.
TRANSIÇÃO
Vamos definir quais informações tornam uma medição interpretável.

REFERÊNCIAS
https://opentelemetry.io/docs/concepts/signals/metrics/

### Slide 50 — Métrica: número com contexto

Noite 2 • Teoria • 18h35–18h39 (4 minutos)

EXPLICAÇÃO
Use a expressão número com contexto como definição de trabalho. A observação deve ter significado estável: memória utilizada, requisições concluídas ou duração de atendimento são grandezas diferentes. Unidade, instante ou intervalo e dimensões permitem interpretar e comparar os valores. Não apresente a definição como uma sintaxe exclusiva do Prometheus: o conceito é geral e aparece em diversas plataformas.
EXEMPLO COM NÚMEROS — DIDÁTICO
Um servidor usa 6 GiB de memória. Se possui 8 GiB, a fração usada é 75%; se possui 64 GiB, é aproximadamente 9,4%. O valor absoluto permaneceu igual. A conclusão muda porque acrescentamos capacidade e finalidade. Confirme também se os dois números incluem cache e qual definição a fonte utiliza. Não é necessário aprofundar gerenciamento de memória neste momento.
PERGUNTA E RESPOSTA
Pergunta: posso comparar 500 ms com 0,5 s? Resposta: sim, após reconhecer que representam a mesma duração.
ERRO COMUM
Comparar bytes com megabytes, proporção de zero a um com porcentagem de zero a cem, ou leituras de períodos diferentes. A aparência do painel pode esconder essas diferenças.
CONDUÇÃO
Peça à turma uma frase completa para a observação do slide: valor, unidade, objeto e instante.
TRANSIÇÃO
O mesmo raciocínio vale para infraestrutura, aplicação e negócio.

REFERÊNCIAS
https://opentelemetry.io/docs/specs/otel/metrics/data-model/
https://prometheus.io/docs/practices/naming/

### Slide 51 — Infraestrutura, aplicação e negócio

Noite 2 • Teoria • 18h39–18h43 (4 minutos)

EXPLICAÇÃO
Organize a discussão em três perguntas. A infraestrutura ajuda a avaliar os recursos disponíveis; a aplicação mostra o comportamento do serviço; o negócio acompanha o resultado que interessa à organização. Elas se complementam, mas não são equivalentes. Evite ensinar que CPU alta significa necessariamente falha ou que CPU baixa comprova bom atendimento. A leitura depende do desenho do sistema e da demanda.
EXEMPLO COM NÚMEROS — DIDÁTICO
Imagine uma loja que recebeu mil tentativas de compra em quinze minutos, com duzentas falhas. A CPU ficou em 30%. Uma dependência externa pode ter recusado pagamentos enquanto o servidor permaneceu pouco ocupado. Isso é uma hipótese a investigar, não uma causa comprovada pelos três números. Pergunte quais medições adicionais ajudariam: duração das chamadas, códigos de resposta e quantidade de pagamentos aprovados.
PERGUNTA E RESPOSTA
Pergunta: o total de chamadas HTTP equivale ao total de clientes? Resposta: não; uma pessoa, um robô ou um serviço pode gerar várias chamadas.
ERRO COMUM
Usar uma medição técnica como substituta automática de um resultado de negócio. Cada indicador precisa de uma definição explícita e de uma pergunta útil.
CONDUÇÃO
Convide alunos de suporte, desenvolvimento e negócio a sugerirem uma medição para sua rotina.
TRANSIÇÃO
Para acompanhar qualquer uma delas, precisamos entender como os valores se organizam ao longo do tempo.

REFERÊNCIAS
https://prometheus.io/docs/practices/instrumentation/

### Slide 52 — Uma série temporal acompanha um contexto

Noite 2 • Teoria • 18h43–18h47 (4 minutos)

EXPLICAÇÃO
Desenhe duas linhas, uma para cada servidor, e marque três instantes iguais. Um ponto não descreve uma tendência; a sequência ajuda a perceber estabilidade e mudança. No Prometheus, o nome e o conjunto de labels identificam uma série. A explicação vale como referência concreta de implementação, sem sugerir que todas as ferramentas têm a mesma sintaxe. Um timestamp permite posicionar a amostra na linha do tempo.
EXEMPLO COM NÚMEROS — DIDÁTICO
Nos três instantes do quadro, A apresenta 6, 7 e 5 GiB; B apresenta 3, 3 e 4 GiB. Solicite que um aluno leia apenas A e outro apenas B. Se misturarmos os seis valores numa linha única sem identificar a origem, criaremos uma história que nenhum servidor viveu. O erro é de contexto, mesmo que cada valor seja verdadeiro no exemplo.
PERGUNTA E RESPOSTA
Pergunta: duas curvas com o mesmo nome são necessariamente a mesma série? Resposta: não; as dimensões podem ser diferentes.
ERRO COMUM
Somar ou comparar valores de ambientes de produção e teste sem perceber que a seleção inclui ambos. Leia a legenda antes de interpretar.
CONDUÇÃO
Faça a turma nomear a dimensão que diferencia as duas linhas.
TRANSIÇÃO
Agora vamos separar o evento que ocorre no sistema da amostra que chega à ferramenta.

REFERÊNCIAS
https://prometheus.io/docs/concepts/data_model/

### Slide 53 — Eventos não são amostras

Noite 2 • Teoria • 18h47–18h51 (4 minutos)

EXPLICAÇÃO
Coloque no quadro duas linhas do tempo: ações dos usuários e coletas. Explique que uma instrumentação pode atualizar um contador a cada requisição enquanto o coletor registra o valor acumulado periodicamente. A quantidade de eventos e a quantidade de amostras são coisas diferentes. Para investigar uma requisição específica, logs e traces podem acrescentar contexto que a agregação numérica não preserva.
EXEMPLO COM NÚMEROS — DIDÁTICO
O contador vale cem na primeira coleta e cento e quarenta na seguinte. No exemplo sem reinício, observamos um aumento de quarenta. Não sabemos, apenas com esses dois pontos, se as requisições chegaram juntas ou distribuídas no intervalo, nem quais pessoas as fizeram. Represente quarenta marcas pequenas entre dois pontos maiores para tornar visível essa diferença.
PERGUNTA E RESPOSTA
Pergunta: se coletei duas amostras, recebi somente duas requisições? Resposta: não; cada amostra pode representar um acumulado de muitos eventos.
ERRO COMUM
Chamar coleta periódica de métricas de amostragem de traces, como se fossem o mesmo mecanismo. São decisões diferentes em sinais diferentes.
CONDUÇÃO
Peça aos alunos que expliquem qual informação se mantém e qual se perde quando resumimos eventos em contagens.
TRANSIÇÃO
A distância entre as coletas influencia o que conseguimos observar.

REFERÊNCIAS
https://opentelemetry.io/docs/specs/otel/metrics/data-model/

### Slide 54 — Coleta: frequência, tempo e lacunas

Noite 2 • Teoria • 18h51–18h55 (4 minutos)

EXPLICAÇÃO
Diferencie o relógio da coleta do relógio da tela. O backend pode coletar a cada cinco segundos enquanto o navegador consulta a cada trinta. Atualizar a tela várias vezes não cria medições que não foram coletadas. No Prometheus, o intervalo de scrape é configurável; os cinco segundos citados são uma característica do laboratório, não uma regra universal.
EXEMPLO COM NÚMEROS — DIDÁTICO
Desenhe uma coleta nos segundos zero, cinco e dez. Uma fila sobe de dois para cinquenta itens no segundo dois e volta a dois no segundo quatro. As leituras de gauge em zero e cinco podem mostrar apenas dois. Um contador de ocorrências instrumentado durante o pico pode preservar outra informação, mas não reconstrói automaticamente toda a curva da fila.
PERGUNTA E RESPOSTA
Pergunta: atualizar o Grafana a cada segundo garante amostras novas a cada segundo? Resposta: depende da frequência e da disponibilidade dos dados na fonte.
ERRO COMUM
Tratar uma lacuna como valor zero, ou prometer que aumentar frequência resolve qualquer problema de observação. Precisamos escolher a medição e considerar custo, duração dos fenômenos e finalidade.
CONDUÇÃO
Peça que a turma marque quais instantes efetivamente foram medidos.
TRANSIÇÃO
Vamos localizar quem produz, quem coleta, quem armazena e quem apresenta os dados.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/configuration/configuration/
https://grafana.com/docs/grafana/latest/visualizations/dashboards/use-dashboards/

### Slide 55 — Do sistema observado até o painel

Noite 2 • Teoria • 18h55–18h59 (4 minutos)

EXPLICAÇÃO
Use o slide como mapa conceitual e mantenha o navegador fechado. A aplicação pode ser instrumentada diretamente. Um exporter pode traduzir medições de um componente que não oferece o formato esperado. O Prometheus tradicionalmente realiza scrapes, buscando dados nos alvos. Outros caminhos, como o envio por OTLP em pipelines OpenTelemetry, utilizam outra organização. Grafana consulta uma fonte e apresenta o resultado; ele não transforma qualquer sistema em um produtor de métricas por estar aberto.
EXEMPLO COM NÚMEROS — DIDÁTICO
Descreva dez servidores observados por um coletor. Se nove respondem e um não, devemos separar ausência de leitura desse alvo de um eventual valor zero do recurso monitorado. Não conclua que o servidor caiu apenas com essa descrição: rede, configuração e autenticação também podem interferir.
PERGUNTA E RESPOSTA
Pergunta: preciso instalar Grafana em cada servidor para obter métricas? Resposta: precisamos de uma forma de produzir e transportar as medições; a interface de visualização pode ficar centralizada.
ERRO COMUM
Tratar Pushgateway como substituto geral de scraping. Ele atende casos específicos, como certos trabalhos curtos em lote, e exige cuidados próprios. Não haverá configuração dele nesta noite.
TRANSIÇÃO
Com o caminho dos dados definido, vamos escolher o tipo adequado de medição.

REFERÊNCIAS
https://prometheus.io/docs/introduction/overview/
https://prometheus.io/docs/instrumenting/exporters/
https://prometheus.io/docs/practices/pushing/

### Slide 56 — Gauge: um estado que pode subir e descer

Noite 2 • Teoria • 18h59–19h04 (5 minutos)

EXPLICAÇÃO
Apresente gauge como a categoria Prometheus adequada a valores que variam nas duas direções. O exemplo da fila ajuda a distinguir quantidade atual de total histórico. Uma queda pode ser esperada e saudável; também pode exigir investigação, conforme a origem e o contexto. O tipo descreve o significado da observação e orienta as operações que fazem sentido.
EXEMPLO COM NÚMEROS — DIDÁTICO
A fila tem doze itens, depois trinta, depois oito. Pergunte se podemos afirmar que vinte e dois itens foram processados no último intervalo. A resposta é que o saldo caiu vinte e dois, mas podem ter entrado novos itens enquanto outros foram processados. Para saber produção e consumo separadamente, seriam necessárias medições específicas. Esse exemplo mostra por que subtrair dois estados não resolve todas as perguntas.
PERGUNTA E RESPOSTA
Pergunta: conexões atualmente abertas devem obrigatoriamente crescer? Resposta: não; podem abrir e fechar, portanto um estado atual é diferente de um contador acumulado de aberturas.
ERRO COMUM
Aplicar rate de contador a memória ou temperatura. A função pressupõe outro comportamento e pode interpretar quedas como resets, produzindo uma leitura inadequada.
CONDUÇÃO
Solicite que os alunos classifiquem estoque atual e total de itens vendidos. Explique a escolha antes de revelar o próximo slide.
TRANSIÇÃO
Vamos olhar agora o acumulado de eventos: o counter.

REFERÊNCIAS
https://prometheus.io/docs/concepts/metric_types/

### Slide 57 — Counter: acumulado de eventos

Noite 2 • Teoria • 19h04–19h08 (4 minutos)

EXPLICAÇÃO
Defina explicitamente que estamos falando do counter no modelo de instrumentação Prometheus. Ele representa um acumulado monotônico entre resets. O nome requests_total costuma comunicar essa intenção, mas o nome sozinho não substitui a documentação da métrica. Em componentes de histogramas e summaries, o sufixo count também pode expor uma contagem acumulada de observações.
EXEMPLO COM NÚMEROS — DIDÁTICO
O contador vai de cem para cento e vinte e depois cento e cinquenta. Sem reinício, os aumentos observados são vinte e trinta. Ainda não sabemos as taxas, porque precisamos saber o tempo entre as leituras. Troque o espaçamento dos pontos de dez segundos para cinco minutos e peça que os alunos expliquem por que a velocidade percebida muda.
PERGUNTA E RESPOSTA
Pergunta: posso somar todos os valores de um contador ao longo do tempo para descobrir o total de eventos? Resposta: isso contaria os mesmos eventos repetidamente; precisamos calcular o aumento considerando os resets.
ERRO COMUM
Ler o número acumulado como carga atual. Um processo antigo pode ter um acumulado grande e estar quase sem tráfego agora.
CONDUÇÃO
Antecipe que o exercício usará uma série terminada em seconds_count: a unidade desse componente é quantidade de requisições observadas.
TRANSIÇÃO
Antes das distribuições, vamos distinguir esse vocabulário de outras plataformas de telemetria.

REFERÊNCIAS
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/practices/naming/

### Slide 58 — O conceito é geral; os modelos variam

Noite 2 • Teoria • 19h08–19h13 (5 minutos)

EXPLICAÇÃO
Esta é uma ressalva de contexto, não uma aula de implementação OpenTelemetry. O objetivo é evitar que os alunos saiam acreditando que qualquer valor numérico chamado contador tem exatamente o formato da série que usarão no laboratório. OpenTelemetry distingue instrumentos e agregações; um UpDownCounter admite contribuições positivas e negativas. A temporalidade pode representar delta de intervalo ou acumulação a partir de um início.
EXEMPLO COM NÚMEROS — DIDÁTICO
Um produtor informa dez pedidos em um intervalo e vinte no seguinte. Se os valores forem deltas, o conjunto desses intervalos contém trinta pedidos. Se forem dois acumulados do mesmo contador sem reset, o aumento observado entre eles é dez. Os valores escritos no quadro são os mesmos, mas a semântica muda a conta. Marque claramente qual hipótese está sendo usada em cada coluna.
PERGUNTA E RESPOSTA
Pergunta: a palavra count no nome garante que devo aplicar a mesma operação em toda ferramenta? Resposta: confirme a definição e a forma de agregação da fonte.
ERRO COMUM
Somar acumulados como deltas ou calcular diferença entre deltas como se fossem acumulados.
CONDUÇÃO
Reafirme o recorte do curso: na prática de hoje usaremos contagens cumulativas expostas no padrão do laboratório Prometheus. Nenhuma configuração de pipeline OpenTelemetry será exigida.
TRANSIÇÃO
Além de estado e contagem, precisamos descrever como os valores se distribuem.

REFERÊNCIAS
https://opentelemetry.io/docs/concepts/signals/metrics/
https://opentelemetry.io/docs/specs/otel/metrics/data-model/

### Slide 59 — Histograma: a distribuição importa

Noite 2 • Teoria • 19h13–19h17 (4 minutos)

EXPLICAÇÃO
Desenhe um grupo grande de chamadas rápidas e um grupo pequeno de chamadas lentas. Uma média resume o conjunto, mas esconde como as observações se espalham. O histograma permite formular perguntas sobre proporções até limites e sobre a cauda. Não exija cálculo de consultas de histograma no exercício inicial. O aluno deve reconhecer por que uma única curva de média pode ser insuficiente.
EXEMPLO COM NÚMEROS — DIDÁTICO
Noventa chamadas de um décimo de segundo somam nove segundos; dez chamadas de dois segundos somam vinte. O total é vinte e nove segundos em cem chamadas, portanto a média é 0,29 segundo. Peça que a turma imagine ser um dos dez usuários que aguardaram dois segundos. A média não descreve a experiência individual desse grupo.
PERGUNTA E RESPOSTA
Pergunta: uma média de 0,29 segundo significa que todas as chamadas duraram esse tempo? Resposta: não; a média agrega as durações.
ERRO COMUM
Somar buckets cumulativos como se fossem faixas independentes. Uma observação pode estar representada em vários limites do histograma clássico.
CONDUÇÃO
Explique que os limites influenciam o detalhe disponível. O formato nativo muda a representação e não será configurado hoje.
TRANSIÇÃO
Vamos comparar média, percentil e o que um summary pode fornecer.

REFERÊNCIAS
https://prometheus.io/docs/practices/histograms/
https://prometheus.io/docs/concepts/metric_types/

### Slide 60 — p95 não é média nem máximo

Noite 2 • Teoria • 19h17–19h22 (5 minutos)

EXPLICAÇÃO
Explique percentil usando uma fila ordenada de tempos, sem mergulhar em métodos estatísticos. O p95 caracteriza uma posição alta na distribuição e ajuda a observar a cauda. Estimativas e convenções de cálculo podem variar; não prometa uma divisão exata em grupos em qualquer conjunto pequeno. Compare três perguntas: quanto foi a média, até qual região chegaram quase todas as observações e qual foi o maior valor observado.
EXEMPLO COM NÚMEROS — DIDÁTICO
Imagine cem durações ordenadas, com uma região próxima de oitocentos milissegundos na posição correspondente ao p95. Algumas observações podem ser mais lentas. Isso não afirma que noventa e cinco chamadas demoraram exatamente oitocentos milissegundos, nem que o máximo é esse. Use cartões ou marcas no quadro para mostrar a posição, em vez de anunciar uma fórmula universal.
PERGUNTA E RESPOSTA
Pergunta: o p95 geral é a média dos p95 de dois servidores? Resposta: não; os percentis resumidos não preservam a distribuição necessária para essa combinação.
ERRO COMUM
Misturar quantis de janelas ou populações diferentes. No Prometheus, summaries podem calcular quantis na origem; histogramas permitem outras agregações antes da estimativa.
CONDUÇÃO
Mantenha esta comparação conceitual. Nenhum aluno precisa instrumentar um histograma nesta atividade.
TRANSIÇÃO
Uma distribuição ou contagem também depende de quais grupos estamos observando: as dimensões.

REFERÊNCIAS
https://prometheus.io/docs/practices/histograms/

### Slide 61 — Labels: recortar a pergunta

Noite 2 • Teoria • 19h22–19h26 (4 minutos)

EXPLICAÇÃO
Use a comparação com uma tabela de ocorrências: rota e status são colunas que permitem separar o mesmo conjunto por perguntas diferentes. No Prometheus, labels fazem parte da identificação das séries. Filtrar para uma rota e agrupar por status não são a mesma ação. A filtragem reduz quais séries participam; a agregação calcula um resultado preservando determinadas dimensões.
EXEMPLO COM NÚMEROS — DIDÁTICO
Desenhe quatro grupos: voto com status duzentos, voto com status quatrocentos, página inicial com duzentos e página inicial com trezentos e dois. Atribua, respectivamente, contagens de oitenta, cinco, cem e dez. Peça à turma que some primeiro por rota e depois por status. São os mesmos eventos reorganizados, desde que o conjunto e o intervalo sejam os mesmos.
PERGUNTA E RESPOSTA
Pergunta: agrupar por status muda a unidade de requisições por segundo? Resposta: não; muda o recorte, mantendo a grandeza calculada.
ERRO COMUM
Confundir status HTTP com severidade de log. Um código descreve uma resposta e precisa de interpretação conforme a operação.
CONDUÇÃO
Apresente route e status_code como as dimensões que os alunos reconhecerão na legenda do laboratório. Evite exigir que o ambiente tenha todos os valores ilustrados.
TRANSIÇÃO
Ter dimensões é útil, mas criar valores sem limite tem custo.

REFERÊNCIAS
https://prometheus.io/docs/concepts/data_model/
https://prometheus.io/docs/prometheus/latest/querying/operators/

### Slide 62 — Cardinalidade: quantas séries surgem?

Noite 2 • Teoria • 19h26–19h30 (4 minutos)

EXPLICAÇÃO
Cardinalidade é uma forma de pensar na quantidade de combinações distintas. Explique a multiplicação como limite didático, sem afirmar que todas as combinações necessariamente existirão. Nem todo serviço oferece toda rota ou produz todo status. Histogramas clássicos e outras dimensões ainda podem ampliar a quantidade de séries. A finalidade do slide é ensinar escolha de contexto, não impor um número máximo universal.
EXEMPLO COM NÚMEROS — DIDÁTICO
Com três serviços, quatro rotas e cinco status, o desenho admite até sessenta combinações básicas. Acrescente mil identificadores individuais por combinação e peça à turma que observe o salto potencial. Não apresente esse produto como medição do ambiente real, e não use pessoas reais no exemplo. Substituir uma rota lógica por uma URL contendo um identificador torna muito mais difícil controlar o crescimento.
PERGUNTA E RESPOSTA
Pergunta: acrescentar uma label é sempre uma melhoria? Resposta: ela deve responder uma pergunta útil e ter custo administrável.
ERRO COMUM
Colocar request_id em toda métrica para tentar investigar cada chamada. Traces e logs podem ser mais adequados para detalhes individuais, com seus próprios cuidados.
CONDUÇÃO
Peça que os alunos escolham entre ambiente e e-mail para uma dimensão de painel operacional e justifiquem.
TRANSIÇÃO
Com as séries selecionadas, vamos transformar acumulados em velocidade de ocorrência.

REFERÊNCIAS
https://prometheus.io/docs/practices/naming/
https://prometheus.io/docs/practices/instrumentation/

### Slide 63 — Taxa: quanto acontece por unidade de tempo

Noite 2 • Teoria • 19h30–19h35 (5 minutos)

EXPLICAÇÃO
Construa a ideia de velocidade com uma conta simples no quadro antes de mencionar a função. Para contadores Prometheus, rate calcula uma taxa média por segundo na janela informada. Não é apenas subtrair dois valores e dividir de qualquer maneira: a implementação considera os dados disponíveis, resets e extrapolação nas bordas. A conta do slide é uma aproximação pedagógica para entender unidade e ordem de grandeza.
EXEMPLO COM NÚMEROS — DIDÁTICO
Se ocorreram cento e vinte requisições em sessenta segundos, a média aritmética daquele intervalo é duas por segundo. Elas podem ter chegado em rajada ou de forma regular. Depois use três requisições em um minuto: 0,05 requisição por segundo, em média. Isso não representa um pedaço de requisição; representa uma frequência de eventos discretos.
PERGUNTA E RESPOSTA
Pergunta: um resultado de 0,05 req/s está errado porque requisições são inteiras? Resposta: não, uma taxa média pode ter parte decimal.
ERRO COMUM
Chamar rate de total de requisições nos últimos cinco minutos. A unidade resultante continua sendo por segundo.
CONDUÇÃO
Escreva unidade ao lado de cada conta e confira se os alunos distinguem requisições de requisições por segundo. Nenhum clique de demonstração é necessário.
TRANSIÇÃO
Se a pergunta pede quantidade no intervalo, vamos comparar rate e increase.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/functions/

### Slide 64 — increase e o cuidado com resets

Noite 2 • Teoria • 19h35–19h40 (5 minutos)

EXPLICAÇÃO
Compare as perguntas quantos eventos no período e quantos por segundo em média. Para o mesmo contador e a mesma janela, increase oferece uma estimativa de aumento; rate comunica a taxa por segundo. Ambas exigem interpretar a disponibilidade de amostras. Não prometa resultado inteiro nem precisão de faturamento: extrapolação e coleta periódica distinguem essa observação de um registro transacional de cada evento.
EXEMPLO COM NÚMEROS — DIDÁTICO
Uma taxa média de 0,4 por segundo durante trezentos segundos corresponde a aproximadamente cento e vinte eventos naquele raciocínio simplificado. Depois desenhe um contador em noventa, cem, cinco e quinze. Se houver um reset entre cem e cinco, subtrair apenas o primeiro do último produziria uma conclusão sem sentido. Mostre o reinício sem exigir cálculo manual exato da estimativa PromQL.
PERGUNTA E RESPOSTA
Pergunta: uma queda do counter significa eventos desfeitos? Resposta: no caso de reset, o acumulador recomeçou; precisamos considerar a continuidade da observação.
ERRO COMUM
Somar contadores de instâncias antes de calcular rate e esconder resets individuais. A orientação desta noite é taxa primeiro, agregação depois.
CONDUÇÃO
Se perguntarem sobre contabilidade exata, ressalte que o sistema de negócio continua sendo a fonte transacional.
TRANSIÇÃO
Vamos separar agregação entre séries de agregação ao longo do tempo.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/functions/

### Slide 65 — Agregar no espaço e no tempo

Noite 2 • Teoria • 19h40–19h45 (5 minutos)

EXPLICAÇÃO
Use espaço como atalho didático para combinar componentes ou grupos, e tempo para combinar observações ao longo de uma janela. Não é uma classificação formal obrigatória de todas as ferramentas. A intenção é que os alunos saibam o que está sendo reduzido em cada operação. Em PromQL, sum agrega entre séries no ponto de avaliação; funções terminadas em over_time tratam valores numa janela por série. Não será necessário decorar essas funções hoje.
EXEMPLO COM NÚMEROS — DIDÁTICO
No mesmo instante, duas APIs recebem duas e três requisições por segundo. Se as populações são distintas e a definição é compatível, o total é cinco. Uma fila com leituras de dois, dez e três itens tem média amostral de cinco itens naquele conjunto, mas isso não significa cinco novos itens por segundo nem quinze itens processados. As unidades ajudam a detectar a mistura.
PERGUNTA E RESPOSTA
Pergunta: by(route) preserva a distinção por rota? Resposta: sim, ao combinar as séries por esse agrupamento.
ERRO COMUM
Somar as taxas de duas fontes que representam os mesmos eventos, duplicando a população. Antes da conta, identifique quais séries participam.
CONDUÇÃO
Peça que a turma diga, em voz alta, o que será perdido em cada agrupamento.
TRANSIÇÃO
Percentuais e médias exigem mais um cuidado: o peso de cada grupo.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/operators/
https://prometheus.io/docs/prometheus/latest/querying/functions/

### Slide 66 — A média das porcentagens pode enganar

Noite 2 • Teoria • 19h45–19h49 (4 minutos)

EXPLICAÇÃO
Faça a conta com a turma para mostrar que grupos de tamanhos diferentes têm pesos diferentes. O objetivo não é escolher sempre o número total: ele responde à população total, enquanto o recorte por serviço continua útil. Explique também que não podemos misturar numerador de um intervalo com denominador de outro. A mesma lógica se aplica a médias de duração quando cada instância atende volumes distintos.
EXEMPLO COM NÚMEROS — DIDÁTICO
A tem um erro em dez chamadas e B tem zero em novecentas e noventa. Somamos um erro e mil chamadas, chegando a um décimo por cento. A média simples entre dez por cento e zero seria cinco por cento, atribuindo o mesmo peso a grupos com volumes diferentes. Entretanto, o serviço A continua com dez por cento; o total pequeno não elimina o problema local.
PERGUNTA E RESPOSTA
Pergunta: devo apagar o recorte por serviço porque já possuo o percentual geral? Resposta: não; cada nível responde uma pergunta e pode revelar impacto diferente.
ERRO COMUM
Trocar ausência de denominador por zero por cento, ou calcular razão sem verificar se houve tráfego. Sem chamadas, a interpretação precisa ser definida.
CONDUÇÃO
Peça aos alunos que verbalizem os dois denominadores antes de fazer a divisão.
TRANSIÇÃO
Com esses cuidados, podemos escolher um conjunto inicial de perguntas sobre saúde do sistema.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/operators/
https://prometheus.io/docs/practices/instrumentation/

### Slide 67 — Quatro perguntas sobre saúde

Noite 2 • Teoria • 19h49–19h53 (4 minutos)

EXPLICAÇÃO
Apresente os nomes como maneiras de organizar a investigação, sem transformar o curso básico em uma discussão de SLOs. Para um serviço, taxa, erros e duração criam uma visão inicial. Para recursos, pergunte quanto está ocupado, quanto trabalho espera e quais falhas ocorreram. Utilização alta não é sinônimo automático de saturação: uma fila crescendo pode acrescentar uma informação que o percentual de uso sozinho não mostra.
EXEMPLO COM NÚMEROS — DIDÁTICO
Imagine cinquenta chamadas por segundo, dois por cento de erros, p95 de meio segundo e vinte tarefas esperando. Esses quatro valores são um ponto de partida. Depois altere apenas a fila para duzentas tarefas e pergunte qual hipótese surge. A turma pode suspeitar de capacidade insuficiente ou de uma dependência lenta, mas deve pedir medições adicionais antes de concluir a causa.
PERGUNTA E RESPOSTA
Pergunta: CPU em noventa por cento prova, sozinha, que os usuários estão com problema? Resposta: precisamos de contexto de capacidade e de sinais do serviço percebido.
ERRO COMUM
Criar um painel com muitas métricas sem relacioná-las às perguntas operacionais. O conjunto útil é aquele que ajuda a observar mudança e orientar investigação.
CONDUÇÃO
Deixe explícito que os números do exemplo não são limites de produção nem critérios de aprovação do laboratório.
TRANSIÇÃO
Antes de confiar num número baixo, precisamos distinguir zero de falta de informação.

REFERÊNCIAS
https://prometheus.io/docs/practices/instrumentation/
https://grafana.com/blog/the-red-method-how-to-instrument-your-services/
https://grafana.com/docs/grafana/latest/visualizations/dashboards/build-dashboards/best-practices/

### Slide 68 — Zero, ausência e dado antigo

Noite 2 • Teoria • 19h53–19h57 (4 minutos)

EXPLICAÇÃO
Diferencie três situações no quadro. Uma taxa zero com amostras disponíveis pode indicar ausência de novos eventos na janela. Uma consulta sem séries não oferece a mesma evidência. Também é preciso avaliar atualidade; a forma como um backend trata dados antigos faz parte da interpretação. Não ensine uma regra universal de quantos minutos um dado permanece visível, pois isso depende da fonte e da configuração.
EXEMPLO COM NÚMEROS — DIDÁTICO
Um laboratório iniciou às vinte e uma horas. O aluno pede um gráfico de vinte horas e encontra uma área vazia. Isso não prova falha da aplicação: aquele histórico ainda não existia. Em outro caso, a rota de votação nunca foi utilizada e a instrumentação pode ainda não ter criado aquela combinação de labels. Um terceiro caso envolve falha de coleta. O mesmo texto No data exige hipóteses distintas.
PERGUNTA E RESPOSTA
Pergunta: posso preencher tudo com zero para deixar o painel contínuo? Resposta: só com uma regra de interpretação explícita; isso pode ocultar perda de observação.
ERRO COMUM
Anunciar zero erros quando a consulta não recebeu nenhuma série.
CONDUÇÃO
Peça que os alunos escolham a primeira verificação sem alterar várias configurações ao mesmo tempo. Fonte, período e consulta são bons pontos iniciais.
TRANSIÇÃO
Vamos distinguir agora três relógios que aparecem numa leitura de gráfico.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://prometheus.io/docs/prometheus/latest/querying/functions/

### Slide 69 — Período exibido não é janela de cálculo

Noite 2 • Teoria • 19h57–20h01 (4 minutos)

EXPLICAÇÃO
Desenhe uma régua de quinze minutos e uma pequena janela móvel de cinco minutos. Para cada ponto calculado, a função consulta as amostras da janela correspondente. O seletor de tempo escolhe a extensão da história exibida, não reescreve automaticamente a expressão com janela fixa. Também existe a frequência de atualização da interface, já apresentada na coleta. São decisões relacionadas, mas distintas.
EXEMPLO COM NÚMEROS — DIDÁTICO
Na marca de vinte horas, uma taxa com janela de cinco minutos usa observações anteriores daquele intervalo. Na marca seguinte, a janela se desloca. Se exibirmos quinze minutos, veremos vários cálculos sucessivos, cada um com sua janela. Se encurtarmos a visualização para cinco minutos, a expressão rate com cinco minutos continua igual. Faça a turma apontar a janela móvel com a mão.
PERGUNTA E RESPOSTA
Pergunta: dois gráficos de períodos diferentes podem compartilhar a mesma janela rate? Resposta: sim, a expressão pode permanecer idêntica.
ERRO COMUM
Explicar cada ponto como contagem de todos os eventos do período visível. O significado depende da função e da janela.
CONDUÇÃO
Diga que essa distinção será anotada pelos alunos nos exercícios 2.2 e 2.3 depois do intervalo. Não abra o seletor na tela durante este bloco.
TRANSIÇÃO
Ainda falta saber por que ampliar ou reduzir o gráfico pode mudar seu detalhe visual.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/grafana/latest/visualizations/dashboards/use-dashboards/

### Slide 70 — Resolução: o gráfico também faz escolhas

Noite 2 • Teoria • 20h01–20h06 (5 minutos)

EXPLICAÇÃO
Introduza resolução como a distância entre resultados apresentados ou consultados, não como sinônimo de frequência original de coleta. O número de pontos e o intervalo mínimo de consulta influenciam como uma história longa é desenhada. A configuração exata depende da fonte e do painel. Grafana oferece variáveis como rate_interval para facilitar consultas de taxa em cenários comuns; nesta introdução, uma janela fixa torna a semântica visível ao aluno.
EXEMPLO COM NÚMEROS — DIDÁTICO
Desenhe um pico de dez segundos numa régua de cinco minutos e, depois, a mesma régua comprimida para representar um dia. Pergunte qual detalhe fica mais difícil de perceber. Explique que a fonte pode ainda possuir mais informação que a imagem apresentada, e que ampliar o período não cria amostras novas. Se a coleta ocorre a cada cinco segundos, uma janela de dois segundos pode nem conter duas leituras, tornando a taxa inviável.
PERGUNTA E RESPOSTA
Pergunta: uma linha lisa comprova que a atividade foi constante? Resposta: pode refletir agregação, janela e resolução; precisamos conferir essas escolhas.
ERRO COMUM
Diminuir a janela indefinidamente esperando mais precisão.
CONDUÇÃO
Não configure variáveis nesta noite; apenas explique a razão de existirem e mantenha o exemplo fixo do exercício.
TRANSIÇÃO
Agora vamos relacionar os valores ao comportamento esperado, sem inventar limites universais.

REFERÊNCIAS
https://grafana.com/docs/grafana/latest/datasources/prometheus/query-editor/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/query-transform-data/

### Slide 71 — Baseline e limites precisam de contexto

Noite 2 • Teoria • 20h06–20h10 (4 minutos)

EXPLICAÇÃO
Explique baseline em linguagem cotidiana: uma referência de comparação construída a partir de observações semelhantes. O histórico pode conter problemas e não torna todo comportamento repetido desejável. Compare o sistema consigo mesmo em horários e cargas compatíveis, e depois verifique se a experiência do usuário atende a necessidade. Evite transformar um percentual redondo, como oitenta por cento, numa regra universal.
EXEMPLO COM NÚMEROS — DIDÁTICO
Cem requisições por segundo podem ser esperadas no horário comercial e inesperadas de madrugada. Uma campanha pode explicar a mudança; um robô ou uma falha também são hipóteses. O número orienta a investigação, mas não decide sozinho. Agora imagine latência maior e fila crescente no mesmo horário: há sinais adicionais, porém ainda precisamos identificar a causa.
PERGUNTA E RESPOSTA
Pergunta: duas curvas subindo juntas comprovam que uma causou a outra? Resposta: não; podem compartilhar uma terceira causa ou apenas coincidir.
ERRO COMUM
Copiar limiar de tutorial para produção. Os valores do curso foram escolhidos para tornar observações possíveis num laboratório pequeno, com outra carga e outro propósito.
CONDUÇÃO
Antecipe que alertas serão tratados na Noite 5. Aqui basta saber que a decisão exige definição, duração e contexto.
TRANSIÇÃO
Vamos montar uma sequência curta para ler qualquer gráfico de métricas.

REFERÊNCIAS
https://prometheus.io/docs/practices/instrumentation/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/query-transform-data/

### Slide 72 — Seis verificações antes de concluir

Noite 2 • Teoria • 20h10–20h14 (4 minutos)

EXPLICAÇÃO
Recupere os conceitos como um procedimento de leitura, não como uma lista para decorar. Apresente um exemplo verbal e percorra as seis verificações com a turma. Se alguém interpretar apenas a cor ou a inclinação da linha, volte à pergunta e à unidade. Uma conclusão responsável pode ser precisamos de outra medição; isso é um resultado válido de análise.
EXEMPLO COM NÚMEROS — DIDÁTICO
Diga que um gráfico de requisições mostra 0,05 para a rota de votação. A pergunta é frequência de requisições; a unidade é por segundo; o resultado veio de uma taxa em janela de cinco minutos; a população é a rota selecionada. Aproximadamente uma requisição a cada vinte segundos, em média, ajuda a traduzir o número. Não podemos inferir quantidade de usuários únicos nem afirmar que as chamadas ocorreram regularmente.
PERGUNTA E RESPOSTA
Pergunta: o mesmo 0,05 significaria a mesma coisa num gráfico de proporção de erro? Resposta: não; nesse caso poderia representar cinco por cento, conforme a definição.
ERRO COMUM
Omitir unidade e período ao enviar um print para outra pessoa. A imagem pode não conter contexto suficiente para decisão.
CONDUÇÃO
Peça que um aluno conduza as verificações e outro responda. A atividade é oral, sem navegador.
TRANSIÇÃO
Vamos testar esse roteiro num caso curto antes do intervalo.

REFERÊNCIAS
https://prometheus.io/docs/practices/naming/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/query-transform-data/

### Slide 73 — Caso em sala: interprete antes do clique

Noite 2 • Teoria • 20h14–20h18 (4 minutos)

EXPLICAÇÃO
Reserve o primeiro minuto para leitura e mais um para discussão em dupla. Use os dois minutos finais para colher respostas e corrigir o raciocínio. Não exija a mesma formulação verbal; exija que o aluno identifique grandeza, denominador e limites. Este exercício é de interpretação dos dados do slide, não uma demonstração de métricas no Grafana.
EXEMPLO COM NÚMEROS — DIDÁTICO E GABARITO
A população total possui um erro em mil chamadas: 0,1%. A média simples entre dez e zero por cento seria inadequada para a razão geral, pois os volumes são distintos. O aumento do counter é sessenta eventos em sessenta segundos: uma requisição por segundo no cálculo simplificado sem reset. No data não comprova zero erros; a consulta não trouxe séries para a seleção.
PERGUNTA E RESPOSTA
Pergunta: o percentual total de 0,1% elimina o problema de A? Resposta: não; A permanece com uma razão de dez por cento na própria população.
ERRO COMUM
Transformar a conta simplificada de dois pontos na definição completa da função rate. Lembre a turma dos ajustes e das amostras considerados pelo backend.
CONDUÇÃO
Se houver divergência, peça que o aluno aponte qual população somou e qual unidade escreveu. Registre uma dúvida para retomada na correção final.
TRANSIÇÃO
Fecharemos o raciocínio e retomaremos com todos executando os passos após o intervalo.

REFERÊNCIAS
https://prometheus.io/docs/prometheus/latest/querying/operators/
https://prometheus.io/docs/prometheus/latest/querying/functions/

### Slide 74 — Síntese antes do intervalo

Noite 2 • Teoria • 20h18–20h20 (2 minutos)

FECHO DA TEORIA
Faça uma síntese oral: estado atual, acumulado e distribuição respondem perguntas diferentes; unidade e tempo fazem parte da interpretação; labels definem populações; taxa não é total; ausência não é zero. Termine a fala às vinte horas e vinte minutos. O intervalo tem vinte e cinco minutos e o exercício guiado começa às vinte horas e quarenta e cinco. Não use este slide para abrir uma demonstração no navegador antes da pausa.
PREPARAÇÃO DO PROFESSOR
Durante a pausa, deixe pronto o endereço do ambiente e confira a disponibilidade da aplicação e da fonte Prometheus. O professor pode utilizar seu ambiente, enquanto cada aluno utiliza o endereço orientado para a turma. As portas locais do material do aluno são 3300 para Grafana e 38081 para a aplicação; não afirme que o servidor do professor usa as mesmas portas. Se um ambiente novo precisar ser acessado para novas capturas ou validação, solicite os dados ao responsável antes.
PERGUNTA E RESPOSTA
Pergunta final: o que precisamos saber antes de interpretar uma taxa? Resposta esperada: definição da contagem, unidade por segundo, seleção e janela.
TRANSIÇÃO
No retorno, cada aluno abre a folha da Noite 2. Mostre um passo, aguarde a execução e confirme o resultado antes de avançar. Os arquivos importáveis ficam como apoio opcional e não substituem a criação manual.

REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/

### Slide 75 — Intervalo

Noite 2 • Intervalo • 20h20–20h45
Inicie a pausa somente às 20h20 e marque retorno às 20h45. A teoria terminou; os exercícios serão feitos com a turma após a pausa. O ambiente já deve ter sido preparado antes da aula.
TRANSIÇÃO
Na volta, abrir a folha da Noite 2 e iniciar os passos guiados. Confirmar que os alunos chegam ao Explore antes de continuar.

### Slide 76 — Agora, todos no Grafana

Noite 2 • Exercício guiado • 20h45–20h49 (4 minutos)

CONDUÇÃO GUIADA
A execução começa agora, depois do intervalo. Peça aos alunos que abram o Grafana e a folha da Noite 2 no próprio computador. O professor informa o endereço do ambiente utilizado na aula; localhost se refere à máquina de cada pessoa. Não substitua automaticamente as portas do laboratório local pelas do servidor do professor. Abra o menu principal, escolha Explore, selecione a fonte Prometheus e ative Code. Aguarde que a turma conclua cada ação.
PONTO DE CONTROLE
A consulta A deve indicar Prometheus e o editor deve aceitar PromQL. Se aparecer linguagem de Loki, selecione a fonte correta antes de continuar. Em telas estreitas, o seletor pode mostrar apenas o ícone e uma seta.
PERGUNTA E RESPOSTA
Pergunta: quem responderá nossa consulta? Resposta: a fonte Prometheus; Grafana apresenta o resultado.
CUIDADO
Não tente resolver falhas de ambiente com mudanças aleatórias na expressão. Confira acesso e seleção primeiro. Um aluno sem acesso pode acompanhar a interpretação em dupla enquanto o professor registra a pendência.
RESULTADO ESPERADO
Todos localizam a fonte e o modo Code.
TRANSIÇÃO
Vamos executar uma leitura do acumulado e identificar suas dimensões antes de aplicar qualquer função.

REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/#explore-your-metrics
https://grafana.com/docs/grafana/latest/datasources/prometheus/query-editor/

### Slide 77 — Guiado 1 — Ler o acumulado

Noite 2 • Exercício guiado • 20h49–20h55 (6 minutos)

CONDUÇÃO GUIADA
Peça que os alunos copiem somente a expressão, sem marcas de bloco de código. Execute e aguarde a confirmação do gráfico ou da tabela. Oriente Last 15 minutes para localizar dados recentes de um laboratório recém-iniciado. Leia junto uma combinação de route e status_code da legenda realmente presente. Não exija os mesmos valores numéricos do print.
EXPLICAÇÃO
O nome completo está relacionado a uma família de medição de duração, mas o componente count representa quantidade de observações. O valor bruto é uma contagem cumulativa de requisições por combinação de labels. A expressão não mede diretamente duração média nem taxa por segundo. Se o processo reiniciar, o contador pode recomeçar.
PERGUNTA E RESPOSTA
Pergunta: se a série mostra cento e cinquenta, isso significa cento e cinquenta segundos? Resposta: não, é a quantidade acumulada de observações daquela série. O número desta pergunta é didático.
SE NÃO FUNCIONAR
Confirme fonte e período; abra a aplicação; faça uma ação; aguarde duas coletas configuradas no laboratório e consulte novamente. Uma região anterior ao início do ambiente pode ficar vazia.
PONTO DE CONTROLE
Cada aluno deve apontar uma dimensão da própria legenda e enunciar a unidade.
TRANSIÇÃO
Vamos agora separar período visível e janela antes de calcular a taxa.

REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/#explore-your-metrics

### Slide 78 — Guiado 2 — Ajustar o período

Noite 2 • Exercício guiado • 20h55–21h01 (6 minutos)

CONDUÇÃO GUIADA
Mostre a localização do seletor, aguarde o clique e peça que todos leiam o período efetivamente aplicado. Em telas estreitas, a interface pode mostrar um relógio; feche o menu lateral ou expanda os itens adicionais para localizá-lo. Faça a mudança de quinze para cinco minutos e de volta sem editar a expressão.
EXPLICAÇÃO
A operação muda qual parte da história está visível. A consulta atual ainda é o contador bruto; a janela de rate será acrescentada no próximo passo. Quando ela existir, o seletor do período e a janela escrita na consulta terão papéis distintos. Use o gráfico da turma para recuperar a teoria sem prometer que haverá dados antes do início do laboratório.
PERGUNTA E RESPOSTA
Pergunta: se eu escolher quinze minutos, a aplicação ganha automaticamente quinze minutos de histórico? Resposta: não, só conseguimos mostrar observações existentes.
SE NÃO FUNCIONAR
Confirme que o aluno clicou no texto do período relativo, e não apenas na borda da caixa. Se houver um período absoluto, retorne a Last 5 minutes.
PONTO DE CONTROLE
Solicite a dois alunos que leiam o período e apontem a primeira região com dados.
TRANSIÇÃO
Com o período compreendido, transformaremos o acumulado em taxa e agruparemos por rota.

REFERÊNCIAS
https://grafana.com/docs/grafana/latest/visualizations/dashboards/use-dashboards/

### Slide 79 — Guiado 3 — Calcular taxa por rota

Noite 2 • Exercício guiado • 21h01–21h08 (7 minutos)

CONDUÇÃO GUIADA
Divida a expressão oralmente: primeiro taxa por série, depois soma agrupada por rota. Peça que todos substituam a consulta A e executem. Em outra aba, cada aluno faz de dez a quinze atualizações da própria aplicação, aguarda aproximadamente dez segundos no laboratório com coleta de cinco segundos e retorna ao Explore. Esses tempos descrevem a configuração do pacote; adapte a espera se o professor estiver usando outro intervalo de coleta.
EXPLICAÇÃO
O valor é taxa média de requisições por segundo na janela de cinco minutos. Poucos cliques podem produzir valores pequenos, e o efeito é distribuído pela janela. A rota metrics recebe chamadas de scraping e pode apresentar tráfego regular sem cliques humanos. Ela permanece nesta consulta para ensinar essa distinção.
EXEMPLO DIDÁTICO
0,05 req/s equivale, em média, a uma requisição a cada vinte segundos. Isso não exige chegadas perfeitamente regulares.
PERGUNTA E RESPOSTA
Pergunta: uma taxa maior que zero na rota metrics comprova uma visita à página? Resposta: não, precisamos conhecer a origem desse tráfego.
PONTO DE CONTROLE
Cada aluno deve registrar rota, taxa aproximada e horário; não copiar o número do professor.
TRANSIÇÃO
Vamos observar a mesma família de eventos por status HTTP.

REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/#explore-your-metrics
https://prometheus.io/docs/prometheus/latest/querying/functions/

### Slide 80 — Guiado 4 — Comparar por status HTTP

Noite 2 • Exercício guiado • 21h08–21h14 (6 minutos)

CONDUÇÃO GUIADA
Faça a troca de agrupamento, execute e aguarde os alunos. Leia códigos presentes no ambiente, por exemplo duzentos ou trezentos e dois. Não afirme que toda turma terá quatrocentos ou quatrocentos e quatro. As combinações disponíveis dependem das ações que ocorreram e da instrumentação. A produção orientada de erro pertence à Noite 3.
EXPLICAÇÃO
Agrupar por rota responde em quais operações houve tráfego; agrupar por status responde como as respostas se distribuíram pelos códigos. A unidade continua sendo requisições por segundo. Em seguida, altere apenas o período visível e peça que um aluno confira que a expressão ainda possui cinco minutos dentro de rate.
PERGUNTA E RESPOSTA
Pergunta: mudar route para status_code transforma taxa em porcentagem? Resposta: não; apenas muda o agrupamento. Para uma proporção seria necessária outra definição e outra conta.
SE NÃO FUNCIONAR
Uma série ausente pode simplesmente ainda não ter sido produzida. Confira quais valores existem, sem inventar falhas para igualar a captura.
PONTO DE CONTROLE
Solicite uma frase comparando os dois recortes e uma frase diferenciando período de janela.
TRANSIÇÃO
Antes da prática autônoma, todos farão uma verificação de leitura e de interpretação.

REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/#explore-your-metrics
https://prometheus.io/docs/prometheus/latest/querying/operators/

### Slide 81 — Guiado 5 — Conferir e seguir sozinho

Noite 2 • Exercício guiado • 21h14–21h20 (6 minutos)

CONDUÇÃO GUIADA
Use os seis minutos para confirmar o estado da turma, não para introduzir uma função nova. Peça que os alunos mostrem a um colega onde selecionaram a fonte, qual expressão lê o contador e quais duas expressões calculam as taxas agrupadas. Recolha dúvidas de unidade, janela e período. Se muitos alunos falharem no mesmo ponto, repita apenas esse passo, mantendo a prática autônoma a partir de vinte e uma horas e vinte minutos.
PERGUNTA E RESPOSTA
Pergunta: o colega encontrou um número diferente; quem errou? Resposta: o tráfego, o instante e o ambiente podem ser diferentes. Compare a definição e a consulta antes de comparar o valor.
SE HOUVER AUSÊNCIA
Oriente uma investigação por vez: fonte, expressão, período, ação na aplicação e tempo de coleta. Evite preencher a ausência com zero.
ENTREGÁVEL DESTA ETAPA
Cada aluno deve estar pronto para registrar as duas capturas e explicar o significado dos resultados. A criação e a consulta manual continuam sendo o objetivo; exemplos importáveis permanecem referência opcional separada.
TRANSIÇÃO
A partir de agora, o professor circula e intervém por dúvida, enquanto cada aluno conclui as três atividades. Separe as capturas e as explicações para a correção às vinte e duas horas e quinze minutos.

REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/#explore-your-metrics

### Slide 82 — Consolidação dos exercícios

Noite 2 • Transição às 21h20
O exercício guiado terminou. Passe a orientar individualmente; os alunos repetem as mesmas consultas, sem receber novas tarefas obrigatórias. A folha da Noite 2 continua sendo a referência.
TRANSIÇÃO
Apresente as evidências esperadas e acompanhe as dificuldades até a correção.

### Slide 83 — Prática autônoma

21h20–21h35: repetir 2.1 e explicar o contador. 21h35–21h55: consolidar 2.2, gerar tráfego moderado e registrar a taxa por rota. 21h55–22h15: concluir 2.3, registrar a taxa por status e a diferença entre janela e período. Os tempos distribuem os 55 minutos; alunos que terminarem antes revisam as seis verificações de interpretação. Não exigir números iguais aos prints. Manter a consulta com rota metrics para explicar o tráfego de coleta; filtros adicionais só como conversa opcional, sem novo requisito. O professor acompanha dúvidas e registra dificuldades comuns para a correção. Os modelos prontos permanecem apoio opcional fora da execução principal.
TRANSIÇÃO
Às 22h15, interrompa a execução e compare explicações. Solicite uma observação sobre unidade, janela, período e agrupamento.

### Slide 84 — Correção e interpretação

Pergunte: qual dado é acumulado? Qual resultado é por segundo? O que muda entre route e status_code? Por que metrics pode ter tráfego sem clique? No data prova zero? Use respostas da turma, corrija a unidade e confira se houve entrega das capturas. Retome o caso ponderado se houver tempo; não introduza nova consulta obrigatória. Feche conectando à Noite 3: métricas ajudam a localizar mudanças e logs acrescentam detalhes dos eventos.
TRANSIÇÃO PARA A NOITE 3
As métricas resumem o comportamento observado. Na próxima noite, logs acrescentam detalhes dos eventos e permitem investigar as mudanças identificadas.

## Noite 3

### Slide 85 — Noite 3 — Exploração de logs

TRANSIÇÃO — Teoria
18h30–18h35 (5 minutos)
ABERTURA SUGERIDA
“Já conseguimos observar o tráfego. Hoje vamos provocar um erro conhecido e encontrar o registro desse evento nos logs.”
RETOMADA E PREPARAÇÃO
Abra Add a logging data source e Explore your logs no tutorial. Confira o Loki em execução. Separe as consultas do arquivo /var/log/tns-app.log e do filtro por error. Lembre que a URL do datasource é http://loki:3100, dentro da rede Docker.
CONDUÇÃO
Demonstre a conexão Loki e o teste. Leia uma linha de log com a turma. Preencha apenas o título na aplicação, envie a URL vazia e registre o horário. Volte ao Explore e localize o evento empty url. Peça que os alunos repitam e expliquem a relação entre a ação e a evidência.
PERGUNTAS PARA A TURMA
“O que está dentro das chaves?” “O que o operador |= filtra?” “Qual linha corresponde à ação que acabamos de executar?”
PONTO DE ATENÇÃO
O erro pode sair do intervalo selecionado. Ajuste o período antes de concluir que não há logs. Para inspecionar uma linha com calma, pare o acompanhamento Live.
CRITÉRIO DE SAÍDA
Cada aluno conecta Loki e registra consulta, horário e mensagem do erro.
GANCHO
“Na próxima noite vamos colocar a métrica e o evento no mesmo contexto visual.”
FORMATO DA NOITE
Teoria até 19h55. Depois, 25 minutos de demonstração sem prática individual. Intervalo 20h20–20h45. Exercícios comentados 20h45–21h00. Folha liberada para execução 21h00. Prática até 22h15, correção até 22h30.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 86 — Métricas e eventos

Noite 3 — Teoria
18h35–18h42 (7 minutos).
Retomada: mostrar um aumento de tráfego. Perguntar que informação falta para entender uma falha. Evitar prometer que logs explicam todo incidente.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 87 — Estrutura de um evento de log

Noite 3 — Teoria
18h42–18h49 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
Use a linha level=error msg="empty url" como exemplo do laboratório. Distinguir o horário do evento do momento em que o aluno abriu a tela. Não inferir que todo formato de log tem os mesmos campos.
PERGUNTA DE VERIFICAÇÃO
Por que o horário é importante para investigar?
RESPOSTA ESPERADA
Porque permite delimitar a busca e comparar o evento com a ação observada.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 88 — Labels e conteúdo no Loki

Noite 3 — Teoria
18h49–18h56 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
Leia um seletor filename e um filtro por error. Não tratar cada palavra dentro da mensagem como label. Referência: https://grafana.com/docs/loki/latest/query/log_queries/
PERGUNTA DE VERIFICAÇÃO
O texto empty url precisa ser um label para ser pesquisado?
RESPOSTA ESPERADA
Não. Podemos filtrar o conteúdo da linha.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 89 — Leitura do seletor LogQL

Noite 3 — Teoria
18h56–19h03 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
No editor, o seletor completo pode ser escrito em uma linha. Explique o label, o operador de igualdade e o valor entre aspas. O caminho é próprio desta aplicação, não universal.
PERGUNTA DE VERIFICAÇÃO
O mesmo filename necessariamente existe em qualquer instalação de Loki?
RESPOSTA ESPERADA
Não. Depende dos labels enviados naquele ambiente.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 90 — Filtro por texto

Noite 3 — Teoria
19h03–19h10 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
Mostre como a consulta é lida da esquerda para a direita. Primeiro escolhemos o fluxo, depois filtramos o conteúdo. O texto é sensível ao conteúdo real do log.
PERGUNTA DE VERIFICAÇÃO
O filtro por error retorna qualquer log de qualquer aplicação?
RESPOSTA ESPERADA
Não. Ele se aplica aos fluxos selecionados à esquerda.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 91 — Leitura de uma linha

Noite 3 — Teoria
19h10–19h17 (7 minutos).
Nem todo campo exibido é um label indexado. Inspecione o que a interface realmente apresenta.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 92 — Erro, evento e diagnóstico

Noite 3 — Teoria
19h17–19h24 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
Use o envio de uma URL vazia. O fato de existir uma linha de erro não mostra sozinho quem executou a ação se várias pessoas compartilham o mesmo aplicativo. Registrar horário ajuda a restringir o contexto.
PERGUNTA DE VERIFICAÇÃO
Um log antigo de erro comprova a falha que acabamos de provocar?
RESPOSTA ESPERADA
Não. É preciso relacionar horário e ação.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 93 — A janela da investigação

Noite 3 — Teoria
19h24–19h31 (7 minutos).
Se a aula demorar, os logs do começo podem sair da janela de cinco minutos. Ajuste o seletor antes de declarar ausência de logs.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 94 — Live e histórico

Noite 3 — Teoria
19h31–19h37 (6 minutos).
Demonstre Live se disponível. Para expandir detalhes, sair do acompanhamento conforme o tutorial.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 95 — Volume de logs e detalhes

Noite 3 — Teoria
19h37–19h43 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Mostre a diferença entre o gráfico de volume no Explore e a lista de linhas. A altura da barra não informa por si só a mensagem ou a causa.
PERGUNTA DE VERIFICAÇÃO
Uma barra alta no volume de logs informa qual é o erro?
RESPOSTA ESPERADA
Não. É preciso ler os eventos correspondentes.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 96 — Evidência e hipótese

Noite 3 — Teoria
19h43–19h49 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Peça uma frase descritiva e outra explicativa para o mesmo evento. Discuta como ações conhecidas ajudam a confirmar uma hipótese simples, e por que sistemas reais podem exigir mais dados.
PERGUNTA DE VERIFICAÇÃO
“O banco travou” é uma evidência apenas porque apareceu error?
RESPOSTA ESPERADA
Não. É uma hipótese sem sustentação suficiente nesse registro.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 97 — Roteiro de investigação

Noite 3 — Teoria
19h49–19h55 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Recapitule o raciocínio da noite antes de abrir a demonstração. Essa sequência evita buscar em fontes erradas e interpretar eventos fora do contexto.
PERGUNTA DE VERIFICAÇÃO
O que você guardará para outra pessoa reproduzir a busca?
RESPOSTA ESPERADA
Fonte, consulta, intervalo e descrição da ação ou problema.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 98 — Noite 3 — Demonstração

TRANSIÇÃO — Demonstração
19h55–19h56 (1 minutos)
Apresente o fluxo completo no seu ambiente. A turma observa e registra dúvidas. Não solicitar execução simultânea. Mostre ação, resultado e interpretação. Termine às 20h20 para preservar o intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 99 — Conexão com o Loki

Noite 3 — Demonstração
19h56–20h00 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
A URL interna é igual à do tutorial oficial, apesar das portas locais adaptadas. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 100 — Uma consulta de logs

Noite 3 — Demonstração
20h00–20h04 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Explique as chaves, o label filename e seu valor. Confira que os alunos estão consultando Loki, não Prometheus. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 101 — Um erro controlado

Noite 3 — Demonstração
20h04–20h08 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Usar dados fictícios. Resultado esperado no ambiente: erro empty url. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 102 — Filtro por conteúdo

Noite 3 — Demonstração
20h08–20h11 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
No editor, pode ser uma única linha. Diferencie o seletor por label do filtro textual. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 103 — Erros de pagamento no Loki

20h11–20h14 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. No Explore, selecione Loki e Code.
2. Execute a consulta no último período com dados.
3. Escolha uma linha ERROR e registre horário, endpoint e trace_id.

CONSULTA
{service="ecommerce-shop"} |= "ERROR"

RESULTADO OBSERVADO
Eventos de erro 500 da aplicação encontrados.

ORIENTAÇÃO AO PROFESSOR
Consulta retornou linhas durante a validação. São falhas simuladas da aplicação. A atividade do aluno no tutorial usa filename e empty url; não substituir essa consulta pela do professor no laboratório Grafana News.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 104 — JSON do Docker e evento da aplicação

20h14–20h17 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Execute a consulta formatada.
2. Expanda o evento e encontre Data Links > TraceID.
3. Clique no link Tempo para investigar a mesma requisição.

CONSULTA
{service="ecommerce-shop"} |= "ERROR" | json | line_format "{{.log}}"

RESULTADO OBSERVADO
Link Tempo disponível para o trace_id da linha.

ORIENTAÇÃO AO PROFESSOR
O primeiro json interpreta o envelope Docker; line_format exibe o campo log. Não confundir labels indexados com campos extraídos. Esta foi a sequência que tornou o link visível nesta sessão. O identificador muda a cada requisição; use um evento recente na aula.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 105 — Do log ao trace no Tempo

20h17–20h20 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Siga o link Tempo da linha expandida no Loki.
2. Observe a duração total e os quatro spans.
3. Expanda gateway.payment.process e leia os atributos.

RESULTADO OBSERVADO
Trace correlacionado aberto com os spans da requisição.

ORIENTAÇÃO AO PROFESSOR
Demonstração complementar, opcional no curso básico. Validado com trace 2d2f7fa5b0c252b29b1a4fad90b2b1c4: total 260,08 ms, gateway 160,77 ms e atributo error=true com mensagem de timeout. O status OpenTelemetry do span aparecia unset; não afirmar que todos os erros estavam corretamente marcados pelo status do span. Gerar dados recentes, pois a retenção é limitada.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 106 — Intervalo

Noite 3 — Intervalo
20h20–20h45 (25 minutos).
Antes de sair, preserve o estado da demonstração. Anuncie o retorno às 20h45. Não iniciar a prática da turma durante o intervalo. Na volta, explicar a folha antes de liberá-la.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 107 — Noite 3 — Exercícios
comentados

TRANSIÇÃO — Exercícios comentados
20h45–20h46 (1 minutos)
Mostre cada tarefa, o caminho de execução ou navegação, o resultado esperado e os erros comuns. A folha do aluno fica separada do gabarito. Ao final deste bloco, às 21h00, entregue ou libere a folha da noite.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 108 — Exercício 3.1 — Conectar e explorar Loki

20h46–20h51 (5 minutos)
EXERCÍCIO COMENTADO 3.1
Adicione a fonte Loki se ela ainda não existir no seu ambiente.
Use a URL interna http://loki:3100 no laboratório local. Em ambiente fornecido, use a conexão indicada pelo professor.
Teste a conexão e execute o seletor do arquivo.
CONSULTA COMPLETA
{filename="/var/log/tns-app.log"}
COMENTÁRIO DO PROFESSOR
Comente o endereço interno e a importância de não duplicar a fonte. A turma consulta Loki, não Prometheus.
CRITÉRIO DE CORREÇÃO
Fonte conectada e linhas da aplicação visíveis.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 109 — Exercício 3.2 — Gerar e localizar um erro

20h51–20h56 (5 minutos)
EXERCÍCIO COMENTADO 3.2
Envie um título sem URL na aplicação.
Anote o horário da ação.
No Explore, filtre as linhas de erro.
Abra o evento correspondente e registre a mensagem.
CONSULTA COMPLETA
{filename="/var/log/tns-app.log"} |= "error"
COMENTÁRIO DO PROFESSOR
Demonstre o erro sem ocultar a resposta HTTP. Comente por que a janela de tempo precisa incluir a ação.
CRITÉRIO DE CORREÇÃO
Consulta, horário e mensagem relacionados à ação.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 110 — Exercício 3.3 — Explicar a investigação

20h56–21h00 (4 minutos)
EXERCÍCIO COMENTADO 3.3
Compare a consulta do arquivo com a consulta filtrada.
Ajuste o período e observe a mudança no resultado.
Explique o que é evidência e o que seria uma hipótese.
Entregue os passos para um colega reproduzir a busca.
COMENTÁRIO DO PROFESSOR
Peça uma explicação própria. Um print sem consulta e sem período não deve ser a única entrega.
CRITÉRIO DE CORREÇÃO
Roteiro de investigação com conclusão e evidência.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 111 — Noite 3 — Prática do aluno

TRANSIÇÃO — Prática do aluno
21h00–21h00 (0 minutos)
Agora libere alunos/Aluno_Noite_3.md. A turma trabalha no ambiente local até 22h15. Circule entre os alunos e ajude primeiro nas falhas que bloqueiam toda a prática. Os critérios e os comandos estão na folha.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 112 — Agora é com você

Noite 3 — Prática do aluno
21h00–22h15 (75 minutos).
PRÁTICA DO ALUNO — 75 MINUTOS
3.1: 25 minutos. Fonte conectada e linhas da aplicação visíveis.
3.2: 25 minutos. Consulta, horário e mensagem relacionados à ação.
3.3: 25 minutos. Roteiro de investigação com conclusão e evidência.
Não refazer toda a demonstração durante a prática. Ajude por evidências e use os comentários dos exercícios para orientar a correção. O roteiro Ubuntu é complementar e sua execução fica condicionada à liberação dos scripts após o teste Azure.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 113 — Correção e fechamento

Noite 3 — Correção
22h15–22h30 (15 minutos).
CORREÇÃO — 15 MINUTOS
3.1: Fonte conectada e linhas da aplicação visíveis.
3.2: Consulta, horário e mensagem relacionados à ação.
3.3: Roteiro de investigação com conclusão e evidência.
Peça uma resposta explicada, não apenas um print. Retome uma dificuldade comum e o gancho para a próxima noite. Na Noite 5, concluir com o projeto e continuidade.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Noite 4

### Slide 114 — Noite 4 — Dashboards e anotações

TRANSIÇÃO — Teoria
18h30–18h35 (5 minutos)
ABERTURA SUGERIDA
“Já temos consultas e evidências de erros. Hoje vamos organizar isso em um dashboard que outra pessoa consiga entender.”
RETOMADA E PREPARAÇÃO
Abra Build a dashboard, Annotate events e Using annotations to correlate logs with metrics no tutorial. Deixe pronta a consulta de taxa por rota e confirme a fonte Loki. Prepare um dashboard de demonstração sem alterar os trabalhos dos alunos.
CONDUÇÃO
Comece pela pergunta do painel. Crie a visualização e configure título, unidade, legenda e período. Salve e reabra o dashboard para mostrar persistência. Adicione uma anotação manual sobre uma ação real do exercício. Depois crie a consulta de anotações do Loki e provoque outro erro.
PERGUNTAS PARA A TURMA
“Que pergunta este painel responde?” “A unidade está explícita?” “Como sabemos que a anotação corresponde ao evento?”
PONTO DE ATENÇÃO
Não confunda proximidade no tempo com prova de causa. Um evento anotado é evidência a investigar. O dashboard precisa ser salvo após as alterações.
CRITÉRIO DE SAÍDA
Cada aluno entrega um dashboard salvo, uma anotação manual e uma consulta de anotações do Loki.
GANCHO
“O dashboard já ajuda a investigar. Amanhã vamos configurar quando o Grafana deve nos avisar.”
FORMATO DA NOITE
Teoria até 19h55. Depois, 25 minutos de demonstração sem prática individual. Intervalo 20h20–20h45. Exercícios comentados 20h45–21h00. Folha liberada para execução 21h00. Prática até 22h15, correção até 22h30.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 115 — Uma pergunta por painel

Noite 4 — Teoria
18h35–18h42 (7 minutos).
Retomada da Noite 2. Peça que o aluno explique o resultado antes de configurar a visualização.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 116 — Dashboard e painel

Noite 4 — Teoria
18h42–18h49 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
Use o acompanhamento de Grafana News. Um painel mostra tráfego por rota; outros podem responder perguntas diferentes. Mais painéis não garantem uma visão melhor. Referência: https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
PERGUNTA DE VERIFICAÇÃO
Um único painel precisa responder a todas as perguntas da aplicação?
RESPOSTA ESPERADA
Não. Cada painel deve ter uma finalidade compreensível.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 117 — Consulta e apresentação

Noite 4 — Teoria
18h49–18h55 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Compare uma consulta errada com um gráfico bonito. A apresentação pode melhorar a leitura, mas não corrige uma seleção incorreta.
PERGUNTA DE VERIFICAÇÃO
Uma legenda bonita garante que o cálculo está correto?
RESPOSTA ESPERADA
Não. A consulta deve ser validada antes.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 118 — Escolha da visualização

Noite 4 — Teoria
18h55–19h01 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Trate os tipos como escolhas ligadas à pergunta. Neste tutorial, o painel principal usa série temporal. Stat exige explicar qual redução produz o número mostrado.
PERGUNTA DE VERIFICAÇÃO
Para comparar o comportamento de rotas ao longo de minutos, qual tipo usaremos?
RESPOSTA ESPERADA
Time series.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 119 — Título e unidade

Noite 4 — Teoria
19h01–19h07 (6 minutos).
Use a unidade req/s quando disponível. Evite títulos genéricos e casas decimais excessivas.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 120 — Eixos, legenda e período

Noite 4 — Teoria
19h07–19h13 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Peça à turma que leia uma linha sem ver a legenda e discuta o que faltou. Não usar cor como única identificação de uma série.
PERGUNTA DE VERIFICAÇÃO
Dois gráficos com escalas diferentes podem parecer equivalentes?
RESPOSTA ESPERADA
Podem. Precisamos ler eixos, unidades e período antes de comparar.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 121 — Agregação e redução visual

Noite 4 — Teoria
19h13–19h19 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Use uma sequência didática 1, 9, 2. O último é 2, o máximo é 9 e a média é 4. O exemplo é conceitual; não configura um painel adicional obrigatório.
PERGUNTA DE VERIFICAÇÃO
O último valor e o máximo representam a mesma informação?
RESPOSTA ESPERADA
Não. São resumos diferentes da mesma série.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 122 — Salvamento e organização

Noite 4 — Teoria
19h19–19h25 (6 minutos).
Mostrar que alterações no editor podem precisar de confirmação e salvamento do dashboard.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 123 — Evento pontual e intervalo

Noite 4 — Teoria
19h25–19h31 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Peça exemplos da turma. A descrição deve representar uma ação conhecida. Se o teste é simulado, identificá-lo como simulação.
PERGUNTA DE VERIFICAÇÃO
Qual anotação representa melhor um teste que durou dez minutos?
RESPOSTA ESPERADA
Uma região com início e fim do teste.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 124 — Anotações manuais e por consulta

Noite 4 — Teoria
19h31–19h37 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Relacione a anotação manual ao teste da turma e a consulta aos erros da aplicação. A consulta de anotações precisa da fonte e do período corretos.
PERGUNTA DE VERIFICAÇÃO
Qual opção evita registrar manualmente cada erro repetido?
RESPOSTA ESPERADA
Uma consulta de anotações à fonte de logs.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 125 — Correlação e causalidade

Noite 4 — Teoria
19h37–19h43 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Use um pico de tráfego e uma mensagem de erro no mesmo minuto. Proponha explicações alternativas e diga quais evidências poderiam ajudar a distingui-las.
PERGUNTA DE VERIFICAÇÃO
O erro anotado comprova que ele causou o pico de tráfego?
RESPOSTA ESPERADA
Não. É uma relação temporal a investigar.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 126 — Dashboard compreensível

Noite 4 — Teoria
19h43–19h49 (6 minutos).
Revisão em dupla. O colega deve interpretar o painel. Simplificar antes de adicionar mais elementos.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 127 — Revisão antes da demonstração

Noite 4 — Teoria
19h49–19h55 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Recapitule a ligação entre os elementos e prepare a turma para observar o professor criando o painel. Nenhum exercício individual é iniciado neste bloco.
PERGUNTA DE VERIFICAÇÃO
O que vamos conferir ao reabrir o dashboard?
RESPOSTA ESPERADA
Se o painel e as anotações foram salvos corretamente.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 128 — Noite 4 — Demonstração

TRANSIÇÃO — Demonstração
19h55–19h56 (1 minutos)
Apresente o fluxo completo no seu ambiente. A turma observa e registra dúvidas. Não solicitar execução simultânea. Mostre ação, resultado e interpretação. Termine às 20h20 para preservar o intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 129 — Do Explore ao dashboard

Noite 4 — Demonstração
19h56–20h00 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
A interface pode oferecer outras entradas. Use o fluxo presente na versão do curso. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 130 — Anotação manual

Noite 4 — Demonstração
20h00–20h04 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Usar o menu do gráfico ou Ctrl/Cmd + clique conforme a interface. Não registrar uma mudança que não foi realizada. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 131 — Anotações vindas do Loki

Noite 4 — Demonstração
20h04–20h08 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Nome sugerido: Erros da aplicação. Ativar a consulta de anotações e salvar. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 132 — Painel criado pela interface

20h08–20h12 (4 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. New > New dashboard > Add visualization > Prometheus.
2. Cole a consulta em Code e escolha Time series.
3. Nomeie o painel e selecione Percent (0-100) em Standard options.

CONSULTA
100 * (1 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])))

RESULTADO OBSERVADO
Curva de CPU com título e unidade corretos.

ORIENTAÇÃO AO PROFESSOR
Painel criado durante esta sessão. O caminho da unidade é Misc > Percent (0-100). Volte ao dashboard e salve como Curso Green - Exercícios gráficos do professor. Não reutilizar a consulta tns_ no host ou a consulta de host no tutorial sem a fonte adequada.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 133 — Anotação manual do exercício

20h12–20h16 (4 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. No dashboard criado, selecione um horário no gráfico com Ctrl + clique.
2. Escreva uma descrição do evento didático.
3. Salve e confira o marcador no período selecionado.

RESULTADO OBSERVADO
Anotação manual adicionada ao gráfico.

ORIENTAÇÃO AO PROFESSOR
A descrição usada foi revisão visual da curva de CPU, explicitamente como marcador didático. Não inventar uma implantação nem dizer que a anotação provocou a mudança de CPU. O horário da anotação corresponde ao ponto escolhido no gráfico.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 134 — Resultado salvo do exercício gráfico

20h16–20h20 (4 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Abra Curso Green - Exercícios gráficos do professor.
2. Selecione Last 30 minutes e observe a curva.
3. Exporte o JSON em Share > Export > Save to file.

RESULTADO OBSERVADO
Dashboard salvo e JSON exportado para o pacote.

ORIENTAÇÃO AO PROFESSOR
Dashboard UID fg1nbayqfl4aoe criado e verificado. A anotação é um registro separado no banco do Grafana e não acompanha a exportação JSON do dashboard. O JSON inclui datasource UID prometheus; remapear se a instância de destino tiver outro UID. Os screenshots registram o estado da sessão, não garantem a disponibilidade futura da VM.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 135 — Intervalo

Noite 4 — Intervalo
20h20–20h45 (25 minutos).
Antes de sair, preserve o estado da demonstração. Anuncie o retorno às 20h45. Não iniciar a prática da turma durante o intervalo. Na volta, explicar a folha antes de liberá-la.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 136 — Noite 4 — Exercícios
comentados

TRANSIÇÃO — Exercícios comentados
20h45–20h46 (1 minutos)
Mostre cada tarefa, o caminho de execução ou navegação, o resultado esperado e os erros comuns. A folha do aluno fica separada do gabarito. Ao final deste bloco, às 21h00, entregue ou libere a folha da noite.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 137 — Exercício 4.1 — Criar e salvar um dashboard

20h46–20h51 (5 minutos)
EXERCÍCIO COMENTADO 4.1
Crie um dashboard da aplicação.
Adicione uma visualização Prometheus com a consulta por rota.
Configure Time series, título Tráfego por rota, unidade e legenda.
Salve com seu nome ou identificação da turma e reabra para conferir.
CONSULTA COMPLETA
sum(rate(tns_request_duration_seconds_count[5m])) by (route)
COMENTÁRIO DO PROFESSOR
Comente consulta, unidade e salvamento. Os modelos em exemplos-importaveis são referência opcional. O exercício mantém a criação manual.
CRITÉRIO DE CORREÇÃO
Dashboard salvo, legível e com consulta coerente.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/
Prática V8: criação manual em 30 minutos. Há modelos prontos na pasta exemplos-importaveis como referência opcional; não é necessário importar para concluir a atividade.

### Slide 138 — Exercício 4.2 — Registrar um evento manual

20h51–20h56 (5 minutos)
EXERCÍCIO COMENTADO 4.2
Execute uma ação conhecida na aplicação.
Adicione uma anotação manual com descrição e horário.
Se representar um teste com duração, use uma região.
Salve o dashboard.
COMENTÁRIO DO PROFESSOR
Mostre o menu ou atalho presente na versão do laboratório. Comente o que deve aparecer na descrição para outra pessoa entender o evento.
CRITÉRIO DE CORREÇÃO
Anotação que descreve uma ação realmente executada.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 139 — Exercício 4.3 — Exibir erros como anotações

20h56–21h00 (4 minutos)
EXERCÍCIO COMENTADO 4.3
Em Settings e Annotations, adicione uma consulta chamada Erros da aplicação.
Selecione Loki e use o filtro de erro.
Ative a consulta, salve e provoque outro erro na aplicação.
Localize a anotação e explique a relação temporal com o gráfico.
CONSULTA COMPLETA
{filename="/var/log/tns-app.log"} |= "error"
COMENTÁRIO DO PROFESSOR
Comente a fonte Loki, a consulta e o período. Não apresentar a proximidade temporal como prova automática de causa.
CRITÉRIO DE CORREÇÃO
Consulta de anotações ativa e evento encontrado.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 140 — Noite 4 — Prática do aluno

TRANSIÇÃO — Prática do aluno
21h00–21h00 (0 minutos)
Agora libere alunos/Aluno_Noite_4.md. A turma trabalha no ambiente local até 22h15. Circule entre os alunos e ajude primeiro nas falhas que bloqueiam toda a prática. Os critérios e os comandos estão na folha.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 141 — Agora é com você

Noite 4 — Prática do aluno
21h00–22h15 (75 minutos).
PRÁTICA DO ALUNO — 75 MINUTOS
4.1: 30 minutos. Dashboard salvo, legível e com consulta coerente.
4.2: 20 minutos. Anotação que descreve uma ação realmente executada.
4.3: 25 minutos. Consulta de anotações ativa e evento encontrado.
Não refazer toda a demonstração durante a prática. Ajude por evidências e use os comentários dos exercícios para orientar a correção. O roteiro Ubuntu é complementar e sua execução fica condicionada à liberação dos scripts após o teste Azure.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 142 — Correção e fechamento

Noite 4 — Correção
22h15–22h30 (15 minutos).
CORREÇÃO — 15 MINUTOS
4.1: Dashboard salvo, legível e com consulta coerente.
4.2: Anotação que descreve uma ação realmente executada.
4.3: Consulta de anotações ativa e evento encontrado.
Peça uma resposta explicada, não apenas um print. Retome uma dificuldade comum e o gancho para a próxima noite. Na Noite 5, concluir com o projeto e continuidade.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Noite 5

### Slide 143 — Noite 5 — Alertas e projeto final

TRANSIÇÃO — Teoria
18h30–18h35 (5 minutos)
ABERTURA SUGERIDA
“Hoje vamos completar nosso trabalho: definir uma condição de alerta, confirmar a notificação e apresentar o dashboard final.”
RETOMADA E PREPARAÇÃO
Abra as seções de alertas do tutorial. Confirme o dashboard, a consulta Prometheus e o receptor em localhost:38090. Se usar Webhook.site, prepare a URL de teste e confirme a internet. Confira o vídeo de vínculo de alertas ao painel antes da aula.
CONDUÇÃO
Separe as quatro verificações: dado, condição, estado e entrega. Teste o contato antes da regra. Mostre consulta A, redução B e condição C. Explique avaliação de 10s e pendente de 0s como parâmetros de demonstração. Gere tráfego, observe o estado e confira a mensagem no receptor. Associe a regra ao painel.
PERGUNTAS PARA A TURMA
“O contato passou no teste?” “Qual expressão é a condição?” “O estado Firing já prova que a mensagem foi recebida?”
CRITÉRIO DE SAÍDA
O aluno demonstra regra avaliada, vínculo com o painel e notificação recebida. Relembre como exportar o dashboard antes de remover containers.
ENCERRAMENTO
Peça que cada aluno explique uma consulta, um evento e uma condição. Recapitule as cinco noites e indique o tutorial para continuidade.
FORMATO DA NOITE
Teoria até 19h55. Depois, 25 minutos de demonstração sem prática individual. Intervalo 20h20–20h45. Exercícios comentados 20h45–21h00. Folha liberada para execução 21h00. Prática até 22h15, correção até 22h30.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 144 — O que dispara um alerta

Noite 5 — Teoria
18h35–18h39 (4 minutos).
Retome a taxa de requisições e pergunte qual comportamento justificaria uma notificação. Diferencie estado da regra de entrega da mensagem.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 145 — Regra, instância e mensagem

Noite 5 — Teoria
18h39–18h43 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Use uma consulta agrupada por rota: uma única regra pode gerar mais de uma instância. O contato receber uma mensagem de teste não comprova que a condição da regra funciona.
PERGUNTA DE VERIFICAÇÃO
Uma regra por rota sempre gera apenas uma instância?
RESPOSTA ESPERADA
Não. Cada série ou dimensão pode gerar sua própria instância.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 146 — Consulta da regra

Noite 5 — Teoria
18h43–18h47 (4 minutos).
Nome sugerido: fundamentals-test. A consulta é a mesma do painel, permitindo comparar a observação visual com a regra.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 147 — A, B e C

Noite 5 — Teoria
18h47–18h51 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Use um exemplo didático de taxa atual 0,3 e limite 0,2. A condição maior que 0,2 é verdadeira. Depois compare com 0,1. A ordem lógica importa mais que a posição dos controles.
PERGUNTA DE VERIFICAÇÃO
Qual expressão precisa ser marcada como condição nesse fluxo?
RESPOSTA ESPERADA
A expressão de comparação, C.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 148 — Escolha de um limite

Noite 5 — Teoria
18h51–18h55 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Explique que /metrics também gera requisições. Uma regra pode nascer disparada se o tráfego de base já superar o limite. Em produção, a decisão exigiria contexto operacional.
PERGUNTA DE VERIFICAÇÃO
Podemos copiar 0,01 para qualquer sistema sem avaliar o contexto?
RESPOSTA ESPERADA
Não. É um parâmetro didático deste exemplo.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/
Prática V8: receptor local http://webhook:8080/; navegador http://localhost:38090. Alerta em A Range, B Reduce/Last, C acima de 0.01; excluir route=metrics. Reutilizar reducer automático, renomear B e confirmar Input B em C. Avaliação 10s e pending 0s. TestAlert não comprova disparo da regra; conferir a mensagem com o nome da regra no receptor.

### Slide 149 — Avaliação e espera

Noite 5 — Teoria
18h55–18h59 (4 minutos).
Parâmetros curtos do tutorial para demonstração. Não ensinar isso como configuração universal de produção. Notificações também dependem das configurações de envio.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 150 — Estados do alerta

Noite 5 — Teoria
18h59–19h03 (4 minutos).
No laboratório, pendente de 0s pode pular o estado Pending. Firing/Alerting são rótulos de interface para o alerta disparado. Algumas configurações também usam Recovering antes da resolução. No Data e Error exigem tratamento próprio e não provam indisponibilidade da aplicação. Fonte: https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 151 — Sem dados e falha de avaliação

Noite 5 — Teoria
19h03–19h07 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Compare aplicação sem série correspondente e uma fonte indisponível. Não declarar que ambos significam valor zero ou que provam o mesmo incidente. Referência: documentação oficial de alert-rule-evaluation.
PERGUNTA DE VERIFICAÇÃO
Se uma consulta não retorna séries, isso comprova taxa zero?
RESPOSTA ESPERADA
Não. Precisamos investigar e definir o tratamento de ausência de dados.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 152 — Contato e entrega

Noite 5 — Teoria
19h07–19h11 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Distinguir teste de contato e evento real. Descrever que configuração de encaminhamento e agrupamento também pode afetar a entrega. O roteiro usa seleção direta do contato.
PERGUNTA DE VERIFICAÇÃO
O teste do contato valida a consulta Prometheus?
RESPOSTA ESPERADA
Não. Ele valida a comunicação com o receptor.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 153 — Duas opções de webhook

Noite 5 — Teoria
19h11–19h15 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Explique a escolha do destino antes da demonstração. Em um ambiente remoto, localhost do notebook não é o servidor do professor. A configuração precisa de uma URL alcançável pelo Grafana que envia a mensagem.
PERGUNTA DE VERIFICAÇÃO
De onde sai a requisição de notificação?
RESPOSTA ESPERADA
Do serviço Grafana, e não do navegador do aluno.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/
Prática V8: receptor local http://webhook:8080/; navegador http://localhost:38090. Alerta em A Range, B Reduce/Last, C acima de 0.01; excluir route=metrics. Reutilizar reducer automático, renomear B e confirmar Input B em C. Avaliação 10s e pending 0s. TestAlert não comprova disparo da regra; conferir a mensagem com o nome da regra no receptor.

### Slide 154 — Alerta e painel relacionado

Noite 5 — Teoria
19h15–19h19 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Retome o painel de tráfego criado na Noite 4. Uma regra não passa a depender da tela estar aberta apenas por ser ligada ao painel.
PERGUNTA DE VERIFICAÇÃO
É preciso deixar o navegador aberto para o Grafana avaliar a regra?
RESPOSTA ESPERADA
Não. A avaliação é feita pelo serviço.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 155 — Vídeo: alertas no dashboard

Noite 5 — Teoria
19h19–19h23 (4 minutos).
Referência do canal Grafana. Mostrar um trecho selecionado sobre vínculo da regra ao painel dentro do tempo planejado. O vídeo completo é referência pós-aula. Evitar ensinar a posição de botões de uma versão antiga como regra fixa.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 156 — Diagnóstico de alertas

Noite 5 — Teoria
19h23–19h27 (4 minutos).
Reserve 20 minutos de correção. Mostrar o erro em cada etapa é mais útil do que recriar a regra inteira.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 157 — Síntese do ciclo completo

Noite 5 — Teoria
19h27–19h31 (4 minutos).
EXPLICAÇÃO DO PROFESSOR
Faça quatro perguntas em ordem: a consulta responde? a condição faz sentido? a instância disparou? a mensagem chegou? Agora o professor demonstra o fluxo sem pedir que a turma acompanhe clique a clique.
PERGUNTA DE VERIFICAÇÃO
Qual evidência encerra o teste de comunicação da regra?
RESPOSTA ESPERADA
Uma notificação da regra recebida no destino escolhido.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 158 — E-mail: servidor e destinatário

19h31–19h35 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
No Grafana OSS, configurar SMTP no grafana.ini ou por variáveis GF_SMTP_*. Exemplo de arquivo Ubuntu: /etc/grafana/grafana.ini. Em Docker, o processo lê as variáveis do serviço Grafana; alterações normalmente exigem recriar o container. Não configurar credenciais reais neste laboratório; mostrar onde ficam.

PERGUNTA À TURMA
Informar Addresses configura o servidor SMTP?

RESPOSTA ESPERADA
Não. Addresses é o destinatário; o transporte SMTP precisa existir.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/

### Slide 159 — SMTP: exemplo de configuração

19h35–19h39 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Usar domínio .invalid para deixar explícito que é um exemplo. Se o servidor exigir autenticação, configurar user e password por mecanismo de segredo apropriado. Não colocar senhas na apostila, Git ou screenshots. O envio não será testado por solicitação do usuário; o objetivo é localizar as configurações.

PERGUNTA À TURMA
O arquivo mostrado já habilita envio no ambiente do professor?

RESPOSTA ESPERADA
Não. É um exemplo para explicar as propriedades.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#smtp

### Slide 160 — Webhook: alerta para uma API externa

19h39–19h43 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Webhook é a opção de integração de saída. Não é a API de provisionamento do Grafana. A API receptora precisa aceitar o formato do JSON e a autenticação escolhida. Pode ser necessário um adaptador para transformar o payload no formato exigido pelo software terceiro.

PERGUNTA À TURMA
Qual lado recebe o HTTP POST do Webhook?

RESPOSTA ESPERADA
O endpoint receptor do sistema terceiro ou do adaptador.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/

### Slide 161 — Webhook e API do Grafana

19h43–19h47 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Exemplos da API de provisionamento compatível com o laboratório 11.3: GET /api/v1/provisioning/alert-rules e GET /api/v1/provisioning/contact-points. São exemplos de leitura, não chamados executados. Para criar ou alterar recursos, usar autenticação e privilégios adequados. Preferir conta de serviço e token compatíveis com a versão. Não expor admin/admin nos slides de integração.

PERGUNTA À TURMA
Qual usar para avisar um sistema de chamados quando um alerta dispara?

RESPOSTA ESPERADA
Webhook; a API de provisionamento tem outro propósito.

REFERÊNCIA
https://grafana.com/docs/grafana/v11.3/developers/http_api/alerting_provisioning/

### Slide 162 — Arquitetura das notificações

19h47–19h51 (4 minutos)

ARQUITETURA EDITÁVEL
Figura de configuração e responsabilidades, não evidência de envio. O Grafana Alerting possui seu próprio gerenciamento de notificações. Regras do Prometheus podem enviar para o Alertmanager externo pelo fluxo separado inferior. A fonte Alertmanager no Grafana não habilita SMTP nem cria automaticamente um receptor. No laboratório foram capturados formulários Email e Webhook sem salvar contatos ou disparar mensagens. A integração de API pode exigir transformação do payload. A API de provisionamento do Grafana é usada para administrar recursos e não substitui o webhook de saída.

PERGUNTA
Qual sinal percorre cada caminho e quem inicia a comunicação?

Fontes: arquivos locais docker-compose.yml, prometheus.yml, tempo-config.yaml e app.py do professor; telas observadas nesta sessão.
https://grafana.com/tutorials/grafana-fundamentals/
https://prometheus.io/docs/introduction/overview/
https://prometheus.io/docs/concepts/metric_types/
https://grafana.com/docs/loki/latest/get-started/overview/
https://grafana.com/docs/loki/latest/query/
https://grafana.com/docs/tempo/latest/traceql/
https://grafana.com/docs/loki/latest/send-data/promtail/
https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/
https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#smtp
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/
https://grafana.com/docs/grafana/v11.3/developers/http_api/alerting_provisioning/

### Slide 163 — O que uma integração precisa validar

19h51–19h55 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Payload ilustrativo reduzido: {"status":"firing","alerts":[{"labels":{"alertname":"CPUAlta"},"annotations":{"summary":"Verificar CPU do host"}}]}. Não é a mensagem completa nem um schema mínimo universal. Cada API tem contrato próprio. Um HTTP 2xx confirma a aceitação HTTP, não necessariamente a criação final de um chamado. No lab desta sessão não há entrega validada.

PERGUNTA À TURMA
Preview com Firing significa que o software terceiro recebeu a mensagem?

RESPOSTA ESPERADA
Não. A prévia avalia a condição; a entrega precisa ser verificada no receptor.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/

### Slide 164 — Noite 5 — Demonstração

TRANSIÇÃO — Demonstração
19h55–19h56 (1 minutos)
Apresente o fluxo completo no seu ambiente. A turma observa e registra dúvidas. Não solicitar execução simultânea. Mostre ação, resultado e interpretação. Termine às 20h20 para preservar o intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

E-mail e Webhook: apenas mostrar a configuração, sem salvar destinatários ou enviar mensagens. A demonstração das duas telas usa valores ilustrativos.

### Slide 165 — Ponto de contato

Noite 5 — Demonstração
19h56–19h59 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Nome sugerido: Webhook do laboratório. Endpoint: http://webhook:8080/. Save após o teste. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 166 — Redução e limite

Noite 5 — Demonstração
19h59–20h02 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
No laboratório V8, o limite é 0,01 requisição por segundo, excluindo a rota metrics. É um valor didático; explique a taxa atual antes de avaliar a condição. Confirmar C como condição avaliada. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 167 — Prática de disparo

Noite 5 — Demonstração
20h02–20h05 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
A janela de 5m suaviza o tráfego. Se não disparar, verificar o valor da consulta antes de alterar parâmetros aleatoriamente. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 168 — Receptor de notificações

Noite 5 — Demonstração
20h05–20h08 (3 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
O tutorial usa webhook.site. O pacote oferece um receptor local para o teste não depender de serviço externo. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 169 — Consulta da regra de CPU

20h08–20h10 (2 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. New > New alert rule; informe um nome didático.
2. Em A, selecione Prometheus, Code e a consulta de CPU.
3. Nas opções, use Range antes de B = Reduce / Last.

CONSULTA
100 * (1 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])))

RESULTADO OBSERVADO
Consulta A retorna dados; B produz um valor por instância.

ORIENTAÇÃO AO PROFESSOR
Regra mantida como rascunho e cancelada após as capturas. A consulta Instant já retorna um valor; nesse caso Reduce é desnecessário. A demonstração mudou para Range para justificar o Reduce ensinado no curso. Salvar uma regra exige também pasta, grupo de avaliação e destino de notificações.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 170 — Prévia da condição normal

20h10–20h12 (2 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Em C, mantenha Input B e Is above 80.
2. Clique Preview e leia o valor de B e a saída de C.
3. Explique a diferença entre valor observado e limite definido.

RESULTADO OBSERVADO
Prévia: 0 firing e 1 normal.

ORIENTAÇÃO AO PROFESSOR
Apenas prévia da expressão, sem regra ativa e sem envio. 80% é exemplo didático, não recomendação universal de produção. O limite real depende do comportamento, capacidade e impacto do sistema.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 171 — Prévia com condição atendida

20h12–20h14 (2 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Troque temporariamente o limite de C para 1.
2. Execute Preview e compare o resultado com o teste anterior.
3. Observe C = 1 e a indicação Firing na prévia.

RESULTADO OBSERVADO
Prévia: 1 firing e 0 normal.

ORIENTAÇÃO AO PROFESSOR
Valor de B na captura: 4,22881%; limite 1%. Firing é o resultado da PRÉVIA. Não houve regra salva, avaliação recorrente ou teste de entrega de notificação nesta VM. Pending e agendamento precisam ser configurados e testados separadamente. Restaure um limite coerente antes de salvar qualquer regra.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 172 — Vínculo do alerta com o painel

20h14–20h16 (2 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Em Configure notification message, abra Link dashboard and panel.
2. Selecione o dashboard didático e o painel de CPU.
3. Confira os links adicionados e identifique o contato necessário antes de salvar.

RESULTADO OBSERVADO
Dashboard e painel relacionados no rascunho da regra.

ORIENTAÇÃO AO PROFESSOR
A configuração atual apresenta apenas grafana-default-email, sem tentativas de entrega visíveis. Não há confirmação de webhook funcional neste ambiente Azure. A regra de exemplo foi cancelada. Completar o exercício de notificação exige receptor de laboratório e teste separado; não usar um endereço de aluno ou de produção sem defini-lo para a aula.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

### Slide 173 — Onde configurar o destinatário

20h16–20h18 (2 minutos)

Selecione Email e informe os destinatários.

Neste laboratório, vamos apenas localizar os campos.

DEMONSTRAÇÃO
Formulário real aberto na VM. Nenhum e-mail real foi inserido. Nenhum contato foi salvo nem mensagem enviada.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/

### Slide 174 — Onde configurar o Webhook

20h18–20h20 (2 minutos)

Em Contact points, selecione Webhook.

Informe URL, método e autenticação conforme a API receptora.

DEMONSTRAÇÃO
Formulário real, preenchido apenas com https://api.exemplo.invalid/alertas. URL ilustrativa: não foi enviada requisição. O contato não foi salvo. A versão 11.3 pode ter menos opções que a documentação latest.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/

### Slide 175 — Intervalo

Noite 5 — Intervalo
20h20–20h45 (25 minutos).
Antes de sair, preserve o estado da demonstração. Anuncie o retorno às 20h45. Não iniciar a prática da turma durante o intervalo. Na volta, explicar a folha antes de liberá-la.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 176 — Noite 5 — Exercícios
comentados

TRANSIÇÃO — Exercícios comentados
20h45–20h46 (1 minutos)
Mostre cada tarefa, o caminho de execução ou navegação, o resultado esperado e os erros comuns. A folha do aluno fica separada do gabarito. Ao final deste bloco, às 21h00, entregue ou libere a folha da noite.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 177 — Exercício 5.1 — Validar o ponto de contato

20h46–20h51 (5 minutos)
EXERCÍCIO COMENTADO 5.1
Use http://webhook:8080/ no contato e http://localhost:38090 no navegador.
Crie um ponto de contato Webhook no Grafana.
Envie uma mensagem de teste e confirme a chegada.
Salve o contato.
COMENTÁRIO DO PROFESSOR
Comente o endereço visto pelo serviço Grafana e a diferença entre testar contato e testar a regra. Não exigir configuração de e-mail, Slack ou serviços externos adicionais.
CRITÉRIO DE CORREÇÃO
Contato salvo e notificação de teste recebida.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/
Prática V8: receptor local http://webhook:8080/; navegador http://localhost:38090. Alerta em A Range, B Reduce/Last, C acima de 0.01; excluir route=metrics. Reutilizar reducer automático, renomear B e confirmar Input B em C. Avaliação 10s e pending 0s. TestAlert não comprova disparo da regra; conferir a mensagem com o nome da regra no receptor.

### Slide 178 — Exercício 5.2 — Criar e disparar a regra

20h51–20h56 (5 minutos)
EXERCÍCIO COMENTADO 5.2
Crie uma regra Grafana-managed com identificação do aluno.
Use a consulta por rota em A, Reduce / Last em B e Threshold acima de 0.01 em C.
Use avaliação de 10s, pendente de 0s e o contato testado.
Salve, gere tráfego e observe o valor e o estado.
Confirme uma notificação da regra no receptor.
CONSULTA COMPLETA

sum(rate(tns_request_duration_seconds_count{route!="metrics"}[5m])) by(route)

COMENTÁRIO DO PROFESSOR
Comente cada campo e sua justificativa. O limite pode precisar de ajuste se o tráfego de base já o ultrapassar. A mensagem de teste do contato não substitui a notificação da regra.
CRITÉRIO DE CORREÇÃO
Regra avaliada e mensagem de disparo recebida.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/
Prática V8: receptor local http://webhook:8080/; navegador http://localhost:38090. Alerta em A Range, B Reduce/Last, C acima de 0.01; excluir route=metrics. Reutilizar reducer automático, renomear B e confirmar Input B em C. Avaliação 10s e pending 0s. TestAlert não comprova disparo da regra; conferir a mensagem com o nome da regra no receptor.

### Slide 179 — Exercício 5.3 — Vincular e apresentar o projeto

20h56–21h00 (4 minutos)
EXERCÍCIO COMENTADO 5.3
Associe a regra ao seu dashboard e ao painel de tráfego.
Mostre a consulta, um erro nos logs e as anotações configuradas.
Apresente a evidência de recebimento do alerta.
Exporte ou registre seu trabalho antes de encerrar o ambiente.
COMENTÁRIO DO PROFESSOR
Comente os critérios de correção antes de liberar a prática. O alerta complementar de erros HTTP é opcional para quem terminar cedo; não substitui o fluxo principal.
CRITÉRIO DE CORREÇÃO
Dashboard e regra relacionados, com explicação do fluxo.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 180 — Noite 5 — Prática do aluno

TRANSIÇÃO — Prática do aluno
21h00–21h00 (0 minutos)
Agora libere alunos/Aluno_Noite_5.md. A turma trabalha no ambiente local até 22h15. Circule entre os alunos e ajude primeiro nas falhas que bloqueiam toda a prática. Os critérios e os comandos estão na folha.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 181 — Agora é com você

Noite 5 — Prática do aluno
21h00–22h15 (75 minutos).
PRÁTICA DO ALUNO — 75 MINUTOS
5.1: 20 minutos. Contato salvo e notificação de teste recebida.
5.2: 30 minutos. Regra avaliada e mensagem de disparo recebida.
5.3: 25 minutos. Dashboard e regra relacionados, com explicação do fluxo.
Não refazer toda a demonstração durante a prática. Ajude por evidências e use os comentários dos exercícios para orientar a correção. O roteiro Ubuntu é complementar e sua execução fica condicionada à liberação dos scripts após o teste Azure.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 182 — Correção e fechamento

Noite 5 — Correção
22h15–22h30 (15 minutos).
CORREÇÃO — 15 MINUTOS
5.1: Contato salvo e notificação de teste recebida.
5.2: Regra avaliada e mensagem de disparo recebida.
5.3: Dashboard e regra relacionados, com explicação do fluxo.
Peça uma resposta explicada, não apenas um print. Retome uma dificuldade comum e o gancho para a próxima noite. Na Noite 5, concluir com o projeto e continuidade.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 183 — Referências e continuidade

Noite 5 — Referência
22h30–22h30 (0 minutos).
Material de referência pós-curso. Não acrescenta tempo ao encontro.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

### Slide 184 — Obrigado

Fechamento visual dentro dos 15 minutos de correção e dúvidas.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

