import { Schema } from 'mongoose';
import { model } from 'mongoose';

const studentShema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ['male', 'female', 'other'],
    },
    avgMark: {
      type: Number,
      require: true,
    },
    onDuty: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Student = model('Student', studentShema);
