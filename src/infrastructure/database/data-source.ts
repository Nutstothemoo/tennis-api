import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

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
  entities: ["dist/entities/**/*.js"],
  migrations: ["dist/migrations/**/*.js"],
  subscribers: ["dist/subscribers/**/*.js"],
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error('Failed to connect to the database:', error);

    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    } else {
      throw error; 
    }
  }
};
