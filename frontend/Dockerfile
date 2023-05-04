FROM node:18.15.0-alpine

WORKDIR /app

COPY . .
RUN npm ci

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "dev"]
