# Tennis API

## Description

Tennis API is a RESTful backend application designed to manage and provide data about tennis players and their statistics. The application is built with **Node.js**, **TypeScript**, **Express**, and **PostgreSQL**, following **SOLID principles** and backend development best practices.

---

## Features

1. **Player Management**:
   - Retrieve a list of players sorted by rank (from best to worst).
   - Retrieve detailed information about a specific player by their ID.

2. **Global Statistics**:
   - Calculate and return:
     - The country with the best win ratio.
     - The average BMI of all players.
     - The median height of players.

3. **Database**:
   - PostgreSQL with entities managed via **TypeORM**.

4. **Testing**:
   - Comprehensive unit and integration tests using **Jest** and **Supertest**.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Architecture and Best Practices](#architecture-and-best-practices)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Technologies Used

- **Node.js** (v20 LTS)
- **TypeScript**
- **Express.js**
- **PostgreSQL**
- **TypeORM**
- **Jest** (for unit testing)
- **Supertest** (for integration testing)
- **Docker** (for container orchestration)

---

## Architecture and Best Practices

### 1. **SOLID Principles**
- **Single Responsibility Principle (SRP)**:
  - Each class or module has a single responsibility. For example, `PlayerService` handles business logic related to players, while `StatisticsService` calculates statistics.
  
- **Open/Closed Principle (OCP)**:
  - The code is designed to be extensible without modifying existing classes. For example, services can be extended to add new features.

### 2. **Separation of Concerns**
- Controllers (`playerController`) handle HTTP requests and delegate business logic to services (`PlayerService`, `StatisticsService`).
- Services encapsulate business logic and interact with TypeORM repositories.

### 3. **Testing**
- Unit tests validate the business logic of services.
- Integration tests validate RESTful endpoints.
- Mocks are used to isolate dependencies (e.g., TypeORM repositories).

### 4. **RESTful API**
- Endpoints follow RESTful conventions with clear and meaningful URIs.

### 5. **TypeScript**
- TypeScript ensures type safety and reduces runtime errors.
- Interfaces and types define clear contracts between modules.

---

## Installation

### Prerequisites

- **Node.js** (v20 LTS)
- **Docker** and **Docker Compose**
- **PostgreSQL** (if not using Docker)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/tennis-api.git
   cd tennis-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file at the root of the project and configure the following variables:
   ```plaintext
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=tennis
   ```

4. **Start the application with Docker**:
   ```bash
   docker-compose up --build
   ```

5. **Access the API**:
   The API will be available at: `http://localhost:3000`.

---

## API Endpoints

### Base URL: `/api/v1`

#### 1. **Get all players**
   - **Endpoint**: `GET /players`
   - **Description**: Returns a list of players sorted by rank.
   - **Response**:
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

#### 2. **Get a player by ID**
   - **Endpoint**: `GET /players/:id`
   - **Description**: Returns detailed information about a specific player.
   - **Response**:
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

#### 3. **Get player statistics**
   - **Endpoint**: `GET /players/statistics`
   - **Description**: Returns global statistics about players.
   - **Response**:
     ```json
     {
       "bestCountry": "SRB",
       "averageIMC": 23.5,
       "medianHeight": 180
     }
     ```

---

## Testing

### Run Tests

1. **Run all tests**:
   ```bash
   npm run test
   ```

2. **Run tests in watch mode**:
   ```bash
   npm run test:watch
   ```

3. **Generate a coverage report**:
   ```bash
   npm run test:coverage
   ```

### Expected Results

- Unit tests validate the business logic of services.
- Integration tests validate RESTful endpoints.
- A coverage report is generated in the `coverage` folder.

---

## Contributing

1. Fork the repository.
2. Create a branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and add tests.
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Contact

For questions or suggestions, contact:
- **Name**: Maxime Dupin
- **Email**: maximedupin1992@gmail.com