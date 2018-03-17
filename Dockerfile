FROM node:carbon
RUN apt-get update -qq && apt-get install -y build-essential
RUN mkdir /usr/app
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
COPY . /usr/app
RUN npm i --silent
EXPOSE 4000
CMD ["npm", "start"]
