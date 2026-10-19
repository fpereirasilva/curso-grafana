# Pipeline de captura e geração de material

Este diretório contém os scripts para subir o Grafana, aplicar a identidade
visual da escola, capturar screenshots reais e regenerar o PPTX com as
imagens embutidas.

## Arquivos

| Arquivo | Função |
|---------|--------|
| `setup-e-capturar.ps1` | Pipeline completo (Windows / PowerShell) |
| `setup-e-capturar.sh`  | Pipeline completo (WSL / Linux) |
| `capture_grafana_screenshots.py` | Captura as telas via Playwright |
| `apply_brand.py`       | Aplica logo + cores da escola no Grafana |
| `generate_pptx_with_screenshots.js` | Regenera o PPTX com as imagens |

## Como usar

### 1. Coloque o logo e a paleta da escola

```
E:\01_Projetos\Curso Grafana\
├── assets\
│   ├── logo\
│   │   └── logo.png      ← seu logo (recomendado PNG transparente)
│   └── palette.json      ← cores da escola
```

Exemplo de `palette.json`:
```json
{
  "primary": "0B3D91",
  "secondary": "F46800",
  "accent": "10B981",
  "background": "FFFFFF",
  "text": "1F2937"
}
```

### 2. Rode o pipeline

**No Windows (PowerShell):**
```powershell
cd E:\01_Projetos\"Curso Grafana"
.\scripts\setup-e-capturar.ps1
```

**No WSL2 (bash):**
```bash
cd /mnt/e/01_Projetos/Curso\ Grafana
bash scripts/setup-e-capturar.sh
```

### 3. O que o pipeline faz

1. Detecta WSL2 ou Docker Desktop
2. Instala Docker no WSL (se necessário)
3. Sobe o `lab/dia2` (Grafana + Prometheus + Node Exporter + cAdvisor + Alertmanager)
4. Instala Playwright e Chromium
5. Aplica a identidade visual via CSS customizado
6. Captura 21 screenshots de todas as telas importantes
7. Regenera o PPTX com as imagens embutidas em uma seção final
8. Regenera o PDF (versão aluno + versão instrutor)

## Screenshots capturadas

| # | Arquivo | O que mostra |
|---|---------|--------------|
| 01 | `01-login.png` | Tela de login |
| 02 | `02-home.png` | Home após login |
| 03 | `03-dashboard-01-full.png` | Dashboard 01 - visão geral |
| 04 | `04-dashboard-01-zoom.png` | Dashboard 01 - CPU por core |
| 05 | `05-dashboard-01-edit.png` | Dashboard 01 - modo edição |
| 06 | `06-explore-query-1.png` | Explore - valor bruto |
| 07 | `07-explore-query-2.png` | Explore - rate() |
| 08 | `08-explore-query-3.png` | Explore - % CPU |
| 09 | `09-new-panel-stat.png` | Novo painel - stat |
| 10 | `10-new-panel-timeseries.png` | Novo painel - time series |
| 11 | `11-dashboard-02-dynamic.png` | Dashboard 02 - variáveis |
| 12 | `12-dashboard-02-variable.png` | Dropdown $host aberto |
| 13 | `13-dashboard-02-gauge.png` | Gauge de memória |
| 14 | `14-dashboard-02-heatmap.png` | Heatmap de CPU |
| 15 | `15-dashboard-03-containers.png` | Containers (cAdvisor) |
| 16 | `16-alerting-rules.png` | Alerting - regras |
| 17 | `17-prometheus-alerts.png` | Prometheus - alertas |
| 18 | `18-alertmanager.png` | Alertmanager |
| 19 | `19-datasources.png` | Lista de data sources |
| 20 | `20-admin-users.png` | Usuários |
| 21 | `21-admin-plugins.png` | Plugins |

## Identidade visual

O `apply_brand.py` injeta CSS customizado no Grafana que:

- Substitui o logo padrão pelo logo da escola
- Aplica a cor primária nos botões e links ativos
- Adiciona a cor da escola na borda do navbar
- Personaliza a tela de login

Para tornar a customização persistente (sobreviver a reinícios), salve
o CSS gerado em `assets/grafana-custom.css` e monte-o no Grafana via
volume no `docker-compose.yml`:

```yaml
services:
  grafana:
    volumes:
      - ../assets/grafana-custom.css:/var/lib/grafana/custom.css:ro
    environment:
      - GF_PATHS_PROVISIONING=/etc/grafana/provisioning
      - GF_USERS_DEFAULT_THEME=light
```

## Requisitos do sistema

- **Windows:** 10 ou 11 com WSL2 habilitado, ou Docker Desktop
- **RAM:** 4 GB livres (8 GB recomendado)
- **Disco:** 5 GB livres (imagens Docker + Chromium + screenshots)
- **Internet:** para baixar Docker, Playwright, Chromium e dependências
