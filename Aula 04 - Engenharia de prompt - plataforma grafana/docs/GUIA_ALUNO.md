# 📖 Guia do Aluno — Aula 04: Observabilidade com Engenharia de Prompt

Bem-vindo à Aula 04 do Curso Grafana! Hoje você verá na prática como conectar os pilares de métricas e logs em um ambiente real em nuvem.

## 1. O que estamos aprendendo hoje?
- Como uma IA estruturada (Claude Sonnet 5.5 Code) projeta uma solução de observabilidade ponta a ponta.
- A diferença entre **Agentes** (quem raciocina), **Skills** (o que sabe fazer), **Ferramentas** (quem executa) e **Harness** (quem orquestra as regras).
- Como o **Grafana Alloy** substitui coletores legados com configuração declarativa moderna.
- Como o **Loki** recebe logs JSON estruturados e permite consultas avançadas com **LogQL**.
- Como o **Prometheus** avalia regras de alertas e despacha notificações para o **Alertmanager**.

## 2. Acessos do Laboratório
- **Grafana Web:** Pergunte ao professor o IP público ou conecte via túnel.
- **Usuário:** `admin` | **Senha:** `admin`

## 3. Consultas Práticas que vamos rodar:

### 📈 PromQL (Prometheus)
```promql
# 1. Verificar se a aplicação está online:
up{job="ecommerce-app"}

# 2. Taxa de requisições por segundo por código de status:
sum(rate(http_requests_total{service="ecommerce-lab"}[1m])) by (status)

# 3. Percentil 95 (p95) de tempo de resposta:
histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket{service="ecommerce-lab"}[1m])))
```

### 📜 LogQL (Loki)
```logql
# 1. Ver todos os logs do e-commerce:
{service="ecommerce-lab"}

# 2. Extrair os campos do JSON e filtrar apenas erros:
{service="ecommerce-lab"} | json | level="ERROR"

# 3. Filtrar requisições com duração superior a 500 milissegundos:
{service="ecommerce-lab"} | json | duration_ms > 500
```
