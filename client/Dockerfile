FROM node:alpine

WORKDIR /app

COPY ./client/package.json ./client/package-lock.json* /app/

RUN npm install

COPY ./client/ /app/

RUN npm run build

CMD ["npm", "start"]