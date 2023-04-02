FROM node:12-alpine
WORKDIR /dist
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
CMD ["npm", "start"]