// =============================================================================
// Continuação: conteúdo dos 4 dias
// Recebe pres, helpers, e empilha slides
// =============================================================================
const { C, THEME, slideContent, slideTitle, slideSection, slideImageDemo, slideCheatSheet, W, H, TOTAL_PLACEHOLDER } = require("./build_pptx");

function slideInfo({ title, content, slideNo }) {
  return slideContent({
    eyebrow: "Informativo",
    title,
    slideNo, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "callout", x: 0.5, y: 1.95, w: 12.4, h: 5.0,
        fill: C.accent1, text: content, size: 16, valign: "middle", align: "left" }
    ]
  });
}

function pushAll(pres, slides) {
  // -------------------------------------------------------------------------
  // DIA 1 - Conteúdo
  // -------------------------------------------------------------------------
  slides.push(() => slideContent({
    eyebrow: "Dia 1 — Agenda",
    title: "O que veremos na primeira noite",
    slideNo: 7, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "process", x: 0.5, y: 2.0, w: 12.4, h: 3.0, steps: [
        { title: "Observabilidade", text: "O que é, por que importa, os 3 pilares." },
        { title: "Grafana", text: "História, licenciamento, casos de uso." },
        { title: "Stack local", text: "Grafana + Prometheus + Node Exporter em Docker." },
        { title: "UI", text: "Menus, dashboards, Explore, configurações." },
        { title: "Hands-on", text: "Subir, navegar, criar o primeiro painel." }
      ]},
      { type: "text", x: 0.5, y: 5.6, w: 12.4, h: 1.5, text: "Tudo que for visto em teoria será reproduzido na demonstração ao vivo. Em seguida, você repete no seu ambiente. O objetivo é que, ao final da noite, o Grafana esteja rodando na sua máquina e você saiba se virar sozinho.",
        size: 14, color: C.dk1, valign: "top" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Conceito",
    title: "O que é observabilidade",
    slideNo: 8, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "Observabilidade é a prática de compreender o estado interno de um sistema a partir dos dados que ele emite. Vai além do monitoramento tradicional: a pergunta deixa de ser 'está no ar?' e passa a ser 'por que está se comportando assim?'.\n\nTrês pilares sustentam essa prática. Métricas — valores numéricos agregados no tempo, leves de coletar e ideais para tendências. Logs — registros textuais de eventos, ricos em contexto, usados para investigar incidentes. Traces — o caminho de uma requisição entre serviços, fundamental em arquiteturas distribuídas.",
        size: 14, color: C.dk1, paraSpaceAfter: 6, valign: "top" },
      { type: "callout", x: 8.0, y: 1.95, w: 4.9, h: 5.0, fill: C.lt2, textColor: C.dk1, bold: false,
        text: "Definição formal\n\n'Observabilidade é a medida de quão bem você pode inferir o estado interno de um sistema a partir do conhecimento de suas saídas externas.'\n\n— Norbert Wiener, 1960\n\nAplicada a TI: quanto mais ricos e bem correlacionados forem os sinais emitidos por um sistema, mais fácil será diagnosticar problemas sem precisar entrar nele." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Os 3 pilares",
    title: "Métricas, logs e traces",
    slideNo: 9, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "cards", x: 0.5, y: 2.0, w: 12.4, h: 4.5, cards: [
        { title: "Métricas", text: "Números ao longo do tempo: CPU, latência, requisições por segundo. Caras: armazenamento barato, alertas simples. Mãe: séries temporais em bancos como Prometheus, VictoriaMetrics, Mimir.", fill: "F0F9FF", border: C.accent3, titleColor: C.accent3 },
        { title: "Logs", text: "Eventos textuais emitidos pela aplicação. Caros em volume mas riquíssimos em contexto. Stack típica: Promtail/Alloy + Loki ou Filebeat + Elasticsearch.", fill: "FFF7ED", border: C.accent1, titleColor: C.accent1 },
        { title: "Traces", text: "Caminho de uma requisição por múltiplos serviços. Fundamentais em microsserviços. OpenTelemetry é o padrão de instrumentação; Tempo e Jaeger armazenam.", fill: "F0FDF4", border: C.accent4, titleColor: C.accent4 }
      ]},
      { type: "text", x: 0.5, y: 6.7, w: 12.4, h: 0.5, text: "Grafana é a camada visual: consome os três pilares e os correlaciona em um único painel.",
        size: 14, color: C.dk1, bold: true, align: "center" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Ferramenta",
    title: "O que é o Grafana",
    slideNo: 10, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "Grafana é uma plataforma open-source de visualização e análise de dados, criada em 2014 pela Grafana Labs. Originalmente focada em séries temporais, hoje é o ponto de convergência para métricas, logs e traces — desde bancos como Prometheus até serviços SaaS, REST APIs e arquivos CSV.\n\nA versão atual é a 11.x, com interface renovada, novo sistema de painéis e suporte oficial a data sources como Prometheus, Loki, Tempo, Elasticsearch, InfluxDB, MySQL, PostgreSQL, BigQuery, Datadog, CloudWatch e mais de 70 outros.\n\nA licença é AGPLv3 para a edição open-source. A Grafana Labs oferece também versões gerenciadas (Grafana Cloud) e Enterprise.",
        size: 13, color: C.dk1, paraSpaceAfter: 6, valign: "top" },
      { type: "stat", x: 7.5, y: 1.95, w: 5.4, h: 2.0, stats: [
        { value: "70+", label: "Data sources oficiais", valueColor: C.accent1 },
        { value: "20M+", label: "Usuários no mundo", valueColor: C.accent3 }
      ]},
      { type: "stat", x: 7.5, y: 4.05, w: 5.4, h: 2.0, stats: [
        { value: "100%", label: "Open source (AGPLv3)", valueColor: C.accent4 },
        { value: "v11", label: "Versão estável atual", valueColor: C.accent3 }
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Arquitetura",
    title: "Como o Grafana se conecta ao mundo",
    slideNo: 11, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "process", x: 0.5, y: 2.0, w: 12.4, h: 3.0, steps: [
        { title: "Data source", text: "Prometheus, Loki, MySQL, CloudWatch — qualquer backend com driver." },
        { title: "Query", text: "Cada fonte tem sua linguagem: PromQL, LogQL, SQL. Grafana entende todas." },
        { title: "Transformações", text: "Filter, join, calculate, regex. Manipula dados antes de plotar." },
        { title: "Painel", text: "Time series, stat, gauge, bar, table, heatmap, geomap, candlestick." },
        { title: "Dashboard", text: "Coleção de painéis com variáveis, anotações e links cruzados." }
      ]},
      { type: "callout", x: 0.5, y: 5.6, w: 12.4, h: 1.5, fill: C.lt2, textColor: C.dk1, bold: false,
        text: "Esse fluxo é o que você verá em ação na demonstração. Vamos criar um dashboard que consome métricas do Prometheus, transforma com regex e mostra três tipos de painel lado a lado." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Por que o Grafana",
    title: "Benefícios da observabilidade com Grafana",
    slideNo: 12, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "bullets", x: 0.5, y: 2.0, w: 7.0, h: 5.0, size: 14, items: [
        "Unifica dados de múltiplas fontes em um único painel",
        "Reduz o tempo médio de diagnóstico (MTTR) de incidentes",
        "Open source, sem custos de licenciamento por usuário ou painel",
        "Comunidade ativa com 10.000+ dashboards prontos para importar",
        "Provisionamento via arquivo (GitOps) para ambientes de produção",
        "Alertas nativos com roteamento por canais (e-mail, Slack, webhook)",
        "API HTTP completa para automação e integração com outras ferramentas"
      ]},
      { type: "callout", x: 7.5, y: 2.0, w: 5.4, h: 5.0, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Em números (Grafana Labs 2024)\n\n• 20M+ usuários ativos mensais\n• 1.000+ empresas pagantes (Grafana Cloud + Enterprise)\n• 100k estrelas no GitHub\n• 4.000+ contribuições da comunidade por ano\n\nÉ a ferramenta de visualização mais usada no mercado de DevOps, segundo surveys da CNCF."
      }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Fundamentos",
    title: "Séries temporais — o tipo de dado mais comum",
    slideNo: 13, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "Grande parte dos dados que você vai visualizar no Grafana são séries temporais: sequências de medições indexadas por timestamp.\n\nCada ponto tem três componentes:\n\n• Métrica: o nome do que está sendo medido (node_cpu_seconds_total)\n• Timestamp: o instante da coleta (2024-11-20T18:30:00Z)\n• Valor: o número em si (12.5)\n• Labels: dimensões que qualificam a métrica (instance=host-01, mode=idle)\n\nOs labels são o que tornam o Prometheus e o Grafana tão poderosos: você consegue agregar, filtrar e cruzar métricas por qualquer dimensão, sem mover dados de lugar.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 8.0, y: 1.95, w: 4.9, h: 5.0,
        text: "# Exemplo de série temporal\n\nnode_cpu_seconds_total{\n  instance=\"host-01\",\n  mode=\"idle\",\n  cpu=\"0\"\n} 18423.45 @ 1732128600\n\nnode_cpu_seconds_total{\n  instance=\"host-01\",\n  mode=\"idle\",\n  cpu=\"1\"\n} 18425.12 @ 1732128600\n\n# Mesmo nome de métrica,\n# labels diferentes = séries\n# diferentes. O Grafana plota\n# cada série como uma linha." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Demonstração",
    title: "Subindo o ambiente — visão geral",
    slideNo: 14, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Para a primeira noite, vamos rodar 3 containers Docker lado a lado:\n\n1. Prometheus (porta 9090) — banco de séries temporais que raspa métricas dos exporters\n2. Node Exporter (porta 9100) — emite métricas do host (CPU, memória, disco, rede)\n3. Grafana (porta 3000) — interface visual que consome o Prometheus\n\nTudo é provisionado automaticamente: o Prometheus já tem o Node Exporter como target, e o Grafana já tem o Prometheus como datasource. Sem cliques manuais.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Estrutura do lab\n\nlab/dia1/\n├── docker-compose.yml\n├── prometheus.yml\n├── alerts.yml\n└── grafana/\n    ├── provisioning/\n    │   ├── datasources/\n    │   │   └── datasource.yml\n    │   └── dashboards/\n    │       └── dashboards.yml\n    └── dashboards/\n        └── 01-visao-geral-host.json" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Demo",
    title: "docker compose up — em 1 comando",
    slideNo: 15, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "O aluno só precisa executar dois comandos:\n\n1. cd lab/dia1\n2. docker compose up -d\n\nEm ~30 segundos, os 3 containers estão em pé, o Prometheus já está raspando o Node Exporter a cada 15 segundos, e o Grafana carrega o dashboard pré-configurado.\n\nToda a complexidade está isolada nos arquivos de configuração que o instrutor já preparou. O aluno não digita nada complicado — só observa e entende o que cada arquivo faz.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "$ cd lab/dia1\n$ docker compose up -d\n[+] Running 3/3\n ✔ Container lab-prometheus    Started\n ✔ Container lab-node-exporter Started\n ✔ Container lab-grafana       Started\n\n$ docker compose ps\nNAME                STATUS    PORTS\nlab-prometheus      Up        0.0.0.0:9090->9090/tcp\nlab-node-exporter   Up        0.0.0.0:9100->9100/tcp\nlab-grafana         Up        0.0.0.0:3000->3000/tcp" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Hands-on",
    title: "Exercício 1.1 — Subir o ambiente",
    slideNo: 16, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "callout", x: 0.5, y: 1.95, w: 12.4, h: 0.8, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Você tem 5 minutos. Abra o terminal e siga exatamente os passos abaixo." },
      { type: "code", x: 0.5, y: 2.85, w: 12.4, h: 2.4,
        text: "cd lab/dia1\ndocker compose up -d\ndocker compose ps\n\n# Aguarde ~30 segundos e abra o navegador:\n# Grafana:    http://localhost:3000   (admin / admin)\n# Prometheus: http://localhost:9090\n# Métricas:   http://localhost:9100/metrics" },
      { type: "callout", x: 0.5, y: 5.4, w: 12.4, h: 1.7, fill: C.lt2, textColor: C.dk1, bold: false,
        text: "✅ Critério de aceite: três containers em status Up, Grafana abrindo no navegador, login admin / admin funcionando.\n\n❌ Se algum container ficar em Restarting, rode: docker compose logs -f <nome> e chame o instrutor." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "UI",
    title: "Conhecendo a interface do Grafana",
    slideNo: 17, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "A barra lateral esquerda é o ponto de entrada para todos os recursos:\n\n• Search (lupa) — busca por painéis, dashboards e data sources\n• Dashboards — biblioteca de dashboards (4 quadradinhos)\n• Explore — modo ad-hoc para testar queries sem criar dashboard\n• Alerting — regras, silences, contact points e grupos\n• Connections — gerenciamento de data sources e plugins\n• Administration — usuários, times, organizações, configurações\n\nO topo da tela tem o seletor de tempo (right side) e o botão de refresh. Esses dois controles são os mais usados no dia a dia — vale a pena memorizar.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "callout", x: 7.0, y: 1.95, w: 5.9, h: 5.0, fill: C.lt2, textColor: C.dk1, bold: false,
        text: "Atalhos úteis\n\nG + D  →  ir para Dashboards\nG + E  →  ir para Explore\nCtrl+K  →  command palette (busca global)\nEsc       →  fecha menus\n?            →  lista todos os atalhos\n\nNa dúvida, Ctrl+K é seu melhor amigo. O command palette indexa todos os recursos do Grafana." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Exploração",
    title: "Explore — o laboratório de queries",
    slideNo: 18, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "O Explore é onde você testa queries antes de colocá-las em um dashboard. É a ferramenta de investigação — equivalente ao psql para o PostgreSQL, ou ao curl para uma API.\n\nNo Dia 1 vamos usar quase exclusivamente. Selecione o datasource Prometheus, digite a query, escolha o intervalo de tempo e clique em Run query.\n\nTrês botões ficam disponíveis acima dos resultados: Table (mostra o JSON cru), Time series (gráfico de linha) e Inspector (metadados, tempo de execução, status da query).",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Suas primeiras queries no Explore\n\n# 1. Valor bruto\nnode_cpu_seconds_total\n\n# 2. Taxa por segundo\nrate(node_cpu_seconds_total[1m])\n\n# 3. CPU idle médio\navg(rate(node_cpu_seconds_total{mode=\"idle\"}[1m]))\n\n# 4. CPU em uso (%)\n100 - (avg(rate(node_cpu_seconds_total{mode=\"idle\"}[1m])) * 100)\n\n# Dica: Ctrl+Space mostra auto-complete" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Conceito",
    title: "Linguagens de consulta por data source",
    slideNo: 19, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "table", x: 0.5, y: 1.95, w: 12.4, h: 5.0, colW: [3.5, 3.5, 5.4], rows: [
        [
          { text: "Data source", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
          { text: "Linguagem", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
          { text: "Caso de uso", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } }
        ],
        ["Prometheus", "PromQL", "Métricas de infraestrutura, microsserviços, Kubernetes"],
        ["Loki", "LogQL", "Logs estruturados, debugging, auditoria"],
        ["Tempo / Jaeger", "TraceQL", "Tracing distribuído, latência por hop"],
        ["MySQL / PostgreSQL", "SQL", "Métricas de negócio, dashboards de aplicação"],
        ["InfluxDB / VictoriaMetrics", "Flux / PromQL-like", "Séries temporais de IoT, edge, telemetria"],
        ["CloudWatch / Azure Monitor", "Linguagem própria", "Métricas de provedores cloud"]
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Hands-on",
    title: "Exercício 1.2 — Explorar dados no Explore",
    slideNo: 20, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "code", x: 0.5, y: 1.95, w: 12.4, h: 4.5,
        text: "# Passo a passo\n\n1. Menu lateral → Explore\n2. Data source: Prometheus\n3. Cole a query abaixo e clique em Run query:\n\n   rate(node_cpu_seconds_total{mode=\"idle\"}[1m])\n\n4. Mude o intervalo de tempo para \"Last 5 minutes\"\n5. No canto direito do gráfico, clique em \"Table\" — veja o JSON cru\n6. Volte para \"Time series\"\n7. Agora troque a query para:\n\n   100 - (avg(rate(node_cpu_seconds_total{mode=\"idle\"}[1m])) * 100)\n\n8. Adicione um unit \"Percent (0-100)\" em Panel options (mesmo sem salvar)\n\nPergunta: o que mudou entre a query 1 e a 3? Anote sua resposta no caderno." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Criação",
    title: "Criando seu primeiro dashboard",
    slideNo: 21, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "A criação de um dashboard segue um fluxo direto:\n\n1. Dashboards → New → New dashboard\n2. Add visualization (ou Ctrl+V dentro do dashboard)\n3. Escolha o data source (já pré-selecionado se for o default)\n4. Escreva a query no editor PromQL\n5. Configure título, unidade, thresholds, cores\n6. Apply → o painel aparece no dashboard\n7. Salve com Ctrl+S\n\nVocê pode arrastar painéis para reordenar, redimensionar pelas bordas e agrupar com 'Rows' para organização lógica. Tudo é não-destrutivo: pode editar e reverter a qualquer momento.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "callout", x: 7.0, y: 1.95, w: 5.9, h: 5.0, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Dica de ouro\n\nNão crie o dashboard definitivo logo de cara. Crie um draft, ajuste a query no Explore até ficar perfeita, copie a query para o painel, e só então refine o visual.\n\nO Explore é o sandbox. O dashboard é o produto final." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Tipo de painel",
    title: "Tipos de visualização mais usados",
    slideNo: 22, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "cards", x: 0.5, y: 1.95, w: 12.4, h: 5.0, cards: [
        { title: "Time series", text: "Linha temporal. Padrão para métricas ao longo do tempo. Suporta multi-série, transformações e anotações.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Stat", text: "Número grande com tendência. Ideal para KPIs no topo de dashboards (CPU atual, receita do dia).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Gauge", text: "Velocímetro com threshold. Mostra valor em relação a um limite (uso de disco, fila de requisições).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Bar gauge", text: "Barras horizontais com threshold. Ótimo para ranking (top 10 processos, top 5 hosts).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Table", text: "Tabela com ordenação. Para dados tabulares, logs estruturados, inventário de recursos.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Heatmap", text: "Mapa de calor por horário. Identifica padrões temporais (picos de tráfego, uso por hora do dia).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 }
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Hands-on",
    title: "Exercício 1.3 — Dashboard do zero",
    slideNo: 23, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "Crie um dashboard chamado 'Meu primeiro dashboard' com 2 painéis:\n\nPainel 1 — Stat: Uso de CPU do host (%)\n• Type: stat\n• Query: 100 - (avg(rate(node_cpu_seconds_total{mode=\"idle\"}[1m])) * 100)\n• Unit: Percent (0-100)\n• Thresholds: 0–60 verde, 60–80 amarelo, 80+ vermelho\n\nPainel 2 — Time series: Memória em uso (bytes)\n• Type: time series\n• Query: node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes\n• Unit: bytes\n• Fill opacity: 20\n• Line width: 2",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Estrutura final do dashboard\n\n┌─────────────────────────────────┐\n│  Meu primeiro dashboard         │\n├────────────────┬────────────────┤\n│   Stat         │   Time series  │\n│                │                │\n│   12%          │  /\\_           │\n│   CPU em uso   │ /   \\_         │\n│                │/      \\_       │\n│                │/        \\_     │\n└────────────────┴────────────────┘\n\nSalvar: Ctrl+S\nCompartilhar: Share → Export" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Encerramento",
    title: "Recapitulando o Dia 1",
    slideNo: 24, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "bullets", x: 0.5, y: 1.95, w: 12.4, h: 5.0, size: 14, items: [
        "Observabilidade é a disciplina de entender o sistema a partir das suas saídas",
        "Os 3 pilares: métricas, logs e traces — Grafana visualiza os três",
        "Prometheus é o banco de séries temporais mais usado no mercado",
        "Node Exporter emite métricas do host em formato Prometheus",
        "Subir a stack leva 30 segundos com Docker Compose",
        "A interface do Grafana é organizada em torno de dashboards e Explore",
        "PromQL é a linguagem para extrair e transformar séries temporais",
        "Os tipos de painel mais comuns: time series, stat, gauge, table, heatmap",
        "O ciclo de criação: testa no Explore → cria painel → ajusta → salva"
      ]}
    ]
  }));

  slides.push(() => slideSection({
    kicker: "Dia 02",
    title: "Visualizações,\nvariáveis\ne alertas",
    color: C.accent1,
    slideNo: 25, total: TOTAL_PLACEHOLDER,
    notes: "Divisor do Dia 2. Apresentar a agenda da noite."
  }));

  // -------------------------------------------------------------------------
  // DIA 2 - Conteúdo
  // -------------------------------------------------------------------------
  slides.push(() => slideContent({
    eyebrow: "Dia 2 — Agenda",
    title: "Aprofundando no Grafana",
    slideNo: 26, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "process", x: 0.5, y: 2.0, w: 12.4, h: 3.0, steps: [
        { title: "Variáveis", text: "Dashboards dinâmicos com dropdowns de host, região, intervalo." },
        { title: "Mais tipos", text: "Gauge, table, bar gauge, heatmap em ação." },
        { title: "PromQL", text: "topk, agregação por label, funções de janela." },
        { title: "Alertas", text: "Configurar regras Prometheus e Grafana, ver FIRING." },
        { title: "Containers", text: "cAdvisor para métricas Docker no dashboard." }
      ]},
      { type: "text", x: 0.5, y: 5.6, w: 12.4, h: 1.5,
        text: "Hoje o ambiente ganha mais componentes: Alertmanager e cAdvisor. O objetivo é construir dashboards profissionais — com variáveis, filtros e alertas que disparam de verdade.",
        size: 14, color: C.dk1, valign: "top" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Conceito",
    title: "Variáveis — dashboards que se adaptam",
    slideNo: 27, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Variáveis transformam um dashboard estático em uma ferramenta dinâmica. Em vez de criar um painel por host, você cria um painel com uma variável $host e o usuário escolhe no dropdown.\n\nTipos principais:\n\n• Query — valores vêm de uma query (ex: hosts do Prometheus)\n• Custom — lista fixa definida por você (ex: ambiente = prod,staging,dev)\n• Data source — alterna entre múltiplos data sources\n• Interval — intervalos de tempo pré-definidos (5m, 1h, 1d)\n• Text box — texto livre do usuário",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Criando uma variável no dashboard\n\nSettings (engrenagem) → Variables → New variable\n\nName:        host\nType:        Query\nData source: Prometheus\nQuery:       label_values(node_cpu_seconds_total, instance)\nRefresh:     On time range change\nMulti-value: true   (selecionar vários)\nInclude All: true   (opção 'All' no topo)\n\n# Uso nas queries\nnode_cpu_seconds_total{instance=~\"$host\"}\nnode_memory_MemTotal_bytes{instance=~\"$host\"}" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Hands-on",
    title: "Exercício 2.1 — Variável $host",
    slideNo: 28, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "No dashboard '02 - Host dinâmico (variáveis)':\n\n1. No topo, mude o dropdown 'host' para um único host e observe todos os painéis se atualizarem\n2. Mude para 'All' — todos os painéis passam a mostrar múltiplas séries\n3. Adicione uma variável nova: tipo Custom, nome cpu_mode, valores idle,user,system,iowait\n4. Em uma query existente, troque mode=\"idle\" por mode=~\"$cpu_mode\"\n5. Salve o dashboard como '02 - Host dinâmico (variáveis) — meu'\n\nDica: o regex =~ aceita múltiplos valores separados por pipe. mode=~\"idle|user\" casa com mode=idle OU mode=user.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Query original (fixa)\n100 - (avg by(instance) (\n  rate(node_cpu_seconds_total{mode=\"idle\"}[5m])\n) * 100)\n\n# Query com variável\n100 - (avg by(instance) (\n  rate(node_cpu_seconds_total{\n    mode=~\"$cpu_mode\",\n    instance=~\"$host\"\n  }[5m])\n) * 100)\n\n# $__rate_interval é uma variável\n# especial que se adapta ao range\n# de tempo escolhido." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Painel",
    title: "Gauge — quando o valor importa mais que a série",
    slideNo: 29, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "O gauge mostra um valor único em relação a um limite. É o velocímetro do painel — útil quando o que importa é 'estamos em qual faixa?'.\n\nExemplos de uso apropriado:\n\n• Memória em uso (0-100%)\n• Conexões ativas vs limite da pool\n• Tamanho de fila vs SLO\n• SLA de uptime mensal\n\nNão use para séries temporais. Para isso, use time series. Gauge sem tendência temporal vira ruído visual.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "# Configuração recomendada\n\nType:   gauge\nUnit:   Percent (0-100)\nMin:    0\nMax:    100\nThresholds:\n  0  – 70  → green\n  70 – 85  → orange\n  85 – 100 → red\n\n# Query típica\n(1 - (node_memory_MemAvailable_bytes\n       / node_memory_MemTotal_bytes)) * 100" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Painel",
    title: "Heatmap — padrões temporais em um piscar",
    slideNo: 30, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Heatmap mapeia duas dimensões em uma grade de cores: tempo no eixo X, valor no eixo Y, intensidade da cor indicando frequência.\n\nÉ especialmente útil para identificar padrões cíclicos — picos de tráfego que se repetem toda terça-feira, lentidão à meia-noite, jobs pesados em horário comercial.\n\nA query precisa retornar o formato heatmap: agregações em buckets. O Grafana faz isso automaticamente se você marcar 'Format as Heatmap' na query.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Query para heatmap (formato heatmap)\n\n100 - (avg by(instance) (\n  rate(\n    node_cpu_seconds_total{\n      mode=\"idle\",\n      instance=~\"$host\"\n    }[5m]\n  )\n) * 100)\n\n# Na query do Prometheus:\n# - Marque 'Format: Heatmap'\n# - Aumente o range para 6h+ para\n#   ver padrões\n# - Y-axis: linear ou log" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "PromQL",
    title: "topk e agregação por label",
    slideNo: 31, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Duas funções do PromQL mudam completamente o que você vê:\n\n• topk(N, expr) — retorna os N maiores valores de uma expressão\n• sum by(label) (expr) — soma os valores agrupando por label\n• avg by(label) (expr) — calcula média por grupo\n• count by(label) (expr) — conta séries distintas\n• rate / irate — taxa de variação por segundo\n\nCombinando essas funções, você constrói queries como 'top 5 hosts com mais CPU' ou 'uso médio por datacenter'.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Top 5 containers por CPU\ntopk(5, rate(\n  container_cpu_usage_seconds_total{name!=\"\"}[5m]\n) * 100)\n\n# Memória total por datacenter\nsum by(datacenter) (\n  node_memory_MemTotal_bytes\n  - node_memory_MemAvailable_bytes\n)\n\n# Contagem de hosts UP\ncount(up{job=\"node-exporter\"} == 1)\n\n# Taxa de crescimento por minuto\nrate(node_network_receive_bytes_total[5m]) * 60" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Alertas",
    title: "Alertas no Prometheus — anatomia",
    slideNo: 32, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "Uma regra de alerta tem 4 partes:\n\n1. A query que produz o sinal (expr)\n2. A condição de disparo (> 80, == 0, etc.)\n3. O tempo de espera (for: 5m) — evita alertas espúrios\n4. As anotações — summary e description que aparecem na notificação\n\nO alerta fica em 3 estados: Inactive (sem disparar), Pending (condição atingida, aguardando o for), Firing (passou o for, está notificando).\n\nAcompanhe em http://localhost:9090/alerts.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "groups:\n  - name: host\n    rules:\n      - alert: HostCPUAlta\n        expr: |\n          100 - (avg by(instance) (\n            rate(node_cpu_seconds_total{\n              mode=\"idle\"\n            }[5m])\n          ) * 100) > 80\n        for: 5m\n        labels:\n          severidade: warning\n        annotations:\n          summary: \"CPU alta em {{ $labels.instance }}\"\n          description: |\n            CPU acima de 80% por mais de\n            5 minutos (atual: {{ $value | printf \\\"%.1f\\\" }}%)" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Hands-on",
    title: "Exercício 2.2 — Disparar um alerta",
    slideNo: 33, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "code", x: 0.5, y: 1.95, w: 12.4, h: 3.5,
        text: "# Em outro terminal, force carga no container\ndocker exec -it lab-node-exporter sh -c \\\n  'dd if=/dev/urandom of=/dev/null bs=1M count=2000 &'\n\n# Acompanhe o alerta em http://localhost:9090/alerts\n# Status esperado: PENDING → FIRING (após 5 min)\n\n# Quando quiser parar, mate o processo:\ndocker exec -it lab-node-exporter pkill dd\n\n# O alerta volta a INACTIVE após 5 min\n# de CPU abaixo do threshold." },
      { type: "callout", x: 0.5, y: 5.55, w: 12.4, h: 1.7, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Por que isso é importante: o aluno vê o ciclo de vida real do alerta (Pending → Firing → Inactive), entende o papel do 'for' e por que a notificação não é instantânea. Em produção, isso evita alertas de ruído." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Alertas",
    title: "Alertas no Grafana — UI vs arquivo",
    slideNo: 34, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "O Grafana tem seu próprio motor de alertas, separado do Prometheus. Você pode usar qualquer um — ou os dois.\n\nUI (Alerting → Alert rules):\n• Bom para prototipar\n• Editor visual com preview\n• Cria contact points e silences\n\nArquivo (provisioning/alerting/):\n• GitOps-friendly\n• Versionado junto com a infra\n• Idempotente: aplica a cada reload\n\nA configuração file-based é o padrão em produção. Vamos exercitar os dois.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "# Grafana - alert rule via arquivo YAML\n\napiVersion: 1\ngroups:\n  - orgId: 1\n    name: regras_padrao\n    folder: Laboratório\n    interval: 1m\n    rules:\n      - uid: cpu-alta-grafana\n        title: CPU alta no host\n        condition: A\n        data:\n          - refId: A\n            datasourceUid: prometheus\n            model:\n              expr: |\n                100 - (avg by(instance) (\n                  rate(node_cpu_seconds_total{\n                    mode=\"idle\"\n                  }[5m])\n                ) * 100)\n        for: 5m\n        labels:\n          severidade: warning" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Containers",
    title: "cAdvisor — métricas de container",
    slideNo: 35, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "cAdvisor é o agente oficial do Kubernetes para métricas de container. Roda como container e expõe, na porta 8080, métricas Prometheus sobre cada container do host.\n\nA métrica principal é container_cpu_usage_seconds_total — uso de CPU por container em segundos por segundo. Combine com topk para ranking.\n\nUse o dashboard '03 - Containers (cAdvisor)' para ver a stack atual.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Top 5 containers por CPU\ntopk(5, rate(\n  container_cpu_usage_seconds_total{name!=\"\"}[5m]\n) * 100)\n\n# Memória por container\ntopk(5, container_memory_usage_bytes{name!=\"\"})\n\n# I/O de disco por container\nrate(container_fs_reads_bytes_total[5m])\n\n# Rede por container\nrate(container_network_receive_bytes_total[5m])" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Recap",
    title: "Recapitulando o Dia 2",
    slideNo: 36, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "bullets", x: 0.5, y: 1.95, w: 12.4, h: 5.0, size: 14, items: [
        "Variáveis transformam dashboards em ferramentas dinâmicas",
        "Tipos de variável: query, custom, data source, interval, text box",
        "Gauge para valor único em relação a limite; heatmap para padrões temporais",
        "topk e agregação por label são funções-chave do PromQL",
        "rate() converte contador em taxa por segundo; irate() é a versão instantânea",
        "Alertas têm 3 estados: Inactive, Pending, Firing — o 'for' evita ruído",
        "Grafana tem motor próprio de alertas, separado do Prometheus",
        "cAdvisor expõe métricas de container no formato Prometheus",
        "Provisionamento file-based (YAML) é o padrão em produção"
      ]}
    ]
  }));

  slides.push(() => slideSection({
    kicker: "Dia 03",
    title: "Instalação no\nUbuntu\n(prática guiada)",
    color: C.accent1,
    slideNo: 37, total: TOTAL_PLACEHOLDER,
    notes: "Divisor do Dia 3. Hoje é dia de mão na massa — o aluno instala tudo do zero."
  }));
}

module.exports = { pushAll };
