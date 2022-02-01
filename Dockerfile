FROM node:latest
LABEL maintainer " "

WORKDIR /app
COPY /app/coursework.json
RUN npm install
COPY /app

CMD [ "npm", "start" ]
