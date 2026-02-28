import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNotes,
  getNotesById,
  updateNote,
} from '../controllers/notesController.js';

const notesRoutes = Router();

notesRoutes.get('/', getNotes);

notesRoutes.get('/:noteId', getNotesById);

notesRoutes.post('/', createNote);

notesRoutes.delete('/:noteId', deleteNote);

notesRoutes.patch('/:noteId', updateNote);

export default notesRoutes;
