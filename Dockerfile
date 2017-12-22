FROM nginx:1.12.1-alpine
COPY container /
COPY ./build /data/www
