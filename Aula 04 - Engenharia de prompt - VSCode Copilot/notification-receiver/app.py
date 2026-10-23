from flask import Flask, request, jsonify
from datetime import datetime, timezone
import json

app = Flask(__name__)
alerts_history = []

@app.route("/webhook", methods=["POST"])
def webhook():
    data = request.get_json(silent=True) or {}
    event = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        "status": data.get("status"),
        "alerts": data.get("alerts", []),
        "receiver": data.get("receiver")
    }
    alerts_history.append(event)
    # Manter no máximo os últimos 50 alertas
    if len(alerts_history) > 50:
        alerts_history.pop(0)

    print(f"[ALERTMANAGER WEBHOOK] Recebido status={data.get('status')} com {len(data.get('alerts', []))} alerta(s)")
    return jsonify({"status": "received", "count": len(data.get("alerts", []))}), 200

@app.route("/alerts", methods=["GET"])
def get_alerts():
    return jsonify({"total": len(alerts_history), "alerts": alerts_history}), 200

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "UP", "service": "notification-receiver"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8088)
