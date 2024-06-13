FROM node:latest

WORKDIR /pokemonservice

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .

CMD ["yarn", "start"]


EXPOSE 3000
