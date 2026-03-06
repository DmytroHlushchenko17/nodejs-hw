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
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/', celebrate(getAllNotesSchema), getAllNotes);

notesRouter.get('/:noteId', celebrate(noteIdSchema), getNoteById);

notesRouter.post('/', celebrate(createNotesSchema), createNote);

notesRouter.delete('/:noteId', celebrate(noteIdSchema), deleteNote);

notesRouter.patch('/:noteId', celebrate(updateNoteSchema), updateNote);

export default notesRouter;
