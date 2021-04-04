# This stage installs our modules
FROM mhart/alpine-node:14

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
