import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongo.js';
import { Student } from './models/student.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat:
          '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

app.use((req, res, next) => {
  console.log(`Time:${new Date().toLocaleString()}`);
  next();
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

app.get('/students/:studentsId', async (req, res) => {
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

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  const isProd = process.env.MONGO_URL === 'production';

  res.status(500).json({
    message: isProd ? 'Internal Server Error' : err.message,
  });
});

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
