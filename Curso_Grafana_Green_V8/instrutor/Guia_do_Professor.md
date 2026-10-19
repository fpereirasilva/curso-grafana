# Guia do professor — V8

Fábio Silva • Green Tecnologia • 5 noites

Os exercícios são criados manualmente; os modelos em exemplos-importaveis são apoio opcional. Capturas do aluno: Grafana 12.0.1. Demonstrações complementares do professor: Grafana 11.3.

## Slide 1 — Visualizando dados com Grafana

Abertura do curso. O bloco inicial da primeira noite está incluído nos 85 minutos de teoria.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 2 — Sobre o instrutor

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

## Slide 3 — Base do curso

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

## Slide 4 — Como funciona cada noite

Noite 1 — Teoria
18h33–18h34 (1 minutos).
Confirmar o intervalo de 25 minutos, das 20h20 às 20h45. Cada noite contém 85 minutos de teoria, 25 de demonstração, 15 de comentários, 75 de prática e 15 de correção.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 5 — As cinco noites

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

## Slide 6 — Noite 1 — Fundamentos e arquitetura

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

## Slide 7 — O que é observabilidade?

18h40–18h43 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Explique que ter muitos gráficos não garante observabilidade. É preciso conseguir relacionar sinais a uma pergunta real. Um serviço pode estar disponível e ainda falhar em uma operação importante. O curso começa pela interpretação, antes de ensinar os cliques.

PERGUNTA À TURMA
Um HTTP 200 garante que a experiência do usuário foi boa?

RESPOSTA ESPERADA
Não. Também precisamos observar duração, conteúdo e resultado da operação.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 8 — Monitoramento e investigação

18h43–18h46 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
São capacidades complementares. Ferramentas de monitoramento também podem coletar sinais ricos. Evite definir produtos como Zabbix ou Nagios somente por ping e up/down. O contraste aqui é entre perguntas e usos, não entre produtos antigos e novos.

PERGUNTA À TURMA
Um alerta explica sozinho a causa de uma falha?

RESPOSTA ESPERADA
Não. Ele indica uma condição que precisa ser investigada.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 9 — Métricas: medidas ao longo do tempo

18h46–18h49 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Dê exemplos de unidade e período. 12 requisições por segundo é uma taxa, não o total acumulado. A mesma métrica pode ter séries diferentes para cada rota, instância ou código HTTP. Métricas resumem; não preservam cada detalhe de uma requisição.

PERGUNTA À TURMA
O número 42 é suficiente para interpretar um painel?

RESPOSTA ESPERADA
Não. Precisamos da unidade, do período e do que foi medido.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

## Slide 10 — Logs: registros de eventos

18h49–18h52 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Use um erro simulado de pagamento como exemplo. Um log é evidência do que a aplicação registrou; sua mensagem pode ser incompleta. Logs estruturados em JSON facilitam extração de campos, mas exigem cuidado com volume e dados sensíveis. Não apresentar log como prova automática da causa.

PERGUNTA À TURMA
Qual a vantagem de registrar o nome do serviço e o horário?

RESPOSTA ESPERADA
Permite localizar e relacionar o evento no intervalo da investigação.

REFERÊNCIA
https://grafana.com/docs/loki/latest/get-started/overview/

## Slide 11 — Traces: caminho de uma requisição

18h52–18h55 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Descreva checkout, autenticação, consulta de banco e gateway de pagamento. Spans pai e filhos mostram relações e sobreposição no tempo. Não somar durações de etapas paralelas como se fossem sempre sequenciais. A aplicação precisa ser instrumentada para produzir esses dados.

PERGUNTA À TURMA
Uma etapa de pagamento pode fazer parte do mesmo trace do checkout?

RESPOSTA ESPERADA
Sim. Ela pode ser um span associado à mesma requisição.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

## Slide 12 — Métricas, logs e traces juntos

18h55–18h58 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Exemplo: a latência sobe, surge um log de timeout e um trace mostra demora no gateway. Essa combinação sustenta uma hipótese mais específica. Proximidade no tempo não basta para provar causalidade. Explicar as três fontes de sinal sem usar MELT como se fosse uma lista de apenas três itens.

PERGUNTA À TURMA
Um pico no gráfico e um log próximo garantem relação causal?

RESPOSTA ESPERADA
Não. A correlação precisa ser verificada no contexto e, quando possível, pelo trace_id.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 13 — Vídeo: observabilidade

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

## Slide 14 — O que é o Grafana?

19h01–19h04 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
O Grafana é a interface principal do curso. Prometheus, Loki e Tempo guardam a telemetria deste laboratório. O Grafana guarda configurações, dashboards e outras informações operacionais, mas não substitui esses backends de métricas, logs e traces. Não dizer que traduz automaticamente qualquer linguagem: nós escrevemos as consultas ou usamos o builder.

PERGUNTA À TURMA
Quem armazena as métricas do laboratório: Grafana ou Prometheus?

RESPOSTA ESPERADA
Prometheus; o Grafana consulta e apresenta os resultados.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 15 — Grafana: vantagens e limites

19h04–19h07 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Um dashboard bonito pode conter uma consulta errada. O Grafana precisa de fontes acessíveis e de unidades corretas. Segurança, autenticação e recursos avançados variam por edição e configuração. Não atribuir SAML, cache de consultas ou permissões avançadas a toda instalação OSS.

PERGUNTA À TURMA
O Grafana corrige automaticamente uma métrica coletada com labels errados?

RESPOSTA ESPERADA
Não. A instrumentação, a coleta e a consulta precisam ser corrigidas.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 16 — O que é o Prometheus?

19h07–19h10 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Apresente o fluxo pull: o Prometheus faz a requisição de scrape e recebe amostras de /metrics. Exporters traduzem informações do host ou de serviços para o formato de exposição. Grafana consulta o Prometheus pela API. A configuração local do professor usa scrape_interval de 5s, não um padrão universal.

PERGUNTA À TURMA
Quem inicia o scrape neste laboratório?

RESPOSTA ESPERADA
O Prometheus.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

## Slide 17 — Prometheus: vantagens e limites

19h10–19h13 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Cada combinação de labels cria uma série. IDs de usuário ou de requisição tendem a gerar muitas séries. Coleta periódica pode perder mudanças entre amostras; métricas de monitoramento não são a fonte ideal para faturamento exato. Escala e longa retenção podem exigir outra arquitetura. Não afirmar que pull é sempre superior a push.

PERGUNTA À TURMA
Trace_id é uma boa label para toda métrica?

RESPOSTA ESPERADA
Em geral não: pode criar cardinalidade muito alta.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

## Slide 18 — Counter, gauge e distribuições

19h13–19h16 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Foque counter e gauge para os iniciantes. Counter não deve diminuir fora de resets; rate trata resets de contadores. Histogram agrupa observações em buckets; summary pode calcular quantis no cliente. Aprofundar histograma apenas como contexto, pois o curso básico não depende de cálculo de p95.

PERGUNTA À TURMA
Memória disponível é counter ou gauge?

RESPOSTA ESPERADA
Gauge, porque pode aumentar ou diminuir.

REFERÊNCIA
https://prometheus.io/docs/concepts/metric_types/

## Slide 19 — O que é o Loki?

19h16–19h19 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
No modelo do Loki, o índice se apoia em labels e metadados, sem indexar cada palavra do corpo do log como um índice de texto completo tradicional. Os dados dos logs são compactados em chunks. É preciso um coletor ou uma aplicação enviando os eventos.

PERGUNTA À TURMA
O Loki lê sozinho todos os arquivos de cada servidor?

RESPOSTA ESPERADA
Não. Um agente ou cliente precisa coletar e enviar os logs.

REFERÊNCIA
https://grafana.com/docs/loki/latest/get-started/overview/

## Slide 20 — Loki: vantagens e limites

19h19–19h22 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Evite prometer economia percentual universal ou dizer que qualquer instalação dispensa recursos. A seleção do fluxo e do intervalo afeta a quantidade de dados lidos. Trace_id deve ficar como campo do evento ou metadado adequado, evitando um fluxo indexado por cada requisição.

PERGUNTA À TURMA
Por que reduzir o período antes de pesquisar uma mensagem?

RESPOSTA ESPERADA
Porque reduz o conjunto de dados examinado e melhora o foco da investigação.

REFERÊNCIA
https://grafana.com/docs/loki/latest/get-started/overview/

## Slide 21 — O que é o Tempo?

19h22–19h25 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
A aplicação do professor usa OpenTelemetry e envia para tempo:4318/v1/traces, conforme o código local. Grafana consulta o Tempo pela porta de API 3200. Essas portas têm funções diferentes: ingestão de spans e consulta. O diagrama separa os caminhos de logs e traces.

PERGUNTA À TURMA
Promtail envia os spans da aplicação ao Tempo?

RESPOSTA ESPERADA
Não. Neste laboratório, a aplicação envia spans por OpenTelemetry/OTLP.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

## Slide 22 — Tempo: vantagens e limites

19h25–19h28 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Uma captura de trace é tão completa quanto a instrumentação e a amostragem permitem. Nem toda requisição precisa estar retida. Atributo error=true não é necessariamente igual a status OpenTelemetry Error; isso foi observado na aplicação demo. Não tratar um trace como causalidade comprovada por si só.

PERGUNTA À TURMA
Ter Tempo instalado garante traces de qualquer aplicação?

RESPOSTA ESPERADA
Não. A aplicação ou um mecanismo de instrumentação precisa produzir e enviar spans.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

## Slide 23 — PromQL: consulta de métricas

19h28–19h31 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Mostre a consulta do tutorial: sum(rate(tns_request_duration_seconds_count[5m])) by (route). Ler de dentro para fora. A janela 5m fornece as amostras para a taxa; o filtro de tempo da tela controla o período exibido. A prática detalhada ficará na Noite 2.

PERGUNTA À TURMA
A janela [5m] e Last 1 hour são a mesma configuração?

RESPOSTA ESPERADA
Não. Uma é a janela da função e a outra é o período consultado/exibido.

REFERÊNCIA
https://prometheus.io/docs/introduction/overview/

## Slide 24 — LogQL: consulta de logs

19h31–19h34 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Use como exemplo do professor, sem afirmar que a label service existe no Grafana News. No tutorial, o seletor usa filename. |= encontra texto; | json extrai campos quando o conteúdo é JSON válido. O envelope Docker do professor exige primeiro expor o campo log antes de tratar os campos da aplicação.

PERGUNTA À TURMA
O filtro de texto substitui a seleção de um fluxo?

RESPOSTA ESPERADA
Não. Primeiro selecionamos os fluxos, depois filtramos seu conteúdo.

REFERÊNCIA
https://grafana.com/docs/loki/latest/query/

## Slide 25 — TraceQL: consulta de traces

19h34–19h37 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Diferencie procurar uma lista de traces com uma expressão TraceQL de abrir diretamente um trace por ID. A expressão mostra recursos de serviço. Um segundo exemplo para discussão é { duration > 200ms }, sem garantir que o dado exista em todo período. A prática de rastreamento é complementar ao tutorial básico.

PERGUNTA À TURMA
O nome do serviço e o TraceID têm a mesma função?

RESPOSTA ESPERADA
Não. O serviço identifica a aplicação; TraceID identifica uma requisição/rastreamento.

REFERÊNCIA
https://grafana.com/docs/tempo/latest/traceql/

## Slide 26 — Promtail: papel no laboratório

19h37–19h40 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
Promtail não recebe os spans do OpenTelemetry deste laboratório e não envia dados ao Tempo. A configuração local aponta para /loki/api/v1/push. Explicar posições de leitura e coleta contínua sem aprofundar o arquivo de estado. Promtail atingiu EOL em 02/03/2026.

PERGUNTA À TURMA
Qual é o destino dos logs enviados pelo Promtail?

RESPOSTA ESPERADA
Loki.

REFERÊNCIA
https://grafana.com/docs/loki/latest/send-data/promtail/

## Slide 27 — Promtail e a migração para Alloy

19h40–19h43 (3 minutos)

EXPLICAÇÃO DO PROFESSOR
É uma explicação de ciclo de vida, não uma migração executada. Grafana Alloy é uma distribuição de coletor com capacidades para diferentes sinais. O curso não afirma que Alloy já esteja rodando na VM ou que simplesmente trocar a imagem preserve a configuração. Usar as instruções oficiais de conversão.

PERGUNTA À TURMA
O diagrama com Alloy descreve a VM já alterada?

RESPOSTA ESPERADA
Não. Ele mostra a evolução possível; a VM observada usa o fluxo legado.

REFERÊNCIA
https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/

## Slide 28 — Arquitetura do ambiente do professor

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

## Slide 29 — Coleta de métricas: modelo pull

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

## Slide 30 — Caminhos separados de logs e traces

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

## Slide 31 — Tutorial do aluno e demonstração

19h51–19h53 (2 minutos)

EXPLICAÇÃO DO PROFESSOR
Não apresentar as fontes e os geradores do professor como já incluídos no pacote do aluno. Esta separação evita que o aluno cole uma consulta node_cpu em uma fonte que só expõe tns_. As instalações Docker e nativa são rotas para o Grafana; subir somente Grafana não cria automaticamente Prometheus, Loki e Tempo.

PERGUNTA À TURMA
Por que uma consulta do host pode retornar No data no tutorial?

RESPOSTA ESPERADA
Porque a fonte local pode não conter essa métrica ou seus labels.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 32 — Preparação para a demonstração

19h53–19h55 (2 minutos)

EXPLICAÇÃO DO PROFESSOR
Os pré-requisitos da turma são Docker em execução, Compose e acesso aos arquivos. O professor primeiro demonstra; a turma executa após intervalo e comentário dos exercícios. A instalação nativa ainda não foi testada nesta etapa. Não prometer que o script já foi validado no Azure.

PERGUNTA À TURMA
Em que momento os alunos começam a executar a folha?

RESPOSTA ESPERADA
Às 21h00, depois dos exercícios comentados.

REFERÊNCIA
https://grafana.com/tutorials/grafana-fundamentals/

## Slide 33 — Noite 1 — Demonstração

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

## Slide 34 — Demonstração: instalação Docker

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

## Slide 35 — A aplicação Grafana News

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

## Slide 36 — Primeiro acesso

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

## Slide 37 — Fonte de dados

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

## Slide 38 — Demonstração: roteiro Ubuntu

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

## Slide 39 — Ambiente real do professor

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

## Slide 40 — Fontes de dados do laboratório

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

## Slide 41 — Intervalo

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

## Slide 42 — Noite 1 — Exercícios
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

## Slide 43 — Exercício 1.1 — Obter e iniciar o laboratório Docker

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

## Slide 44 — Exercício 1.2 — Gerar atividade conhecida

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

## Slide 45 — Exercício 1.3 — Reconhecer os recursos do Grafana

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

## Slide 46 — Noite 1 — Prática do aluno

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

## Slide 47 — Agora é com você

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

## Slide 48 — Correção e fechamento

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

## Slide 49 — Noite 2 — Exploração de métricas

TRANSIÇÃO — Teoria
18h30–18h35 (5 minutos)
ABERTURA SUGERIDA
“Na primeira noite preparamos o ambiente. Hoje vamos transformar as ações na aplicação em consultas que conseguimos interpretar.”
RETOMADA E PREPARAÇÃO
Confirme aplicação e Grafana acessíveis. Gere tráfego e confira a fonte Prometheus no Explore. Deixe prontas as consultas do contador, rate e sum por route. Abra a seção Explore your metrics do tutorial.
CONDUÇÃO
Mostre primeiro a métrica bruta. Pergunte o que significa um contador crescente. Depois introduza rate e a unidade por segundo. Só então agregue por rota e por status_code. Mude o período exibido e explique sua diferença para a janela [5m] da consulta.
PERGUNTAS PARA A TURMA
“Esse número é um total ou uma taxa?” “Qual label identifica a linha?” “O que muda quando trocamos route por status_code?”
PONTO DE ATENÇÃO
Se aparecer No data, confira a fonte, o período e o alvo app:80. Uma taxa precisa de amostras. Evite resolver ausência de dados trocando a consulta por um zero.
CRITÉRIO DE SAÍDA
Cada aluno executa duas consultas e explica agrupamento e unidade com suas próprias palavras.
GANCHO
“A métrica mostra uma mudança. Na próxima noite vamos procurar os eventos que ajudam a entendê-la.”
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

## Slide 50 — Uma série temporal

Noite 2 — Teoria
18h35–18h42 (7 minutos).
Peça exemplos de perguntas: quantas requisições por segundo? Qual rota? Qual código? Diferencie o nome da métrica de seus labels.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 51 — Métrica, valor e unidade

Noite 2 — Teoria
18h42–18h49 (7 minutos).
EXPLICAÇÃO DO PROFESSOR
Decomponha tns_request_duration_seconds_count: a família trata duração, mas a série _count conta as observações. Não conclua que o resultado dessa série é uma latência.
PERGUNTA DE VERIFICAÇÃO
A série _count mostra diretamente quantos segundos uma requisição levou?
RESPOSTA ESPERADA
Não. Ela mostra a contagem de observações.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 52 — Counter e gauge

Noite 2 — Teoria
18h49–18h55 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Use um total acumulado e uma temperatura como exemplos distintos. Peça aos alunos que escolham o tipo adequado para uma fila que cresce e diminui. Referência: https://prometheus.io/docs/concepts/metric_types/
PERGUNTA DE VERIFICAÇÃO
O tamanho atual de uma fila combina com qual tipo?
RESPOSTA ESPERADA
Gauge, porque o valor pode subir e descer.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 53 — Contador e taxa

Noite 2 — Teoria
18h55–19h01 (6 minutos).
Evite interpretar o valor acumulado como tráfego por segundo. Peça ao aluno comparar o resultado bruto com a consulta seguinte.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 54 — O significado de uma taxa

Noite 2 — Teoria
19h01–19h07 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Os números são um exemplo didático de média, não uma reprodução exata do algoritmo de rate. Explique que rate também lida com resets de contador e calcula sobre amostras. A unidade muda de total para ocorrências por segundo.
PERGUNTA DE VERIFICAÇÃO
Se o total cresceu, sabemos a taxa sem conhecer o tempo transcorrido?
RESPOSTA ESPERADA
Não. Precisamos relacionar a mudança ao intervalo.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 55 — A função rate

Noite 2 — Teoria
19h07–19h13 (6 minutos).
No terminal/editor, usar rate(tns_request_duration_seconds_count[5m]). Não confundir janela da função com período exibido na tela. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 56 — Labels identificam séries

Noite 2 — Teoria
19h13–19h19 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Use labels que aparecem na stack. Um gráfico pode ter várias linhas porque há várias combinações, mesmo com o mesmo nome de métrica. Referência: https://prometheus.io/docs/prometheus/latest/querying/basics/
PERGUNTA DE VERIFICAÇÃO
Por que a consulta de uma métrica pode produzir mais de uma linha?
RESPOSTA ESPERADA
Porque existem séries com combinações diferentes de labels.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 57 — Agrupamento por rota

Noite 2 — Teoria
19h19–19h25 (6 minutos).
Demonstrar a diferença entre somar tudo e agrupar. O aluno deve apontar o label route no resultado. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 58 — Agrupamento por status

Noite 2 — Teoria
19h25–19h31 (6 minutos).
Não assumir que todo status já existe nos dados. A próxima noite gera um erro de propósito.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 59 — Filtro e agrupamento

Noite 2 — Teoria
19h31–19h37 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Diferencie escolher somente um código de resposta e somar o tráfego por rota. Mostre sintaxe de seletor apenas como leitura, antes da demonstração no Explore.
PERGUNTA DE VERIFICAÇÃO
Somar por rota e filtrar uma rota são a mesma operação?
RESPOSTA ESPERADA
Não. Uma combina séries por grupo e a outra restringe a seleção.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 60 — Intervalo e atualização

Noite 2 — Teoria
19h37–19h43 (6 minutos).
Compare Last 5 minutes e Last 15 minutes. Explique por que mudar a atualização da tela não cria amostras que não foram coletadas.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 61 — Sem dados no gráfico

Noite 2 — Teoria
19h43–19h49 (6 minutos).
Guia de recuperação: consultar métrica bruta, verificar Prometheus e os targets antes de alterar a expressão. Não substituir No data por zero sem investigar.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 62 — Leitura crítica do resultado

Noite 2 — Teoria
19h49–19h55 (6 minutos).
EXPLICAÇÃO DO PROFESSOR
Peça à turma uma frase completa: a rota X recebeu aproximadamente Y requisições por segundo no período mostrado. Discuta por que duas telas com períodos diferentes não são comparações equivalentes.
PERGUNTA DE VERIFICAÇÃO
O número 0,2 sozinho é suficiente para interpretar um gráfico?
RESPOSTA ESPERADA
Não. Precisamos de unidade, contexto e período.
Durante este bloco, a turma discute os exemplos. A execução individual fica para depois da demonstração e do intervalo.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 63 — Noite 2 — Demonstração

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

## Slide 64 — Primeira consulta

Noite 2 — Demonstração
19h56–20h00 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Usar Shift + Enter ou Run query. Se aparecer No data, conferir fonte e intervalo. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 65 — A função rate

Noite 2 — Demonstração
20h00–20h04 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
No terminal/editor, usar rate(tns_request_duration_seconds_count[5m]). Não confundir janela da função com período exibido na tela. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 66 — Agrupamento por rota

Noite 2 — Demonstração
20h04–20h08 (4 minutos).
DEMONSTRAÇÃO DO PROFESSOR
A turma observa; os alunos executarão depois do intervalo.
Demonstrar a diferença entre somar tudo e agrupar. O aluno deve apontar o label route no resultado. 
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 67 — Consulta de CPU no Explore

20h08–20h11 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. No Explore, selecione Prometheus e Code.
2. Cole a consulta, execute e observe a série vm-azure-professor.
3. Explique por que subtraímos a fração idle e multiplicamos por 100.

CONSULTA
100 * (1 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])))

RESULTADO OBSERVADO
Uma série de uso de CPU por instância.

ORIENTAÇÃO AO PROFESSOR
Consulta executada com resultado visível. A média por instância mantém o percentual entre 0 e 100 para o uso médio dos núcleos. O laboratório do aluno usa métricas tns_; esta consulta exige node-exporter do ambiente do professor.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

## Slide 68 — Filtro por variável de host

20h11–20h14 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Abra o dashboard 02.
2. Selecione vm-azure-professor na variável host e remova All.
3. Compare os títulos e a curva de CPU.

RESULTADO OBSERVADO
Filtro aplicado a uma instância específica.

ORIENTAÇÃO AO PROFESSOR
Demonstração de navegação, não de criação de variáveis. Use os painéis de CPU para explicar o filtro. O painel intitulado Top 5 processos por memória mostra uma série agregada de node-exporter; não o apresente como inventário validado de processos.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

## Slide 69 — CPU e memória de containers

20h14–20h17 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Abra o dashboard 03.
2. Identifique containers na legenda de CPU e de memória.
3. Explique a diferença entre taxa de CPU e quantidade de bytes de memória.

RESULTADO OBSERVADO
Séries de CPU e memória visíveis com nomes de containers.

ORIENTAÇÃO AO PROFESSOR
O dashboard mantém o nome cAdvisor, mas o histórico fornecido descreve um exportador customizado baseado em Docker stats. A captura comprova dados no painel, não certifica a implementação do coletor. topk em consulta de intervalo pode mostrar mais de cinco nomes no período, pois os integrantes mudam ao longo do tempo.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

## Slide 70 — Métricas da aplicação de e-commerce

20h17–20h20 (3 minutos)

DEMONSTRAÇÃO REAL DO PROFESSOR
1. Abra o dashboard 05.
2. Compare vazão em req/s e latência por endpoint.
3. Identifique os endpoints de checkout e pagamento.

RESULTADO OBSERVADO
Vazão e latência com dados por endpoint.

ORIENTAÇÃO AO PROFESSOR
Aplicação de simulação do professor, diferente do Grafana News. A legenda 95th % no painel de latência é um cálculo sobre os valores apresentados; não afirmar que comprova p95 da distribuição de requisições sem verificar a consulta. O roteiro usa somente a leitura básica de vazão e latência.

Captura de sessão realizada em 18/10/2026. Não representa dados fixos para outras aulas.
Fonte: ambiente Grafana do professor, Azure. Referência pedagógica: https://grafana.com/tutorials/grafana-fundamentals/

## Slide 71 — Intervalo

Noite 2 — Intervalo
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

## Slide 72 — Noite 2 — Exercícios
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

## Slide 73 — Exercício 2.1 — Explorar a métrica da aplicação

20h46–20h51 (5 minutos)
EXERCÍCIO COMENTADO 2.1
Abra Explore e selecione Prometheus.
Execute a métrica bruta.
Identifique dois labels disponíveis e registre o significado do valor.
CONSULTA COMPLETA
tns_request_duration_seconds_count
COMENTÁRIO DO PROFESSOR
Comente o nome da métrica, a seleção da fonte e a leitura dos labels. Explique o erro de interpretar a contagem como duração.
CRITÉRIO DE CORREÇÃO
Consulta executada e interpretação da contagem.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 74 — Exercício 2.2 — Consultar a taxa por rota

20h51–20h56 (5 minutos)
EXERCÍCIO COMENTADO 2.2
Execute a consulta de taxa por rota.
Gere atividade na aplicação e aguarde a coleta.
Escolha Last 5 minutes e compare as séries.
Registre a unidade e a rota identificada.
CONSULTA COMPLETA
sum(rate(tns_request_duration_seconds_count[5m])) by (route)
COMENTÁRIO DO PROFESSOR
Mostre rate primeiro e depois sum by. Explique que a atualização da tela não cria amostras novas no Prometheus.
CRITÉRIO DE CORREÇÃO
Taxa interpretada com unidade e agrupamento.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 75 — Exercício 2.3 — Comparar agrupamentos

20h56–21h00 (4 minutos)
EXERCÍCIO COMENTADO 2.3
Troque o agrupamento por status_code.
Compare o resultado com o agrupamento por rota.
Mude o período mostrado e descreva o efeito.
Entregue uma frase explicando cada consulta.
CONSULTA COMPLETA
sum(rate(tns_request_duration_seconds_count[5m])) by (status_code)
COMENTÁRIO DO PROFESSOR
Comente que a pergunta muda ao trocar o agrupamento. Se não houver série de erro, não invente um código inexistente no resultado.
CRITÉRIO DE CORREÇÃO
Duas consultas comparadas e uma conclusão sustentada.
Apresente a tarefa antes de liberar a folha do aluno. Na folha não constam os comentários de correção do professor.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 76 — Noite 2 — Prática do aluno

TRANSIÇÃO — Prática do aluno
21h00–21h00 (0 minutos)
Agora libere alunos/Aluno_Noite_2.md. A turma trabalha no ambiente local até 22h15. Circule entre os alunos e ajude primeiro nas falhas que bloqueiam toda a prática. Os critérios e os comandos estão na folha.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 77 — Agora é com você

Noite 2 — Prática do aluno
21h00–22h15 (75 minutos).
PRÁTICA DO ALUNO — 75 MINUTOS
2.1: 25 minutos. Consulta executada e interpretação da contagem.
2.2: 25 minutos. Taxa interpretada com unidade e agrupamento.
2.3: 25 minutos. Duas consultas comparadas e uma conclusão sustentada.
Não refazer toda a demonstração durante a prática. Ajude por evidências e use os comentários dos exercícios para orientar a correção. O roteiro Ubuntu é complementar e sua execução fica condicionada à liberação dos scripts após o teste Azure.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 78 — Correção e fechamento

Noite 2 — Correção
22h15–22h30 (15 minutos).
CORREÇÃO — 15 MINUTOS
2.1: Consulta executada e interpretação da contagem.
2.2: Taxa interpretada com unidade e agrupamento.
2.3: Duas consultas comparadas e uma conclusão sustentada.
Peça uma resposta explicada, não apenas um print. Retome uma dificuldade comum e o gancho para a próxima noite. Na Noite 5, concluir com o projeto e continuidade.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

## Slide 79 — Noite 3 — Exploração de logs

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

## Slide 80 — Métricas e eventos

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

## Slide 81 — Estrutura de um evento de log

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

## Slide 82 — Labels e conteúdo no Loki

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

## Slide 83 — Leitura do seletor LogQL

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

## Slide 84 — Filtro por texto

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

## Slide 85 — Leitura de uma linha

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

## Slide 86 — Erro, evento e diagnóstico

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

## Slide 87 — A janela da investigação

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

## Slide 88 — Live e histórico

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

## Slide 89 — Volume de logs e detalhes

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

## Slide 90 — Evidência e hipótese

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

## Slide 91 — Roteiro de investigação

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

## Slide 92 — Noite 3 — Demonstração

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

## Slide 93 — Conexão com o Loki

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

## Slide 94 — Uma consulta de logs

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

## Slide 95 — Um erro controlado

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

## Slide 96 — Filtro por conteúdo

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

## Slide 97 — Erros de pagamento no Loki

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

## Slide 98 — JSON do Docker e evento da aplicação

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

## Slide 99 — Do log ao trace no Tempo

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

## Slide 100 — Intervalo

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

## Slide 101 — Noite 3 — Exercícios
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

## Slide 102 — Exercício 3.1 — Conectar e explorar Loki

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

## Slide 103 — Exercício 3.2 — Gerar e localizar um erro

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

## Slide 104 — Exercício 3.3 — Explicar a investigação

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

## Slide 105 — Noite 3 — Prática do aluno

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

## Slide 106 — Agora é com você

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

## Slide 107 — Correção e fechamento

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

## Slide 108 — Noite 4 — Dashboards e anotações

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

## Slide 109 — Uma pergunta por painel

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

## Slide 110 — Dashboard e painel

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

## Slide 111 — Consulta e apresentação

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

## Slide 112 — Escolha da visualização

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

## Slide 113 — Título e unidade

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

## Slide 114 — Eixos, legenda e período

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

## Slide 115 — Agregação e redução visual

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

## Slide 116 — Salvamento e organização

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

## Slide 117 — Evento pontual e intervalo

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

## Slide 118 — Anotações manuais e por consulta

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

## Slide 119 — Correlação e causalidade

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

## Slide 120 — Dashboard compreensível

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

## Slide 121 — Revisão antes da demonstração

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

## Slide 122 — Noite 4 — Demonstração

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

## Slide 123 — Do Explore ao dashboard

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

## Slide 124 — Anotação manual

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

## Slide 125 — Anotações vindas do Loki

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

## Slide 126 — Painel criado pela interface

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

## Slide 127 — Anotação manual do exercício

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

## Slide 128 — Resultado salvo do exercício gráfico

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

## Slide 129 — Intervalo

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

## Slide 130 — Noite 4 — Exercícios
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

## Slide 131 — Exercício 4.1 — Criar e salvar um dashboard

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

## Slide 132 — Exercício 4.2 — Registrar um evento manual

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

## Slide 133 — Exercício 4.3 — Exibir erros como anotações

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

## Slide 134 — Noite 4 — Prática do aluno

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

## Slide 135 — Agora é com você

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

## Slide 136 — Correção e fechamento

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

## Slide 137 — Noite 5 — Alertas e projeto final

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

## Slide 138 — O que dispara um alerta

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

## Slide 139 — Regra, instância e mensagem

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

## Slide 140 — Consulta da regra

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

## Slide 141 — A, B e C

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

## Slide 142 — Escolha de um limite

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

## Slide 143 — Avaliação e espera

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

## Slide 144 — Estados do alerta

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

## Slide 145 — Sem dados e falha de avaliação

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

## Slide 146 — Contato e entrega

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

## Slide 147 — Duas opções de webhook

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

## Slide 148 — Alerta e painel relacionado

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

## Slide 149 — Vídeo: alertas no dashboard

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

## Slide 150 — Diagnóstico de alertas

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

## Slide 151 — Síntese do ciclo completo

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

## Slide 152 — E-mail: servidor e destinatário

19h31–19h35 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
No Grafana OSS, configurar SMTP no grafana.ini ou por variáveis GF_SMTP_*. Exemplo de arquivo Ubuntu: /etc/grafana/grafana.ini. Em Docker, o processo lê as variáveis do serviço Grafana; alterações normalmente exigem recriar o container. Não configurar credenciais reais neste laboratório; mostrar onde ficam.

PERGUNTA À TURMA
Informar Addresses configura o servidor SMTP?

RESPOSTA ESPERADA
Não. Addresses é o destinatário; o transporte SMTP precisa existir.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/

## Slide 153 — SMTP: exemplo de configuração

19h35–19h39 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Usar domínio .invalid para deixar explícito que é um exemplo. Se o servidor exigir autenticação, configurar user e password por mecanismo de segredo apropriado. Não colocar senhas na apostila, Git ou screenshots. O envio não será testado por solicitação do usuário; o objetivo é localizar as configurações.

PERGUNTA À TURMA
O arquivo mostrado já habilita envio no ambiente do professor?

RESPOSTA ESPERADA
Não. É um exemplo para explicar as propriedades.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#smtp

## Slide 154 — Webhook: alerta para uma API externa

19h39–19h43 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Webhook é a opção de integração de saída. Não é a API de provisionamento do Grafana. A API receptora precisa aceitar o formato do JSON e a autenticação escolhida. Pode ser necessário um adaptador para transformar o payload no formato exigido pelo software terceiro.

PERGUNTA À TURMA
Qual lado recebe o HTTP POST do Webhook?

RESPOSTA ESPERADA
O endpoint receptor do sistema terceiro ou do adaptador.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/

## Slide 155 — Webhook e API do Grafana

19h43–19h47 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Exemplos da API de provisionamento compatível com o laboratório 11.3: GET /api/v1/provisioning/alert-rules e GET /api/v1/provisioning/contact-points. São exemplos de leitura, não chamados executados. Para criar ou alterar recursos, usar autenticação e privilégios adequados. Preferir conta de serviço e token compatíveis com a versão. Não expor admin/admin nos slides de integração.

PERGUNTA À TURMA
Qual usar para avisar um sistema de chamados quando um alerta dispara?

RESPOSTA ESPERADA
Webhook; a API de provisionamento tem outro propósito.

REFERÊNCIA
https://grafana.com/docs/grafana/v11.3/developers/http_api/alerting_provisioning/

## Slide 156 — Arquitetura das notificações

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

## Slide 157 — O que uma integração precisa validar

19h51–19h55 (4 minutos)

EXPLICAÇÃO DO PROFESSOR
Payload ilustrativo reduzido: {"status":"firing","alerts":[{"labels":{"alertname":"CPUAlta"},"annotations":{"summary":"Verificar CPU do host"}}]}. Não é a mensagem completa nem um schema mínimo universal. Cada API tem contrato próprio. Um HTTP 2xx confirma a aceitação HTTP, não necessariamente a criação final de um chamado. No lab desta sessão não há entrega validada.

PERGUNTA À TURMA
Preview com Firing significa que o software terceiro recebeu a mensagem?

RESPOSTA ESPERADA
Não. A prévia avalia a condição; a entrega precisa ser verificada no receptor.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/

## Slide 158 — Noite 5 — Demonstração

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

## Slide 159 — Ponto de contato

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

## Slide 160 — Redução e limite

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

## Slide 161 — Prática de disparo

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

## Slide 162 — Receptor de notificações

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

## Slide 163 — Consulta da regra de CPU

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

## Slide 164 — Prévia da condição normal

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

## Slide 165 — Prévia com condição atendida

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

## Slide 166 — Vínculo do alerta com o painel

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

## Slide 167 — Onde configurar o destinatário

20h16–20h18 (2 minutos)

Selecione Email e informe os destinatários.

Neste laboratório, vamos apenas localizar os campos.

DEMONSTRAÇÃO
Formulário real aberto na VM. Nenhum e-mail real foi inserido. Nenhum contato foi salvo nem mensagem enviada.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/

## Slide 168 — Onde configurar o Webhook

20h18–20h20 (2 minutos)

Em Contact points, selecione Webhook.

Informe URL, método e autenticação conforme a API receptora.

DEMONSTRAÇÃO
Formulário real, preenchido apenas com https://api.exemplo.invalid/alertas. URL ilustrativa: não foi enviada requisição. O contato não foi salvo. A versão 11.3 pode ter menos opções que a documentação latest.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/

## Slide 169 — Intervalo

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

## Slide 170 — Noite 5 — Exercícios
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

## Slide 171 — Exercício 5.1 — Validar o ponto de contato

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

## Slide 172 — Exercício 5.2 — Criar e disparar a regra

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

## Slide 173 — Exercício 5.3 — Vincular e apresentar o projeto

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

## Slide 174 — Noite 5 — Prática do aluno

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

## Slide 175 — Agora é com você

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

## Slide 176 — Correção e fechamento

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

## Slide 177 — Referências e continuidade

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

## Slide 178 — Obrigado

Fechamento visual dentro dos 15 minutos de correção e dúvidas.
REFERÊNCIAS
https://grafana.com/tutorials/grafana-fundamentals/
https://github.com/grafana/tutorial-environment
https://prometheus.io/docs/concepts/metric_types/
https://prometheus.io/docs/prometheus/latest/querying/basics/
https://grafana.com/docs/loki/latest/query/log_queries/
https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/
https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/

