FROM node:15.10.0-alpine3.10 as builder
WORKDIR /app

RUN apk update \
  && apk add --update alpine-sdk python

ENV PATH /app/node_modules/.bin:$PATH
COPY . .

#RUN chmod +x /app/docker/entrypoint.sh
# ls node_modules is there to throw an error if install fails and node_modules is not created
RUN yarn install && ls node_modules
RUN yarn build --configuration=production

COPY . /app

FROM nginx:mainline-alpine

RUN apk add --no-cache jq

COPY --from=builder /app/docker/entrypoint.sh /entrypoint.sh
COPY --from=builder /app/dist/* /usr/share/nginx/html/

RUN ["chmod", "+x", "/entrypoint.sh"]
ENV CONFIG_JSON_PATH=/usr/share/nginx/html/assets/config/config.json

ENTRYPOINT ["/entrypoint.sh"]

