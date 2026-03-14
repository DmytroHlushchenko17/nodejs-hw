import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerUserSchema } from '../validations/authValidation';
import { registerUser } from '../controllers/authController';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);

export default router;
