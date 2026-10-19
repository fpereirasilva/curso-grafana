# Slide 39 — Ambiente real do professor

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

# Slide 40 — Fontes de dados do laboratório

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

# Slide 67 — Consulta de CPU no Explore

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

# Slide 68 — Filtro por variável de host

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

# Slide 69 — CPU e memória de containers

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

# Slide 70 — Métricas da aplicação de e-commerce

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

# Slide 97 — Erros de pagamento no Loki

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

# Slide 98 — JSON do Docker e evento da aplicação

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

# Slide 99 — Do log ao trace no Tempo

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

# Slide 126 — Painel criado pela interface

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

# Slide 127 — Anotação manual do exercício

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

# Slide 128 — Resultado salvo do exercício gráfico

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

# Slide 163 — Consulta da regra de CPU

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

# Slide 164 — Prévia da condição normal

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

# Slide 165 — Prévia com condição atendida

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

# Slide 166 — Vínculo do alerta com o painel

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

# Slide 167 — Onde configurar o destinatário

20h16–20h18 (2 minutos)

Selecione Email e informe os destinatários.

Neste laboratório, vamos apenas localizar os campos.

DEMONSTRAÇÃO
Formulário real aberto na VM. Nenhum e-mail real foi inserido. Nenhum contato foi salvo nem mensagem enviada.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/

# Slide 168 — Onde configurar o Webhook

20h18–20h20 (2 minutos)

Em Contact points, selecione Webhook.

Informe URL, método e autenticação conforme a API receptora.

DEMONSTRAÇÃO
Formulário real, preenchido apenas com https://api.exemplo.invalid/alertas. URL ilustrativa: não foi enviada requisição. O contato não foi salvo. A versão 11.3 pode ter menos opções que a documentação latest.

REFERÊNCIA
https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/