# Use a imagem base do Node.js
FROM node:alpine

# Instale o Next.js globalmente
RUN npm install -g next

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./
COPY .env ./

# Instala as dependências
# RUN npm install --production
RUN npm install
RUN npm install -g cross-env
# Copia todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Expor a porta 3000 para acesso externo
EXPOSE 3000

# Inicializa o aplicativo Next.js
CMD ["npm", "run", "dev"]
