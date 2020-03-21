# build step: ng build
FROM node AS build-stage

COPY package.json package-lock.json /app/
WORKDIR /app

# Note "npx npm-force-resolutions" is a workaround
# https://stackoverflow.com/a/60781705/783510
RUN npx npm-force-resolutions && npm install
COPY *.js *.json browserslist src /app/
COPY src /app/src/
RUN npm run ng build

# host generated static files with Nginx
FROM nginx

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/www/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
