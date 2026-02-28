import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import dns from 'dns';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from './routes/notesRoutes.js';

dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(
  express.json({
    limit: '100kb',
    type: ['application/json', 'application/vnd.api+json'],
  }),
);
app.use(logger);
app.use((req, res, next) => {
  console.log(`Time:${new Date().toLocaleString()}`);
  next();
});
app.use('/notes', notesRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
