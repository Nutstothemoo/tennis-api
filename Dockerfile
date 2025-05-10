FROM node:20-alpine

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Compiler le code TypeScript
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD ["npm", "run", "start"]
