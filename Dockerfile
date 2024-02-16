FROM node:latest

WORKDIR /home/app
COPY . /home/app/

RUN npm install --production
RUN npm run build

CMD [ "npm", "dev" ]




