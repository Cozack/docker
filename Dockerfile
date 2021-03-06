FROM node:14
MAINTAINER Oleg Dudych

RUN mkdir /app
WORKDIR /app

COPY ./backend /app

RUN npm install

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
