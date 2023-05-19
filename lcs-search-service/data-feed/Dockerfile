FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV GRAPHQL_ENDPOINT=$GRAPHQL_ENDPOINT
ENV SOURCE_API_URL=$SOURCE_API_URL

CMD [ "npm", "start" ]