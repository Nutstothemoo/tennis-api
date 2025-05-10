# Tennis API

## Description

Tennis API est une application backend RESTful conçue pour gérer et fournir des données sur les joueurs de tennis et leurs statistiques. L'application est construite avec **Node.js**, **TypeScript**, **Express**, et **PostgreSQL**, en suivant les principes **SOLID** et les bonnes pratiques de développement backend.

---

## Fonctionnalités

1. **Gestion des joueurs** :
   - Récupérer une liste de joueurs triée par rang (du meilleur au moins bon).
   - Récupérer les informations détaillées d’un joueur spécifique grâce à son ID.

2. **Statistiques globales** :
   - Calculer et retourner :
     - Le pays avec le meilleur ratio de victoires.
     - L'IMC moyen de tous les joueurs.
     - La médiane de la taille des joueurs.

3. **Base de données** :
   - PostgreSQL avec des entités gérées via **TypeORM**.

4. **Tests** :
   - Tests unitaires et d'intégration complets avec **Jest** et **Supertest**.

---

## Table des matières

- [Technologies utilisées](#technologies-utilisées)
- [Architecture et bonnes pratiques](#architecture-et-bonnes-pratiques)
- [Installation](#installation)
- [Endpoints de l'API](#endpoints-de-lapi)
- [Tests](#tests)
- [Contributions](#contributions)
- [Licence](#licence)

---

## Technologies utilisées

- **Node.js** (v20 LTS)
- **TypeScript**
- **Express.js**
- **PostgreSQL**
- **TypeORM**
- **Jest** (pour les tests unitaires)
- **Supertest** (pour les tests d'intégration)
- **Docker** (pour l'orchestration des conteneurs)

---

## Architecture et bonnes pratiques

### 1. **Respect des principes SOLID**
- **Responsabilité unique (SRP)** :
  - Chaque classe ou module a une responsabilité unique. Par exemple, `PlayerService` gère la logique métier liée aux joueurs, tandis que `StatisticsService` calcule les statistiques.
  
- **Ouvert/Fermé (OCP)** :
  - Le code est conçu pour être extensible sans modifier les classes existantes. Par exemple, les services peuvent être étendus pour ajouter de nouvelles fonctionnalités.

### 2. **Séparation des préoccupations**
- Les contrôleurs (`playerController`) gèrent les requêtes HTTP et délèguent la logique métier aux services (`PlayerService`, `StatisticsService`).
- Les services encapsulent la logique métier et interagissent avec les dépôts TypeORM.

### 3. **Tests**
- Les tests unitaires valident la logique métier des services.
- Les tests d'intégration valident les endpoints RESTful.
- Les mocks sont utilisés pour isoler les dépendances (par exemple, les dépôts TypeORM).

### 4. **RESTful API**
- Les endpoints suivent les conventions RESTful avec des URI claires et significatives.

### 5. **TypeScript**
- Utilisation de TypeScript pour garantir la sécurité des types et réduire les erreurs à l'exécution.
- Les interfaces et les types sont utilisés pour définir des contrats clairs entre les modules.

---

## Installation

### Prérequis

- **Node.js** (v20 LTS)
- **Docker** et **Docker Compose**
- **PostgreSQL** (si vous n'utilisez pas Docker)

### Étapes

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/your-repo/tennis-api.git
   cd tennis-api
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :
   Créez un fichier `.env` à la racine du projet et configurez les variables suivantes :
   ```plaintext
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=tennis
   ```

4. **Démarrer l'application avec Docker** :
   ```bash
   docker-compose up --build
   ```

5. **Accéder à l'API** :
   L'API sera disponible à l'adresse suivante : `http://localhost:3000`.

---

## Endpoints de l'API

### Base URL : `/api/v1`

#### 1. **Récupérer tous les joueurs**
   - **Endpoint** : `GET /players`
   - **Description** : Retourne une liste de joueurs triée par rang.
   - **Réponse** :
     ```json
     [
       {
         "id": 1,
         "firstname": "Novak",
         "lastname": "Djokovic",
         "rank": 1,
         "country": {
           "code": "SRB",
           "picture": "https://example.com/serbia.png"
         }
       }
     ]
     ```

#### 2. **Récupérer un joueur par ID**
   - **Endpoint** : `GET /players/:id`
   - **Description** : Retourne les informations d’un joueur spécifique.
   - **Réponse** :
     ```json
     {
       "id": 1,
       "firstname": "Novak",
       "lastname": "Djokovic",
       "rank": 1,
       "country": {
         "code": "SRB",
         "picture": "https://example.com/serbia.png"
       }
     }
     ```

#### 3. **Récupérer les statistiques des joueurs**
   - **Endpoint** : `GET /players/statistics`
   - **Description** : Retourne les statistiques globales des joueurs.
   - **Réponse** :
     ```json
     {
       "bestCountry": "SRB",
       "averageIMC": 23.5,
       "medianHeight": 180
     }
     ```

---

## Tests

### Lancer les tests

1. **Exécuter tous les tests** :
   ```bash
   npm run test
   ```

2. **Exécuter les tests en mode surveillance** :
   ```bash
   npm run test:watch
   ```

3. **Générer un rapport de couverture** :
   ```bash
   npm run test:coverage
   ```

### Résultats attendus

- Les tests unitaires valident la logique métier des services.
- Les tests d'intégration valident les endpoints RESTful.
- Un rapport de couverture est généré dans le dossier `coverage`.

---

## Contributions

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature-name
   ```
3. Faites vos modifications et ajoutez des tests.
4. Poussez vos modifications :
   ```bash
   git push origin feature-name
   ```
5. Ouvrez une pull request.

---

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

---

## Contact

Pour toute question ou suggestion, contactez :
- **Nom** : Maxime Dupin
- **Email** : maxime.dupin@example.com