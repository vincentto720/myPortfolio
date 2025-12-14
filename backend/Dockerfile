FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 3000
CMD ["sh", "-c", "python3 server.py & npm run dev"]