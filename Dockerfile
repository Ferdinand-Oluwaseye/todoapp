
#Image to use 

FROM ubuntu:latest

USER root

WORKDIR /opt/myproject

COPY . .


RUN apt-get update

RUN apt-get install sudo -y

RUN sudo apt-get install curl -y

RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

RUN sudo apt-get install -y nodejs

RUN npm install -y

EXPOSE 8080


ENTRYPOINT ["/usr/bin/node", "index.js"]

