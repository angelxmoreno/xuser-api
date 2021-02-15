FROM node:14-alpine
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
EXPOSE 8080

CMD [ "node", "app.js" ]