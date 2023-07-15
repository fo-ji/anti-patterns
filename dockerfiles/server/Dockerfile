FROM node:18.16.1-slim

WORKDIR /app/server

RUN apt-get update && \
    apt-get -y install procps

RUN yarn global add @nestjs/cli

RUN yarn install

COPY . .