# Curso Grafana: Visualizando Dados — V1

Material de apoio para o curso ministrado por **Fabio Silva**.
Quatro noites (16h), 18:30 às 22:30, com 20 min de intervalo.

## Estrutura do pacote

```
.
├── docs/
│   ├── Grafana_Visualizando_Dados_V1.pptx           ← Slides do curso (62 slides)
│   ├── Grafana_Visualizando_Dados_V1_instrutor.pdf  ← PDF do instrutor (limpo)
│   ├── Grafana_Visualizando_Dados_V1_aluno.pdf      ← PDF do aluno (com marca d'água)
│   ├── caderno-exercicios.pdf                       ← Caderno de exercícios (14 páginas)
│   ├── caderno-exercicios.md                        ← Caderno de exercícios (markdown)
│   ├── build_pptx.js                                ← Gerador do PPTX (parte 1: capa + intro)
│   ├── build_pptx_part2.js                          ← Gerador do PPTX (parte 2: dias 1 e 2)
│   ├── build_pptx_part3.js                          ← Gerador do PPTX (parte 3: dias 3 e 4)
│   ├── generate_pptx.js                             ← Orquestrador da geração do PPTX
│   ├── build_caderno_pdf.py                         ← Conversor markdown→PDF do caderno
│   └── build_aluno_pdf.py                           ← Adiciona marca d'água no PDF do aluno
│
├── lab/
│   ├── dia1/                                ← Dia 1: stack inicial (Prometheus + Node Exporter)
│   │   ├── docker-compose.yml
│   │   ├── prometheus.yml
│   │   ├── alerts.yml
│   │   ├── README.md
│   │   └── grafana/
│   │       ├── provisioning/
│   │       │   ├── datasources/datasource.yml
│   │       │   └── dashboards/dashboards.yml
│   │       └── dashboards/01-visao-geral-host.json
│   │
│   ├── dia2/                                ← Dia 2: variáveis, alertas, cAdvisor, Alertmanager
│   │   ├── docker-compose.yml
│   │   ├── prometheus.yml
│   │   ├── alerts.yml
│   │   ├── alertmanager.yml
│   │   ├── README.md
│   │   └── grafana/
│   │       ├── provisioning/
│   │       │   ├── datasources/datasource.yml
│   │       │   ├── dashboards/dashboards.yml
│   │       │   └── alerting/alerting.yml
│   │       └── dashboards/
│   │           ├── 02-host-dinamico.json
│   │           └── 03-containers.json
│   │
│   └── dia3/                                ← Dia 3: scripts de instalação no Ubuntu
│       ├── 01-prepare.sh
│       ├── 02-install-grafana.sh
│       ├── 03-configure.sh
│       ├── 04-install-prometheus.sh
│       ├── 05-install-node-exporter.sh
│       ├── 06-validate.sh
│       └── README.md
│
└── README.md                                ← Este arquivo
```

## Como o material se organiza por dia

| Dia  | Conteúdo teórico (slides)                     | Lab                                                                                                | Exercícios guiados              |
|------|-----------------------------------------------|----------------------------------------------------------------------------------------------------|---------------------------------|
| 1    | Observabilidade, Grafana, Prometheus, PromQL  | `lab/dia1/` — sobe Grafana + Prometheus + Node Exporter com dashboard pré-configurado               | Caderno 1.1 a 1.7               |
| 2    | Variáveis, alertas, cAdvisor, Loki            | `lab/dia2/` — adiciona Alertmanager, cAdvisor, dashboards dinâmicos                                | Caderno 2.1 a 2.7               |
| 3    | Instalação em Ubuntu, systemd, segurança      | `lab/dia3/` — 6 scripts comentados para instalar tudo do zero                                      | Caderno 3.1 a 3.7               |
| 4    | Temas, plugins, provisionamento, multi-stack  | O aluno sobe o `lab/dia2/` e adiciona Loki, Tempo e plugins no exercício                          | Caderno 4.1 a 4.5               |

## Como usar

### Antes da aula
1. Confirme que o aluno tem Docker Desktop (ou Docker Engine + Compose v2) instalado.
2. Confirme 4 GB de RAM livre.
3. Para o Dia 3, o aluno precisa de uma VM Ubuntu 22.04 com 4 GB de RAM.
4. Distribua o PDF do aluno (`Grafana_Visualizando_Dados_V1_aluno.pdf`) na primeira noite.

### Durante a aula
1. **Teoria** (18:30 – 20:30): o instrutor apresenta os slides a partir do PPTX (ou do `*_instrutor.pdf` se preferir).
2. **Demonstração** (19:40 – 20:30): após o intervalo, o instrutor projeta a tela e executa os passos ao vivo.
3. **Hands-on** (20:30 – 22:30): o aluno repete no próprio ambiente, seguindo o caderno.

### Pós-aula
- O aluno fica com a stack rodando e pode continuar explorando entre as noites.
- O caderno tem gabarito ao final — útil para auto-avaliação.

### Sobre as duas versões de PDF

- **`*_instrutor.pdf`** — versão limpa, sem marca d'água. Para projetar ou imprimir em alta qualidade.
- **`*_aluno.pdf`** — versão com marca d'água diagonal "CÓPIA DO ALUNO" e rodapé "uso pessoal, sem redistribuição". Para distribuir aos alunos como material de apoio.

## Para regerar o material (opcional)

```bash
# 1. Gerar o PPTX a partir dos scripts
cd docs/
node generate_pptx.js

# 2. Regenerar o PDF do caderno a partir do markdown
python3 build_caderno_pdf.py
```

Requisitos: Node.js 22+ e `pptxgenjs` (`npm install pptxgenjs`), Python 3.10+ com `reportlab`.

## Sugestões de dinâmica durante a aula

- **Dia 1**: depois de subir o ambiente, peça para o aluno navegar no dashboard provisionado por 5 min antes de criar o próprio. Isso reduz a ansiedade de "não sei o que fazer".
- **Dia 2**: use a carga artificial (`dd if=/dev/urandom`) como demonstração de alerta FIRING ao vivo. O aluno vê o ciclo de vida real.
- **Dia 3**: deixe o aluno digitar cada comando enquanto você explica. Não cole o script todo. Errar faz parte do aprendizado.
- **Dia 4**: deixe 30 min finais para Q&A aberto. O aluno geralmente tem dúvidas de produção (HA, multi-tenant, RBAC).

## Próximas iterações (V2)

- Adicionar slides de RBAC e organização multi-tenant.
- Substituir prometheus.yml do Dia 2 por federation (múltiplos Prometheus).
- Adicionar exercício de TLS com Caddy na frente do Grafana.
- Painel de SLO/SLI usando Mimir ou Cortex.
- Integração com PagerDuty e OpsGenie para alertas.

