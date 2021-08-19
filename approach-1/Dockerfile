FROM node:slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# install dependencies including appdynamics agent
RUN npm install

# copy the app file to the working dir
COPY server.js .

# expose port 8080
EXPOSE 8080

CMD [ "node", "server.js" ]
