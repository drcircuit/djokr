FROM node:boron
RUN /bin/su nonroot
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN bower install
EXPOSE 3000
CMD ["npm", "start"]