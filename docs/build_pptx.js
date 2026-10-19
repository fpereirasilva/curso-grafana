// =============================================================================
// Curso de Grafana - Visualizando Dados (V1)
// Gera deck denso cobrindo 4 dias. Tema Grafana (laranja), fontes safe-list.
// =============================================================================

const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in
pres.author = "Fabio Silva";
pres.company = "Green Tecnologia";
pres.title = "Grafana - Visualizando Dados";
pres.subject = "Curso de Grafana - V1";

// =============================================================================
// THEME - Grafana orange + neutral ink
// =============================================================================
const THEME = {
  name: "Grafana",
  headFontFace: "Calibri",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "1F2937",   // ink
    lt1: "FFFFFF",   // paper
    dk2: "0F172A",   // deep ink
    lt2: "F3F4F6",   // paper-2
    accent1: "F46800",  // grafana orange (dominant)
    accent2: "FFB07A",  // soft orange
    accent3: "0B3D91",  // deep blue
    accent4: "10B981",  // success green
    accent5: "F59E0B",  // warning amber
    accent6: "EF4444",  // critical red
    hlink: "F46800",
    folHlink: "B45309",
  },
};

const C = pres.SchemeColor;
const W = 13.333;
const H = 7.5;

// =============================================================================
// Reusable: tiny icon renderer using react-icons -> svg -> png base64
// =============================================================================
let _iconCache = {};
async function loadIcon(name) {
  if (_iconCache[name]) return _iconCache[name];
  try {
    const ReactDOMServer = require("react-dom/server");
    const React = require("react");
    const icons = require("react-icons/fa");
    const sharp = require("sharp");
    const el = React.createElement(icons[name], {});
    const svg = ReactDOMServer.renderToStaticMarkup(el);
    const buf = await sharp(Buffer.from(svg), { density: 384 })
      .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    _iconCache[name] = "image/png;base64," + buf.toString("base64");
    return _iconCache[name];
  } catch (e) {
    console.warn("icon fail", name, e.message);
    return null;
  }
}

// =============================================================================
// SLIDE BUILDERS
// =============================================================================

function slideSection({ title, kicker, color, slideNo, total, notes }) {
  const s = pres.addSlide();
  // background
  s.background = { color: C.dk2 };
  // accent block (dominant motif: large colored band on left)
  s.addShape("rect", { x: 0, y: 0, w: 4.4, h: H, fill: { color: color || C.accent1 }, line: { color: color || C.accent1 } });
  // small white block on the bottom for number
  s.addShape("rect", { x: 0, y: H - 0.6, w: 4.4, h: 0.6, fill: { color: C.accent2 }, line: { color: C.accent2 } });

  // kicker
  s.addText(kicker.toUpperCase(), {
    x: 0.55, y: 0.9, w: 3.6, h: 0.5,
    fontFace: THEME.bodyFontFace, fontSize: 12, bold: true,
    color: C.lt1, charSpacing: 6
  });
  // title
  s.addText(title, {
    x: 0.55, y: 1.45, w: 3.7, h: 4.5,
    fontFace: THEME.headFontFace, fontSize: 36, bold: true,
    color: C.lt1, valign: "top"
  });
  // number band text
  s.addText(`${slideNo} / ${total}`, {
    x: 0.55, y: H - 0.55, w: 3.6, h: 0.45,
    fontFace: THEME.bodyFontFace, fontSize: 11, bold: true,
    color: C.dk2, valign: "middle"
  });
  // right side: blank, deck tells what to do
  s.addText("Grafana: Visualizando Dados", {
    x: 5, y: H - 0.6, w: 7.8, h: 0.5,
    fontFace: THEME.bodyFontFace, fontSize: 10, italic: true,
    color: "FFE5D0", align: "right", valign: "middle"
  });
  if (notes) s.addNotes(notes);
  return s;
}

function slideTitle({ title, eyebrow, subtitle, slideNo, total, notes }) {
  const s = pres.addSlide();
  s.background = { color: C.lt1 };
  // top bar
  s.addShape("rect", { x: 0, y: 0, w: W, h: 0.4, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  // eyebrow
  s.addText(eyebrow, {
    x: 0.7, y: 0.85, w: 12, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 11, bold: true,
    color: C.accent1, charSpacing: 4
  });
  // title
  s.addText(title, {
    x: 0.7, y: 1.25, w: 12, h: 1.4,
    fontFace: THEME.headFontFace, fontSize: 36, bold: true,
    color: C.dk1, valign: "top"
  });
  // rule (short)
  s.addShape("rect", { x: 0.7, y: 2.7, w: 0.9, h: 0.06, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  // subtitle
  s.addText(subtitle, {
    x: 0.7, y: 2.85, w: 12, h: 1.2,
    fontFace: THEME.bodyFontFace, fontSize: 18, color: C.dk2, valign: "top"
  });
  // footer with number
  s.addText(`Grafana — Visualizando Dados    |    ${slideNo} / ${total}`, {
    x: 0, y: H - 0.4, w: W, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 9, color: C.accent3, align: "center", valign: "middle"
  });
  if (notes) s.addNotes(notes);
  return s;
}

function slideContent({ eyebrow, title, blocks, slideNo, total, notes }) {
  // blocks: array of { type: 'text'|'callout'|'code'|'icon-row'|'cards'|'split'|'table'|'process', ... }
  const s = pres.addSlide();
  s.background = { color: C.lt1 };
  // header band (thin)
  s.addShape("rect", { x: 0, y: 0, w: W, h: 0.4, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  // eyebrow
  s.addText(eyebrow.toUpperCase(), {
    x: 0.5, y: 0.55, w: 12.4, h: 0.35,
    fontFace: THEME.bodyFontFace, fontSize: 10, bold: true,
    color: C.accent1, charSpacing: 4
  });
  // title
  s.addText(title, {
    x: 0.5, y: 0.95, w: 12.4, h: 0.7,
    fontFace: THEME.headFontFace, fontSize: 26, bold: true,
    color: C.dk1
  });
  // thin separator
  s.addShape("rect", { x: 0.5, y: 1.7, w: 0.6, h: 0.04, fill: { color: C.accent1 }, line: { color: C.accent1 } });

  // body area below the title
  blocks.forEach(b => {
    if (b.type === "text") {
      s.addText(b.text, {
        x: b.x ?? 0.5, y: b.y ?? 1.95, w: b.w ?? 12.4, h: b.h ?? 5.0,
        fontFace: THEME.bodyFontFace, fontSize: b.size ?? 14,
        color: b.color ?? C.dk1, bold: b.bold, italic: b.italic,
        align: b.align ?? "left", valign: b.valign ?? "top",
        paraSpaceAfter: b.paraSpaceAfter ?? 6
      });
    } else if (b.type === "bullets") {
      const arr = b.items.map((t, i) => ({
        text: t,
        options: { breakLine: i !== b.items.length - 1, bullet: { code: "25A0" }, color: b.color ?? C.dk1 }
      }));
      s.addText(arr, {
        x: b.x ?? 0.5, y: b.y ?? 1.95, w: b.w ?? 12.4, h: b.h ?? 5.0,
        fontFace: THEME.bodyFontFace, fontSize: b.size ?? 14,
        valign: b.valign ?? "top", paraSpaceAfter: b.paraSpaceAfter ?? 6
      });
    } else if (b.type === "callout") {
      s.addShape(b.shape || "roundRect", {
        x: b.x, y: b.y, w: b.w, h: b.h,
        fill: { color: b.fill || C.accent1 },
        line: { color: b.fill || C.accent1 },
        rectRadius: 0.1
      });
      s.addText(b.text, {
        x: b.x + 0.25, y: b.y + 0.15, w: b.w - 0.5, h: b.h - 0.3,
        fontFace: THEME.bodyFontFace, fontSize: b.size ?? 14,
        color: b.textColor ?? C.lt1, bold: b.bold,
        align: b.align ?? "left", valign: b.valign ?? "top"
      });
    } else if (b.type === "code") {
      s.addShape("rect", {
        x: b.x, y: b.y, w: b.w, h: b.h,
        fill: { color: "F3F4F6" }, line: { color: "E5E7EB" }
      });
      s.addShape("rect", {
        x: b.x, y: b.y, w: 0.08, h: b.h,
        fill: { color: C.accent1 }, line: { color: C.accent1 }
      });
      s.addText(b.text, {
        x: b.x + 0.2, y: b.y + 0.1, w: b.w - 0.3, h: b.h - 0.2,
        fontFace: "Courier New", fontSize: b.size ?? 12,
        color: b.color ?? C.dk1, valign: "top", align: "left"
      });
    } else if (b.type === "table") {
      const t = s.addTable(b.rows, {
        x: b.x, y: b.y, w: b.w, h: b.h, colW: b.colW,
        fontFace: THEME.bodyFontFace, fontSize: 11, color: C.dk1,
        border: { type: "solid", color: "E5E7EB", pt: 0.5 },
        valign: "middle", autoPage: true
      });
      // header row tint
      try {
        const head = b.rows[0].map(() => ({ fill: { color: C.accent1 }, color: C.lt1, bold: true }));
        t.setBorder = undefined; // no-op safety
      } catch (_) {}
    } else if (b.type === "process") {
      // Horizontal steps: array of {title, text}
      const steps = b.steps;
      const totalW = b.w;
      const stepW = totalW / steps.length;
      steps.forEach((st, i) => {
        const x0 = b.x + i * stepW;
        // numbered circle
        s.addShape("ellipse", {
          x: x0 + (stepW - 0.7) / 2, y: b.y, w: 0.7, h: 0.7,
          fill: { color: C.accent1 }, line: { color: C.accent1 }
        });
        s.addText(String(i + 1), {
          x: x0 + (stepW - 0.7) / 2, y: b.y, w: 0.7, h: 0.7,
          fontFace: THEME.bodyFontFace, fontSize: 22, bold: true,
          color: C.lt1, align: "center", valign: "middle"
        });
        s.addText(st.title, {
          x: x0 + 0.1, y: b.y + 0.85, w: stepW - 0.2, h: 0.4,
          fontFace: THEME.bodyFontFace, fontSize: 13, bold: true,
          color: C.dk1, align: "center", valign: "top"
        });
        s.addText(st.text, {
          x: x0 + 0.1, y: b.y + 1.3, w: stepW - 0.2, h: 1.5,
          fontFace: THEME.bodyFontFace, fontSize: 10.5, color: C.dk2,
          align: "center", valign: "top"
        });
        if (i < steps.length - 1) {
          s.addShape("line", {
            x: x0 + stepW - 0.05, y: b.y + 0.35, w: 0.1, h: 0,
            line: { color: C.accent1, width: 2, dashType: "dash" }
          });
        }
      });
    } else if (b.type === "cards") {
      const cards = b.cards;
      const totalW = b.w;
      const cardW = (totalW - (cards.length - 1) * 0.25) / cards.length;
      cards.forEach((c, i) => {
        const x0 = b.x + i * (cardW + 0.25);
        s.addShape("roundRect", {
          x: x0, y: b.y, w: cardW, h: b.h,
          fill: { color: c.fill || C.lt2 }, line: { color: c.border || "E5E7EB" },
          rectRadius: 0.08
        });
        s.addText(c.title, {
          x: x0 + 0.2, y: b.y + 0.15, w: cardW - 0.4, h: 0.4,
          fontFace: THEME.headFontFace, fontSize: 14, bold: true,
          color: c.titleColor || C.accent1
        });
        s.addText(c.text, {
          x: x0 + 0.2, y: b.y + 0.6, w: cardW - 0.4, h: b.h - 0.75,
          fontFace: THEME.bodyFontFace, fontSize: 11, color: c.textColor || C.dk1,
          valign: "top"
        });
      });
    } else if (b.type === "stat") {
      const stats = b.stats;
      const totalW = b.w;
      const cardW = totalW / stats.length;
      stats.forEach((st, i) => {
        const x0 = b.x + i * cardW;
        s.addShape("rect", {
          x: x0 + 0.05, y: b.y, w: cardW - 0.1, h: b.h,
          fill: { color: st.fill || C.lt2 }, line: { color: st.border || C.accent1 }
        });
        s.addText(st.value, {
          x: x0 + 0.05, y: b.y + 0.1, w: cardW - 0.1, h: b.h * 0.55,
          fontFace: THEME.headFontFace, fontSize: st.valueSize ?? 48, bold: true,
          color: st.valueColor || C.accent1, align: "center", valign: "middle"
        });
        s.addText(st.label, {
          x: x0 + 0.05, y: b.y + b.h * 0.6, w: cardW - 0.1, h: b.h * 0.4 - 0.1,
          fontFace: THEME.bodyFontFace, fontSize: 12, color: C.dk1,
          align: "center", valign: "middle"
        });
      });
    }
  });

  // footer
  s.addText(`Grafana — Visualizando Dados    |    ${slideNo} / ${total}`, {
    x: 0, y: H - 0.4, w: W, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 9, color: C.accent3, align: "center", valign: "middle"
  });
  if (notes) s.addNotes(notes);
  return s;
}

function slideImageDemo({ eyebrow, title, imagePath, caption, slideNo, total, notes }) {
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
    fontFace: THEME.headFontFace, fontSize: 26, bold: true,
    color: C.dk1
  });
  s.addShape("rect", { x: 0.5, y: 1.7, w: 0.6, h: 0.04, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  s.addImage({ path: imagePath, x: 0.5, y: 1.95, w: 12.4, h: 4.6, sizing: { type: "contain", w: 12.4, h: 4.6 } });
  if (caption) {
    s.addText(caption, {
      x: 0.5, y: 6.6, w: 12.4, h: 0.4,
      fontFace: THEME.bodyFontFace, fontSize: 11, italic: true,
      color: C.dk2, align: "center"
    });
  }
  s.addText(`Grafana — Visualizando Dados    |    ${slideNo} / ${total}`, {
    x: 0, y: H - 0.4, w: W, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 9, color: C.accent3, align: "center", valign: "middle"
  });
  if (notes) s.addNotes(notes);
  return s;
}

function slideCheatSheet({ eyebrow, title, commands, slideNo, total, notes }) {
  // commands: [{cmd, desc}]
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
    fontFace: THEME.headFontFace, fontSize: 26, bold: true,
    color: C.dk1
  });
  s.addShape("rect", { x: 0.5, y: 1.7, w: 0.6, h: 0.04, fill: { color: C.accent1 }, line: { color: C.accent1 } });

  // table of commands
  const rows = [
    [
      { text: "Comando", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
      { text: "Para que serve", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } }
    ],
    ...commands.map(c => [
      { text: c.cmd, options: { fontFace: "Courier New", fontSize: 11, color: C.dk1 } },
      { text: c.desc, options: { fontSize: 12, color: C.dk1 } }
    ])
  ];
  s.addTable(rows, {
    x: 0.5, y: 1.95, w: 12.4, h: 5.0,
    colW: [4.5, 7.9],
    fontFace: THEME.bodyFontFace, fontSize: 12, color: C.dk1,
    border: { type: "solid", color: "E5E7EB", pt: 0.5 },
    valign: "middle", rowH: 0.45
  });

  s.addText(`Grafana — Visualizando Dados    |    ${slideNo} / ${total}`, {
    x: 0, y: H - 0.4, w: W, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 9, color: C.accent3, align: "center", valign: "middle"
  });
  if (notes) s.addNotes(notes);
  return s;
}

// =============================================================================
// CONTENT
// =============================================================================
const TOTAL_PLACEHOLDER = 80; // ajustamos no final

const slides = [];

// --- COVER ---
slides.push(() => {
  const s = pres.addSlide();
  s.background = { color: C.dk2 };
  // big dominant block
  s.addShape("rect", { x: 0, y: 0, w: 7.5, h: H, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  // right side dark
  s.addText("GRAFANA", {
    x: 0.6, y: 1.0, w: 7, h: 0.7,
    fontFace: THEME.headFontFace, fontSize: 18, bold: true, charSpacing: 8, color: C.lt1
  });
  s.addText("Visualizando", {
    x: 0.6, y: 2.0, w: 7, h: 1.5,
    fontFace: THEME.headFontFace, fontSize: 64, bold: true, color: C.lt1
  });
  s.addText("Dados", {
    x: 0.6, y: 3.3, w: 7, h: 1.5,
    fontFace: THEME.headFontFace, fontSize: 64, bold: true, color: C.lt2
  });
  s.addShape("rect", { x: 0.6, y: 5.0, w: 1.5, h: 0.08, fill: { color: C.lt1 }, line: { color: C.lt1 } });
  s.addText("Instrutor: Fabio Silva", {
    x: 0.6, y: 5.2, w: 6.5, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 16, color: C.lt1
  });
  s.addText("16h • 4 noites • 18:30 às 22:30", {
    x: 0.6, y: 5.6, w: 6.5, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 14, color: "FFD6B0"
  });
  s.addText("Green Tecnologia", {
    x: 0.6, y: 6.6, w: 6.5, h: 0.3,
    fontFace: THEME.bodyFontFace, fontSize: 12, color: C.accent2, charSpacing: 4
  });
  // right side info
  s.addText("Curso", {
    x: 8, y: 1.0, w: 4.8, h: 0.4,
    fontFace: THEME.bodyFontFace, fontSize: 12, color: C.accent2, charSpacing: 6
  });
  s.addText("Básico → Intermediário", {
    x: 8, y: 1.4, w: 4.8, h: 0.5,
    fontFace: THEME.headFontFace, fontSize: 22, bold: true, color: C.lt1
  });
  s.addText("Quatro noites de imersão, com teoria, demonstração ao vivo e laboratórios guiados. Material de apoio, caderno de exercícios e ambiente Docker pronto para usar.", {
    x: 8, y: 2.5, w: 4.8, h: 2.5,
    fontFace: THEME.bodyFontFace, fontSize: 13, color: "FFE0CC", paraSpaceAfter: 4
  });
  s.addText([
    { text: "Conteúdo programático", options: { bold: true, color: C.accent2, fontSize: 12, breakLine: true } },
    { text: "• Observabilidade e os 3 pilares", options: { color: C.lt1, fontSize: 12, breakLine: true } },
    { text: "• Grafana 11 e navegação na UI", options: { color: C.lt1, fontSize: 12, breakLine: true } },
    { text: "• Prometheus + PromQL", options: { color: C.lt1, fontSize: 12, breakLine: true } },
    { text: "• Visualizações, variáveis e alertas", options: { color: C.lt1, fontSize: 12, breakLine: true } },
    { text: "• Instalação em Ubuntu (prática)", options: { color: C.lt1, fontSize: 12, breakLine: true } },
    { text: "• Provisionamento e multi-stack", options: { color: C.lt1, fontSize: 12 } }
  ], {
    x: 8, y: 5.0, w: 4.8, h: 2.0,
    fontFace: THEME.bodyFontFace, paraSpaceAfter: 2
  });
  s.addNotes("Slide de capa. Não ler em voz alta. Falar apenas: 'Boa noite, vamos começar.'");
});

// --- SOBRE O INSTRUTOR ---
slides.push(() => slideContent({
  eyebrow: "Sobre o instrutor",
  title: "Quem está conduzindo o curso",
  slideNo: 2, total: TOTAL_PLACEHOLDER,
  blocks: [
    { type: "cards", x: 0.5, y: 2.0, w: 12.4, h: 4.7, cards: [
      { title: "32 anos", text: "de experiência na área de treinamento em TI, conduzindo turmas em empresas de todos os portes.", fill: C.lt2, border: C.accent1 },
      { title: "LPI", text: "Linux Professional Institute — certificação ativa desde 2011, com base sólida em Linux, redes e infraestrutura.", fill: C.lt2, border: C.accent1 },
      { title: "MCT", text: "Microsoft Certified Trainer desde 2020, focado em dados, BI e plataformas de observabilidade.", fill: C.lt2, border: C.accent1 },
      { title: "Power BI", text: "Microsoft Certified Associate em Analyzing Data with Power BI — elo com o mundo de visualização de dados.", fill: C.lt2, border: C.accent1 }
    ] }
  ]
}));

// --- A QUEM SE DESTINA ---
slides.push(() => slideContent({
  eyebrow: "Público-alvo",
  title: "Para quem é este curso",
  slideNo: 3, total: TOTAL_PLACEHOLDER,
  blocks: [
    { type: "bullets", x: 0.5, y: 2.0, w: 6.0, h: 5.0, size: 15, items: [
      "Arquitetos de informação e de soluções",
      "Service Delivery Managers e líderes de operação",
      "Analistas de dados e observabilidade",
      "Equipes de operações, SRE, performance e NOC",
      "Profissionais que precisam apresentar dados a stakeholders técnicos e de negócio"
    ]},
    { type: "callout", x: 7.0, y: 2.0, w: 5.9, h: 5.0, fill: C.accent1,
      text: "Curso básico-intermediário. Vamos do zero até a configuração de alertas e provisionamento de dashboards em ambiente de produção. Não exige conhecimento prévio de Grafana, mas o aluno precisa estar confortável com terminal Linux e conceitos básicos de redes."
    }
  ]
}));

// --- O QUE VOCÊ VAI APRENDER ---
slides.push(() => slideContent({
  eyebrow: "Resultados de aprendizagem",
  title: "O que você vai dominar",
  slideNo: 4, total: TOTAL_PLACEHOLDER,
  blocks: [
    { type: "process", x: 0.5, y: 2.2, w: 12.4, h: 3.0, steps: [
      { title: "Observabilidade", text: "Os 3 pilares — métricas, logs e traces — e por que o Grafana é a peça central." },
      { title: "Interface", text: "Navegar com confiança: menus, dashboards, Explore, Alerting e configurações." },
      { title: "Queries", text: "Construir consultas em PromQL e em SQL para extrair dados significativos." },
      { title: "Visualizações", text: "Escolher e customizar o painel certo para cada cenário, do stat ao heatmap." },
      { title: "Alertas", text: "Configurar alertas Prometheus e Grafana, com canais de notificação." }
    ]},
    { type: "callout", x: 0.5, y: 5.6, w: 12.4, h: 1.5, fill: C.lt2, textColor: C.dk1,
      text: "Em todas as noites, ao menos 50% do tempo é prática hands-on. Você sai do curso com dashboards e alertas funcionando na sua própria máquina."
    }
  ]
}));

// --- ROTEIRO DO CURSO ---
slides.push(() => slideContent({
  eyebrow: "Estrutura",
  title: "Roteiro das quatro noites",
  slideNo: 5, total: TOTAL_PLACEHOLDER,
  blocks: [
    { type: "table", x: 0.5, y: 1.95, w: 12.4, h: 5.0, colW: [1.3, 3.0, 4.0, 4.1], rows: [
      [
        { text: "Dia", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
        { text: "Tema", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
        { text: "Teoria + demonstração (18:30–20:30)", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } },
        { text: "Laboratório (20:30–22:30)", options: { bold: true, color: C.lt1, fill: { color: C.accent1 } } }
      ],
      ["1", "Fundamentos e navegação", "Observabilidade, Grafana 11, Prometheus, Node Exporter, PromQL básico", "Subir Docker, navegar no Grafana, criar primeiro dashboard"],
      ["2", "Visualizações, variáveis, alertas", "Tipos de painel, variáveis de template, alertamento Prometheus e Grafana", "Dashboard dinâmico com variável, alerta FIRING, painel de containers"],
      ["3", "Instalação no Ubuntu", "Repositórios APT, systemd, segurança, arquivos de configuração", "Execução guiada dos 6 scripts comentados, do zero ao Grafana rodando"],
      ["4", "Temas, provisionamento, multi-stack", "Theming, file-based provisioning, plugins, Loki, Tempo", "Provisionar dashboard por arquivo, instalar plugin, adicionar datasource"]
    ]}
  ]
}));

// --- SECTION DIVIDER DIA 1 ---
slides.push(() => slideSection({
  kicker: "Dia 01",
  title: "Fundamentos\ne navegação",
  color: C.accent1,
  slideNo: 6, total: TOTAL_PLACEHOLDER,
  notes: "Divisor do Dia 1. Transição para o conteúdo prático."
}));

module.exports = { pres, slides, TOTAL_PLACEHOLDER, slideContent, slideTitle, slideSection, slideImageDemo, slideCheatSheet, C, THEME };

