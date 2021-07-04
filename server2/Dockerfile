FROM node:14
RUN apt update && apt upgrade -y

WORKDIR /app
COPY package.json .
COPY  . .

RUN npm install
CMD ["node","index.js"]
EXPOSE 4000