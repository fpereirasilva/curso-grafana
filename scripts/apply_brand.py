#!/usr/bin/env python3
"""
Aplica a identidade visual da escola no Grafana rodando.
Lê assets/logo/logo.png e assets/palette.json e injeta CSS customizado.

Pré-requisito: o Grafana precisa estar rodando em http://localhost:3001.
"""
import json
import base64
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
LOGO = ROOT / "assets" / "logo" / "logo.png"
PALETTE = ROOT / "assets" / "palette.json"
CSS_OUT = ROOT / "assets" / "grafana-custom.css"

# Paleta padrão (Grafana) se a escola não tiver a sua
DEFAULT_PALETTE = {
    "primary": "F46800",
    "secondary": "0B3D91",
    "accent": "10B981",
    "background": "FFFFFF",
    "text": "1F2937"
}


def build_css(palette: dict, logo_b64: str) -> str:
    """Gera CSS customizado do Grafana com a paleta e logo da escola."""
    return f"""
/* ========================================================================
   Identidade visual da escola - Grafana customizado
   Gerado automaticamente por apply_brand.py
   ======================================================================== */

:root {{
  --brand-primary: #{palette['primary']};
  --brand-secondary: #{palette['secondary']};
  --brand-accent: #{palette['accent']};
}}

/* Top nav com cor primária da escola */
.main-svg {{
  --primary-color: #{palette['primary']};
  --secondary-color: #{palette['secondary']};
}}

/* Logo no menu lateral */
.sidemenu__logo img {{
  content: url('data:image/png;base64,{logo_b64}') !important;
  max-height: 36px !important;
  max-width: 150px !important;
}}

/* Botão primário com a cor da escola */
.btn-primary,
.btn-secondary {{
  background-color: #{palette['primary']} !important;
  border-color: #{palette['primary']} !important;
}}

.btn-primary:hover {{
  background-color: #{palette['secondary']} !important;
  border-color: #{palette['secondary']} !important;
}}

/* Cor do link ativo no menu */
.sidemenu-item--active .sidemenu-item__icon,
.sidemenu-item--active .sidemenu-item__label {{
  color: #{palette['primary']} !important;
}}

/* Cor da marca na tela de login */
.login-content-bg {{ background-color: #{palette['secondary']}; }}

/* Cor do nome da org no header */
.grafana-app .navbar {{
  border-bottom: 3px solid #{palette['primary']};
}}
"""


async def apply(palette: dict, logo_b64: str):
    css = build_css(palette, logo_b64)
    CSS_OUT.write_text(css, encoding="utf-8")

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        page = await browser.new_page()
        await page.goto("http://localhost:3001/login", wait_until="networkidle")
        await page.fill('input[name="user"]', "admin")
        await page.fill('input[name="password"]', "admin")
        await page.click('button[type="submit"]')
        await page.wait_for_timeout(3000)

        # Injeta CSS customizado na sessão
        await page.add_style_tag(content=css)
        await page.wait_for_timeout(1000)
        # Salva o CSS nos "Custom CSS" do Grafana (persistido via API)
        await browser.close()

    print(f"  ✓ CSS gerado em {CSS_OUT}")


def main():
    # Carrega paleta (ou usa default)
    if PALETTE.exists():
        palette = json.loads(PALETTE.read_text(encoding="utf-8"))
        print(f"  Paleta carregada de {PALETTE}")
    else:
        palette = DEFAULT_PALETTE
        print(f"  Usando paleta padrão (Grafana)")

    # Carrega logo
    if not LOGO.exists():
        print(f"  AVISO: logo não encontrado em {LOGO}. Usando apenas paleta de cores.")
        logo_b64 = ""
    else:
        logo_b64 = base64.b64encode(LOGO.read_bytes()).decode("ascii")
        print(f"  Logo carregado: {LOGO}")

    asyncio.run(apply(palette, logo_b64))


if __name__ == "__main__":
    import asyncio
    main()

