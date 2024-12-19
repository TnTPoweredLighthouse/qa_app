FROM node:22
WORKDIR /app/server/.

COPY ./ .
RUN npm install

ENV SERVICE_PORT=3000
ENV USE_HTTPS=false
ENV DB_HOST=''
ENV DB_PORT=''
ENV DB_USER=''
ENV DB_PASS=''
ENV DB_NAME=''

EXPOSE 3000

CMD ["node", "./bin/www.js"]