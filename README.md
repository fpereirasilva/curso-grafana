# 📊 Curso Grafana: Visualizando Dados & Observabilidade de Ponta a Ponta

**Instrutor:** Fábio Silva ([LinkedIn](https://www.linkedin.com/in/silvapfabio))  
**Carga Horária:** 20 horas (5 noites × 4h, 18:30 às 22:30, com intervalo das 20:20 às 20:45)  
**Base Didática:** Grafana Fundamentals & Engenharia de Observabilidade moderna  

---

## 🌟 Comece por Aqui!

Se você é aluno do curso, abra o arquivo central no seu navegador para ter acesso a todos os guias visuais, apostilas e exercícios:
👉 **[00_COMECE_AQUI.html](00_COMECE_AQUI.html)**

---

## 📚 Passo a Passo Prático da Apostila (Noite a Noite)

Siga o roteiro oficial de exercícios práticos da apostila clicando diretamente no dia correspondente:

| Noite | Tema Oficial | Guia Passo a Passo (Markdown) | Apostila em PDF |
| :---: | :--- | :---: | :---: |
| **Noite 1** | **Preparação e Primeiros Passos** (Iniciar Lab, Grafana News, Primeiro Voto) | [📖 Ler Noite 1](Curso_Grafana_Green_V9/alunos/Aluno_Noite_1.md) | [📥 Baixar PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_1.pdf) |
| **Noite 2** | **Métricas e PromQL** (Explore, Consultas no Prometheus, Builders vs Code) | [📖 Ler Noite 2](Curso_Grafana_Green_V9/alunos/Aluno_Noite_2.md) | [📥 Baixar PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_2.pdf) |
| **Noite 3** | **Logs e LogQL** (Configuração do Loki, Streams, Filtros de Linhas) | [📖 Ler Noite 3](Curso_Grafana_Green_V9/alunos/Aluno_Noite_3.md) | [📥 Baixar PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_3.pdf) |
| **Noite 4** | **Dashboards e Anotações** (Criação Manual, Painéis Stat/Timeseries, Marcadores) | [📖 Ler Noite 4](Curso_Grafana_Green_V9/alunos/Aluno_Noite_4.md) | [📥 Baixar PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_4.pdf) |
| **Noite 5** | **Alertas e Entrega do Projeto** (Contato Webhook, Regras de Alerta, Homologação) | [📖 Ler Noite 5](Curso_Grafana_Green_V9/alunos/Aluno_Noite_5.md) | [📥 Baixar PDF](Curso_Grafana_Green_V9/alunos/Aluno_Noite_5.pdf) |

> 💡 **Material Completo Consolidado:**
> * [📕 Apostila Completa do Aluno (V8 - Todas as Noites)](Curso_Grafana_Green_V9/Apostila_do_Aluno_V8.pdf)
> * [🖼️ Guia Visual com Capturas de Tela](Curso_Grafana_Green_V9/Guia_Visual_Exercicios_V8.pdf)
> * [💻 Instalação Nativa no Ubuntu sem Docker (Roteiro Completo)](Curso_Grafana_Green_V9/Roteiro_Ubuntu.md)

---

## 💻 Como Executar os Laboratórios (Escolha o seu Cenário)

Você pode fazer todos os laboratórios do curso de duas formas. **Escolha a que melhor se adapta ao seu ambiente:**

---

### 🐧 Cenário 1 (Recomendado): Dentro da sua Máquina Virtual Linux / Ubuntu
Se você criou uma VM Ubuntu (no VirtualBox, VMware, Hyper-V, Proxmox, WSL2 ou nuvem), **este é o caminho ideal**, pois simula exatamente o dia a dia de produção dos servidores.

1. Abra o terminal dentro da sua VM Ubuntu e clone o repositório:
   ```bash
   git clone https://github.com/fpereirasilva/curso-grafana.git
   cd curso-grafana
   ```

2. Para iniciar o laboratório completo (1 comando):
   ```bash
   bash iniciar-lab.sh
   ```

3. Para encerrar os containers quando terminar a aula:
   ```bash
   bash parar-lab.sh
   ```

*(Dica: você também pode abrir e ler o manual mastigado no próprio terminal com: `cat GUIA_PRATICO_DO_ALUNO.txt`)*.

---

### 🪟 Cenário 2: Direto no Windows (via PowerShell e Docker Desktop)
Se você prefere rodar os laboratórios diretamente no seu Windows físico sem criar uma VM Linux separada, utilize o **Docker Desktop**:

1. Abra o **PowerShell** no Windows e clone o repositório:
   ```powershell
   git clone https://github.com/fpereirasilva/curso-grafana.git
   cd curso-grafana
   ```

2. Certifique-se de que o **Docker Desktop** está aberto e rodando no Windows.

3. Para iniciar o laboratório com 1 clique:
   ```powershell
   .\iniciar-lab-alunos.ps1
   ```

4. Para encerrar os containers:
   ```powershell
   .\parar-lab-alunos.ps1
   ```

---

### 🌐 Onde Acessar os Serviços após Iniciar:
Independentemente de ter subido via `.sh` (Linux) ou `.ps1` (Windows), abra o seu navegador de preferência:
* **📊 Grafana:** [http://localhost:3300](http://localhost:3300) *(ou `http://<IP-DA-SUA-VM>:3300` se estiver acessando de fora da VM)*
* **📰 Aplicação de Notícias (Demo):** [http://localhost:38081](http://localhost:38081)
* **📬 Receptor de Webhooks:** [http://localhost:38090](http://localhost:38090)

---

## 📁 Estrutura do Repositório (O que tem em cada pasta)

```text
.
├── 00_COMECE_AQUI.html              ← Índice central interativo para alunos e professor
├── iniciar-lab-alunos.ps1           ← Lançador para Windows (PowerShell)
├── parar-lab-alunos.ps1             ← Parar containers no Windows
├── iniciar-lab.sh                   ← Lançador para Linux/Ubuntu (Bash)
├── parar-lab.sh                     ← Parar containers no Linux
├── GUIA_PRATICO_DO_ALUNO.txt        ← Guia completo passo a passo para ler no terminal Linux
├── REFERENCIA_POWER_SHELL.txt       ← Comandos operacionais úteis para PowerShell
│
├── Curso_Grafana_Green_V9/          ← Material oficial das 5 Noites (Apostilas, Slides e Labs)
│   ├── Curso_Grafana_Green_5_Noites_V9.pptx  ← Apresentação de slides oficial
│   ├── Apostila_do_Aluno_V8.pdf               ← Apostila completa e gabaritos
│   ├── Guia_Visual_Exercicios_V8.pdf          ← Roteiro com prints e telas passo a passo
│   ├── alunos/                                ← Caderno e roteiro de exercícios
│   └── exemplos-importaveis/                  ← Modelos prontos de dashboards
│
├── lab/                             ← Laboratórios Práticos Isolados
│   ├── dia1/                        ← Métricas fundamentais (Prometheus + Node Exporter)
│   ├── dia2/                        ← Dashboards dinâmicos, cAdvisor e disparo de alertas
│   ├── dia3/                        ← Scripts de instalação nativa no Ubuntu via systemd
│   ├── dia4/                        ← Logs estruturados (Loki) e Traces (Tempo)
│   ├── dashboards-prontos-importacao/ ← 6 JSONs oficiais para importar com 2 cliques
│   └── professor/                   ← Stack completa de observabilidade com gerador de telemetria
│
├── docs/                            ← Apresentações e apostilas em Markdown / PDF
└── scripts/                         ← Automação de screenshots e branding
```

---

## 📊 Dashboards Oficiais Prontos para Importação (2 Cliques)

Na pasta [`lab/dashboards-prontos-importacao/`](lab/dashboards-prontos-importacao/README.md), você encontra 6 dashboards prontos:

1. `01-visao-geral-host.json`: Métricas de hardware do host (CPU, Memória, Disco raiz, Uptime).
2. `02-host-dinamico.json`: Filtros dinâmicos com dropdowns de `$host` e `$cpu_mode`.
3. `03-containers.json`: Consumo de CPU e ranking de RAM dos containers Docker.
4. `04-central-logs-loki.json`: Central de logs agregados por nível (INFO, WARN, ERROR) e stream ao vivo.
5. `05-ecommerce-apm-traces.json`: Métricas RED (Rate, Errors, Duration) e SLA da Loja Virtual.
6. `06-dados-publicos-ibge-ssl-terremotos.json`: **Câmbio em tempo real (Dólar, Euro, Bitcoin), Estação Espacial ISS em órbita, População dos Estados pelo IBGE e Terremotos no mundo pelo USGS!**

### Como importar no seu Grafana:
1. No Grafana, clique no ícone de **Dashboards** (menu lateral esquerdo).
2. Clique em **New** ➔ **Import** (ou acerte direto: `http://localhost:3000/dashboard/import` ou `:3300`).
3. Clique em **Upload dashboard JSON file** e escolha o arquivo.
4. Selecione a fonte de dados (**Prometheus** ou **Loki**) e clique em **Import**.

---

## 🐧 Instalação Nativa no Ubuntu sem Docker (Dia 3)

Se você deseja aprender a instalar e operar o Grafana diretamente no Linux como um serviço de sistema corporativo gerenciado por `systemd`, acesse a pasta [`lab/dia3/`](lab/dia3/README.md) e execute sequencialmente:

```bash
cd lab/dia3
sudo bash 01-prepare.sh
sudo bash 02-install-grafana.sh
sudo bash 03-configure.sh
sudo bash 04-install-prometheus.sh
sudo bash 05-install-node-exporter.sh
sudo bash 06-validate.sh
```
O script `06-validate.sh` fará a auditoria completa validando status de daemons, portas e endpoints HTTP.

---

## 🛠️ Tecnologias Utilizadas
* **Visualização:** [Grafana 11+](https://grafana.com)
* **Métricas:** [Prometheus TSDB](https://prometheus.io) & Node Exporter
* **Logs:** [Grafana Loki](https://grafana.com/oss/loki/) & Promtail
* **Traces:** [Grafana Tempo](https://grafana.com/oss/tempo/) & OpenTelemetry SDK
* **Containers:** Docker Engine & Docker Compose v2
* **Sistema Operacional:** Ubuntu 22.04 LTS / openSUSE Leap

---
Bons estudos e aproveite o curso! 🚀
