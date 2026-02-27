import { Router } from 'express';
import {
  createStudent,
  deleteStudent,
  getStudents,
  getStudentsById,
} from '../controllers/studentsController.js';

const studentsRoutes = Router();

studentsRoutes.get('/', getStudents);

studentsRoutes.get('/:studentId', getStudentsById);

studentsRoutes.post('/', createStudent);

studentsRoutes.delete('/:studentId', deleteStudent);

export default studentsRoutes;
