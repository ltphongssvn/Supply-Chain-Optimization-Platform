# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/backend/Dockerfile

FROM node:18-alpine

WORKDIR /app

ARG PORT=3000
ENV PORT=${PORT}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]
