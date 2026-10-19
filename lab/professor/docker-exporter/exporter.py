import time
import json
import urllib.request
import http.client
import socket
from prometheus_client import start_http_server, Gauge

CPU_USAGE = Gauge('container_cpu_usage_seconds_total', 'CPU usage per container', ['name', 'image'])
MEM_USAGE = Gauge('container_memory_usage_bytes', 'Memory usage per container', ['name', 'image'])

class UnixSocketHTTPConnection(http.client.HTTPConnection):
    def __init__(self, socket_path):
        super().__init__('localhost')
        self.socket_path = socket_path
    def connect(self):
        self.sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        self.sock.connect(self.socket_path)

def get_docker_containers():
    conn = UnixSocketHTTPConnection('/var/run/docker.sock')
    conn.request('GET', '/containers/json')
    res = conn.getresponse()
    data = json.loads(res.read().decode('utf-8'))
    conn.close()
    return data

def get_container_stats(c_id):
    conn = UnixSocketHTTPConnection('/var/run/docker.sock')
    conn.request('GET', f'/containers/{c_id}/stats?stream=false')
    res = conn.getresponse()
    data = json.loads(res.read().decode('utf-8'))
    conn.close()
    return data

def update_metrics():
    try:
        containers = get_docker_containers()
        for c in containers:
            names = c.get('Names', ['/unknown'])
            name = names[0].lstrip('/') if names else 'unknown'
            image = c.get('Image', 'unknown')
            c_id = c.get('Id')
            stats = get_container_stats(c_id)

            # CPU
            cpu_stats = stats.get('cpu_stats', {})
            cpu_usage = cpu_stats.get('cpu_usage', {}).get('total_usage', 0) / 1e9
            CPU_USAGE.labels(name=name, image=image).set(cpu_usage)

            # Memory
            mem_usage = stats.get('memory_stats', {}).get('usage', 0)
            MEM_USAGE.labels(name=name, image=image).set(mem_usage)
    except Exception as e:
        print(f"Error updating stats: {e}")

def main():
    print("Starting Docker Container Metrics Exporter on :8080...")
    start_http_server(8080)
    while True:
        update_metrics()
        time.sleep(3)

if __name__ == '__main__':
    main()
