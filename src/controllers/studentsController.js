import createHttpError from 'http-errors';
import { Student } from '../models/student.js';

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};

export const getStudentsById = async (req, res) => {
  const { studentId: _id } = req.params;
  const student = await Student.findOne({ _id });

  // if (!student) {
  //   return res.status(404).json({ message: 'Student not found' });
  // }

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.status(200).json(student);
};
