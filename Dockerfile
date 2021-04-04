# This stage installs our modules
FROM mhart/alpine-node:14

ARG QOVERY_ROUTER_MAIN_XUSER_API_APP_URL
ENV BASE_HOST=$QOVERY_ROUTER_MAIN_XUSER_API_APP_URL
ENV PORT=80

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]
