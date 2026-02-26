import { Router } from 'express';
import {
  getStudents,
  getStudentsById,
} from '../controllers/studentsController.js';

const studentsRoutes = Router();

studentsRoutes.get('/', getStudents);

studentsRoutes.get('/:studentId', getStudentsById);
export default studentsRoutes;
