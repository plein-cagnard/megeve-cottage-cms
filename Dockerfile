FROM node:18-alpine3.16

WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN npm run build; exit 0

CMD ["npm", "run", "start"]

EXPOSE 1338
