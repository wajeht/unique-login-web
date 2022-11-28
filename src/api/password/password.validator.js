import { param } from 'express-validator';
import { ValidationError } from '../api.errors.js';

/* Exporting a function that is checking the length of the password. */
export const getDefaultPasswordByLength = [
  param('length')
    .trim()
    .notEmpty()
    .withMessage('length must not be empty!')
    .bail()
    .isInt()
    .withMessage('length must be an integer!')
    .bail()
    .toInt(),
];

/* Checking the length of the password. */
export const getPasswordByLengthAndOneParam = [
  param('length')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('length must not be empty!')
    .bail()
    .isInt()
    .withMessage('length must be an integer!')
    .bail(),
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['number', 'uppercase', 'lowercase', 'special'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];

/* Checking the length of the password. */
export const getPasswordByLengthAndTwoParams = [
  param('length')
    .trim()
    .notEmpty()
    .withMessage('length must not be empty!')
    .bail()
    .isInt()
    .withMessage('length must be an integer!')
    .bail()
    .toInt(),
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['number', 'uppercase', 'lowercase', 'special'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];

/* Checking the length of the password. */
export const getPasswordByLengthAndThreeParams = [
  param('length')
    .trim()
    .notEmpty()
    .withMessage('length must not be empty!')
    .bail()
    .isInt()
    .withMessage('length must be an integer!')
    .bail()
    .toInt(),
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['number', 'uppercase', 'lowercase', 'special'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];

/* Checking the length of the password. */
export const getPasswordByLengthAndFourParams = [
  param('length')
    .trim()
    .notEmpty()
    .withMessage('length must not be empty!')
    .bail()
    .isInt()
    .withMessage('length must be an integer!')
    .bail()
    .toInt(),
  param()
    .optional()
    .custom((params) => {
      const availableFields = ['number', 'uppercase', 'lowercase', 'special'];
      const fields = Object.values(params).some((field) => availableFields.includes(field));
      if (!fields) {
        throw new ValidationError(
          `Must include either ${availableFields.join(', ').padEnd(0, 'x')} to generate!`,
        );
      }
      return true;
    }),
];
