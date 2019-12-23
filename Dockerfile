FROM node:12.14.0-alpine3.9 AS builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build && yarn --production

FROM node:12.14.0-alpine3.9
ENV PORT=80
WORKDIR /app
COPY --from=builder /app .
EXPOSE 80
CMD ["yarn", "start"]
