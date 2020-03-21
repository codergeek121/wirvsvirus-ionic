# build step: ng build
FROM node AS build-stage

COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci
COPY *.js *.json browserslist src /app/
COPY src /app/src/
RUN npm run ng build

# host generated static with Nginx
FROM nginx

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/www/* /usr/share/nginx/html/
EXPOSE 80
