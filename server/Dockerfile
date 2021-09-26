FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80:6969

CMD ["node", "./bin/server.js"]