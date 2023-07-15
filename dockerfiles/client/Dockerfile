FROM node:18.16.1-slim

WORKDIR /app/client

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .
