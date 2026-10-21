import json
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, HTTPServer

events = []

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        payload = self.rfile.read(int(self.headers.get('Content-Length', '0')))
        try:
            body = json.loads(payload)
        except ValueError:
            body = payload.decode('utf-8', errors='replace')
        events.append({'received_at': datetime.now(timezone.utc).isoformat(), 'body': body})
        del events[:-100]
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'{"received":true}')

    def do_GET(self):
        body = json.dumps(events, ensure_ascii=False, indent=2).encode('utf-8')
        if self.path != '/events':
            import html
            body = ('<!doctype html><html lang="pt-BR"><meta charset="utf-8">'
                    '<title>Notificações do laboratório</title><style>'
                    'body{font:20px Segoe UI,sans-serif;margin:48px;color:#284413;}'
                    'pre{font:15px Consolas,monospace;white-space:pre-wrap;color:#222;}'
                    '</style><h1>Notificações do laboratório</h1><p>'
                    f'{len(events)} mensagem(ns) recebida(s). Atualize a página após o teste.</p>'
                    '<p>Endpoint interno: http://webhook:8080/</p><pre>'
                    + html.escape(body.decode('utf-8')) + '</pre></html>').encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json' if self.path == '/events' else 'text/html; charset=utf-8')
        self.end_headers()
        self.wfile.write(body)

HTTPServer(('0.0.0.0', 8080), Handler).serve_forever()
