import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Player } from '../entities/Player';
import { Country } from '../entities/Country';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DB || 'tennis',
  synchronize: false, // Désactiver en production
  logging: false,
  entities: [Player, Country],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: [],
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to connect to the database:', error);

    // Ne pas appeler process.exit en mode test
    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    } else {
      throw error; // Lancer une erreur pour que les tests puissent la capturer
    }
  }
};
