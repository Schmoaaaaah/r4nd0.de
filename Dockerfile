# Dockerfile
FROM node:lts

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3002

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3002

CMD [ "npm", "start" ]
