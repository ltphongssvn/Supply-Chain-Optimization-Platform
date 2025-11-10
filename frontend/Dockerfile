# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/frontend/Dockerfile

FROM node:18-alpine

WORKDIR /app

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
