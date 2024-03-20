// server.js

import express from 'express';
import cors from 'cors';
import { fetchCollection } from './src/mongodb/mongoDbClient.js';
import orderRouter from './src/router/orderRouter.js';
import authRouter from './src/router/authRouter.js';

const app = express();
const port = process.env.PORT || 3000;

/** Config */
app.use(cors());
app.use(express.json());

/** Databas */
// Gör databasen tillgänglig för alla router-filer
app.use((req, res, next) => {
  req.db = fetchCollection(); // Lägg till databasen i request-objektet
  next();
});

/** Routes */
// Använd orderRouter för att hantera order-relaterade endpoints
app.use('/', orderRouter);
// Använd authRouter för att hantera auth-relaterade endpoints
app.use('/', authRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
