FROM node:24-alpine as base

WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./

FROM base as production

ENV NODE_PATH=./build
RUN npm run build
