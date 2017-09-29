FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN bower install
EXPOSE 3000
CMD ["npm", "start"]