# This stage installs our modules
FROM mhart/alpine-node:14

ENV BASE_HOST=$QOVERY_ROUTER_MAIN_XUSER_API_APP_URL
ENV PORT=3000

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
