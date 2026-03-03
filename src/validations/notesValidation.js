import { Joi, Segments } from 'celebrate';

export const createNotesSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30).required(),
    content: Joi.string().min(3).max().required(),
    tag: Joi.string().valid(
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ),
  }),
};
