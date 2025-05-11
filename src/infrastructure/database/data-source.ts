import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST!,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [
    path.join(__dirname, "../../entities/**/*{.js,.ts}")
  ],
  migrations: [
    path.join(__dirname, "../../migrations/**/*{.js,.ts}")
  ],
  subscribers: [
    path.join(__dirname, "../../subscribers/**/*{.js,.ts}")
  ],
  migrationsRun: true
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");
  } catch (error) {
    console.error('Failed to connect to the database:', error);

    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    } else {
      throw error; 
    }
  }
};
