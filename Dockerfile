FROM ubuntu
LABEL maintainer ""

ADD https://github.com/wariskhan1/Software-Engineering-Coursework.git

COPY ./code/ /usr/local/htdocs