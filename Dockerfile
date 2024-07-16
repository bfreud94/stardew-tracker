FROM node:14
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

ENV NODE_ENV production

CMD ["serve", "-s", "build", "-l", "3000"]