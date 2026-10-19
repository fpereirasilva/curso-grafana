FROM python:3.11-slim
RUN pip install --no-cache-dir prometheus-client
COPY exporter.py /app/exporter.py
WORKDIR /app
CMD ["python", "exporter.py"]
