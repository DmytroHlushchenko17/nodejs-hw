import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNotesSchema,
  noteIdParamSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/', getAllNotes);

notesRouter.get('/:noteId', celebrate(noteIdParamSchema), getNoteById);

notesRouter.post('/', celebrate(createNotesSchema), createNote);

notesRouter.delete('/:noteId', celebrate(noteIdParamSchema), deleteNote);

notesRouter.patch('/:noteId', celebrate(updateNoteSchema), updateNote);

export default notesRouter;
