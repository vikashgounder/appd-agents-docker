FROM node:slim

# agent filename
ARG filename='appdynamics-nodejs-standalone-linux-x64-v16-21.8.0.7917.0.tgz'

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# copy appdynamics agent and install appdynamics agent
COPY appd-agent/${filename} /usr/src/app/
RUN npm install /usr/src/app/${filename}
RUN rm -rf ${filename}

# RUN npm install appdynamics
COPY server.js .
EXPOSE 8080

CMD [ "node", "server.js" ]
