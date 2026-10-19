#!/usr/bin/env python3
"""
Captura telas reais do Grafana rodando para usar nos slides do curso.

Pré-requisitos:
    pip install playwright pillow
    playwright install chromium

Como usar:
    1. Suba o ambiente (lab/dia1 ou lab/dia2):
       cd lab/dia1 && docker compose up -d

    2. Rode este script:
       python3 capture_grafana_screenshots.py

    3. Os PNGs ficam em assets/screenshots/ prontos para inserir no PPTX.

    4. (Opcional) Aplique a identidade visual da escola:
       python3 apply_brand.py
"""
import sys
import asyncio
import time
from pathlib import Path
from playwright.async_api import async_playwright

# Configuração ---------------------------------------------------------------
GRAFANA_URL = "http://localhost:3001"
USER = "admin"
PASS = "admin"
OUT = Path(__file__).resolve().parent.parent / "assets" / "screenshots"
OUT.mkdir(parents=True, exist_ok=True)

# Lista de capturas: (nome_do_arquivo, descritor, acao)
# Cada entrada é uma "etapa" do curso. O script tira 1 screenshot por etapa.
SHOTS = [
    # -----------------------------------------------------------------------
    # LOGIN
    # -----------------------------------------------------------------------
    ("01-login.png", "Tela de login", "login"),
    ("02-home.png", "Home após login", "home"),

    # -----------------------------------------------------------------------
    # DASHBOARD 01 - visão geral do host
    # -----------------------------------------------------------------------
    ("03-dashboard-01-full.png", "Dashboard 01 - Visão geral (full)", "dash01"),
    ("04-dashboard-01-zoom.png", "Dashboard 01 - CPU por core (zoom)", "dash01-zoom"),
    ("05-dashboard-01-edit.png", "Dashboard 01 - Modo edição (painel CPU)", "dash01-edit"),

    # -----------------------------------------------------------------------
    # EXPLORE - queries PromQL
    # -----------------------------------------------------------------------
    ("06-explore-query-1.png", "Explore - query bruta (node_cpu_seconds_total)", "explore1"),
    ("07-explore-query-2.png", "Explore - rate() de CPU", "explore2"),
    ("08-explore-query-3.png", "Explore - % de CPU em uso", "explore3"),

    # -----------------------------------------------------------------------
    # CRIAÇÃO DE PAINEL
    # -----------------------------------------------------------------------
    ("09-new-panel-stat.png", "Novo painel - Stat com threshold", "new-stat"),
    ("10-new-panel-timeseries.png", "Novo painel - Time series com fill", "new-ts"),

    # -----------------------------------------------------------------------
    # DIA 2 - DASHBOARD DINÂMICO
    # -----------------------------------------------------------------------
    ("11-dashboard-02-dynamic.png", "Dashboard 02 - Host dinâmico (variáveis)", "dash02"),
    ("12-dashboard-02-variable.png", "Dashboard 02 - dropdown $host aberto", "dash02-var"),
    ("13-dashboard-02-gauge.png", "Dashboard 02 - gauge de memória", "dash02-gauge"),
    ("14-dashboard-02-heatmap.png", "Dashboard 02 - heatmap de CPU", "dash02-heat"),
    ("15-dashboard-03-containers.png", "Dashboard 03 - Containers (cAdvisor)", "dash03"),

    # -----------------------------------------------------------------------
    # ALERTAS
    # -----------------------------------------------------------------------
    ("16-alerting-rules.png", "Alerting - lista de regras", "alerts"),
    ("17-prometheus-alerts.png", "Prometheus - página de alertas", "prom-alerts"),
    ("18-alertmanager.png", "Alertmanager - dashboard de alertas", "am"),

    # -----------------------------------------------------------------------
    # DATA SOURCES
    # -----------------------------------------------------------------------
    ("19-datasources.png", "Connections - lista de data sources", "datasources"),

    # -----------------------------------------------------------------------
    # ADMIN
    # -----------------------------------------------------------------------
    ("20-admin-users.png", "Administration - usuários", "users"),
    ("21-admin-plugins.png", "Plugins instalados", "plugins"),
]


async def login(page):
    await page.goto(f"{GRAFANA_URL}/login", wait_until="networkidle")
    await page.fill('input[name="user"]', USER)
    await page.fill('input[name="password"]', PASS)
    await page.click('button[type="submit"]')
    await page.wait_for_url(f"{GRAFANA_URL}/**", timeout=15000)
    # Aguarda animações da home
    await page.wait_for_timeout(2000)


async def shot(page, name, desc):
    path = OUT / name
    await page.screenshot(path=str(path), full_page=False)
    print(f"  ✓ {name:38s} {desc}")


async def capture_all():
    async with async_playwright() as p:
        # headless=True para rodar em servidor/WSL
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = await browser.new_context(
            viewport={"width": 1600, "height": 900},
            device_scale_factor=2,  # screenshots em alta resolução (2x)
        )
        page = await ctx.new_page()
        page.set_default_timeout(30000)

        print(f"→ Conectando em {GRAFANA_URL}")
        try:
            await login(page)
        except Exception as e:
            print(f"ERRO: não foi possível logar. Verifique se o Grafana está em pé.")
            print(f"Detalhe: {e}")
            sys.exit(1)

        print(f"→ Capturando {len(SHOTS)} telas em {OUT}\n")

        # 01 - login (volta e tira antes de logar - mas já logamos, então ignora)
        # Para tirar a tela de login de verdade, é preciso um browser context novo.
        # Vamos pular essa ou capturar antes.
        for filename, desc, action in SHOTS:
            try:
                if action == "login":
                    ctx2 = await browser.new_context(viewport={"width": 1600, "height": 900})
                    p2 = await ctx2.new_page()
                    await p2.goto(f"{GRAFANA_URL}/login", wait_until="networkidle")
                    await p2.wait_for_timeout(500)
                    await shot(p2, filename, desc)
                    await ctx2.close()
                elif action == "home":
                    await page.goto(f"{GRAFANA_URL}/", wait_until="networkidle")
                    await page.wait_for_timeout(1500)
                    await shot(page, filename, desc)
                elif action == "dash01":
                    await page.goto(f"{GRAFANA_URL}/d/lab-visao-geral-host", wait_until="networkidle")
                    await page.wait_for_timeout(4000)
                    await shot(page, filename, desc)
                elif action == "dash01-zoom":
                    # Zoom no painel de CPU por core (clica no título do painel para expandir)
                    await page.goto(f"{GRAFANA_URL}/d/lab-visao-geral-host", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    # Tira screenshot da parte de baixo (CPU por core)
                    await page.set_viewport_size({"width": 1600, "height": 1400})
                    await page.evaluate("window.scrollTo(0, 600)")
                    await page.wait_for_timeout(500)
                    await shot(page, filename, desc)
                    await page.set_viewport_size({"width": 1600, "height": 900})
                elif action == "dash01-edit":
                    await page.goto(f"{GRAFANA_URL}/d/lab-visao-geral-host?editPanel=5", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                elif action == "explore1":
                    await page.goto(f"{GRAFANA_URL}/explore?orgId=1", wait_until="networkidle")
                    await page.wait_for_timeout(2000)
                    await page.locator('textarea[aria-label="Query editor text area"]').first.fill("node_cpu_seconds_total")
                    await page.keyboard.press("Control+Enter")
                    await page.wait_for_timeout(2000)
                    await shot(page, filename, desc)
                elif action == "explore2":
                    await page.goto(f"{GRAFANA_URL}/explore?orgId=1", wait_until="networkidle")
                    await page.wait_for_timeout(2000)
                    await page.locator('textarea[aria-label="Query editor text area"]').first.fill("rate(node_cpu_seconds_total{mode=\"idle\"}[1m])")
                    await page.keyboard.press("Control+Enter")
                    await page.wait_for_timeout(2000)
                    await shot(page, filename, desc)
                elif action == "explore3":
                    await page.goto(f"{GRAFANA_URL}/explore?orgId=1", wait_until="networkidle")
                    await page.wait_for_timeout(2000)
                    await page.locator('textarea[aria-label="Query editor text area"]').first.fill('100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)')
                    await page.keyboard.press("Control+Enter")
                    await page.wait_for_timeout(2000)
                    await shot(page, filename, desc)
                elif action == "new-stat":
                    await page.goto(f"{GRAFANA_URL}/dashboard/new?editPanel=graph", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                elif action == "new-ts":
                    await page.goto(f"{GRAFANA_URL}/dashboard/new?editPanel=timeseries", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                elif action == "dash02":
                    await page.goto(f"{GRAFANA_URL}/d/lab-host-dinamico", wait_until="networkidle")
                    await page.wait_for_timeout(4000)
                    await shot(page, filename, desc)
                elif action == "dash02-var":
                    await page.goto(f"{GRAFANA_URL}/d/lab-host-dinamico", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    # Clica no dropdown $host
                    try:
                        await page.locator('[aria-label="Variable host"]').first.click()
                        await page.wait_for_timeout(1500)
                    except Exception:
                        pass
                    await shot(page, filename, desc)
                elif action == "dash02-gauge":
                    await page.goto(f"{GRAFANA_URL}/d/lab-host-dinamico", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    # Captura a parte de cima (gauge)
                    await page.set_viewport_size({"width": 1600, "height": 700})
                    await page.evaluate("window.scrollTo(0, 0)")
                    await page.wait_for_timeout(500)
                    await shot(page, filename, desc)
                    await page.set_viewport_size({"width": 1600, "height": 900})
                elif action == "dash02-heat":
                    await page.goto(f"{GRAFANA_URL}/d/lab-host-dinamico", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await page.set_viewport_size({"width": 1600, "height": 1200})
                    await page.evaluate("window.scrollTo(0, 700)")
                    await page.wait_for_timeout(500)
                    await shot(page, filename, desc)
                    await page.set_viewport_size({"width": 1600, "height": 900})
                elif action == "dash03":
                    await page.goto(f"{GRAFANA_URL}/d/lab-containers-cadvisor", wait_until="networkidle")
                    await page.wait_for_timeout(4000)
                    await shot(page, filename, desc)
                elif action == "alerts":
                    await page.goto(f"{GRAFANA_URL}/alerting/list", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                elif action == "prom-alerts":
                    await page.goto("http://localhost:9091/alerts", wait_until="networkidle")
                    await page.wait_for_timeout(2000)
                    await shot(page, filename, desc)
                elif action == "am":
                    await page.goto("http://localhost:9093/#/alerts", wait_until="networkidle")
                    await page.wait_for_timeout(2000)
                    await shot(page, filename, desc)
                elif action == "datasources":
                    await page.goto(f"{GRAFANA_URL}/connections/datasources", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                elif action == "users":
                    await page.goto(f"{GRAFANA_URL}/admin/users", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                elif action == "plugins":
                    await page.goto(f"{GRAFANA_URL}/plugins", wait_until="networkidle")
                    await page.wait_for_timeout(3000)
                    await shot(page, filename, desc)
                else:
                    print(f"  ? ação desconhecida: {action}")
            except Exception as e:
                print(f"  ✗ {filename:38s} ERRO: {e}")

        await browser.close()
        print(f"\n→ {len(SHOTS)} telas salvas em {OUT}")
        print("→ Próximo passo: rode 'python3 apply_brand.py' para aplicar a identidade visual.")


if __name__ == "__main__":
    asyncio.run(capture_all())


