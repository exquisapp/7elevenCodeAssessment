# Stage 1: Build
FROM node:latest


WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start", "--host", "0.0.0.0" ] 


