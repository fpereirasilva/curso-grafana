#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/lab/tutorial-environment"
docker compose -p green-fundamentals up -d --build
printf '%s\n' 'Grafana: http://localhost:3300' 'Aplicação: http://localhost:38081' 'Webhook: http://localhost:38090'
