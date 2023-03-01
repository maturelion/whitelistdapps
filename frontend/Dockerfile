FROM node:15.0-alpine AS builder

WORKDIR /usr/src/frontend
COPY package.json yarn.lock ./
RUN yarn install --ignore-engines
RUN yarn

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

EXPOSE 3000

CMD [ "yarn", "start" ]