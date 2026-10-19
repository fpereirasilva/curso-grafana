const path = require("path");
const fs = require("fs");

const mod1 = require("./build_pptx");
const mod2 = require("./build_pptx_part2");
const mod3 = require("./build_pptx_part3");

const ROOT = path.resolve(__dirname, "..");
const SHOTS = path.join(ROOT, "assets", "screenshots");

const pres = mod1.pres;
pres.layout = "LAYOUT_WIDE";

const C = pres.SchemeColor;
const THEME = mod1.THEME;
const W = 13.333;
const H = 7.5;

function slideScreenshot({ filename, title, eyebrow, slideNo, total, caption }) {
  const filepath = path.join(SHOTS, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`[skip] screenshot não encontrada: ${filename}`);
    return null;
  }

  const s = pres.addSlide();
  s.background = { color: C.lt1 };
  s.addShape("rect", { x: 0, y: 0, w: W, h: 0.4, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  s.addText(eyebrow.toUpperCase(), {
    x: 0.5, y: 0.55, w: 12.4, h: 0.35,
    fontFace: THEME.bodyFontFace, fontSize: 10, bold: true,
    color: C.accent1, charSpacing: 4
  });
  s.addText(title, {
    x: 0.5, y: 0.95, w: 12.4, h: 0.7,
    fontFace: THEME.headFontFace, fontSize: 24, bold: true, color: C.dk1
  });
  s.addShape("rect", { x: 0.5, y: 1.7, w: 0.6, h: 0.04, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  s.addImage({ path: filepath, x: 0.5, y: 1.85, w: 12.4, h: 4.8, sizing: { type: "contain", w: 12.4, h: 4.8 } });
  if (caption) {
    s.addText(caption, {
      x: 0.5, y: 6.7, w: 12.4, h: 0.35,
      fontFace: THEME.bodyFontFace, fontSize: 11, italic: true,
      color: C.dk2, align: "center"
    });
  }
  s.addText(`Grafana — Visualizando Dados | Prof. Fabio Silva | ${slideNo} / ${total}`, {
    x: 0, y: H - 0.35, w: W, h: 0.35,
    fontFace: THEME.bodyFontFace, fontSize: 9, color: C.accent3, align: "center", valign: "middle"
  });
  return s;
}

(async () => {
  const slides = mod1.slides;
  mod2.pushAll(pres, slides);
  mod3.pushAll(pres, slides);
  const baseTotal = slides.length;

  const realShots = [
    { filename: "01-login.png", title: "Tela de Login do Grafana", eyebrow: "Ambiente do Professor", caption: "Grafana 11 rodando com provisionamento automatizado e autenticação ativa" },
    { filename: "02-home.png", title: "Painel Inicial do Grafana", eyebrow: "Navegação e Interface", caption: "Visão geral de pastas, dashboards provisionados e recursos rápidos" },
    { filename: "03-dashboard-01-full.png", title: "Dashboard 01 — Visão Geral do Host", eyebrow: "Dashboard Básico (Dia 1)", caption: "Métricas de CPU, memória, disco e tráfego de rede via Node Exporter" },
    { filename: "04-dashboard-01-zoom.png", title: "Detalhamento de Métricas de CPU por Core", eyebrow: "Análise e Gráficos", caption: "Distribuição de carga entre núcleos com visualização Time Series" },
    { filename: "05-dashboard-01-edit.png", title: "Editor de Painéis do Grafana", eyebrow: "Prática Hands-On", caption: "Configuração de PromQL, transformações, thresholds e painel de inspeção" },
    { filename: "06-explore-query-1.png", title: "Explore — Consulta PromQL Bruta", eyebrow: "Consultas no Prometheus", caption: "Explorando métricas brutas diretamente na base temporal antes de criar painéis" },
    { filename: "07-explore-query-2.png", title: "Explore — Cálculo de Taxa com rate()", eyebrow: "PromQL Avançado", caption: "Uso de rate() em contadores para medir velocidade de variação" },
    { filename: "08-explore-query-3.png", title: "Explore — Cálculo Percentual de Uso de CPU", eyebrow: "Expressões Matemáticas", caption: "Fórmula padrão de cálculo percentual de CPU utilizada no mercado" },
    { filename: "09-new-panel-stat.png", title: "Painel do Tipo Stat com Thresholds", eyebrow: "Visualizações de Alto Impacto", caption: "Indicador numérico de status com faixas de cor verde/amarelo/vermelho" },
    { filename: "10-new-panel-timeseries.png", title: "Painel Time Series com Gradiente", eyebrow: "Tendências Temporais", caption: "Gráficos temporais elegantes com preenchimento e opacidade customizada" },
    { filename: "11-dashboard-02-dynamic.png", title: "Dashboard 02 — Filtros e Variáveis Dinâmicas", eyebrow: "Dashboard Dinâmico (Dia 2)", caption: "Ambiente com suporte a múltiplos nós (Docker, Proxmox, Kubernetes e Mikatos)" },
    { filename: "12-dashboard-02-variable.png", title: "Dropdown de Variáveis $host e $cluster", eyebrow: "Variáveis no Grafana", caption: "Filtragem instantânea de métricas por nó selecionado sem recriar painéis" },
    { filename: "13-dashboard-02-gauge.png", title: "Painel do Tipo Gauge (Velocímetro)", eyebrow: "Consumo de Memória", caption: "Visualização intuitiva de limites operacionais e saturação de memória" },
    { filename: "14-dashboard-02-heatmap.png", title: "Painel do Tipo Heatmap", eyebrow: "Densidade de Carga", caption: "Mapa de calor de consumo de CPU por intervalo temporal" },
    { filename: "15-dashboard-03-containers.png", title: "Dashboard 03 — Métricas de Containers (cAdvisor)", eyebrow: "Monitoramento Docker", caption: "Uso de CPU, RAM e I/O de rede isolado por container Docker ativo" },
    { filename: "16-alerting-rules.png", title: "Alerting — Regras de Alerta do Grafana", eyebrow: "Sistema de Alertas", caption: "Regras gerenciadas com condições de disparo, severidade e anotações" },
    { filename: "17-prometheus-alerts.png", title: "Prometheus — Alertas Ativos e Firing", eyebrow: "Ciclo de Vida do Alerta", caption: "Alertas nos estados Inactive, Pending e Firing na interface nativa do Prometheus" },
    { filename: "18-alertmanager.png", title: "Alertmanager — Roteamento de Notificações", eyebrow: "Alertmanager", caption: "Silenciamento, agrupamento e deduplicação de alertas" },
    { filename: "19-datasources.png", title: "Conexões e Data Sources Provisionados", eyebrow: "Arquitetura e Fontes", caption: "Fonte Prometheus conectada via arquivo YAML automatizado" },
    { filename: "20-admin-users.png", title: "Administração de Usuários e Permissões", eyebrow: "Governança e RBAC", caption: "Gestão de equipes, perfis de Viewer, Editor e Admin" },
    { filename: "21-admin-plugins.png", title: "Catálogo de Plugins do Grafana", eyebrow: "Extensibilidade (Dia 4)", caption: "Ecossistema de plugins para novas fontes de dados, painéis e apps" },
  ];

  console.log("→ Adicionando seção de capturas reais ao deck do professor Fabio Silva");

  for (const b of slides) b();

  const dividerS = pres.addSlide();
  dividerS.background = { color: C.dk2 };
  dividerS.addShape("rect", { x: 0, y: 0, w: 4.4, h: H, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  dividerS.addText("LABORATÓRIO REAL", { x: 0.55, y: 0.9, w: 3.6, h: 0.5, fontFace: THEME.bodyFontFace, fontSize: 12, bold: true, color: C.lt1, charSpacing: 6 });
  dividerS.addText("Capturas\nReais do\nAmbiente\nGrafana", { x: 0.55, y: 1.45, w: 3.7, h: 4.5, fontFace: THEME.headFontFace, fontSize: 34, bold: true, color: C.lt1, valign: "top" });

  const realCount = realShots.filter(s => fs.existsSync(path.join(SHOTS, s.filename))).length;
  console.log(`  ${realCount}/${realShots.length} screenshots disponíveis`);

  const total = baseTotal + realCount + 1;
  for (let i = 0; i < realShots.length; i++) {
    const shot = realShots[i];
    slideScreenshot({
      ...shot,
      slideNo: baseTotal + 2 + i,
      total
    });
  }

  for (let i = 0; i < pres.slides.length; i++) {
    const slide = pres.slides[i];
    const arr = slide._slideObjects || [];
    for (const obj of arr) {
      const fix = (t) => {
        if (typeof t === "string" && /\/\s*\d+\s*$/.test(t)) {
          return t.replace(/\/\s*\d+\s*$/, "/ " + total);
        }
        return t;
      };
      if (obj && obj.text) {
        if (typeof obj.text === "string") obj.text = fix(obj.text);
        else if (Array.isArray(obj.text)) {
          for (const tt of obj.text) if (tt && typeof tt.text === "string") tt.text = fix(tt.text);
        }
      }
    }
  }

  const outPath = path.join(__dirname, "Grafana_Visualizando_Dados_V1.pptx");
  await pres.writeFile({ fileName: outPath });
  console.log(`OK -> ${outPath}`);
  console.log(`Slides totais gerados: ${pres.slides.length}`);
})();
