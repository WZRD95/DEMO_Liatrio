# DEMO Docker file 

From node:10.8

RUN mkdir -p /home/node/app_DOCKER
RUN chown -R node:node /home/node/app_DOCKER

WORKDIR /home/node/app_DOCKER

COPY test_3.js .
COPY node_modules .

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 80

CMD ["node","test_3.js"]