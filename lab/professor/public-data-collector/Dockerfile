FROM python:3.11-slim
RUN pip install --no-cache-dir prometheus-client
COPY collector.py /app/collector.py
WORKDIR /app
CMD ["python", "collector.py"]
