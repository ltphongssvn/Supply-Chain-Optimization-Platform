# ~/code/ltphongssvn/Supply-Chain-Optimization-Platform/Dockerfile
FROM node:18-alpine
WORKDIR /app
ARG PORT=3000
ENV PORT=${PORT}
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
EXPOSE ${PORT}
CMD ["npm", "start"]
