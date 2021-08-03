FROM node:12-alpine3.14 as builder
WORKDIR /app

RUN apk update \
  && apk add --update alpine-sdk python2

ENV PATH /app/node_modules/.bin:$PATH
COPY . .

RUN yarn install && ls node_modules
RUN yarn build --configuration=production

COPY . /app

FROM nginx:mainline-alpine

RUN apk add --no-cache jq

COPY --from=builder /app/dist/* /usr/share/nginx/html/

ENV CONFIG_JSON_PATH=/usr/share/nginx/html/assets/config/config.json
