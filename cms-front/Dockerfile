### STAGE 1: Build ###
FROM node:12.7-alpine as build
# Install OpenJDK-8
RUN apk update && apk fetch openjdk8 && apk add openjdk8
# copy package and install dependances
COPY package.json /cms-business/package.json
RUN cd /cms-business && npm i
#copie code source
COPY . /cms-business

#build app
WORKDIR /cms-business
ARG STAGE_ARG=production
ENV STAGE=$STAGE_ARG

RUN $(npm bin)/ng build -c $STAGE

### STAGE 2: run ###
FROM nginx:1.17.1-alpine
COPY --from=build /cms-business/dist/fuse /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ENV PORT 4200
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'