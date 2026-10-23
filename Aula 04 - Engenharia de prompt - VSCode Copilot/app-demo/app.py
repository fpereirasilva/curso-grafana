import os
import time
import json
import random
import logging
from datetime import datetime, timezone
from flask import Flask, Response, request, jsonify
from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST

app = Flask(__name__)

# Caminho para logs estruturados em JSON que o Alloy irá ler
LOG_DIR = os.getenv("LOG_DIR", "/var/log/app")
os.makedirs(LOG_DIR, exist_ok=True)
LOG_FILE = os.path.join(LOG_DIR, "ecommerce-app.log")

# Métricas Prometheus oficiais (seguindo a convenção do projeto)
REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total de requisições HTTP recebidas",
    ["service", "environment", "route", "method", "status"]
)

REQUEST_DURATION = Histogram(
    "http_request_duration_seconds",
    "Duração das requisições HTTP em segundos",
    ["service", "environment", "route"],
    buckets=[0.01, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0]
)

SERVICE_NAME = "ecommerce-lab"
ENV_NAME = "lab"

def write_json_log(level, message, route, status, duration_ms, req_id):
    record = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "level": level,
        "service": SERVICE_NAME,
        "environment": ENV_NAME,
        "message": message,
        "route": route,
        "status": status,
        "duration_ms": round(duration_ms, 2),
        "request_id": req_id
    }
    try:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record) + "\n")
    except Exception as e:
        print(f"Erro ao gravar log JSON: {e}")

@app.route("/health")
def health():
    return jsonify({"status": "UP", "service": SERVICE_NAME, "timestamp": datetime.now(timezone.utc).isoformat()})

@app.route("/metrics")
def metrics():
    return Response(generate_latest(), mimetype=CONTENT_TYPE_LATEST)

@app.route("/checkout", methods=["POST", "GET"])
def checkout():
    start_time = time.time()
    req_id = f"req-{int(time.time() * 1000)}-{random.randint(100, 999)}"

    # Simulação de latência variável e erros controlados para aula prática
    chaos_mode = request.args.get("chaos", "normal")

    if chaos_mode == "latency":
        sleep_time = random.uniform(0.6, 1.2) # Acima de 500ms para disparar alerta didático
    elif chaos_mode == "error":
        sleep_time = random.uniform(0.02, 0.08)
    else:
        sleep_time = random.uniform(0.01, 0.15)

    time.sleep(sleep_time)
    duration_ms = (time.time() - start_time) * 1000

    if chaos_mode == "error" or (chaos_mode == "normal" and random.random() < 0.05):
        status_code = 500
        level = "ERROR"
        msg = f"Falha no processamento de pagamento para pedido: gateway indisponível"
        res = jsonify({"error": "Internal Server Error", "request_id": req_id})
    else:
        status_code = 200
        level = "INFO"
        msg = f"Pedido aprovado com sucesso via PIX/Cartão"
        res = jsonify({"status": "success", "request_id": req_id, "total": round(random.uniform(50, 450), 2)})

    REQUEST_COUNT.labels(
        service=SERVICE_NAME,
        environment=ENV_NAME,
        route="/checkout",
        method=request.method,
        status=str(status_code)
    ).inc()

    REQUEST_DURATION.labels(
        service=SERVICE_NAME,
        environment=ENV_NAME,
        route="/checkout"
    ).observe(duration_ms / 1000.0)

    write_json_log(level, msg, "/checkout", status_code, duration_ms, req_id)
    return res, status_code

@app.route("/")
def index():
    return jsonify({
        "message": "API E-Commerce Didática - Aula 04 Curso Grafana",
        "endpoints": ["/health", "/metrics", "/checkout?chaos=normal|latency|error"]
    })

if __name__ == "__main__":
    print(f"Iniciando {SERVICE_NAME} na porta 8000...")
    app.run(host="0.0.0.0", port=8000)
