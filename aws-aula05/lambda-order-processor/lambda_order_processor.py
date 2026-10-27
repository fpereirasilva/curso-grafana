import json
import time
import random
import urllib.request
import os

LOKI_URL = os.environ.get("LOKI_URL", "http://3.94.62.252:3100/loki/api/v1/push")


def send_to_loki(entries):
    """Envia logs estruturados para o Loki com labels AWS."""
    now_ns = str(time.time_ns())
    streams = {}
    for level, msg in entries:
        labels = {
            "app": "lambda-order-processor",
            "environment": "aws-production",
            "severity": level,
        }
        label_key = level
        line = json.dumps({
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "level": level,
            "service": "lambda-order-processor",
            "runtime": "python3.12",
            "aws_region": "us-east-1",
            "msg": msg,
        })
        if label_key not in streams:
            streams[label_key] = {"stream": labels, "values": []}
        streams[label_key]["values"].append([now_ns, line])

    payload = {"streams": list(streams.values())}
    req = urllib.request.Request(
        LOKI_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
    )
    try:
        urllib.request.urlopen(req, timeout=5)
    except Exception as exc:
        print("[LOKI-SEND-ERROR]", exc)


def process_order():
    """Simula processamento de pedido com falhas intermitentes."""
    order_id = "ORD-" + str(random.randint(10000, 99999))
    amount = round(random.uniform(25.0, 950.0), 2)

    entries = []
    entries.append(("INFO", "[" + order_id + "] Iniciando processamento de pedido valor=R$" + str(amount)))

    # 1. Validacao de estoque (85% sucesso)
    if random.random() < 0.85:
        entries.append(("INFO", "[" + order_id + "] Estoque validado com sucesso"))
    else:
        sku = "SKU-" + str(random.randint(100, 999))
        entries.append(("CRITICAL", "[" + order_id + "] FALHA CRITICA: InventoryExhausted - SKU " + sku + " sem estoque"))
        send_to_loki(entries)
        return

    # 2. Reserva de pagamento (90% sucesso)
    if random.random() < 0.90:
        entries.append(("INFO", "[" + order_id + "] Reserva de pagamento aprovada - gateway=stripe"))
    else:
        entries.append(("CRITICAL", "[" + order_id + "] FALHA CRITICA: PaymentTimeoutException - Timeout apos 30s no gateway de pagamento"))
        send_to_loki(entries)
        return

    # 3. Persistencia em banco (95% sucesso)
    if random.random() < 0.95:
        entries.append(("INFO", "[" + order_id + "] Pedido confirmado e persistido no banco"))
    else:
        entries.append(("CRITICAL", "[" + order_id + "] FALHA CRITICA: DatabaseDeadlock - Lock wait timeout exceeded em orders.update"))
        send_to_loki(entries)
        return

    entries.append(("INFO", "[" + order_id + "] Processamento concluido com sucesso"))
    send_to_loki(entries)


def lambda_handler(event, context):
    """Handler principal - dispara 1 a 3 pedidos por invocacao."""
    n_orders = random.randint(1, 3)
    for _ in range(n_orders):
        process_order()

    summary = [("INFO", "[SUMMARY] Lambda executada com sucesso - " + str(n_orders) + " pedidos processados")]
    send_to_loki(summary)

    return {
        "statusCode": 200,
        "body": json.dumps({"orders_processed": n_orders, "status": "ok"}),
    }


if __name__ == "__main__":
    lambda_handler({}, None)
