import dotenv from 'dotenv';
import app from './app';
import { connectDatabase } from './infrastructure/database/data-source';

dotenv.config();

const PORT = process.env.APP_PORT || 3000;

connectDatabase()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to initialize application:', err);
    process.exit(1);
  });
