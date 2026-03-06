import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

noteSchema.index({
  title: 'text',
  content: 'text',
  tag: TAGS,
});

// export const notesSortFields = [
//   '_id',
//   'title',
//   'content',
//   'tag',
//   'createdAt',
//   'updatedAt',
// ];

// noteSchema.post('save', handleSaveError);

// noteSchema.pre('findOneAndUpdate', setUpdateRules);

// noteSchema.post('findOneAndUpdate', handleSaveError);

export const Note = model('Note', noteSchema);
