import express from 'express';
import cors from 'cors';
import apiRoutes from './api/router';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  app.use(cors());
}

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('App listening on port 5000');
