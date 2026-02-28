import createHttpError from 'http-errors';
import { Note } from '../models/note.js';

export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

export const getNotesById = async (req, res) => {
  const { noteId: _id } = req.params;
  const note = await Note.findOne({ _id });
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.status(201).json(note);
};

export const deleteNote = async (req, res) => {
  const { noteId: _id } = req.params;
  const note = await Note.findByIdAndDelete({ _id });
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};

export const updateNote = async (req, res) => {
  const { noteId: _id } = req.params;
  const note = await Note.findByIdAndUpdate({ _id }, req.body, {
    new: true,
  });
  if (!note) {
    throw createHttpError(404, 'Note not found');
  }
  res.status(200).json(note);
};
