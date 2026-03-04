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
  createTagSchema,
  noteIdParamSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/', getAllNotes);

notesRouter.get('/:noteId', celebrate(noteIdParamSchema), getNoteById);

notesRouter.get('/:tag', celebrate(createTagSchema), getAllNotes);

notesRouter.post('/', celebrate(createNotesSchema), createNote);

notesRouter.delete('/:noteId', celebrate(noteIdParamSchema), deleteNote);

notesRouter.patch('/:noteId', celebrate(updateNoteSchema), updateNote);

export default notesRouter;
