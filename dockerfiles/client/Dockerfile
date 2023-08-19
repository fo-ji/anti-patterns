FROM node:18.17.1-slim

WORKDIR /app/client

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .
