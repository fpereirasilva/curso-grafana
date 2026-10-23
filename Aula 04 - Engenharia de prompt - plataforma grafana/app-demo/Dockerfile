FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

RUN mkdir -p /var/log/app && chmod 777 /var/log/app

EXPOSE 8000

CMD ["python", "app.py"]
