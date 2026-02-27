import { Router } from 'express';
import {
  createStudent,
  getStudents,
  getStudentsById,
} from '../controllers/studentsController.js';

const studentsRoutes = Router();

studentsRoutes.get('/', getStudents);

studentsRoutes.get('/:studentId', getStudentsById);

studentsRoutes.post('/', createStudent);

export default studentsRoutes;
