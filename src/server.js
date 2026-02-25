import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongo.js';
import dns from 'dns';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';
import router from './routes/studentsRoutes.js';

dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`Time:${new Date().toLocaleString()}`);
  next();
});

app.use(router);

app.get('/notes', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Retrieved all notes' });
});

app.get('/notes/:noteId', (req, res) => {
  const id_param = req.params.noteId;
  res.status(200).json({ message: `Retrieved note with ID: ${id_param}` });
});

app.get('/test-error', (req, res) => {
  throw new Error('Something went erong');
});

app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
