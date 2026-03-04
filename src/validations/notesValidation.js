import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const createNotesSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30).required().messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title should have at least {#limit} characters',
      'string.max': 'Title should have at most {#limit} characters',
      'any.required': 'Title is required',
    }),
    content: Joi.string().min(3).max(100).messages({
      'string.base': 'Content must be a string',
      'string.min': 'Content should have at least {#limit} characters',
      'string.max': 'Content should have at most {#limit} characters',
    }),
    tag: Joi.string()
      .valid(
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
      )
      .messages({
        ' any.only':
          'Tag must be one of: Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo',
      }),
  }),
};

export const noteIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30).required().messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title should have at least {#limit} characters',
      'string.max': 'Title should have at most {#limit} characters',
      'any.required': 'Title is required',
    }),
    content: Joi.string()
      .min(3)
      .max(100)
      .required()
      .messages({
        'string.base': 'Content must be a string',
        'string.min': 'Content should have at least {#limit} characters',
        'string.max': 'Content should have at most {#limit} characters',
        'any.required': 'Content is required',
      })
      .min(1),
  }),
};
