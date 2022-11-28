import { param } from 'express-validator';
import { ValidationError } from '../api.errors.js';

/* Exporting a function that is validating the parameters that are passed in. */
export const getUsernameByOneParam = [
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['animals', 'verbs', 'nouns', 'specials'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];

/* Validating the parameters that are passed in. */
export const getUsernameByTwoParam = [
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['animals', 'verbs', 'nouns', 'specials'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];

/* Validating the parameters that are passed in. */
export const getUsernameByThreeParam = [
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['animals', 'verbs', 'nouns', 'specials'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];

/* Validating the parameters that are passed in. */
export const getUsernameByFourParam = [
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['animals', 'verbs', 'nouns', 'specials'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];
