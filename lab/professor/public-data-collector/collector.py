import time
import json
import urllib.request
import ssl
import socket
from datetime import datetime
from prometheus_client import start_http_server, Gauge

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# 1. Metricas Cripto e Cambio (USD/BRL, EUR/BRL, BTC)
CURRENCY_PRICE = Gauge('finance_currency_price_brl', 'Cotacao em Reais', ['moeda', 'nome'])
BTC_USD_PRICE = Gauge('finance_btc_price_usd', 'Cotacao do Bitcoin em Dolar')

# 2. Metricas Terremotos USGS
EARTHQUAKE_MAG = Gauge('usgs_earthquake_magnitude', 'Magnitude do terremoto recente', ['place', 'lat', 'lon'])

# 3. Metricas IBGE (Populacao estimada por estado)
IBGE_POP = Gauge('ibge_populacao_estado', 'Populacao estimada por estado IBGE', ['uf', 'nome_estado', 'regiao'])

# 4. Metricas SSL e Uptime de Sites
SITE_UP = Gauge('site_probe_success', 'Status 1=UP 0=DOWN', ['site'])
SITE_LATENCY = Gauge('site_probe_duration_ms', 'Tempo de resposta em milissegundos', ['site'])
SSL_EXPIRY_DAYS = Gauge('site_ssl_days_remaining', 'Dias restantes para o certificado SSL expirar', ['site'])

# 5. Metricas ISS (Estação Espacial Internacional)
ISS_LAT = Gauge('iss_latitude', 'Latitude da ISS em tempo real')
ISS_LON = Gauge('iss_longitude', 'Longitude da ISS em tempo real')
ISS_ALTITUDE = Gauge('iss_altitude_km', 'Altitude da ISS em km')
ISS_VELOCITY = Gauge('iss_velocity_kmh', 'Velocidade da ISS em km/h')

def fetch_json(url, timeout=6):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=timeout, context=ctx) as response:
        return json.loads(response.read().decode('utf-8'))

def check_site(site, host, port=443):
    start = time.time()
    try:
        req = urllib.request.Request(f"https://{host}", headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5, context=ctx) as resp:
            lat = (time.time() - start) * 1000
            SITE_UP.labels(site=site).set(1 if resp.status == 200 else 0)
            SITE_LATENCY.labels(site=site).set(round(lat, 2))
    except Exception:
        SITE_UP.labels(site=site).set(0)
        SITE_LATENCY.labels(site=site).set(5000)

    try:
        sock_ctx = ssl.create_default_context()
        with socket.create_connection((host, port), timeout=4) as sock:
            with sock_ctx.wrap_socket(sock, server_hostname=host) as ssock:
                cert = ssock.getpeercert()
                expire_date = cert.get('notAfter')
                exp_dt = datetime.strptime(expire_date, '%b %d %H:%M:%S %Y %Z')
                days_left = (exp_dt - datetime.utcnow()).days
                SSL_EXPIRY_DAYS.labels(site=site).set(max(days_left, 0))
    except Exception:
        SSL_EXPIRY_DAYS.labels(site=site).set(45)

def update_finance():
    try:
        data = fetch_json("https://open.er-api.com/v6/latest/USD")
        usd_brl = float(data['rates']['BRL'])
        usd_eur = float(data['rates']['EUR'])
        eur_brl = round(usd_brl / usd_eur, 4)
        CURRENCY_PRICE.labels(moeda='USD', nome='Dólar Americano').set(round(usd_brl, 4))
        CURRENCY_PRICE.labels(moeda='EUR', nome='Euro').set(eur_brl)
    except Exception as e:
        print(f"Erro Cambio OpenER: {e}")

    try:
        cb_data = fetch_json("https://api.coinbase.com/v2/prices/BTC-USD/spot")
        btc_usd = float(cb_data['data']['amount'])
        BTC_USD_PRICE.set(round(btc_usd, 2))
        try:
            CURRENCY_PRICE.labels(moeda='BTC', nome='Bitcoin (BRL)').set(round(btc_usd * usd_brl, 2))
        except:
            pass
    except Exception as e:
        print(f"Erro Bitcoin Coinbase: {e}")

def update_iss():
    try:
        iss_data = fetch_json("https://api.wheretheiss.at/v1/satellites/25544")
        lat = float(iss_data.get('latitude', 0))
        lon = float(iss_data.get('longitude', 0))
        alt = float(iss_data.get('altitude', 0))
        vel = float(iss_data.get('velocity', 0))
        ISS_LAT.set(round(lat, 4))
        ISS_LON.set(round(lon, 4))
        ISS_ALTITUDE.set(round(alt, 1))
        ISS_VELOCITY.set(round(vel, 1))
    except Exception as e:
        print(f"Erro ISS: {e}")

def update_usgs():
    try:
        eq_data = fetch_json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson")
        features = eq_data.get('features', [])[:12]
        for f in features:
            mag = float(f['properties'].get('mag') or 0.0)
            place = str(f['properties'].get('place') or 'Local desconhecido')
            coords = f['geometry'].get('coordinates', [0, 0])
            lon = str(round(coords[0], 2))
            lat = str(round(coords[1], 2))
            EARTHQUAKE_MAG.labels(place=place, lat=lat, lon=lon).set(mag)
    except Exception as e:
        print(f"Erro USGS: {e}")

def update_ibge():
    estados_ibge = [
        ("SP", "São Paulo", "Sudeste", 44411238),
        ("MG", "Minas Gerais", "Sudeste", 20538718),
        ("RJ", "Rio de Janeiro", "Sudeste", 16054524),
        ("BA", "Bahia", "Nordeste", 14141626),
        ("PR", "Paraná", "Sul", 11444380),
        ("RS", "Rio Grande do Sul", "Sul", 10882965),
        ("PE", "Pernambuco", "Nordeste", 9058931),
        ("CE", "Ceará", "Nordeste", 8794957),
        ("PA", "Pará", "Norte", 8121025),
        ("SC", "Santa Catarina", "Sul", 7610361),
        ("GO", "Goiás", "Centro-Oeste", 7056495),
        ("DF", "Distrito Federal", "Centro-Oeste", 2817381)
    ]
    for uf, nome, regiao, pop in estados_ibge:
        IBGE_POP.labels(uf=uf, nome_estado=nome, regiao=regiao).set(pop)

def update_sites():
    sites = [
        ("Opus 5.5 Brasil", "www.google.com.br"),
        ("GitHub Oficial", "github.com"),
        ("Portal UOL", "www.uol.com.br"),
        ("Tela Preta Dev", "telapreta.dev.br")
    ]
    for site_nome, host in sites:
        check_site(site_nome, host)

def main():
    print("Iniciando Public Data Collector (IBGE, USGS, Finanças, Sites, ISS)...")
    start_http_server(8085)
    update_finance()
    update_iss()
    update_usgs()
    update_ibge()
    update_sites()
    print("[READY] Todas as metricas carregadas na porta 8085!")
    while True:
        time.sleep(10)
        update_iss()
        update_finance()
        update_usgs()
        update_sites()

if __name__ == '__main__':
    main()
