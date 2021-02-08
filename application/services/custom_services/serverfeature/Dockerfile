FROM node:14.11.0-alpine
COPY . /serverfeature
WORKDIR /serverfeature
RUN npm install
RUN npm i -g ts-node
CMD npm run prod