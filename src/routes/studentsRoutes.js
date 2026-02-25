import { Router } from 'express';
import {
  getStudents,
  getStudentsById,
} from '../controllers/studentsController.js';

const router = Router();
router.get('/students', getStudents);

router.get('/students/:studentId', getStudentsById);
export default router;
