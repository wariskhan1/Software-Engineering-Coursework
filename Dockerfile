FROM node:latest
RUN apt-get -y update

FROM base AS requirements

FROM mysql:latest
RUN pip3 install -r requirements.txt

FROM requirements AS test

COPY /usr/src/coursework /desktop/coursework

CMD [ "cmd", "project.js" ]
