FROM node:20
WORKDIR /client
COPY package.json ./
RUN npm install
#copy my code
COPY . .
#run the app
RUN npm run build
#Nginx image to serve our app
FROM nginx:alpine
COPY --from=0 / client/build/usr/share/nginx
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]