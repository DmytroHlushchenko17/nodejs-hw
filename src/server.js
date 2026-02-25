import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongo.js';
import { Student } from './models/student.js';
import dns from 'dns';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { logger } from './middleware/logger.js';

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

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

app.get('/students/:studentId', async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findById(studentId);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.status(200).json(student);
});
// app.get('/test-error', (req, res) => {
//   throw new Error('Something went erong');
// });

// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'Ok!' });
// });

// app.get('/user', (req, res) => {
//   res.status(200).json([{ id: 1, name: 'Alice' }]);
// });

// app.get('/users', (req, res) => {
//   console.log(req.body);
//   res.status(201).json({ message: 'User created' });
// });

// app.get('/user/:userId', (req, res) => {
//   const { userId } = Number(req.params.userId);
//   res.status(200).json({ id: userId, name: 'Jacob' });
// });

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
