FROM node:12-alpine
WORKDIR /tattoo-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
CMD ["npm", "start"]