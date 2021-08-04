#!/bin/bash
docker run -it --rm -w /app -v ${PWD}/:/app node:12-alpine3.14 yarn install ; yarn build
