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

📥 **Guia da Noite 1:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V9/alunos/Aluno_Noite_1.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_1.pdf)

---

## 🟩 DIA 02 — Visualizações Avançadas, Métricas PromQL & Variáveis Dinâmicas

### 📖 1. Fundamentação Teórica (18:30 – 19:55)

#### 1.1 Taxonomia de Painéis do Grafana
Saber escolher a visualização correta para cada tipo de dado é a competência central que separa um dashboard profissional de um amador:
* **Stat Panel (Indicador Único):** Ideal para métricas de alto impacto e rápida absorção (ex: Total de Requisições, SLA atual, Uptime). Suporta gráficos de fagulha (*sparklines*) ao fundo.
* **Gauge (Velocímetro):** Usado exclusivamente quando a métrica possui limites superior e inferior rígidos e conhecidos (ex: 0 a 100% de uso de partição de disco ou memória).
* **Bar Gauge:** Exibe barras comparativas horizontais ou verticais em degradê. Excelente para comparar consumo de múltiplos núcleos de CPU ou top 10 instâncias.
* **Heatmap (Mapa de Calor):** A ferramenta suprema para análise de latência. Em vez de uma linha média que mascara picos, o Heatmap plota a densidade de distribuição de requisições por faixas de tempo, revelando padrões bimodais (ex: quando 90% das requisições levam 20ms, mas 10% sofrem com gargalo de 3 segundos).
* **Table (Tabela):** Para dados detalhados multidimensionais com suporte a filtros, transformações de colunas e ordenação.

#### 1.2 O Princípio DRY em Dashboards (Variáveis de Template)
Criar dashboards estáticos onde cada servidor exige um painel duplicado é um erro grave de arquitetura (*ClickOps*). O Grafana resolve isso com **Variáveis de Template**:
* **Variável de Query:** Utiliza funções como `label_values(node_cpu_seconds_total, instance)` para consultar o Prometheus e popular dinamicamente um menu suspenso com todos os servidores ativos.
* **Multi-Value e Regex:** Habilita a seleção de múltiplos servidores simultâneos usando o operador de expressão regular do PromQL:
  ```promql
  sum by (instance) (rate(http_requests_total{instance=~"$host"}[5m]))
  ```

#### 1.3 Coleta de Métricas de Contêineres (cAdvisor)
* **Como o Linux contabiliza recursos:** Cgroups v1 vs. Cgroups v2.
* **O papel do cAdvisor:** O daemon lê diretamente os arquivos virtuais do subsistema `/sys/fs/cgroup` do kernel Linux e traduz o tempo de CPU e alocação de páginas de memória de cada contêiner Docker para o formato de métricas do Prometheus.

---

### 💻 2. Laboratório Prático Hands-on (20:45 – 22:15)

* **Exercício 2.1 — Construtor de Consultas vs. Modo Code:**  
  Alternar entre a interface visual guiada (*Builder*) e o editor PromQL textual (*Code*) para entender a anatomia das expressões.
* **Exercício 2.2 — Contadores de Requisições:**  
  Consultar a métrica `tns_request_duration_seconds_count` e entender como os contadores se comportam ao longo do tempo.
* **Exercício 2.3 — Taxa de Requisições por Rota:**  
  Construir consulta calculando a taxa por segundo de cada rota da aplicação de notícias:
  ```promql
  sum by (route) (rate(tns_request_duration_seconds_count[5m]))
  ```
* **Exercício 2.4 — Proporção por Status HTTP:**  
  Isolar requisições com código `200` vs. erros `500` e calcular o percentual de sucesso operacional.
* **Exercício 2.5 — Importação de Modelos Prontos:**  
  Importar os templates JSON modulares para comparar com os painéis construídos em aula:
  * [`aluno/03-contador-requisicoes.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/03-contador-requisicoes.json)
  * [`aluno/04-taxa-por-rota.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/04-taxa-por-rota.json)
  * [`aluno/05-taxa-por-status.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/05-taxa-por-status.json)

📥 **Guia da Noite 2:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V9/alunos/Aluno_Noite_2.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_2.pdf)

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
  * [`aluno/06-logs-aplicacao.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/06-logs-aplicacao.json)
  * [`aluno/07-logs-erros.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/07-logs-erros.json)
* **Exercício Complementar — Roteiro Ubuntu Nativo (sem Docker):**  
  Execução sequencial dos scripts da pasta `lab/dia3/` para instalar e configurar Grafana, Prometheus e Node Exporter nativamente via systemd.

📥 **Guia da Noite 3:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V9/alunos/Aluno_Noite_3.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_3.pdf)

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
  * [`aluno/01-dashboard-base.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/01-dashboard-base.json)
  * [`aluno/02-dashboard-completo.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/02-dashboard-completo.json)
  * [`aluno/08-integrado-metricas-logs-anotacoes.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/08-integrado-metricas-logs-anotacoes.json)

📥 **Guia da Noite 4:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V9/alunos/Aluno_Noite_4.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_4.pdf)

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
  * [`aluno/09-projeto-final.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/09-projeto-final.json)
* **Exercício 5.5 — Importação do Dashboard de Dados Públicos Globais:**  
  * [`aluno/06-dados-publicos-ibge-ssl-terremotos.json`](Curso_Grafana_Green_V9/exemplos-importaveis/aluno/06-dados-publicos-ibge-ssl-terremotos.json)

📥 **Guia da Noite 5:** [📖 Passo a Passo em Markdown](Curso_Grafana_Green_V9/alunos/Aluno_Noite_5.md) | [📥 Apostila em PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_5.pdf)

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
