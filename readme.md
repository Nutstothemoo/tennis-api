# 🎾 Tennis API

## 📖 Description
Tennis API is a RESTful backend service to manage and expose data about tennis players and their statistics.  
Built with **Node.js**, **TypeScript**, **Express** and **PostgreSQL**, it adheres to **SOLID** principles and follows industry best practices for maintainability and scalability.

---

## 🚀 Table of Contents
- [Technologies Used](#technologies-used)  
- [Architecture & Best Practices](#architecture--best-practices)  
- [Quick Fix to Launch the Project](#quick-fix-to-launch-the-project)  
- [API Endpoints](#api-endpoints)  
- [Testing](#testing)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## 🛠️ Technologies Used
- **Node.js** (v20 LTS)  
- **TypeScript**  
- **Express.js**  
- **PostgreSQL**  
- **TypeORM**  
- **Jest** (unit testing)  
- **Supertest** (integration testing)  
- **Docker & Docker Compose**  

---

## 🏗️ Architecture & Best Practices
1. **Single Responsibility (SRP)**  
   - Controllers handle HTTP concerns.  
   - Services contain business logic.  
   - Repositories deal with data access.

2. **Open/Closed (OCP)**  
   - Extend functionality via interfaces and dependency injection—avoid modifying existing code.

3. **Dependency Injection**  
   - Decouple modules by injecting repositories into services.

4. **Error Handling & Logging**  
   - Centralized error middleware.  

5. **Versioning**  
   - All routes are prefixed with `/api/v1` to enable safe, backwards-compatible changes.

---

## ⚙️ Quick Fix to Launch the Project in local

Prerequisites: Docker Engine & Docker Compose v2.

1. Install Docker  
   - Windows/macOS: download and install **Docker Desktop** from https://www.docker.com/get-started  
   - Linux: follow the official guide at https://docs.docker.com/engine/install/

2. Verify Docker Compose installation  
   ```bash
   docker compose version
   ```

3. Launch the project  
   ```bash
   docker compose up --build
   ```

---

## 📡 API Endpoints

### Base URL 🌐 `/api/v1`

#### 🎾 1. Get All Players
- **Method**: GET  
- **Path**: `/players`  
- **Description**: Fetch all players sorted by rank (best → worst).  
- **Response**: `200 OK`
```json
[
  {
    "id": 1,
    "firstname": "Novak",
    "lastname": "Djokovic",
    "rank": 1,
    "country": {
      "code": "SRB",
      "picture": "https://tenisu.latelier.co/resources/Serbia.png"
    }
  },
  …
]
```

---

#### 🔍 2. Get Player By ID
- **Method**: GET  
- **Path**: `/players/:id`  
- **Description**: Retrieve detailed info for a specific player.  
- **Path Params**: `id` (integer, required)  
- **Responses**:  
  - `200 OK` – Player found  
  - `404 Not Found` – No player with that ID  
```json
// 200 OK
{
  "id": 1,
  "firstname": "Novak",
  "lastname": "Djokovic",
  "shortname": "N.DJO",
  "sex": "M",
  "picture": "https://tenisu.latelier.co/resources/Djokovic.png",
  "rank": 2,
  "points": 2542,
  "weight": 80000,
  "height": 188,
  "age": 31,
  "last": [1,1,1,1,1],
  "country": {
    "id": 1,
    "code": "SRB",
    "picture": "https://tenisu.latelier.co/resources/Serbia.png"
  }
}

// 404 Not Found
{ "error": "Player not found" }
```

---

#### 📊 3. Get Global Statistics
- **Method**: GET  
- **Path**: `/players/statistics`  
- **Description**: Compute and return global metrics across all players:  
  - `bestCountry`: ISO code of the country with the highest win ratio 🏆  
  - `averageBMI`: average Body Mass Index across players ⚖️  
  - `medianHeight`: median height in cm 📏  
- **Response**: `200 OK`
```json
{
  "bestCountry": "SRB",
  "averageBMI": 23.5,
  "medianHeight": 180
}
```

💡 **Pro Tip**: always prefix your calls with `/api/v1` to maintain version safety 😉

---

## 🧪 Testing
- **Run all tests**  
  ```bash
  npm run test
  ```
- **Watch mode**  
  ```bash
  npm run test:watch
  ```
- **Coverage report**  
  ```bash
  npm run test:coverage
  ```
- **Tools**: Jest (unit), Supertest (integration), mocks for repositories

---

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Develop & add tests  
4. Push and open a PR  
5. CI will run lint, tests & coverage

---

## 📜 License
This project is licensed under the **MIT License**. See `LICENSE` for details.

---

## 📬 Contact
- **Author**: Maxime Dupin  
- **Email**: maximedupin1992@gmail.com  
- **GitHub**: [maximedupin](https://github.com/maximedupin)  
- **Production**: For a production-ready build or custom deployment, contact me at maximedupin1992@gmail.com