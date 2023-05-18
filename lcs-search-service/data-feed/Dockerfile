FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV GRAPHQL_ENDPOINT=$GRAPHQL_ENDPOINT
CMD [ "npm", "start" ]