#!/usr/bin/env python3
"""Simulador de telemetria de motor de carro para o Curso Grafana.

Expõe métricas Prometheus em http://localhost:8090/metrics.
Ciclo de condução de 10 min (arrancada, cruzeiro, freada, parada) e um
"defeito" de superaquecimento a cada 20 min, para gerar alertas.
Sem dependências além de prometheus-client.
"""
import math, os, random, time
from prometheus_client import Gauge, Counter, start_http_server

PORT = int(os.getenv("PORT", "8090"))
VEICULO = os.getenv("VEICULO", "demo-01")
L = ["veiculo"]

rpm = Gauge("car_engine_rpm", "Rotação do motor (rpm)", L)
speed = Gauge("car_speed_kmh", "Velocidade (km/h)", L)
throttle = Gauge("car_throttle_percent", "Posição do acelerador (%)", L)
load = Gauge("car_engine_load_percent", "Carga do motor (%)", L)
coolant = Gauge("car_coolant_temp_celsius", "Temperatura do líquido de arrefecimento (°C)", L)
oil_t = Gauge("car_oil_temp_celsius", "Temperatura do óleo (°C)", L)
oil_p = Gauge("car_oil_pressure_bar", "Pressão do óleo (bar)", L)
fuel = Gauge("car_fuel_level_percent", "Nível de combustível (%)", L)
batt = Gauge("car_battery_volts", "Tensão da bateria (V)", L)
gear = Gauge("car_gear", "Marcha engatada (0 = neutro)", L)
dtc = Gauge("car_dtc_active", "Código de falha ativo (1 = ativo)", L + ["codigo"])
dist = Counter("car_distance_km_total", "Distância percorrida (km)", L)
fuel_used = Counter("car_fuel_used_liters_total", "Combustível consumido (litros)", L)

TANK_L = 50.0
GEARS = [0, 25, 45, 70, 100, 140]   # velocidade máxima aproximada por marcha (km/h)
state = dict(coolant=25.0, oil=25.0, fuel=80.0, speed=0.0, rpm=800.0)

def alvo(t):
    """(acelerador %, velocidade alvo km/h) ao longo de um ciclo de 600 s."""
    c = t % 600
    if c < 40:   return 0, 0                       # parado, motor em marcha lenta
    if c < 120:  return 65, 60                     # arrancada
    if c < 300:  return 35, 90                     # cruzeiro
    if c < 360:  return 75, 120                    # ultrapassagem
    if c < 460:  return 0, 40                      # desaceleração
    if c < 540:  return 25, 70
    return 0, 0                                    # freada e parada

def passo(t, dt):
    s = state
    thr_alvo, v_alvo = alvo(t)
    thr = max(0, min(100, thr_alvo + random.gauss(0, 2))) if thr_alvo else 0
    s["speed"] += (v_alvo - s["speed"]) * min(1, dt * 0.08)
    v = max(0, s["speed"] + random.gauss(0, 0.4))
    g = 0 if v < 3 else next(i for i, vmax in enumerate(GEARS) if i > 0 and v <= vmax) if v <= GEARS[-1] else 5
    r_alvo = 800 if g == 0 else 900 + (v / GEARS[g]) * 3800 + thr * 8
    s["rpm"] += (r_alvo - s["rpm"]) * min(1, dt * 0.6)
    r = max(700, s["rpm"] + random.gauss(0, 25))
    ld = max(8, min(100, 10 + thr * 0.8 + (v / 140) * 15 + random.gauss(0, 1.5)))

    defeito = (t % 1200) > 1000                     # últimos 200 s de cada 1200 s
    alvo_c = 90 + ld * 0.12 + (28 if defeito else 0)
    s["coolant"] += (alvo_c - s["coolant"]) * dt * (0.01 if defeito else 0.02)
    s["oil"] += (95 + ld * 0.2 - s["oil"]) * dt * 0.01
    p_oleo = 1.0 + r / 1500 - max(0, (s["oil"] - 100)) * 0.03 + random.gauss(0, 0.04)
    if defeito: p_oleo -= 0.6

    litros_h = 1.1 + ld * 0.17 + r / 2500
    litros = litros_h * dt / 3600
    s["fuel"] = max(0, s["fuel"] - litros / TANK_L * 100)
    if s["fuel"] < 10: s["fuel"] = 80.0             # "abastece" para o simulador não parar

    rpm.labels(VEICULO).set(round(r))
    speed.labels(VEICULO).set(round(v, 1))
    throttle.labels(VEICULO).set(round(thr, 1))
    load.labels(VEICULO).set(round(ld, 1))
    coolant.labels(VEICULO).set(round(s["coolant"], 1))
    oil_t.labels(VEICULO).set(round(s["oil"], 1))
    oil_p.labels(VEICULO).set(round(max(0.2, p_oleo), 2))
    fuel.labels(VEICULO).set(round(s["fuel"], 1))
    batt.labels(VEICULO).set(round((14.1 if r > 1200 else 12.4) + random.gauss(0, 0.05), 2))
    gear.labels(VEICULO).set(g)
    dtc.labels(VEICULO, "P0217").set(1 if s["coolant"] > 112 else 0)   # superaquecimento
    dtc.labels(VEICULO, "P0524").set(1 if p_oleo < 0.9 and r > 1500 else 0)  # pressão do óleo baixa
    dist.labels(VEICULO).inc(v * dt / 3600)
    fuel_used.labels(VEICULO).inc(litros)

if __name__ == "__main__":
    start_http_server(PORT)
    print(f"Telemetria simulada em http://0.0.0.0:{PORT}/metrics (veículo {VEICULO})", flush=True)
    t0 = time.time(); ant = t0
    while True:
        agora = time.time()
        passo((agora - t0) * float(os.getenv("ACELERA", "1")), max(0.05, (agora - ant) * float(os.getenv("ACELERA", "1"))))
        ant = agora
        time.sleep(1)
