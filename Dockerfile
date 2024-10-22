# DEMO Docker file 

FROM node:10.8

RUN mkdir -p /home/node/app_DOCKER
RUN chown -R node:node /home/node/app_DOCKER

WORKDIR /home/node/app_DOCKER

COPY index.js .
COPY node_modules .
COPY package.json .
COPY package-lock.json .

USER node

COPY . .

EXPOSE 80

CMD ["node","index.js"]


