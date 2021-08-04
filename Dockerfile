FROM node:12-alpine3.14 as builder

VOLUME ["/app"]

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk update \
  && apk add --update alpine-sdk python2 \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && apk add chromium \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd
