FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

RUN adduser -D appuser
USER appuser

CMD ["npm", "start"]
