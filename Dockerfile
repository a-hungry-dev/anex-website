FROM nginx:1.15.2-alpine
COPY ./www /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]