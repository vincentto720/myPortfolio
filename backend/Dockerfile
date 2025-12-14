FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apk add --no-cache python3 py3-pip
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "python3 server.py & npm run dev"]