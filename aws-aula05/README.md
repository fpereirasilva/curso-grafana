# ☁️ Lab AWS — Aula 05: E-Commerce APM e Traces

Este diretório contém a stack completa e **100% automatizada** para replicar o **Exercício 5** do Curso Grafana (APM com OpenTelemetry + Traces + Logs + Métricas) diretamente na **AWS (Account ID: 3934-3929-0493, us-east-1)**.

---

## 🎯 Escopo do Laboratório (Exercício 5)

Em vez de subir todos os 10 containers da stack mestre, a versão AWS foi otimizada exclusivamente para o Exercício 5 com **6 containers leves e integrados**:

| # | Container | Porta Local | Função |
| :---: | :--- | :---: | :--- |
| 1 | **`lab-grafana-aws`** | **`3000`** | **UI do Grafana (Login: `admin` / `admin`)** |
| 2 | **`lab-prometheus-aws`** | `9090` | Métricas da aplicação e da stack |
| 3 | **`lab-loki-aws`** | `3100` | Logs estruturados em JSON com `trace_id` |
| 4 | **`lab-tempo-aws`** | `3200`, `4317/4318` | Traces OTLP HTTP/gRPC + Service Map |
| 5 | **`lab-promtail-aws`** | *(rede interna)* | Coleta logs dos containers Docker |
| 6 | **`lab-ecommerce-app-aws`** | `8000` | Loja virtual simulada com OTel SDK |

### ✨ Funcionalidades Demonstrativas (semelhantes ao professor)
* **Métricas em Tempo Real:** Taxa de requisições, latência HTTP, percentual de erros (8% de falha simulada no gateway de pagamento).
* **Logs Estruturados:** JSON com `trace_id` e `span_id` correlacionáveis no Loki via `derivedFields`.
* **Traces OTLP:** Spans de `auth.validate_token`, `db.postgres.query` (com latência variável de 20ms a 120ms) e `gateway.payment.process` (com erros 500 simulados).
* **Correlação cruzada Logs ↔ Traces:** Clique no `trace_id` de um log e abra diretamente o trace no Tempo!

---

## 🚀 Como Provisionar na AWS (Direto do WSL)

### Pré-requisitos
1. AWS CLI instalado e configurado no WSL (`aws --version`)
2. Credenciais válidas configuradas (Access Key + Secret Key ou SSO):
   ```bash
   aws configure
   # ou
   aws configure --profile assessment
   ```
3. Conta AWS: **`3934-3929-0493`**
4. Região: **`us-east-1` (N. Virginia)**

### 1. Deploy Completo (1 comando)
```bash
wsl bash -c "chmod +x '/mnt/e/01_Projetos/Curso Grafana/aws-aula05/deploy-aws.sh' && '/mnt/e/01_Projetos/Curso Grafana/aws-aula05/deploy-aws.sh'"
```

O script faz **tudo automaticamente**:
* ✅ Localiza VPC e Subnet padrão em `us-east-1`
* ✅ Cria Security Group `sg-curso-grafana-aula05` com portas `22`, `3000`, `9090`, `3100`, `3200`, `8000` liberadas
* ✅ Gera Key Pair SSH `curso-grafana-aws-key.pem`
* ✅ Seleciona a AMI Ubuntu 22.04 LTS mais recente
* ✅ Lança EC2 `t3.small` (20GB gp3, 2 vCPU, 2GB RAM)
* ✅ Instala Docker + Docker Compose via `user_data`
* ✅ Transfere a stack via `scp` e sobe os 6 containers
* ✅ Configura `systemd` (`grafana-aula05.service`) para re-start automático no boot

### 2. Parar a Instância (Custo ZERO entre aulas)
```bash
wsl bash -c "chmod +x '/mnt/e/01_Projetos/Curso Grafana/aws-aula05/parar-aws.sh' && '/mnt/e/01_Projetos/Curso Grafana/aws-aula05/parar-aws.sh'"
```

### 3. Destruir Todo o Ambiente (Fim do Curso)
```bash
wsl bash -c "chmod +x '/mnt/e/01_Projetos/Curso Grafana/aws-aula05/destruir-aws.sh' && '/mnt/e/01_Projetos/Curso Grafana/aws-aula05/destruir-aws.sh'"
```

---

## 📊 Acesso aos Dashboards

Após o deploy, acesse:
* **Grafana:** `http://<IP_PUBLICO_DA_EC2>:3000` (**`admin` / `admin`**)
* **Dashboard Pronto:** `Aula 05 - APM e Traces` → `05 - E-Commerce APM e Traces`

---

## 📁 Estrutura de Arquivos

```
aws-aula05/
├── deploy-aws.sh                  # Provisionamento automático 1-click
├── parar-aws.sh                   # Parar EC2 (custo zero)
├── destruir-aws.sh                # Limpeza completa de recursos
├── docker-compose.yml             # Stack de 6 containers otimizados
├── prometheus.yml                 # Coleta de métricas da app e stack
├── loki-config.yaml               # Config do Loki (armazenamento local)
├── tempo-config.yaml              # Config do Tempo (OTLP HTTP/gRPC + WAL)
├── promtail-config.yaml           # Coleta logs JSON + atributos Docker
├── grafana/
│   ├── provisioning/
│   │   ├── datasources/datasources.yml   # Prometheus + Loki + Tempo integrados
│   │   └── dashboards/dashboards.yml     # Carregamento do dashboard 05
│   └── dashboards/
│       └── 05-ecommerce-apm-traces.json  # Dashboard APM e Traces completo
└── app-telemetry/
    ├── app.py                     # Loja simulada com OpenTelemetry SDK
    ├── requirements.txt           # Dependências Python
    └── Dockerfile                 # Imagem Docker otimizada
```

---

## 📈 Custo Estimado (us-east-1)

| Recurso | Especificação | Custo Mensal (24/7) | Custo Aula (4h/semana) |
| :--- | :--- | :---: | :---: |
| EC2 `t3.small` | 2 vCPU, 2 GB RAM | ~USD 15.36 | ~USD 1.53 |
| EBS gp3 | 20 GB | ~USD 1.60 | ~USD 1.60 |
| **Total** | | **~USD 16.96** | **~USD 3.13** |

> **Dica:** Sempre use o script `parar-aws.sh` ao final da aula para zerar o custo de computação entre as turmas!
