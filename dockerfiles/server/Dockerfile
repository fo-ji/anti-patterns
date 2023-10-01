FROM node:18.18.0-slim

WORKDIR /app/server

RUN apt-get update && \
    apt-get -y install procps openssl

RUN yarn global add @nestjs/cli

RUN yarn install

COPY . .