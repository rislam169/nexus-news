FROM node:18.12.1-slim

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]