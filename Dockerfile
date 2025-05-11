FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache postgresql-client

COPY package*.json tsconfig.build.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["sh", "-c", "npm run migration:run && npm run start"]
