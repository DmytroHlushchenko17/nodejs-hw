import createHttpError from 'http-errors';
import { Student } from '../models/student.js';

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};

export const getStudentsById = async (req, res) => {
  const { studentId: _id } = req.params;
  const student = await Student.findOne({ _id });
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.status(200).json(student);
};

export const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

export const deleteStudent = async (req, res) => {
  const { studentId: _id } = req.params;
  const student = await Student.findByIdAndDelete({ _id });
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.status(200).json(student);
};

export const updateStudent = async (req, res) => {
  const { studentId: _id } = req.params;
  const student = await Student.findByIdAndUpdate({ _id }, req.body, {
    new: true,
  });
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.status(200).json(student);
};
