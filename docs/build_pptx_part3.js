// =============================================================================
// Dia 3 + Dia 4 + Encerramento
// =============================================================================
const { C, THEME, slideContent, slideTitle, slideSection, slideImageDemo, slideCheatSheet, W, H, TOTAL_PLACEHOLDER } = require("./build_pptx");

function pushAll(pres, slides) {

  // -------------------------------------------------------------------------
  // DIA 3 - Instalação Ubuntu
  // -------------------------------------------------------------------------
  slides.push(() => slideContent({
    eyebrow: "Dia 3 — Agenda",
    title: "Instalação completa do zero",
    slideNo: 38, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "process", x: 0.5, y: 2.0, w: 12.4, h: 3.0, steps: [
        { title: "Preparar", text: "Sistema, repositório, usuário, firewall." },
        { title: "Instalar", text: "Grafana 11.3 via APT oficial, Prometheus e Node Exporter." },
        { title: "Configurar", text: "grafana.ini, datasource provisionado, systemd." },
        { title: "Validar", text: "Serviços ativos, portas abertas, targets UP." },
        { title: "Customizar", text: "Trocar porta, configurar SMTP, explorar logs." }
      ]},
      { type: "text", x: 0.5, y: 5.6, w: 12.4, h: 1.5,
        text: "O instrutor projeta a tela e executa junto. Os scripts são comentados e idempotentes — se algo der errado, basta rodar de novo. Os scripts estão em lab/dia3/.",
        size: 14, color: C.dk1, valign: "top" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Conceito",
    title: "Por que instalar do zero se o Docker resolve?",
    slideNo: 39, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Docker é ótimo para laboratório, mas em produção a maioria das empresas precisa instalar binários diretamente na máquina virtual — sem camada de container entre.\n\nAo instalar do zero, você entende:\n\n• Onde o Grafana guarda configuração (/etc/grafana)\n• Onde ficam os logs (/var/log/grafana)\n• Como o systemd gerencia o serviço\n• Quais portas e usuários o processo cria\n• Como atualizar com apt upgrade\n\nEsse conhecimento é a base para troubleshooting real.",
        size: 13, color: C.dk1, paraSpaceAfter: 4, valign: "top" },
      { type: "callout", x: 7.5, y: 1.95, w: 5.4, h: 5.0, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Regra de bolso\n\nUse Docker para dev/teste. Use pacote do sistema para produção (exceto Kubernetes, onde container é a regra).\n\nEm ambos os casos, o Grafana é configurado por arquivos em /etc/grafana. O comportamento é idêntico."
      }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Lab 01",
    title: "01-prepare.sh — preparando o sistema",
    slideNo: 40, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "O primeiro script faz o trabalho de base:\n\n1. apt-get update — sincroniza o índice de pacotes\n2. apt-get install de pré-requisitos (curl, gnupg, apt-transport-https)\n3. Criação do usuário grafana — sem login, sem senha\n4. Criação dos diretórios /var/lib/grafana, /var/log/grafana, /etc/grafana\n5. Abertura das portas 3000 e 9090 no UFW, se ativo\n\nO set -euo pipefail garante que o script pare no primeiro erro.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "#!/usr/bin/env bash\nset -euo pipefail\n\nif [[ $EUID -ne 0 ]]; then\n  echo \"ERRO: execute como root\"\n  exit 1\nfi\n\napt-get update -y\napt-get install -y \\\n  curl \\\n  apt-transport-https \\\n  software-properties-common \\\n  gnupg \\\n  lsb-release \\\n  ca-certificates\n\n# Cria usuário sem login\nadduser --system \\\n  --no-create-home \\\n  --shell /bin/false \\\n  --group grafana\n\n# Diretórios com dono correto\ninstall -d -o grafana -g grafana \\\n  /var/lib/grafana /var/log/grafana" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Lab 02",
    title: "02-install-grafana.sh — via repositório APT",
    slideNo: 41, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "Por que adicionar um repositório em vez de baixar o .deb?\n\n• apt entende dependências automaticamente\n• apt upgrade atualiza o Grafana junto com o sistema\n• A chave GPG garante autenticidade do pacote\n\nA versão fica fixada (11.3.0) para reprodutibilidade. Em produção, pode-se usar grafana (latest) ou travar com versionamento semver.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "#!/usr/bin/env bash\nset -euo pipefail\n\n# Chave GPG oficial\ncurl -fsSL https://apt.grafana.com/gpg.key \\\n  | gpg --dearmor \\\n    -o /etc/apt/keyrings/grafana.gpg\n\n# Entrada do repositório\necho \"deb [signed-by=/etc/apt/keyrings/grafana.gpg] \\\nhttps://apt.grafana.com stable main\" \\\n  > /etc/apt/sources.list.d/grafana.list\n\napt-get update -y\napt-get install -y \\\n  --no-install-recommends \\\n  grafana=11.3.0\n\nsystemctl daemon-reload" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Lab 03",
    title: "03-configure.sh — grafana.ini + provisionamento",
    slideNo: 42, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "O grafana.ini tem mais de 1000 linhas comentadas. Em vez de editá-lo à mão, usamos sed para ajustar apenas o que precisamos:\n\n• http_port = 3000\n• admin_user / admin_password\n• database path (SQLite local)\n• provisioning path\n\nEm seguida provisionamos o datasource do Prometheus via YAML — assim ele sobe automaticamente junto com o Grafana.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "# Ajustando o grafana.ini\n\nsed -i 's/^;http_port = 3000/http_port = 3000/' \\\n  /etc/grafana/grafana.ini\n\nsed -i 's/^;admin_user = admin/admin_user = admin/' \\\n  /etc/grafana/grafana.ini\n\nsed -i 's/^;admin_password = admin/admin_password = admin/' \\\n  /etc/grafana/grafana.ini\n\n# Provisiona Prometheus\ncat > /etc/grafana/provisioning/datasources/\\\nprometheus.yml <<'YAML'\napiVersion: 1\ndatasources:\n  - name: Prometheus\n    type: prometheus\n    url: http://localhost:9090\n    isDefault: true\nYAML\n\n# Habilita e inicia\nsystemctl enable --now grafana-server" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Lab 04",
    title: "04-install-prometheus.sh — binário oficial",
    slideNo: 43, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "O Prometheus é distribuído como binário tar.gz. Instalamos em /usr/local/bin (padrão de binários não-APT) e criamos o serviço systemd do zero.\n\nA flag --web.enable-lifecycle é importante: ela expõe o endpoint POST /-/reload, que recarrega a configuração sem reiniciar o processo. Usado em produção para aplicar mudanças sem downtime.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "# Service unit\n[Unit]\nDescription=Prometheus\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n  --config.file=/etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path=/var/lib/prometheus \\\n  --web.enable-lifecycle\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Lab 05",
    title: "05-install-node-exporter.sh",
    slideNo: 44, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.0, h: 5.0,
        text: "Node Exporter é simples: baixa, instala em /usr/local/bin, cria unit systemd. Não tem banco — apenas lê /proc e /sys e expõe via HTTP.\n\nPor padrão, escuta em todas as interfaces na porta 9100. Em produção, recomenda-se escutar só em localhost e deixar o Prometheus raspar localmente (reduz superfície de ataque).",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.0, y: 1.95, w: 5.9, h: 5.0,
        text: "[Service]\nUser=node_exporter\nGroup=node_exporter\nType=simple\nExecStart=/usr/local/bin/node_exporter\nRestart=always\n\n# Para escutar só em localhost:\n# ExecStart=/usr/local/bin/node_exporter \\\n#   --web.listen-address=127.0.0.1:9100" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Lab 06",
    title: "06-validate.sh — check-list automatizado",
    slideNo: 45, total: TOTAL_PLACEHOLDER, // será ajustado
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "O último script verifica 6 coisas:\n\n1. Serviços systemd ativos (grafana-server, prometheus, node_exporter)\n2. Portas em escuta (3000, 9090, 9100)\n3. Health-check HTTP (curl em /api/health, /-/healthy, /metrics)\n4. Targets Prometheus (todos UP?)\n5. DataSources do Grafana (listados?)\n6. Mensagem final com URLs e credenciais\n\nCada check imprime [OK] verde ou [FAIL] vermelho e aborta em caso de erro. O aluno vê, em segundos, o que está ou não funcionando.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "== Targets do Prometheus ==\n  job=prometheus        health=up\n  job=node              health=up\n\n== Datasources do Grafana ==\n  Prometheus  type=prometheus\n              url=http://localhost:9090\n\nTudo certo. Acesse:\n  Grafana:    http://localhost:3000\n  Prometheus: http://localhost:9090\n  Métricas:   http://localhost:9100/metrics" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Troubleshooting",
    title: "Problemas comuns e como resolver",
    slideNo: 46, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "table", x: 0.5, y: 1.95, w: 12.4, h: 5.0, colW: [4.0, 4.4, 4.0], rows: [
        [
          { text: "Sintoma", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
          { text: "Causa provável", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
          { text: "Solução", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } }
        ],
        ["Port 3000 in use", "Outro processo usando a porta", "sudo lsof -i :3000 → kill ou trocar a porta"],
        ["Permission denied em /var/lib/grafana", "Dono do diretório errado", "sudo chown -R grafana:grafana /var/lib/grafana"],
        ["Prometheus target DOWN", "Node Exporter não está respondendo", "systemctl status node_exporter, curl localhost:9100"],
        ["Datasource not found no Grafana", "Provisionamento não aplicou", "rm -rf /var/lib/grafana/grafana.db (força reload)"],
        ["Login admin não funciona", "Senha não foi definida", "Editar /etc/grafana/grafana.ini → admin_password"],
        ["apt-get update falha", "Repositório sem chave ou off-line", "Verificar /etc/apt/keyrings/grafana.gpg"]
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Hands-on",
    title: "Exercício 3.1 — Execução completa",
    slideNo: 47, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "code", x: 0.5, y: 1.95, w: 12.4, h: 3.0,
        text: "# Sequência — execute em ordem\nsudo bash 01-prepare.sh\nsudo bash 02-install-grafana.sh\nsudo bash 03-configure.sh\nsudo bash 04-install-prometheus.sh\nsudo bash 05-install-node-exporter.sh\nsudo bash 06-validate.sh" },
      { type: "callout", x: 0.5, y: 5.05, w: 12.4, h: 1.0, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Antes de começar: confirme com o instrutor que sua VM Ubuntu tem pelo menos 2 vCPU e 4 GB de RAM." },
      { type: "callout", x: 0.5, y: 6.15, w: 12.4, h: 1.0, fill: C.lt2, textColor: C.dk1, bold: false,
        text: "Responda no caderno: qual é o nome do usuário criado para o Grafana, em qual porta ele escuta, e onde fica o banco SQLite?" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Dia 3 — Recap",
    title: "O que aprendemos hoje",
    slideNo: 48, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "bullets", x: 0.5, y: 1.95, w: 12.4, h: 5.0, size: 14, items: [
        "Repositório APT oficial é a forma canônica de instalar o Grafana em produção",
        "Chave GPG em /etc/apt/keyrings garante autenticidade do pacote",
        "Fixar versão (grafana=11.3.0) traz reprodutibilidade ao ambiente",
        "systemd gerencia o serviço — enable + start para subir no boot",
        "Provisionamento file-based deixa configuração versionada no Git",
        "Cada serviço roda com usuário próprio — princípio do menor privilégio",
        "O diretório /var/lib/grafana guarda o SQLite e os plugins",
        "O diretório /etc/grafana tem configuração e provisionamento",
        "Logs ficam em /var/log/grafana/grafana.log",
        "Validação automatizada economiza horas de troubleshooting"
      ]}
    ]
  }));

  slides.push(() => slideSection({
    kicker: "Dia 04",
    title: "Temas,\nprovisionamento\n& multi-stack",
    color: C.accent1,
    slideNo: 49, total: TOTAL_PLACEHOLDER,
    notes: "Último dia. Foco em produção, customização visual e arquitetura multi-stack."
  }));

  // -------------------------------------------------------------------------
  // DIA 4 - Temas, provisionamento, multi-stack
  // -------------------------------------------------------------------------
  slides.push(() => slideContent({
    eyebrow: "Dia 4 — Agenda",
    title: "Encerramento com produção real",
    slideNo: 50, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "process", x: 0.5, y: 2.0, w: 12.4, h: 3.0, steps: [
        { title: "Plugins", text: "Instalar e gerenciar plugins da comunidade e oficiais." },
        { title: "Theming", text: "Dark mode, customização por usuário e por organização." },
        { title: "GitOps", text: "Provisionamento file-based de dashboards, alerts, datasources." },
        { title: "Multi-stack", text: "Adicionar Loki para logs e Tempo para traces." },
        { title: "Encerramento", text: "Q&A, próximos passos, certificação interna." }
      ]},
      { type: "text", x: 0.5, y: 5.6, w: 12.4, h: 1.5,
        text: "Hoje fechamos o ciclo: o aluno sai capaz de operar Grafana em produção, com versionamento no Git, dashboards reproduzíveis e logs/traces integrados.",
        size: 14, color: C.dk1, valign: "top" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Plugins",
    title: "Ecossistema de plugins",
    slideNo: 51, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "O Grafana tem três tipos de plugins:\n\n• Panels — novos tipos de visualização (piechart, worldmap, flowchart)\n• Data sources — novos conectores (Splunk, Datadog, Stripe, Salesforce)\n• Apps — bundles que incluem painéis, datasources e dashboards prontos\n\nInstalação: grafana-cli plugins install <id>. Reinício obrigatório.\n\nSão armazenados em /var/lib/grafana/plugins. Para desabilitar: remover o diretório e reiniciar.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Instalando um plugin\ndocker exec -it lab-grafana bash\n  grafana-cli plugins install grafana-piechart-panel\n  exit\ndocker compose restart grafana\n\n# Plugins populares\n• grafana-piechart-panel   (gráfico de pizza)\n• grafana-worldmap-panel    (mapa geográfico)\n• grafana-clock-panel       (relógio/calendário)\n• grafana-polystat-panel    (múltiplas stats)\n• grafana-googlesheets-datasource\n• marcusolsson-json-datasource\n\n# Listar instalados\ngrafana-cli plugins ls" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Theming",
    title: "Tema visual — por usuário e por dashboard",
    slideNo: 52, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "O Grafana suporta múltiplos temas visuais que vão do light ao ultra-dark. O usuário pode escolher o seu em Preferences.\n\nPara personalizar por dashboard, use o JSON model: o campo 'style' aceita 'dark' ou 'default'. Em produção, prefira 'dark' para painéis em NOC e 'default' para apresentações executivas.\n\nCores dos painéis: cada série aceita um override no campo 'color' do Field config. Use paleta consistente entre dashboards da mesma organização.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Trocar o tema de um dashboard por JSON\n\n{\n  \"title\": \"Meu dashboard\",\n  \"style\": \"dark\",\n  \"panels\": [\n    {\n      \"fieldConfig\": {\n        \"defaults\": {\n          \"color\": {\n            \"mode\": \"palette-classic\"\n          }\n        }\n      }\n    }\n  ]\n}\n\n# Forçar tema em URL\n?theme=dark" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Importação",
    title: "Importar dashboards prontos",
    slideNo: 53, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Grafana.com hospeda milhares de dashboards oficiais e da comunidade. Os mais populares:\n\n• 1860 — Node Exporter Full (esse é o clássico)\n• 315 — Docker Container & Host Metrics\n• 6417 — Kubernetes Cluster Monitoring\n• 3662 — Prometheus 2.0 Stats\n• 12708 — Loki Stack\n\nA importação pede apenas o data source. Grafana reescreve os UIDs automaticamente.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Como importar\n\n1. Dashboards → New → Import\n2. Opção A: digite o ID (1860)\n3. Opção B: cole a URL (https://grafana.com/grafana/dashboards/1860)\n4. Opção C: faça upload de um .json\n5. Escolha o data source de destino\n6. Clique em Import\n\n# Exportar o seu\nShare → Export → Save to file\n\n# Importar por API\ncurl -X POST \\\n  -H 'Content-Type: application/json' \\\n  -d @dashboard.json \\\n  -u admin:admin \\\n  http://localhost:3000/api/dashboards/import" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "GitOps",
    title: "Provisionamento file-based",
    slideNo: 54, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Em produção, clicar no Grafana UI para criar dashboards é o primeiro passo para o caos. Use file-based provisioning: arquivos YAML/JSON em uma pasta, versionados no Git.\n\nVantagens:\n\n• Reprodutibilidade: o mesmo arquivo gera o mesmo ambiente\n• Auditoria: git log mostra quem mudou o quê e quando\n• Disaster recovery: rm grafana.db + reload restaura tudo\n• CI/CD: deploy automático junto com a infra\n\nEstrutura típica:",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "/etc/grafana/provisioning/\n├── datasources/\n│   └── prometheus.yml\n├── dashboards/\n│   └── provider.yml\n└── alerting/\n    └── rules.yml\n\n/var/lib/grafana/dashboards/\n├── 01-visao-geral.json\n├── 02-host-dinamico.json\n└── 03-containers.json\n\n# Os YAMLs definem 'onde estão os\n# recursos'; os JSONs/recursos\n# ficam ao lado ou em volume\n# montado." }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Loki",
    title: "Adicionando Loki — logs no Grafana",
    slideNo: 55, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Loki é o 'Prometheus dos logs' — coleta, indexa e armazena logs de aplicações. Foi criado pela Grafana Labs com a mesma filosofia do Prometheus: baixo custo, fácil de operar, integração nativa.\n\nA query language é a LogQL, similar ao PromQL mas com operadores para filtrar texto ({app=\"api\"} |= \"error\").\n\nPara coletar logs dos containers, use Promtail (ou Grafana Alloy, o substituto). Em Kubernetes, ele lê direto do kubelet.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# Adicionar Loki ao docker-compose\n\nservices:\n  loki:\n    image: grafana/loki:3.3.2\n    ports: [\"3100:3100\"]\n    command: -config.file=/etc/loki/local-config.yaml\n    networks: [lab-net]\n\n# Adicionar datasource no Grafana\n# Connections → Data sources → Add\n# Type: Loki\n# URL:  http://loki:3100\n\n# Query de exemplo no Explore\n{app=\"nginx\"} |= \"error\" | json | line_format \"{{.message}}\"" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Tempo",
    title: "Adicionando Tempo — traces distribuídos",
    slideNo: 56, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 6.5, h: 5.0,
        text: "Tempo é o backend de traces open-source da Grafana Labs. Substitui o Jaeger em muitos casos, com integração nativa ao Grafana.\n\nA query language é a TraceQL — também similar ao PromQL.\n\nCom Loki + Tempo + Prometheus no mesmo dashboard, o SRE pula de uma métrica para o trace relacionado, e do trace para o log de um span específico. Esse fluxo é chamado de 'Grafana three pillars' e é a base da observabilidade moderna.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "code", x: 7.5, y: 1.95, w: 5.4, h: 5.0,
        text: "# docker-compose para Tempo\n\nservices:\n  tempo:\n    image: grafana/tempo:2.6.0\n    command: [\"-config.file=/etc/tempo.yaml\"]\n    volumes:\n      - ./tempo.yaml:/etc/tempo.yaml:ro\n    ports: [\"3200:3200\"]\n    networks: [lab-net]\n\n# Datasource no Grafana\nType: Tempo\nURL:  http://tempo:3200\n\n# No Explore, query por service.name\n{ resource.service.name = \"frontend\" } | latency > 500ms" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Multi-stack",
    title: "Arquitetura completa",
    slideNo: 57, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "text", x: 0.5, y: 1.95, w: 7.0, h: 5.0,
        text: "Em uma arquitetura Grafana completa, temos:\n\n• Grafana — a camada de visualização única\n• Prometheus / Mimir — métricas (curto e longo prazo)\n• Loki — logs agregados\n• Tempo — traces distribuídos\n• Pyroscope — continuous profiling (parente mais novo)\n• Alloy / Promtail / OTel Collector — coleta unificada\n\nTudo é open source, todos rodam em Docker, todos se conversam via OTLP ou PromQL.",
        size: 13, color: C.dk1, valign: "top" },
      { type: "callout", x: 7.5, y: 1.95, w: 5.4, h: 5.0, fill: C.accent1, textColor: C.lt1, bold: true,
        text: "Caminho de aprendizado após este curso\n\n1. Certificação Grafana Certified Observability Engineer (GCOE) — oficial\n2. Praticar com Loki + Tempo em ambiente pessoal\n3. Estudar Mimir para métricas em escala\n4. Aprender OpenTelemetry (instrumentação)\n5. Aprofundar em SRE, SLI/SLO, error budgets\n\nOnde buscar: training.grafana.com, grafana.com/blog, github.com/grafana" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Boas práticas",
    title: "12 regras de ouro para o dia a dia",
    slideNo: 58, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "cards", x: 0.5, y: 1.95, w: 12.4, h: 5.0, cards: [
        { title: "1. Nomeie painéis", text: "Sempre. 'Painel 1' não serve para ninguém em produção.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "2. Use variáveis", text: "Em vez de duplicar dashboards por ambiente/host, use $env e $host.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "3. Limite painéis", text: "12 a 16 por dashboard. Acima disso, quebre em abas/folders.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "4. Documente no JSON", text: "Adicione o campo 'description' em cada dashboard. Aparece no tooltip.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "5. Versione no Git", text: "Provisionamento file-based. Commit por ambiente (dev, staging, prod).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "6. Alerte no for", text: "Sempre use 'for: 5m' ou mais. Alerta instantâneo = ruído.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "7. Roteie por severidade", text: "warning → Slack; critical → telefone. Distinga.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "8. Monitore o monitoramento", text: "Alerta 'PrometheusDown' é o mais importante. Você precisa saber se perdeu o monitor.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 }
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Encerramento",
    title: "O que você aprendeu",
    slideNo: 59, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "bullets", x: 0.5, y: 1.95, w: 12.4, h: 5.0, size: 14, items: [
        "Os 3 pilares da observabilidade e como o Grafana unifica tudo",
        "A subir uma stack completa em Docker Compose em 1 comando",
        "A criar dashboards com stat, time series, gauge, table, bar, heatmap",
        "A usar variáveis para tornar dashboards dinâmicos",
        "A escrever queries PromQL com rate, topk, agregação por label",
        "A instalar Grafana + Prometheus + Node Exporter em Ubuntu via APT",
        "A configurar systemd, provisionar datasources e validar a stack",
        "A configurar alertas Prometheus e Grafana com tempo de espera",
        "A exportar, importar e versionar dashboards como JSON",
        "A adicionar Loki e Tempo para logs e traces",
        "A aplicar boas práticas de produção (for em alertas, versionamento)"
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Próximos passos",
    title: "Para continuar aprendendo",
    slideNo: 60, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "cards", x: 0.5, y: 1.95, w: 12.4, h: 5.0, cards: [
        { title: "Oficial", text: "training.grafana.com — cursos oficiais (Grafana Fundamentals, Grafana Enterprise).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Certificação", text: "Grafana Certified Observability Engineer (GCOE) — prova online, US$ 200.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Comunidade", text: "community.grafana.com — fórum oficial. Resposta em horas.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "GitHub", text: "github.com/grafana — issues, RFCs, código fonte. Tudo open source.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Blog", text: "grafana.com/blog — casos reais, anúncios, tutoriais aprofundados.", fill: C.lt2, border: C.accent1, titleColor: C.accent1 },
        { title: "Slack", text: "slack.grafana.com — canais temáticos por produto (loki, tempo, mimir).", fill: C.lt2, border: C.accent1, titleColor: C.accent1 }
      ]}
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Q&A",
    title: "Perguntas e revisão",
    slideNo: 61, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "callout", x: 0.5, y: 1.95, w: 12.4, h: 2.5, fill: C.accent1, textColor: C.lt1, bold: true, size: 28, align: "center", valign: "middle",
        text: "Vamos abrir para perguntas.\n\nTemas sugeridos: instalação em produção, observabilidade em Kubernetes, integração com outras ferramentas, carreira em SRE." },
      { type: "text", x: 0.5, y: 4.7, w: 12.4, h: 2.5, text: "Material de apoio:\n\n• Slides deste curso (esta apresentação)\n• Caderno de exercícios (PDF — caderno-exercicios.pdf)\n• Scripts de laboratório (lab/dia1, lab/dia2, lab/dia3)\n• Dashboards pré-configurados (incluídos no compose)\n\nTudo no pacote entregue pelo instrutor. Material liberado para uso interno, sem redistribuição.",
        size: 13, color: C.dk1, valign: "top" }
    ]
  }));

  slides.push(() => slideContent({
    eyebrow: "Obrigado",
    title: "Sucesso na sua jornada!",
    slideNo: 62, total: TOTAL_PLACEHOLDER,
    blocks: [
      { type: "callout", x: 0.5, y: 1.95, w: 12.4, h: 5.0, fill: C.lt2, textColor: C.dk1, bold: false, size: 18, valign: "middle", align: "center",
        text: "Grafana é mais que uma ferramenta — é a forma moderna de olhar para sistemas complexos.\n\nEm 16 horas vocês viram a base completa. Agora é praticar, errar, ajustar, e construir dashboards que ajudem seu time a tomar decisões melhores.\n\nObrigado pela presença e pelo tempo dedicado. Estarei disponível para dúvidas no email do curso.\n\n— Fabio Silva" }
    ]
  }));
}

module.exports = { pushAll };


