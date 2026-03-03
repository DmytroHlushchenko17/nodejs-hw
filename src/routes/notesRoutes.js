import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import { createNotesSchema } from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/', getAllNotes);

notesRouter.get('/:noteId', getNoteById);

notesRouter.post('/', celebrate(createNotesSchema), createNote);

notesRouter.delete('/:noteId', deleteNote);

notesRouter.patch('/:noteId', updateNote);

export default notesRouter;
