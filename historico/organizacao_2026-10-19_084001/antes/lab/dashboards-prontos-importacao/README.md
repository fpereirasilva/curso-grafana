# 📊 Dashboards Prontos para Importação no Grafana (Aluno)

Esta pasta contém os dashboards oficiais do curso prontos para você importar no seu Grafana em menos de 1 minuto.

---

## 🚀 Como Importar Qualquer Dashboard no seu Grafana (Passo a Passo)

1. Abra o seu Grafana no navegador (`http://localhost:3000` ou endereço da sua VM).
2. No menu lateral esquerdo, clique no ícone de **Dashboards** (quatro quadradinhos).
3. No canto superior direito da página, clique no botão azul **New** e selecione **Import** (ou acerte direto pela URL: `http://localhost:3000/dashboard/import`).
4. Clique no botão azul **Upload dashboard JSON file**.
5. Escolha um dos arquivos desta pasta:
   - `01-visao-geral-host.json` ➔ **Métricas Básicas do Host** (CPU, Memória, Disco, Uptime).
   - `02-host-dinamico.json` ➔ **Dashboard com Variáveis** (filtro `$host`, gauge, heatmap).
   - `03-containers.json` ➔ **Métricas de Containers cAdvisor** (CPU e RAM por container Docker).
   - `04-central-logs-loki.json` ➔ **Central de Logs com Loki** (painéis de agregação por nível e stream interativo).
   - `05-ecommerce-apm-traces.json` ➔ **Métricas de Negócio, APM e Traces** (vazão, latência e SLA).
6. Selecione o seu Data Source (**Prometheus** ou **Loki** conforme solicitado na tela de importação) e clique em **Import**.

Pronto! O dashboard carrega instantaneamente com os dados do seu laboratório.
