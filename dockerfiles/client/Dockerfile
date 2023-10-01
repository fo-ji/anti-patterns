FROM node:18.18.0-slim

WORKDIR /app/client

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .
