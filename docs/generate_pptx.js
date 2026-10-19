// Entry: junta as 3 partes, gera o PPTX final, renumera slides com total real.
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

(async () => {
  const mod1 = require("./build_pptx");
  const mod2 = require("./build_pptx_part2");
  const mod3 = require("./build_pptx_part3");

  // Builders: instanciar primeiro para saber o total
  const slides = mod1.slides;
  mod2.pushAll(mod1.pres, slides);
  mod3.pushAll(mod1.pres, slides);
  const total = slides.length;

  // Patch o build_pptx: precisamos do total real nos rodapés.
  // Estratégia simples: monkey-patch as funções slideContent / slideTitle /
  // slideSection / slideImageDemo / slideCheatSheet para substituir o
  // placeholder pelo total.
  // (Já que o Node cacheia require, isso afeta os outros módulos.)
  const TPH = mod1.TOTAL_PLACEHOLDER;
  const original1 = {
    slideContent: mod1.slideContent,
    slideTitle: mod1.slideTitle,
    slideSection: mod1.slideSection,
    slideImageDemo: mod1.slideImageDemo,
    slideCheatSheet: mod1.slideCheatSheet
  };

  function patchFooter(slide, slideNo) {
    if (typeof slideNo === "number" && slideNo > 0) {
      // reescreve qualquer texto que contenha " X / Y" usando o total real
      // Percorre os objetos do slide e ajusta
      // pptxgenjs expõe _slideObjects
      const arr = slide._slideObjects || [];
      for (const obj of arr) {
        if (obj && obj.text) {
          if (typeof obj.text === "string" && obj.text.includes("/ " + TPH)) {
            obj.text = obj.text.replace("/ " + TPH, "/ " + total);
          } else if (Array.isArray(obj.text)) {
            for (const t of obj.text) {
              if (t && typeof t.text === "string" && t.text.includes("/ " + TPH)) {
                t.text = t.text.replace("/ " + TPH, "/ " + total);
              }
            }
          }
        }
      }
    }
  }

  // Re-aplica os builders depois de monkey-patch (precisamos do total)
  // Estratégia: vamos guardar uma ref ao original, gerar todos os slides,
  // depois percorrer e ajustar o número do slide / footer com o total real.

  // Gera todos os slides (rodapés ainda com placeholder)
  for (const b of slides) b();

  // Renumera rodapés
  for (let i = 0; i < mod1.pres.slides.length; i++) {
    patchFooter(mod1.pres.slides[i], i + 1);
  }

  // Renumera o slideNo (1..total) nos slides de section divider
  // Esses slides também mostram "X / Y" em duas posições diferentes
  for (let i = 0; i < mod1.pres.slides.length; i++) {
    const slide = mod1.pres.slides[i];
    const arr = slide._slideObjects || [];
    for (const obj of arr) {
      if (obj && obj.text) {
        if (typeof obj.text === "string" && /^\d+ \/ \d+$/.test(obj.text.trim())) {
          obj.text = `${i + 1} / ${total}`;
        } else if (Array.isArray(obj.text)) {
          for (const t of obj.text) {
            if (t && typeof t.text === "string" && /^\d+ \/ \d+$/.test(t.text.trim())) {
              t.text = `${i + 1} / ${total}`;
            }
          }
        }
      }
    }
  }

  // Slide #44.1 — reescreve para 44 (mantém 45 em diante)
  // O slide "06-validate.sh" foi numerado como 44.1 por engano.
  // Vamos procurar um rodapé que diga "44.1 / 80" e trocá-lo para "45 / 62"
  // já que o total agora é conhecido.
  for (let i = 0; i < mod1.pres.slides.length; i++) {
    const slide = mod1.pres.slides[i];
    const arr = slide._slideObjects || [];
    for (const obj of arr) {
      const fix = (t) => {
        if (typeof t === "string" && t.includes("44.1 / ")) {
          return t.replace(/44\.1 \/ \d+/, "45 / " + total);
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
  await mod1.pres.writeFile({ fileName: outPath });
  console.log("OK -> " + outPath);
  console.log("Slides gerados: " + total);
})();
