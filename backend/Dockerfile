FROM node:14.17.4

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 5001

CMD ["npm","start"]
