import time
import random
import json
import logging
import sys
from prometheus_client import start_http_server, Counter, Histogram

from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.resources import Resource

# 1. Configurar OpenTelemetry Tracing com envio para o Grafana Tempo (OTLP HTTP)
resource = Resource(attributes={
    "service.name": "ecommerce-shop",
    "service.version": "1.4.0",
    "deployment.environment": "producao-aula"
})

provider = TracerProvider(resource=resource)
# Conecta ao Tempo via porta OTLP HTTP (porta 4318)
otlp_exporter = OTLPSpanExporter(endpoint="http://tempo:4318/v1/traces")
provider.add_span_processor(BatchSpanProcessor(otlp_exporter))
trace.set_tracer_provider(provider)
tracer = trace.get_tracer("ecommerce-tracer")

# 2. Configurar Métricas Prometheus
REQUEST_COUNT = Counter(
    'http_requests_total',
    'Total de requisições HTTP na loja',
    ['method', 'endpoint', 'status']
)
REQUEST_LATENCY = Histogram(
    'http_request_duration_seconds',
    'Duração das requisições em segundos',
    ['endpoint']
)
ACTIVE_USERS = Counter('ecommerce_active_sessions_total', 'Contador de sessões simuladas')

# 3. Configurar Logging Estruturado em JSON (coletado pelo Promtail para o Loki)
class JsonLogFormatter(logging.Formatter):
    def format(self, record):
        log_obj = {
            "timestamp": time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
            "level": record.levelname,
            "service": "ecommerce-shop",
            "msg": record.getMessage(),
            "trace_id": getattr(record, 'trace_id', ''),
            "span_id": getattr(record, 'span_id', ''),
            "endpoint": getattr(record, 'endpoint', ''),
            "status": getattr(record, 'status', 200),
            "client_ip": getattr(record, 'client_ip', '192.168.1.10')
        }
        return json.dumps(log_obj)

logger = logging.getLogger("ecommerce")
logger.setLevel(logging.INFO)
handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(JsonLogFormatter())
logger.addHandler(handler)

ENDPOINTS = [
    ("/api/v1/produtos", "GET"),
    ("/api/v1/busca", "GET"),
    ("/api/v1/carrinho", "POST"),
    ("/api/v1/checkout", "POST"),
    ("/api/v1/pagamento", "POST"),
    ("/api/v1/login", "POST")
]

IPS = ["177.18.23.44", "201.88.92.10", "189.34.12.5", "10.0.4.15", "172.16.88.22"]

def simular_requisicao():
    endpoint, method = random.choice(ENDPOINTS)
    client_ip = random.choice(IPS)
    status = 200

    # Inicia Span Raiz da requisição
    with tracer.start_as_current_span(f"{method} {endpoint}") as span:
        trace_id = format(span.get_span_context().trace_id, "032x")
        span_id = format(span.get_span_context().span_id, "016x")
        span.set_attribute("http.method", method)
        span.set_attribute("http.target", endpoint)
        span.set_attribute("client.address", client_ip)

        extra_data = {
            "trace_id": trace_id,
            "span_id": span_id,
            "endpoint": endpoint,
            "client_ip": client_ip,
            "status": 200
        }

        # Simular processamento com spans filhos
        start_time = time.time()

        # 1. Autenticação/Validação de Sessão
        with tracer.start_as_current_span("auth.validate_token") as auth_span:
            time.sleep(random.uniform(0.01, 0.04))
            auth_span.set_attribute("user.role", "customer")

        # 2. Banco de Dados / Cache
        with tracer.start_as_current_span("db.postgres.query") as db_span:
            db_span.set_attribute("db.system", "postgresql")
            db_span.set_attribute("db.statement", f"SELECT * FROM items WHERE path='{endpoint}' LIMIT 50")
            db_time = random.uniform(0.02, 0.12)
            time.sleep(db_time)
            if db_time > 0.10:
                logger.warning(f"Consulta de banco de dados lenta para {endpoint}: {db_time:.3f}s", extra=extra_data)

        # 3. Se for pagamento ou checkout, simula chamada externa a gateway de pagamento
        if endpoint in ["/api/v1/checkout", "/api/v1/pagamento"]:
            with tracer.start_as_current_span("gateway.payment.process") as pay_span:
                pay_span.set_attribute("peer.service", "payment-gateway")
                time.sleep(random.uniform(0.05, 0.20))

                # 8% de falha para demonstrar erros no Grafana
                if random.random() < 0.08:
                    status = 500
                    pay_span.set_attribute("error", True)
                    pay_span.set_attribute("error.message", "Transação recusada por timeout na operadora")
                    extra_data["status"] = 500
                    logger.error(f"Falha de processamento no gateway de pagamento para o cliente {client_ip}", extra=extra_data)
                else:
                    logger.info(f"Pagamento aprovado com sucesso para transacao no endpoint {endpoint}", extra=extra_data)
        else:
            # Demais endpoints
            if random.random() < 0.02:
                status = 404
                extra_data["status"] = 404
                logger.warning(f"Recurso nao encontrado para {endpoint}", extra=extra_data)
            else:
                logger.info(f"Requisicao processada com sucesso: {method} {endpoint}", extra=extra_data)

        duration = time.time() - start_time
        span.set_attribute("http.status_code", status)

        # Atualiza métricas Prometheus
        REQUEST_COUNT.labels(method=method, endpoint=endpoint, status=status).inc()
        REQUEST_LATENCY.labels(endpoint=endpoint).observe(duration)
        ACTIVE_USERS.inc()

def main():
    print("[INIT] Iniciando simulador de telemetria E-Commerce (Metricas + Logs + Traces)...")
    # Inicia servidor Prometheus na porta 8000
    start_http_server(8000)
    print("[OK] Endpoint de metricas Prometheus disponivel em :8000/metrics")
    print("[OK] Logs sendo emitidos em formato JSON compatível com Promtail/Loki")
    print("[OK] Spans de Tracing sendo exportados para Grafana Tempo em http://tempo:4318/v1/traces")

    # Warm-up rápido: gera 50 requisições logo na largada para o dashboard já começar com dados
    print("[WARMUP] Gerando 50 transações iniciais para popular os dashboards...")
    for _ in range(50):
        try:
            simular_requisicao()
        except Exception as e:
            print(f"Erro warmup: {e}")
        time.sleep(0.05)
    print("[READY] Ambiente populado com dados iniciais! Entrando em loop contínuo...")

    # Loop contínuo gerando tráfego realista constante (2 a 4 req/segundo)
    while True:
        try:
            simular_requisicao()
        except Exception as e:
            print(f"Erro no loop de simulacao: {e}")
        time.sleep(random.uniform(0.2, 0.6))

if __name__ == "__main__":
    main()
