FROM node:20-alpine as build-stage

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g ember-cli


COPY . .

EXPOSE 4200

RUN npm run build

CMD ["ember", "serve"]
