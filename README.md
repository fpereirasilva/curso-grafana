# 📊 Curso Grafana: Visualizando Dados & Observabilidade de Ponta a Ponta

**Instrutor:** Fábio Silva ([LinkedIn](https://www.linkedin.com/in/silvapfabio))  
**Carga Horária:** 20 horas de formação técnica (5 noites × 4h, das 18:30 às 22:30, com intervalo das 20:20 às 20:45)  
**Metodologia:** Engenharia de Observabilidade Híbrida — 50% Fundamentação Teórica Aprofundada + 50% Laboratórios Práticos Hands-on em Sistemas Reais.  

> 🌟 **PORTAL CENTRAL DO ALUNO:**  
> Abra o arquivo interativo no seu navegador para acessar todos os guias, slides e apostilas:  
> 👉 **[00_COMECE_AQUI.html](00_COMECE_AQUI.html)**

---

## 🎥 VÍDEOS OFICIAIS DA APRESENTAÇÃO (EMBEDDED)

Assista aos vídeos oficiais demonstrativos presentes nos slides da apresentação do curso:

### 🎬 Vídeo 1: Introdução ao Grafana e Demonstração Prática
[![Vídeo 1: Introdução ao Grafana e Demonstração Prática](https://img.youtube.com/vi/TQur9GJHIIQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=TQur9GJHIIQ)
*(Clique na imagem acima para assistir ao vídeo no YouTube)*

### 🎬 Vídeo 2: Visão Geral de Dashboards, Painéis e Alertas no Grafana
[![Vídeo 2: Visão Geral de Dashboards, Painéis e Alertas no Grafana](https://img.youtube.com/vi/ClLp-iSoaSY/maxresdefault.jpg)](https://www.youtube.com/watch?v=ClLp-iSoaSY)
*(Clique na imagem acima para assistir ao vídeo no YouTube)*

---

## 📖 REFERÊNCIAS OFICIAIS — GRAFANA FUNDAMENTALS (GRAFANA LABS)

Este curso tem como espinha dorsal a trilha oficial de capacitação da **Grafana Labs**. Recomendamos aos alunos a leitura e consulta dos guias originais:

* 📘 **Tutorial Central:** [Grafana Fundamentals Tutorial](https://grafana.com/tutorials/grafana-fundamentals/) — Laboratório prático oficial de construção de dashboards com Prometheus e Grafana News.
* 📊 **Catálogo de Visualizações:** [Panels & Visualizations Reference](https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/) — Guia completo sobre Stat, Gauge, Bar Gauge, Heatmaps e Time Series.
* 🚨 **Engenharia de Alertas:** [Alert Rule Evaluation Fundamentals](https://grafana.com/docs/grafana/latest/alerting/fundamentals/alert-rule-evaluation/) — Máquina de estados de avaliação e tolerância temporal de alertas.
* 🪵 **Logs Estruturados com Loki:** [Grafana Loki Overview](https://grafana.com/docs/loki/latest/get-started/overview/) — Arquitetura de indexação por metadados e armazenamento em chunks.
* 🔍 **Linguagem LogQL:** [LogQL Query Syntax & Metrics](https://grafana.com/docs/loki/latest/query/log_queries/) — Como construir filtros de linha, parsers JSON e agregações numéricas.
* 🛰️ **Rastreamento Distribuído no Tempo:** [TraceQL Documentation](https://grafana.com/docs/tempo/latest/traceql/) — Como consultar e inspecionar spans com o Grafana Tempo e OpenTelemetry.
* ⚙️ **Agentes de Coleta:** [Promtail Setup](https://grafana.com/docs/loki/latest/send-data/promtail/) e a evolução moderna [Migrate from Promtail to Grafana Alloy](https://grafana.com/docs/alloy/latest/set-up/migrate/from-promtail/).
* 🔔 **Pontos de Contato e Notificadores:** [Configuração de Webhooks no Grafana](https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier/) e [Notificações por E-mail](https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/integrations/configure-email/).

---

## 🧭 Visão Geral e Guia de Início Rápido

Você pode executar os laboratórios do curso em três modalidades diferentes:

### 🐧 Cenário 1 (Recomendado): Na sua Máquina Virtual Linux / Ubuntu
Ideal para quem utiliza uma VM Ubuntu (VirtualBox, VMware, Hyper-V, Proxmox, WSL2 ou nuvem):
```bash
git clone https://github.com/fpereirasilva/curso-grafana.git
cd curso-grafana
bash iniciar-lab.sh      # Sobe os containers do laboratório
bash parar-lab.sh        # Encerra os containers preservando os dados
```
*(Manual mastigado de terminal: `cat GUIA_PRATICO_DO_ALUNO.txt`)*

### 🪟 Cenário 2: Direto no Windows (PowerShell & Docker Desktop)
Ideal para quem prefere rodar direto no Windows físico:
```powershell
git clone https://github.com/fpereirasilva/curso-grafana.git
cd curso-grafana
.\iniciar-lab-alunos.ps1  # Sobe os containers no Docker Desktop
.\parar-lab-alunos.ps1    # Encerra os containers
```

### ☁️ Cenário 3 (Avançado): Subir a Stack Completa na Nuvem Azure
Script automatizado para o aluno provisionar sua própria VM Ubuntu na Azure com a stack avançada do professor:
```powershell
.\scripts\deploy-azure-professor.ps1
.\scripts\sync-and-start-professor.ps1
```

---

## 🌐 Endereços dos Serviços no seu Navegador
* **📊 Grafana (Lab Alunos):** [http://localhost:3300](http://localhost:3300) *(ou `http://<IP-DA-VM>:3300`)*
* **📰 Aplicação de Notícias (Demo):** [http://localhost:38081](http://localhost:38081)
* **📬 Receptor de Notificações / Webhooks:** [http://localhost:38090](http://localhost:38090)
* **📊 Grafana (Stack do Professor):** porta `3000` (usuário `admin` / senha `admin`)

---

# 📚 EMENTA COMPLETA: FUNDAMENTAÇÃO TEÓRICA & LABORATÓRIOS PRÁTICOS

Abaixo está o conteúdo programático completo das 20 horas de formação, dividido por noite, detalhando a teoria técnica, arquitetura de sistemas e os exercícios práticos executados pelos alunos.

---

## 🟦 DIA 01 — Fundamentos de Observabilidade & Arquitetura do Grafana

### 📖 1. Fundamentação Teórica (18:30 – 19:55)

#### 1.1 O que é Observabilidade Moderna vs. Monitoramento Tradicional
O monitoramento tradicional (conhecido na indústria como *check-based monitoring*, típico de ferramentas legadas como Nagios ou checks simples de Zabbix) opera sob uma premissa binária: **o componente está de pé ou caído (*Up/Down*)?**  
Em arquiteturas modernas de microsserviços, nuvem e contêineres, esse modelo falhou. Um serviço HTTP pode perfeitamente responder com código de status `200 OK` (aparentando estar saudável), mas estar entregando respostas lentas, com dados truncados, ou com altíssima taxa de erros intermitentes para 10% dos usuários.

> **Definição Canônica (Engenharia de Controle):**  
> *"Observabilidade é a medida de quão bem os estados internos de um sistema computacional podem ser inferidos exclusivamente a partir do conhecimento de suas saídas externas."*

Para atingir a observabilidade real, um sistema precisa produzir telemetria organizada sob a sigla **M.E.L.T.**:
* **Métricas:** Séries temporais numéricas agregáveis. Respondem com máxima eficiência: *"O que está acontecendo e quando começou o desvio?"*.
* **Eventos:** Ocorrências discretas com carimbo de tempo (ex: um deploy realizado, uma VM reiniciada, um pod que caiu).
* **Logs:** Registros textuais detalhados com contexto específico. Respondem: *"Por que aconteceu e qual foi a exceção?"*.
* **Traces:** A linha do tempo da jornada de uma requisição fim a fim entre múltiplos serviços. Respondem: *"Onde exatamente ocorreu o gargalo de latência?"*.

#### 1.2 Arquitetura Interna do Grafana 11
O Grafana é projetado como uma plataforma modular desacoplada:
* **Camada Frontend (React + WebGL):** Renderização vetorial e acelerada por hardware de alta performance. O Grafana é capaz de desenhar gráficos com mais de 100.000 pontos de amostragem na tela sem travar a interface do navegador.
* **Camada Backend (Go Core):**
  * **Proxy Reverso Seguro:** O navegador do usuário nunca se conecta diretamente aos bancos de dados de métricas (Prometheus, Loki, MySQL). Todas as consultas passam pelo backend do Grafana, garantindo autenticação, cache, controle de acesso baseado em papéis (RBAC) e auditoria.
  * **Alerting Engine:** Motor unificado que avalia regras de alerta periodicamente e se integra ao Alertmanager.
  * **Repositório de Metadados:** Armazenamento de dashboards, usuários, preferências e sessões via SQLite embutido (desenvolvimento e laboratórios) ou PostgreSQL/MySQL gerenciado (ambientes corporativos de alta disponibilidade).
* **Conceito de Data Source Plugável:** O Grafana é completamente agnóstico em relação a onde os dados estão salvos. Um Data Source é um adaptador que traduz a intenção visual do usuário na linguagem nativa do banco de destino (PromQL, LogQL, TraceQL, SQL, CloudWatch, etc.).

#### 1.3 O Modelo de Dados do Prometheus (TSDB)
* **Arquitetura PULL vs. PUSH:** O Prometheus inovou na indústria ao adotar o modelo de raspagem periódica HTTP (*Scrape/Pull*). O servidor central conecta nas aplicações em intervalos regulares (ex: a cada 5 segundos) e puxa as métricas. Isso evita que o coletor seja derrubado por tempestades de métricas (*push storms*) e permite detectar imediatamente quando um host parou de responder.
* **Estrutura de uma Série Temporal:** Uma série no Prometheus é definida univocamente por seu nome e um conjunto de rótulos chave-valor:
  ```text
  nome_da_metrica{label_1="valor_1", label_2="valor_2"} timestamp -> float64
  ```
* **Os 4 Tipos Canônicos de Métricas:**
  1. **Counter (Contador):** Valor numérico cumulativo monotônico que apenas cresce ou é zerado quando o processo reinicia (ex: `http_requests_total`).
  2. **Gauge (Medidor):** Valor instantâneo que sobe e desce livremente (ex: `node_memory_MemAvailable_bytes`, temperatura de CPU, conexões ativas).
  3. **Histogram (Histograma):** Agrupa observações em baldes configuráveis (*buckets*) para cálculo de percentis de latência (p50, p95, p99).
  4. **Summary (Sumário):** Semelhante ao histograma, mas calcula quantis diretamente no cliente.

#### 1.4 Matemática Básica do PromQL (Prometheus Query Language)
* **Instant Vector vs. Range Vector:**
  * Vetor Instantâneo (`node_cpu_seconds_total`): Retorna o valor numérico mais recente gravado em cada série temporal.
  * Vetor de Faixa (`node_cpu_seconds_total[5m]`): Retorna uma matriz com todos os pontos gravados nos últimos 5 minutos para cada série temporal.
* **A Função `rate()`:** Calcula a taxa média de aumento por segundo de um contador, corrigindo automaticamente quedas causadas por reinicializações do processo.
* **Fórmula do Uso Percentual de CPU do Servidor:**
  $$\text{CPU em Uso (\%)} = 100 - (\text{avg}(\text{rate}(\text{node\_cpu\_seconds\_total}\{\text{mode}=\text{"idle"}\}[1m])) \times 100)$$

---

### 💻 2. Laboratório Prático Hands-on (20:45 – 22:15)

* **Exercício 1.1 — Subindo o Laboratório Inicial:**  
  Execução do comando `bash iniciar-lab.sh` (ou `.\iniciar-lab-alunos.ps1`) para inicializar a stack de observabilidade e a aplicação de notícias.  
  *Resultado Esperado:* Containers ativos e saudáveis no Docker.
* **Exercício 1.2 — Validação e Primeiro Acesso:**  
  Abertura de três abas no navegador:
  * Grafana: `http://localhost:3300` (ou `:3000`)
  * Aplicação News: `http://localhost:38081`
  * Receptor de Webhooks: `http://localhost:38090`
* **Exercício 1.3 — Geração de Atividade e Séries Temporais:**  
  Publicação de notícias e registro de votos na aplicação para gerar tráfego real e alimentar o banco de métricas do Prometheus.
* **Exercício 1.4 — Navegação no Grafana Explore:**  
  Utilização da ferramenta de pesquisa ad-hoc (ícone da bússola) para executar consultas PromQL brutas:
  ```promql
  node_cpu_seconds_total
  rate(node_cpu_seconds_total{mode="idle"}[1m])
  ```
* **Exercício 1.5 — Construindo o Primeiro Painel do Zero:**  
  Criação de um novo Dashboard com um painel do tipo **Stat** calculando o uso real de CPU, aplicando limiares semânticos (*Thresholds*: Verde até 60%, Amarelo até 80%, Vermelho acima) e unidade percentual `0-100%`.

📥 **Guia da Noite 1:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V12/alunos/Aluno_Noite_1.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V12/alunos/Aluno_Noite_1.pdf)

---

## 🟩 DIA 02 — Métricas e contexto de observabilidade

### 📖 1. Teoria aprofundada (18:30–20:20 · 110 minutos)

O objetivo é interpretar métricas em um contexto geral: infraestrutura, aplicações, experiência do usuário e negócio. A discussão começa pela pergunta que queremos responder, pela grandeza medida e pelas decisões que os dados podem sustentar. Os conceitos são estudados nos slides, com exemplos calculados e perguntas de verificação. O ambiente Grafana será utilizado pelos alunos junto com o professor após o intervalo.

#### Métricas e contexto de observabilidade

Métricas ajudam a responder perguntas sobre o comportamento de sistemas. Para interpretar um valor, identifique o que foi medido, a unidade, a população e o instante ou intervalo. A forma do gráfico só ganha significado depois dessas verificações. Ao longo desta noite, estudaremos estados atuais, contagens acumuladas, taxas e distribuições, sempre distinguindo uma observação de uma conclusão sobre sua causa.
A primeira parte da noite é dedicada a conceitos e casos didáticos, sem operação do Grafana. Depois do intervalo, todos executam juntos as consultas de Grafana News. Na sequência, cada aluno consolida os exercícios 2.1, 2.2 e 2.3. Os exemplos com números usados na teoria são inventados para ensino; não representam medições do ambiente da turma.

#### A evolução da observação de sistemas

Checks de host observam disponibilidade e recursos. Métricas de aplicação acrescentam volume, erros e duração das operações. Em serviços distribuídos, uma requisição pode percorrer processos e dependências externas. A investigação precisa preservar o contexto entre essas etapas.
CPU baixa não comprova que uma compra, autenticação ou consulta funciona. Uma aplicação pode aguardar banco, rede ou serviço externo. A observação deve relacionar recursos, comportamento do serviço e efeito percebido pelo usuário.

#### Monitoramento e observabilidade

Monitoramento acompanha sinais, tendências e condições de interesse. Observabilidade descreve a capacidade de compreender o comportamento interno a partir dos dados emitidos. Essas atividades se complementam. Ambas podem usar métricas, logs e traces.
Um alerta indica uma mudança que merece atenção. A investigação compara hipóteses com evidências. A instalação de uma interface não substitui instrumentação, contexto, retenção e qualidade das consultas.

#### Métricas, logs e traces

Métricas são medidas numéricas observadas ao longo do tempo. Logs descrevem eventos e seus campos. Traces relacionam operações de uma requisição por spans. Prometheus ou Mimir armazenam métricas, Loki armazena logs e Tempo armazena traces. Grafana consulta as fontes.
Os sinais respondem perguntas diferentes sobre o mesmo comportamento. Custo e utilidade dependem de volume, cardinalidade, retenção, consultas e amostragem. Perfis contínuos acrescentam evidências sobre consumo de recursos dentro do código.

#### Métrica: número com contexto

Uma medição interpretável combina grandeza, valor, unidade e contexto. Memória usada, duração de chamada e quantidade de requisições não podem ser comparadas como se fossem o mesmo objeto. O instante ou intervalo e as dimensões identificam a situação à qual o valor se refere.
Exemplo didático: um servidor utiliza 6 GiB. Em uma máquina de 8 GiB, isso corresponde a 75% da capacidade; em uma máquina de 64 GiB, a aproximadamente 9,4%. O mesmo absoluto leva a leituras diferentes. Também precisamos conferir se a definição inclui cache. Antes de comparar painéis, normalize unidades e confirme que ambos descrevem a mesma grandeza. Uma proporção de 0,05 pode representar 5%, mas 0,05 req/s representa frequência de eventos.

#### Infraestrutura, aplicação e negócio

Métricas de infraestrutura descrevem recursos como memória, processador, disco e filas. Métricas de aplicação descrevem a atividade do serviço, por exemplo volume, duração e respostas com falha. Métricas de negócio acompanham resultados como compras concluídas e pagamentos aprovados. Nenhuma camada substitui automaticamente as demais.
Exemplo didático: uma loja recebe mil tentativas de compra e duzentas falham enquanto a CPU permanece em 30%. Isso mostra que baixa utilização não comprova bom atendimento. Uma dependência externa é uma hipótese, mas os números não comprovam a causa. Para investigar, precisamos correlacionar sinais e entender a definição de cada medição. Total de chamadas HTTP também não equivale a total de pessoas: uma mesma pessoa ou automação pode fazer muitas chamadas.

#### Uma série temporal acompanha um contexto

Uma série temporal reúne observações de um mesmo contexto ao longo do tempo. Cada amostra tem um valor e um timestamp, que a posiciona na linha do tempo. No Prometheus, o nome da métrica e seu conjunto de labels identificam uma série. Se uma dimensão muda, podemos estar observando outra série.
Exemplo didático: o servidor A apresenta 6, 7 e 5 GiB em três instantes; o servidor B apresenta 3, 3 e 4 GiB nos mesmos instantes. Misturar todos os pontos em uma única linha, sem preservar a origem, produz uma história que nenhum servidor viveu. Leia a legenda e a seleção de ambiente antes de interpretar tendência, mudança ou comparação. Um ponto isolado descreve uma observação, não uma tendência.
No formato Prometheus, nome e labels identificam a série e cada amostra tem valor e instante. HELP e TYPE descrevem a métrica. Labels de alvo podem ser acrescentados na coleta. Sem timestamp explícito, usa-se o horário de coleta conforme a configuração.

#### Eventos não são amostras

Evento e amostra são conceitos distintos. Uma aplicação pode atualizar um contador em cada requisição, enquanto o coletor registra periodicamente o acumulado. A coleta não precisa produzir um ponto separado para cada evento. A agregação permite observar volume, mas não preserva automaticamente todos os detalhes individuais.
Exemplo didático sem reset: o contador vale 100 em uma coleta e 140 na seguinte. O aumento observado é 40, mas os dois pontos não revelam se as requisições chegaram em rajada ou distribuídas, nem quem as fez. Logs e traces podem ajudar a investigar eventos individuais. Coleta periódica de métricas também não é a mesma decisão técnica que amostragem de traces; os mecanismos operam sobre sinais e objetivos diferentes.

#### Coleta: frequência, tempo e lacunas

A frequência de coleta determina quando novas observações podem ser registradas. A atualização da interface determina quando a tela solicita resultados novamente. Atualizar o navegador mais rápido não cria medições que o backend ainda não coletou. Maior frequência pode revelar detalhes adicionais, mas também gera mais trabalho e armazenamento.
Exemplo didático: com coletas nos segundos 0, 5 e 10, uma fila pode subir para 50 itens no segundo 2 e retornar a 2 itens no segundo 4. As duas leituras nas bordas podem não mostrar o pico. Um contador de ocorrências durante esse intervalo preservaria outra informação, sem reconstruir automaticamente a curva da fila. Escolha a medição e a frequência em função da pergunta, da duração do fenômeno e do custo.

#### Do sistema observado até o painel

O caminho de uma métrica inclui produção, transporte, armazenamento, consulta e interpretação. A aplicação pode produzir medições por instrumentação. Um exporter pode expor dados de componentes que não apresentam diretamente o formato esperado pelo coletor. Em pull, o coletor busca informações; em push, um produtor envia informações a um receptor.
No laboratório, Prometheus coleta e armazena as séries e Grafana consulta essa fonte para apresentar resultados. Outros pipelines podem utilizar OpenTelemetry e envio por OTLP. A existência de um painel não cria instrumentação automaticamente. Pushgateway tem finalidades específicas, como determinados trabalhos curtos em lote, e não é uma substituição universal do scraping. Se um alvo não responde, investigue também rede e configuração antes de concluir que o componente caiu.

#### Exporters e instrumentação

Uma biblioteca permite instrumentar operações no próprio código. Um exporter expõe dados de outro sistema em um formato coletável. Um collector recebe, transforma e encaminha telemetria. A escolha depende da pergunta e da origem do dado.
Node exporter atende métricas de host Linux; cAdvisor atende containers; blackbox exporter executa sondagens. Métricas de aplicação e negócio precisam de instrumentação adequada. Os dez exemplos de infraestrutura da folha de apoio exigem node_exporter e não substituem os exercícios obrigatórios do Grafana News.

#### Gauge: um estado que pode subir e descer

No vocabulário Prometheus, gauge representa um valor que pode subir ou descer. Temperatura, memória atual, conexões simultâneas e tamanho de fila são exemplos de estados. O valor precisa ser interpretado com sua unidade, capacidade e momento de leitura. Uma queda pode ser normal ou exigir investigação, conforme o contexto.
Exemplo didático: uma fila apresenta 12, depois 30 e depois 8 itens. A redução de 22 itens no saldo não comprova que exatamente 22 foram processados: novos itens podem ter entrado enquanto outros saíam. Para conhecer entradas e saídas separadamente, precisamos de medições próprias. Não aplique automaticamente rate de contador a memória ou temperatura. Essa função considera uma semântica de acumulado monotônico e pode interpretar quedas como resets.

#### Counter: acumulado de eventos

Um counter Prometheus representa uma contagem cumulativa que cresce entre resets. Um reinício pode fazer o valor recomeçar. É apropriado para total de requisições atendidas, tarefas concluídas ou erros ocorridos. O acumulado não informa, sozinho, a atividade atual: um processo antigo pode ter total grande e pouco tráfego agora.
Exemplo didático: as leituras são 100, 120 e 150. Sem reset, os aumentos observados são 20 e 30. Para obter taxa, falta conhecer o tempo. Somar 100 + 120 + 150 contaria várias vezes eventos já incluídos nos acumulados. O sufixo total costuma comunicar contagem, e count pode aparecer em componentes de distribuições; consulte sempre a definição. O count de uma duração representa quantidade de observações, não segundos.

#### O conceito é geral; os modelos variam

Os conceitos de medição existem em diversas plataformas, mas os modelos têm regras próprias. Gauge e Counter, nesta prática, seguem o vocabulário Prometheus. OpenTelemetry distingue instrumentos, incluindo Counter, UpDownCounter, Gauge e Histogram, e permite agregações com temporalidade delta ou cumulativa. Esses nomes não devem ser interpretados apenas por semelhança.
Exemplo didático: um produtor informa 10 no primeiro intervalo e 20 no segundo. Se são deltas, os intervalos somam 30 eventos. Se são acumulados do mesmo contador sem reset, o aumento entre as leituras é 10. A escolha da operação depende da semântica. No laboratório desta noite, trabalharemos com contagens cumulativas no padrão Prometheus; não será necessário configurar um pipeline OpenTelemetry.

#### Histograma: a distribuição importa

Uma distribuição mostra como muitas observações se espalham. Um histograma organiza frequências por faixas e permite examinar a cauda de valores maiores. No formato clássico Prometheus, os buckets são cumulativos: somá-los como se fossem faixas independentes duplicaria observações. Histograms nativos têm outra representação, preservando o objetivo de descrever a distribuição.
Exemplo didático: 90 chamadas duram 0,1 s e 10 duram 2 s. As durações somam 29 s e a média é 0,29 s. Nenhuma chamada desse exemplo durou exatamente a média, e dez chamadas tiveram experiência bem mais lenta. A média responde uma pergunta útil, mas não descreve sozinha o espalhamento. Os limites das faixas e a forma de cálculo influenciam a precisão das estimativas.

#### p95 não é média nem máximo

Média, percentil e máximo descrevem aspectos diferentes. A média divide a soma das observações por sua quantidade. O p95 é o valor até o qual ficam aproximadamente 95% das observações, conforme o método de cálculo. O máximo corresponde à maior observação. Em conjuntos pequenos e estimativas, convenções e aproximações importam.
Exemplo didático: p95 próximo de 0,8 s não significa que a média seja 0,8 s, que todas as chamadas demoraram esse tempo ou que nenhuma foi mais lenta. No Prometheus, histogramas permitem estimar quantis a partir das distribuições, enquanto summaries podem expor quantis calculados na origem. Não calcule o p95 global fazendo a média dos p95 de servidores: esses resumos não preservam a distribuição necessária. Compare populações e janelas compatíveis.

#### Labels: recortar a pergunta

Dimensões permitem recortar a pergunta. No Prometheus, labels podem distinguir serviço, ambiente, rota ou status HTTP. Filtrar seleciona as séries que participam; agrupar reorganiza o resultado, preservando determinadas dimensões. Alterar o agrupamento não altera automaticamente a unidade.
Exemplo didático: eventos estão separados em voto com status 200, voto com status 400, página inicial com 200 e página inicial com 302. Podemos somar por operação ou por código usando a mesma população. Uma taxa agrupada por rota continua em requisições por segundo se for agrupada por status. O código HTTP descreve a resposta; não é uma severidade de log. Prefira rotas lógicas, como uma operação de consulta, a URLs completas com identificadores que crescem sem controle.

#### Cardinalidade: quantas séries surgem?

Cardinalidade se relaciona à quantidade de combinações distintas de dimensões. Uma label útil permite perguntas operacionais, mas seus valores precisam de controle. Mais séries podem aumentar o custo de coleta, armazenamento e consulta. Não existe um único limite universal adequado a qualquer ambiente.
Exemplo didático: 3 serviços, 4 rotas e 5 status permitem até 60 combinações básicas. Nem todas precisam existir. Instâncias, ambientes e componentes de histograma podem multiplicar a quantidade. Acrescentar identificadores individuais, como e-mail, request_id ou URL completa com código de usuário, pode provocar crescimento contínuo. Para investigar uma chamada específica, logs e traces podem ser mais apropriados, com seus próprios cuidados. Escolha dimensões pela pergunta que respondem e pelo custo de mantê-las.

#### Taxa: quanto acontece por unidade de tempo

Taxa relaciona ocorrência e tempo. Para contadores Prometheus, rate calcula uma taxa média por segundo a partir das amostras de uma janela. A implementação também considera resets e extrapolação nas bordas. Uma divisão simples ajuda a aprender a unidade, mas não substitui todos os detalhes do cálculo real.
Exemplo didático simplificado: 120 requisições em 60 segundos correspondem a 2 req/s em média. Elas podem ter chegado de forma regular ou em rajadas. Outro exemplo, 3 requisições em um minuto, equivale a 0,05 req/s. Isso não representa uma fração de requisição executada, e sim frequência média de eventos discretos. A janela [5m] não muda a unidade para requisições por cinco minutos: o resultado de rate continua por segundo.

#### increase e o cuidado com resets

increase estima o aumento de um counter durante a janela; rate apresenta a taxa média por segundo. Para a mesma série e janela, essas leituras se relacionam pela duração do intervalo. Os ajustes do backend podem produzir estimativas fracionárias. Métricas de monitoramento não substituem necessariamente o registro transacional exigido para faturamento ou contabilidade exata.
Exemplo didático: 0,4 req/s por 300 s corresponde aproximadamente a 120 requisições. Em outro desenho, um contador aparece em 90, 100, 5 e 15; uma queda pode indicar reset. Subtrair apenas a primeira da última leitura produziria interpretação errada. Ao combinar instâncias, calcule a taxa por série antes de agregar, para que resets individuais possam ser identificados. Uma queda de counter não significa eventos negativos.

#### Agregar no espaço e no tempo

Agregar entre séries e agregar ao longo do tempo respondem perguntas diferentes. Em PromQL, sum combina séries no ponto de avaliação; funções de janela podem resumir observações de uma série no tempo. Ao agregar por rota, o resultado conserva esse recorte e combina outras dimensões conforme a expressão.
Exemplo didático: duas APIs com populações distintas recebem 2 req/s e 3 req/s no mesmo instante. O total é 5 req/s. Uma fila com leituras 2, 10 e 3 itens tem média amostral de 5 itens nesse conjunto; isso não significa 5 itens por segundo nem 15 itens processados. Antes de somar, confirme compatibilidade de definição e ausência de duplicação. Duas fontes que representam os mesmos eventos podem produzir total duplicado.

#### A média das porcentagens pode enganar

Uma razão global deve respeitar o peso das populações. Somar numeradores e denominadores compatíveis costuma responder à população total. A média simples de porcentagens só é adequada em situações específicas; não representa automaticamente o resultado geral de grupos com volumes distintos. Um total saudável também pode esconder um grupo com problema.
Exemplo didático: no mesmo intervalo, A tem 1 erro em 10 chamadas, ou 10%; B tem 0 em 990, ou 0%. O total é 1 erro em 1.000 chamadas, ou 0,1%, e não a média simples de 5%. A continua com 10% no próprio recorte. Não misture períodos ou definições diferentes. Se não houve chamadas, a razão requer tratamento explícito; ausência de denominador não comprova zero por cento de erro.

#### Quatro perguntas sobre saúde

Um conjunto inicial de perguntas ajuda a organizar o monitoramento. Tráfego descreve demanda; latência descreve tempo de atendimento; erros descrevem falhas; saturação indica trabalho esperando ou pressão sobre a capacidade. RED organiza taxa, erros e duração de serviços. USE organiza utilização, saturação e erros de recursos. Eles são guias de investigação, não uma lista universal de painéis obrigatórios.
Exemplo didático: 50 req/s, 2% de erros, p95 de 0,5 s e 20 tarefas em espera criam uma visão inicial. Se a fila cresce para 200 tarefas, surge uma pista, ainda sem causa comprovada. CPU elevada não comprova sozinha impacto no usuário, e CPU baixa não garante bom atendimento. Defina o que falha e o que espera em cada componente.

#### Zero, ausência e dado antigo

Zero e ausência são evidências diferentes. Uma série com resultado zero pode indicar que não houve novos eventos na janela. No data informa que a consulta não retornou séries para aquela seleção. Uma observação antiga também pode não representar o momento atual. A forma como o backend trata atualidade precisa ser considerada.
Exemplo didático: um laboratório iniciado às 21h não possui necessariamente dados das 20h. Uma rota nunca utilizada pode ainda não ter criado determinada combinação de labels. Em outro caso, a coleta pode ter falhado. Antes de concluir que o serviço está saudável, confira fonte, expressão, filtro, período, aplicação e coleta. Preencher toda ausência com zero pode esconder perda de observação; isso exige uma regra de significado explícita.

#### Período exibido não é janela de cálculo

Período visível, janela de cálculo e atualização têm papéis diferentes. Last 15 minutes escolhe o trecho de história mostrado. A expressão rate com [5m] utiliza uma janela de cinco minutos em cada ponto avaliado. A atualização controla quando a interface solicita resultados novamente. Nenhuma dessas opções deve ser confundida com a frequência original de coleta.
Imagine uma régua de quinze minutos e uma janela móvel de cinco minutos deslizando sobre ela. Cada ponto da taxa usa sua janela correspondente. Se o seletor passar a Last 5 minutes, a expressão com janela fixa [5m] permanece igual, a menos que seja editada. Por isso dois gráficos de períodos diferentes podem compartilhar a mesma janela de taxa e manter a mesma unidade por segundo.

#### Resolução: o gráfico também faz escolhas

A resolução depende do espaçamento dos resultados consultados ou apresentados e das opções do painel e da fonte. Um período longo pode ser mostrado com menos detalhe visual. Isso não permite concluir que a atividade foi constante. Também não permite recuperar observações que nunca foram coletadas. Frequência de coleta, janela e passo de consulta são escolhas distintas.
Exemplo didático: um pico de dez segundos fica mais fácil de perceber numa visão de cinco minutos do que num dia inteiro comprimido. Uma janela menor que o intervalo entre coletas pode não ter amostras suficientes para calcular taxa. Grafana oferece variáveis como $__rate_interval para ajudar em consultas usuais; nesta noite, [5m] fica explícito para facilitar o aprendizado. Diminuir janelas indefinidamente não garante maior precisão.

#### Baseline e limites precisam de contexto

Baseline é uma referência de comportamento observado. Compare horários, populações e condições semelhantes, mas lembre que o histórico pode incluir problemas. Um comportamento repetido não é automaticamente desejável. Capacidade, demanda e experiência do usuário ajudam a interpretar o que mudou. Correlação entre curvas é uma pista, não prova de causalidade.
Exemplo didático: 100 req/s podem ser usuais durante o expediente e incomuns às 3h. Uma campanha, um robô ou uma falha são hipóteses que exigem outras evidências. Limites precisam de definição e contexto; o valor usado para facilitar um exercício não deve ser copiado como política de produção. Os alertas serão aprofundados na Noite 5; aqui importa distinguir observação, referência e decisão.

#### Seis verificações antes de concluir

Antes de interpretar uma curva, formule a pergunta, confirme definição e unidade, identifique séries e dimensões, confira período e janela, classifique o resultado e avalie o limite da evidência. Uma resposta válida pode ser que falta outra medição. Essa disciplina também ajuda a comunicar resultados por capturas.
Exemplo didático: 0,05 na taxa da rota de votação significa 0,05 requisição por segundo em média na janela escolhida. Isso equivale aproximadamente a uma a cada vinte segundos, sem afirmar regularidade. Não informa usuários únicos. Se o mesmo número representar uma proporção de erro, pode significar 5%, conforme a definição. Ao enviar um print, inclua contexto de fonte, consulta, unidade e período para que outra pessoa consiga compreender a conclusão.

#### Regras e notificações

Recording rules pré-calculam consultas e produzem séries derivadas. Alerting rules avaliam condições. O período for exige persistência antes de firing. Alertmanager administra agrupamento, roteamento, silêncios e inibição.
A janela de uma função rate e o período for cumprem papéis distintos. No Grafana Alerting, regras, políticas e contatos também precisam ser configurados. A existência de um alerta não configura automaticamente SMTP ou integrações externas. A prática de alertas ocorre na Noite 5.

#### Logs, Loki e LogQL

Logs registram eventos com timestamp e contexto. Loki organiza streams por labels e mantém o conteúdo dos logs. LogQL seleciona streams, filtra linhas e extrai campos. Seletor, grafia e parser devem corresponder aos dados existentes.
Um filtro literal por ERROR distingue maiúsculas e minúsculas. O parser JSON exige linhas JSON válidas. Identificadores muito variáveis, como trace_id, pedem cuidado de modelagem e não devem virar indiscriminadamente labels indexados. A prática detalhada de logs ocorre na Noite 3.

#### Traces, spans e Tempo

Traces relacionam spans de operações. Cada span registra tempo, duração, atributos e relações. Tempo armazena os traces e TraceQL permite selecioná-los. Instrumentação e propagação de contexto precisam estar configuradas nos componentes.
Spans aninhados ou paralelos impedem somar durações para obter o tempo total. Uma operação demorada orienta a hipótese de investigação, mas precisa ser interpretada com dependências, erros e outras evidências. Amostragem e instrumentação incompleta podem limitar o trace observado.

#### Correlação entre os sinais

Correlacionar sinais relaciona população, serviço, versão, ambiente e período. Exemplars podem associar uma observação de métrica a um trace. Derived fields podem extrair um identificador de log e criar um link. Outras integrações podem abrir logs ou métricas a partir do trace.
Essas relações dependem dos dados e da configuração das fontes. Uma correlação temporal orienta hipóteses, sem provar causalidade. Importar um dashboard não instala instrumentação nem habilita automaticamente os recursos entre as fontes.

#### Arquitetura de coleta e consulta

Uma arquitetura de observabilidade separa instrumentação, coleta, armazenamento e consulta. Prometheus coleta e consulta métricas. Loki atende logs, Tempo atende traces e Mimir pode compor uma arquitetura de métricas em escala. Alloy coleta, processa e encaminha telemetria conforme configuração. Grafana consulta as fontes.
A arquitetura é uma referência de papéis. Ela não significa que todos os componentes existam no laboratório local. Protocolos e caminhos variam: scrape e remote write são usados em métricas, enquanto OTLP atende sinais em caminhos compatíveis. Promtail permanece como componente legado e Alloy representa a evolução de coleta.

#### Configuração e fontes de dados

Compose descreve serviços, redes e volumes. Prometheus configura jobs, alvos e regras. Coletores possuem seus pipelines, e o Grafana pode receber conexões por provisioning. Versionamento e versões de imagens explícitas ajudam a reproduzir o ambiente. Persistência e backup têm finalidades diferentes.
O navegador e o servidor Grafana podem usar endereços diferentes. No laboratório local, o aluno acessa localhost:3300, enquanto o Grafana consulta Prometheus pelo nome do serviço na rede Docker. Uma conexão válida não garante a presença de toda métrica. O laboratório preparado para a turma continua sendo a referência operacional.

#### A escolha do painel

O painel deve corresponder à pergunta. Time series mostra evolução, Stat resume um valor, Table compara categorias, Heatmap apresenta distribuição e Logs mostra eventos. Gauge pode representar um percentual em relação a um limite conhecido.
Consulta, período, unidade e redução determinam o significado. Last e Mean não respondem à mesma pergunta. Variáveis filtram o escopo, sem criar novos dados. O dashboard JSON transporta configuração, mas depende das fontes e dados disponíveis no destino. A folha opcional com dez consultas de infraestrutura serve como referência de unidades e tipos.

#### Caso em sala: interprete antes do clique

Resolva o caso sem usar uma ferramenta. No mesmo intervalo, A tem 1 erro em 10 chamadas e B tem 0 em 990. Um counter passa de 100 para 160 em 60 segundos sem reset. Uma terceira consulta não retorna séries. Calcule a razão de erros global e a taxa média simplificada; depois explique o que a ausência permite concluir.
Gabarito: a razão global é 1/1.000 = 0,1%, mantendo A com 10% no próprio recorte. O aumento de 60 em 60 segundos corresponde a 1 req/s na conta simplificada. No data não comprova zero erros. A implementação real de rate considera mais detalhes do que essa conta de dois pontos. Em todas as respostas, registre unidade, população e limite da conclusão.

#### Síntese antes do intervalo

O bloco teórico termina às 20h20. Após o intervalo de 25 minutos, o exercício guiado começa às 20h45. As quatro perguntas de retomada são: o que o número mede, em qual unidade, para quais séries e em qual intervalo? Elas valem para infraestrutura, aplicações e negócio, independentemente da ferramenta escolhida.
Na execução guiada, a turma abrirá Explore, lerá o contador de Grafana News, calculará taxa e agrupará por rota e por status. Cada pessoa executa os passos no ambiente orientado. No pacote local, os endereços são localhost:3300 para Grafana e localhost:38081 para a aplicação; o professor pode orientar outros endereços. Depois da condução conjunta, os exercícios continuam com criação manual. Arquivos importáveis são apoio opcional.

### ☕ 2. Intervalo (20:20–20:45 · 25 minutos)

Retorno às 20:45. Mantenha a folha da Noite 2 disponível para acompanhar os passos e as capturas de referência.

### 💻 3. Exercício guiado no Grafana (20:45–21:20 · 35 minutos)

Professor e alunos executam juntos. A cada checkpoint, a turma confirma a consulta, os labels e a unidade antes de avançar. Use o roteiro ilustrado da Noite 2.

* **Exercício 2.1 — Contador e labels:** selecionar Prometheus no Explore, usar Code e executar a métrica bruta. Identificar `route` e `status_code`; explicar que `_count` representa contagem de observações por série, não duração nem req/s.
  ```promql
  tns_request_duration_seconds_count
  ```
* **Exercício 2.2 — Taxa por rota:** gerar atividade conhecida na aplicação, aguardar a coleta e interpretar a taxa por segundo. Distinguir o tráfego da rota `metrics`, produzido pelo scrape, das ações de navegação.
  ```promql
  sum(rate(tns_request_duration_seconds_count[5m])) by (route)
  ```
* **Exercício 2.3 — Agrupamento por status:** comparar o agrupamento por rota com o agrupamento por código HTTP. Alternar o período exibido, mantendo a janela `[5m]`, e explicar a diferença. A ausência de um código de erro é esperada se aquela resposta ainda não ocorreu.
  ```promql
  sum(rate(tns_request_duration_seconds_count[5m])) by (status_code)
  ```

### 📝 4. Consolidação individual (21:20–22:15 · 55 minutos)

Retome os exercícios 2.1, 2.2 e 2.3 sem copiar a interpretação do professor. Registre as consultas, uma captura por agrupamento e uma frase explicando cada resultado com unidade, período e dimensões. Diferencie zero de ausência de dados e a janela de cálculo do intervalo mostrado no gráfico.

**Modelos opcionais para consulta e comparação:** os arquivos abaixo estão disponíveis; importar não faz parte da entrega obrigatória dos exercícios.

* [`aluno/03-contador-requisicoes.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/03-contador-requisicoes.json)
* [`aluno/04-taxa-por-rota.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/04-taxa-por-rota.json)
* [`aluno/05-taxa-por-status.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/05-taxa-por-status.json)

### ✅ 5. Correção e fechamento (22:15–22:30 · 15 minutos)

Apresente uma evidência e explique o significado do valor. A correção avalia contagem versus taxa, unidade, agrupamento e relação entre janela e período. Os valores não precisam coincidir com as capturas do material.

📥 **Apoio opcional:** [10 exemplos PromQL com explicações](Curso_Grafana_Green_V12/alunos/10_Exemplos_PromQL_Noite_2.html), para ambiente com node_exporter.

📥 **Guia da Noite 2:** [📖 Passo a passo em Markdown](Curso_Grafana_Green_V12/alunos/Aluno_Noite_2.md) | [📥 Guia ilustrado em PDF](Curso_Grafana_Green_V12/alunos/Aluno_Noite_2.pdf)

---

## 🟨 DIA 03 — Logs Estruturados com Grafana Loki & Operação Nativa Linux

### 📖 1. Fundamentação Teórica (18:30 – 19:55)

#### 1.1 Grafana Loki — Like Prometheus, but for Logs
Tradicionalmente, a indústria utilizou o Elasticsearch/OpenSearch para gestão centralizada de logs. Embora poderoso, o Elasticsearch indexa todas as palavras de todos os logs (*Inverted Index*), resultando em índices gigantescos que consomem muita memória RAM e geram custos de armazenamento altíssimos.

O **Grafana Loki** mudou esse paradigma:
* O Loki **indexa apenas os metadados e rótulos (*labels*)**, exatamente como o Prometheus.
* O conteúdo textual dos logs é compactado em blocos binários (*chunks*) e gravado diretamente no disco ou storage de objetos (S3, Azure Blob, MinIO).
* **Resultado:** Redução de até 90% no consumo de recursos computacionais frente ao Elasticsearch, mantendo consultas ultra-rápidas com sintaxe familiar.

#### 1.2 O Agente Promtail
* O Promtail atua como coletor na ponta: ele faz a cauda (*tailing*) dos arquivos de log de contêineres e do sistema operacional (`/var/log/*`), aplica parsers de JSON e expressões regulares, anexa rótulos e envia os fluxos via HTTP POST para a API do Loki.

#### 1.3 A Linguagem LogQL
O LogQL combina seletores de fluxo e processadores de pipeline:
* **Seletores de Stream:** `{job="docker-containers", level="ERROR"}`
* **Filtros de Linha:** `|= "Falha"` (contém), `!~ "healthcheck"` (não contém regex)
* **Transformação de Log em Métrica:**
  $$\text{Erros por Minuto} = \text{sum}(\text{count\_over\_time}(\{\text{job}=\text{"docker-containers"}\} \mid= \text{"ERROR"}[1m]))$$

#### 1.4 Instalação Nativa no Linux (Systemd) vs. Contêineres
* Casos corporativos em que a instalação nativa bare-metal/VM é mandatória (compliance financeiro, auditoria de segurança, ausência de overhead de rede virtual).
* **Governança com Systemd:** Unidades de serviço (`.service`), parâmetros de controle de descritores de arquivo (`LimitNOFILE=65536`) e auto-recuperação (`Restart=on-failure`).
* **Princípio do Menor Privilégio:** Criação de usuários de sistema dedicados (`grafana:grafana`, `prometheus:prometheus`) sem permissão de login ou sudo.

---

### 💻 2. Laboratório Prático Hands-on (20:45 – 22:15)

* **Exercício 3.1 — Configurando o Data Source Loki:**  
  Conectar o Loki no Grafana e validar a conexão com `Save & test`.
* **Exercício 3.2 — Consulta de Streams de Log da Aplicação:**  
  Buscar logs da aplicação News usando seletores de rótulo:
  ```logql
  {filename="/var/log/tns-app.log"}
  ```
* **Exercício 3.3 — Filtragem e Investigação de Erros:**  
  Aplicar filtros case-sensitive para encontrar exceções de banco e timeouts:
  ```logql
  {filename="/var/log/tns-app.log"} |= "error"
  ```
* **Exercício 3.4 — Injeção de Logs Via Linha de Comando (CLI Linux):**  
  Usar o comando nativo `logger` no terminal Ubuntu para injetar logs manuais com diferentes severidades e verificar o Grafana capturando na hora.
* **Exercício 3.5 — Importação de Modelos Prontos:**  
  * [`aluno/06-logs-aplicacao.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/06-logs-aplicacao.json)
  * [`aluno/07-logs-erros.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/07-logs-erros.json)
* **Exercício Complementar — Roteiro Ubuntu Nativo (sem Docker):**  
  Execução sequencial dos scripts da pasta `lab/dia3/` para instalar e configurar Grafana, Prometheus e Node Exporter nativamente via systemd.

📥 **Guia da Noite 3:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V12/alunos/Aluno_Noite_3.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V12/alunos/Aluno_Noite_3.pdf)

---

## 🟧 DIA 04 — Rastreamento Distribuído (Tempo), OpenTelemetry & A Tríade da Observabilidade

### 📖 1. Fundamentação Teórica (18:30 – 19:55)

#### 1.1 O Desafio dos Microsserviços
Em uma aplicação monolítica, rastrear um erro pode ser feito inspecionando um único arquivo de log. Em arquiteturas distribuídas modernas, uma única requisição de compra pode passar por 10 serviços diferentes (Gateway, Auth, Catálogo, Carrinho, Estoque, Antifraude, Pagamento, Logística). Quando a compra leva 4 segundos para concluir, **qual dos 10 serviços causou o atraso?**

#### 1.2 O Padrão OpenTelemetry (OTel)
O OpenTelemetry é o padrão unificado da Cloud Native Computing Foundation (CNCF) para instrumentação:
* **Trace:** O caminho completo percorrido por uma transação de ponta a ponta (identificado por um `TraceID` único de 128 bits).
* **Span:** A unidade atômica de trabalho realizada por um componente específico (possui nome, timestamp de início, duração, status de erro e atributos contextuais).
* **Árvore de Spans (Gráfico de Gantt):** A relação pai-filho entre chamadas síncronas e assíncronas que permite ver exatamente a cascata de execução.

#### 1.3 Arquitetura do Grafana Tempo
* O Grafana Tempo é um backend de rastreamento distribuído massivo de alta escala. Ele armazena traces de forma eficiente em disco ou storage de objetos, integrando nativamente com ingestores OTLP (gRPC porta `4317` e HTTP porta `4318`).

#### 1.4 A Santíssima Trindade na Prática (Derived Fields)
* **A Mágica da Correlação:** Métricas mostram o pico de erro no gráfico ➔ O operador clica no gráfico e abre os logs filtrados no Loki ➔ Na linha do log com erro, há um atributo `trace_id` ➔ O Grafana usa **Derived Fields** com regex para transformar esse texto em um botão azul ➔ Um clique no botão abre a cascata de spans do Tempo na mesma tela, identificando a query lenta no banco ou o timeout de rede em segundos!

---

### 💻 2. Laboratório Prático Hands-on (20:45 – 22:15)

* **Exercício 4.1 — Criação Manual de Dashboard Integrado:**  
  Construção de dashboard combinando métricas de negócio e logs em painéis sincronizados pelo tempo (*Shared Tooltip / Crosshair*).
* **Exercício 4.2 — Configuração de Anotações:**  
  Criar uma camada de anotação que busca eventos no Loki e desenha linhas verticais marcadas nos gráficos de métricas para indicar deploys e incidentes.
* **Exercício 4.3 — Rastreamento com TraceQL no Explore:**  
  Buscar traces por nome do serviço (`ecommerce-shop`) e inspecionar tempos de execução de spans filhos no gráfico de Gantt.
* **Exercício 4.4 — Importação de Modelos Integrados:**  
  * [`aluno/01-dashboard-base.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/01-dashboard-base.json)
  * [`aluno/02-dashboard-completo.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/02-dashboard-completo.json)
  * [`aluno/08-integrado-metricas-logs-anotacoes.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/08-integrado-metricas-logs-anotacoes.json)

📥 **Guia da Noite 4:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V12/alunos/Aluno_Noite_4.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V12/alunos/Aluno_Noite_4.pdf)

---

## 🟪 DIA 05 — Engenharia de Alertas, Dados Públicos (ISS/IBGE/Cripto) & Projeto Integrador

### 📖 1. Fundamentação Teórica (18:30 – 19:55)

#### 1.1 Engenharia e Governança de Alertas
Alertas mal configurados geram fadiga (*Alert Fatigue*), fazendo com que equipes ignorem notificações críticas.  
* **Princípio Acionável:** Todo alerta que envia mensagem para um humano deve requerer uma ação corretiva clara. Se não requer ação imediata, não deve ser um alerta, mas sim um painel ou relatório.
* **Máquina de Estados de Alertas:**
  $$\text{Normal (OK)} \xrightarrow{\text{Violação da Condição}} \text{Pending (Aguardando tempo } for\text{)} \xrightarrow{\text{Persistência}} \text{Firing (Disparo)} \xrightarrow{\text{Recuperação}} \text{Resolved}$$
* **Alertmanager:** Mecanismo de agrupamento (*grouping*), inibição de alertas filhos (*inhibition*) e silenciamento temporário (*silence*).

#### 1.2 GitOps e Provisionamento Declarativo
* O risco do gerenciamento manual via interface (*ClickOps*): inconsistência entre ambientes e perda de configurações.
* O padrão declarativo do Grafana: arquivos versionados em Git dentro de `/etc/grafana/provisioning/datasources/` e `/etc/grafana/provisioning/dashboards/` garantem que o servidor possa ser destruído e recriado em qualquer nuvem subindo 100% pronto em menos de 1 minuto.

#### 1.3 Observabilidade Aplicada a Dados do Mundo Real
Quebrando o mito de que o Grafana serve apenas para monitorar infraestrutura de TI:
* **Mercado Financeiro:** Ingestão de cotações de Dólar (USD), Euro (EUR) e Bitcoin (BTC) em tempo real com thresholds dinâmicos.
* **Sistemas Espaciais (ISS):** Rastreamento de latitude, longitude, velocidade orbital (~27.500 km/h) e altitude da Estação Espacial Internacional.
* **Demografia Oficial (IBGE):** Visualização de séries demográficas em Bar Gauge horizontal ordenado por habitantes dos estados brasileiros.
* **Geofísica Global (USGS):** Monitoramento sísmico de tremores de terra e magnitudes ao redor do planeta com painéis de tabela e georreferenciamento.

---

### 💻 2. Laboratório Prático Hands-on (20:45 – 22:15)

* **Exercício 5.1 — Ponto de Contato Webhook Local:**  
  Configuração do ponto de contato no Grafana apontando para o receptor didático de mensagens em `http://localhost:38090`.
* **Exercício 5.2 — Criação de Regra de Alerta com Condição:**  
  Criação de regra avaliando a taxa de falhas HTTP com tolerância temporal.
* **Exercício 5.3 — Homologação do Disparo:**  
  Gerar tráfego anômalo na aplicação, acompanhar o alerta mudar para estado `Firing` e inspecionar a notificação JSON chegando na tela do receptor de webhooks.
* **Exercício 5.4 — Entrega do Projeto Integrador Final:**  
  Importação, personalização e homologação do cockpit consolidado de produção:
  * [`aluno/09-projeto-final.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/09-projeto-final.json)
* **Exercício 5.5 — Importação do Dashboard de Dados Públicos Globais:**  
  * [`aluno/06-dados-publicos-ibge-ssl-terremotos.json`](Curso_Grafana_Green_V12/exemplos-importaveis/aluno/06-dados-publicos-ibge-ssl-terremotos.json)

📥 **Guia da Noite 5:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V12/alunos/Aluno_Noite_5.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V12/alunos/Aluno_Noite_5.pdf)

---

## ☁️ GERENCIAMENTO DO AMBIENTE AZURE (CRIAR, LIGAR, DESLIGAR E DELETAR)

Para o professor ou alunos que desejam operar a stack completa de observabilidade na nuvem Microsoft Azure, incluímos scripts de automação completos para todo o ciclo de vida da infraestrutura:

### 1. 🚀 Criar o Ambiente do Zero na Azure
Executa o provisionamento do Resource Group (`RG_CURSO_GRAFANA`), regras de firewall no NSG, IP Público estático, rede virtual e a VM Ubuntu 22.04 LTS (`Standard_D2s_v3`), instalando o Docker e subindo automaticamente os 10 containers da stack:
* **No Windows (PowerShell):**
  ```powershell
  .\scripts\criar-ambiente-azure.ps1
  ```
* **No Linux / WSL (Bash):**
  ```bash
  bash scripts/criar-ambiente-azure.sh
  ```

### 2. ⚡ Ligar o Ambiente para a Aula
Quando a VM estiver desligada e você for iniciar uma nova aula, ligue os recursos com:
```bash
az vm start --resource-group RG_CURSO_GRAFANA --name vm-grafana-professor
```
*(A VM possui serviço systemd configurado que inicializa todos os containers Docker e geradores de dados automaticamente no boot em menos de 45 segundos)*.

### 3. ⏸️ Desligar / Desalocar após a Aula (Custo R$ 0)
Ao término de cada aula, desligue e desaloque a CPU/RAM para pausar cobranças de computação na Azure:
```bash
az vm deallocate --resource-group RG_CURSO_GRAFANA --name vm-grafana-professor
```

### 4. 🗑️ Deletar Definitivamente o Ambiente (Fim do Curso)
Quando a turma for concluída e você desejar destruir todos os recursos na nuvem (apagando a VM, discos, interfaces de rede, IPs e o Resource Group por completo):
* **No Windows (PowerShell):**
  ```powershell
  .\scripts\deletar-ambiente-azure.ps1
  ```
* **No Linux / WSL (Bash):**
  ```bash
  bash scripts/deletar-ambiente-azure.sh
  ```

---

## 🛠️ Tecnologias Utilizadas na Formação
* **Visualização:** [Grafana 11+](https://grafana.com)
* **Métricas:** [Prometheus TSDB](https://prometheus.io) & Node Exporter
* **Logs:** [Grafana Loki](https://grafana.com/oss/loki/) & Promtail
* **Traces:** [Grafana Tempo](https://grafana.com/oss/tempo/) & OpenTelemetry SDK
* **Contêineres:** Docker Engine & Docker Compose v2
* **Sistemas Operacionais:** Ubuntu 22.04 LTS / openSUSE Leap
* **Computação em Nuvem:** Microsoft Azure (Compute & Virtual Networks)

---
Bons estudos e excelente curso a todos! 🚀
