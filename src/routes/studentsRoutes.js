import { Router } from 'express';
import {
  createStudent,
  deleteStudent,
  getStudents,
  getStudentsById,
  updateStudent,
} from '../controllers/studentsController.js';

const studentsRoutes = Router();

studentsRoutes.get('/', getStudents);

studentsRoutes.get('/:studentId', getStudentsById);

studentsRoutes.post('/', createStudent);

studentsRoutes.delete('/:studentId', deleteStudent);

studentsRoutes.patch('/:studentId', updateStudent);

export default studentsRoutes;
