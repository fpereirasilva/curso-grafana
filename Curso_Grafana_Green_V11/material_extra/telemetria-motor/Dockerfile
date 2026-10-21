FROM python:3.11-slim
WORKDIR /app
RUN pip install --no-cache-dir prometheus-client==0.20.0
COPY simulador.py .
EXPOSE 8090
CMD ["python", "simulador.py"]
