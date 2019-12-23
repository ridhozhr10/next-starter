FROM node:12.14.0-alipne3.9

ENV PORT=80

ADD . /app

WORKDIR /app

RUN yarn && yarn build && yarn start

EXPOSE 80