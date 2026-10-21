#!/usr/bin/env bash
# =============================================================================
# 📊 CURSO GRAFANA: VISUALIZANDO DADOS & OBSERVABILIDADE
# Instrutor: Fábio Silva
# Script: iniciar-lab.sh — Inicializador Oficial do Laboratório dos Alunos
# =============================================================================
#
# 🎯 OBJETIVO DESTE SCRIPT:
# Este script prepara e inicializa toda a infraestrutura de observabilidade local
# necessária para as aulas práticas. Ele verifica os pré-requisitos da máquina,
# cria a rede isolada do Docker, sobe os serviços conteinerizados e valida se
# todos os componentes estão respondendo corretamente.
#
# 📦 COMPONENTES DA STACK DO ALUNO:
# 1. Grafana 12 (Porta 3300)      -> Interface visual para dashboards e exploração.
# 2. Prometheus (Porta 39090)     -> Banco TSDB coletor e armazenador de métricas.
# 3. Loki (Porta 33100)           -> Motor de agregação e consulta de logs (LogQL).
# 4. Promtail                     -> Agente coletor que envia logs dos containers para o Loki.
# 5. TNS News App (Porta 38081)   -> Aplicação de Notícias instrumentada com métricas reais.
# 6. TNS Database (Porta 38082)   -> Banco de dados backend da aplicação TNS.
# 7. Webhook Notifier (Porta 38090)-> Receptor de alertas para testes práticos de notificações.
#
# 🚀 COMO EXECUTAR:
#   bash iniciar-lab.sh
#
# 🛑 COMO PARAR O LABORATÓRIO QUANDO TERMINAR A AULA:
#   bash parar-lab.sh
# =============================================================================

# Encerra a execução caso qualquer comando falhe (-e) ou variável não exista (-u)
set -euo pipefail

# Detecta dinamicamente a pasta onde este script está localizado
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

clear
echo "================================================================="
echo "🚀 INICIANDO LABORATÓRIO DO CURSO GRAFANA (LINUX / UBUNTU)"
echo "   Instrutor: Fábio Silva | Trilha Prática Hands-on"
echo "================================================================="
echo ""

# -----------------------------------------------------------------------------
# PASSO 1: Verificação de Pré-requisitos do Sistema (Docker e Docker Compose)
# -----------------------------------------------------------------------------
# O laboratório roda totalmente conteinerizado para não poluir sua máquina local.
# Precisamos garantir que o Docker Engine e o Docker Compose estejam operacionais.
# -----------------------------------------------------------------------------
echo "[PASSO 1/3] Verificando pré-requisitos do Docker na sua máquina..."

# 1.1 - Verifica se o executável do Docker existe no PATH do sistema
if ! command -v docker >/dev/null 2>&1; then
  echo "❌ [ERRO] O comando 'docker' não foi encontrado no sistema."
  echo "👉 Dica: Instale o Docker no Ubuntu rodando:"
  echo "   curl -fsSL https://get.docker.com | sh"
  echo "   sudo usermod -aG docker \$USER"
  exit 1
fi

# 1.2 - Verifica se o serviço (daemon) do Docker está ativo e se o usuário tem permissão de socket
if ! docker info >/dev/null 2>&1; then
  echo "❌ [ERRO] O serviço do Docker não está rodando ou seu usuário não tem permissão de acesso ao socket."
  echo "👉 Dica para resolver no Ubuntu:"
  echo "   1. Inicie o serviço:    sudo systemctl start docker"
  echo "   2. Dê permissão ao user: sudo usermod -aG docker \$USER"
  echo "   3. Recarregue a sessão: newgrp docker"
  exit 1
fi

echo "   ✔ Docker Engine ativo e respondendo!"

# -----------------------------------------------------------------------------
# PASSO 2: Localização e Execução do Docker Compose
# -----------------------------------------------------------------------------
# Navegamos até a pasta do laboratório oficial e executamos o Docker Compose.
# O parâmetro '-d' (detached) roda os containers em segundo plano, liberando o terminal.
# -----------------------------------------------------------------------------
echo ""
echo "[PASSO 2/3] Localizando arquivos do laboratório e iniciando containers..."

LAB_DIR="$SCRIPT_DIR/Curso_Grafana_Green_V9/lab/tutorial-environment"

if [ -d "$LAB_DIR" ]; then
  cd "$LAB_DIR"
  echo "   📁 Entrando no diretório: $LAB_DIR"
  echo "   ⏳ Baixando imagens e construindo containers (isso pode levar alguns segundos na primeira vez)..."

  # Inicia os containers em segundo plano e reconstrói se necessário (--build)
  docker compose -p green-fundamentals up -d --build

else
  # Caso de contingência: se a pasta V9 não estiver presente, executa a pasta lab/dia1
  echo "   ⚠️ [AVISO] Pasta V9 não encontrada. Usando laboratório base em lab/dia1..."
  cd "$SCRIPT_DIR/lab/dia1"
  docker compose up -d
fi

# -----------------------------------------------------------------------------
# PASSO 3: Validação de Saúde dos Serviços (Healthcheck Rápido)
# -----------------------------------------------------------------------------
# Aguardamos 3 segundos para os serviços inicializarem internamente e exibimos
# o mapa completo de portas e endereços que o aluno usará durante a aula.
# -----------------------------------------------------------------------------
echo ""
echo "[PASSO 3/3] Validando inicialização dos serviços..."
sleep 3

echo ""
echo "================================================================="
echo "🎉 PARABÉNS! SEU LABORATÓRIO ESTÁ 100% OPERACIONAL!"
echo "================================================================="
echo ""
echo "🌐 ENDPOINTS PARA ACESSAR NO SEU NAVEGADOR (CHROME / FIREFOX):"
echo ""
echo "  1. 📊 Grafana (Interface Principal):"
echo "     👉 URL: http://localhost:3300"
echo "     👉 Acesso: Automático (Login Anônimo como Administrador já ativado)"
echo ""
echo "  2. 📰 Aplicação de Notícias (TNS News - Alvo de Monitoramento):"
echo "     👉 URL: http://localhost:38081"
echo "     👉 Dica: Acesse e clique nos posts para gerar tráfego e métricas!"
echo ""
echo "  3. 📈 Prometheus (Servidor de Métricas TSDB):"
echo "     👉 URL: http://localhost:39090"
echo "     👉 Dica: Acesse para testar expressões PromQL diretamente."
echo ""
echo "  4. 📬 Servidor de Webhooks (Receptor de Alertas):"
echo "     👉 URL: http://localhost:38090"
echo "     👉 Dica: Usado para receber notificações disparadas pelo Grafana."
echo ""
echo "================================================================="
echo "💡 COMANDOS ÚTEIS PARA O ALUNO NO TERMINAL:"
echo "  - Ver logs do Grafana:     docker compose -p green-fundamentals logs -f grafana"
echo "  - Ver status dos containers: docker compose -p green-fundamentals ps"
echo "  - Parar o laboratório:      bash parar-lab.sh"
echo "================================================================="
echo ""
