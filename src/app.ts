import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { connectDatabase } from './utils/database';
import playerRoutes from './routes/playerRoutes';

dotenv.config();

const app = express();
app.use(helmet()); // Ajoute des headers de sécurité
app.use(cors()); // Active le CORS pour les requêtes cross-origin
app.use(express.json()); // Parse les requêtes JSON


app.use('/api/players', playerRoutes);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const initializeApp = async () => {
  try {
    await connectDatabase(); 
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); 
  }
};

initializeApp();

export default app;
