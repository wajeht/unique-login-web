import { validationResult } from 'express-validator';
import { ValidationError } from './api.errors.js';

/**
 * It takes an array of schemas, runs them against the request, and if there are no errors, it calls
 * the next middleware. If there are errors, it throws a ValidationError
 * @param schemas - An array of schemas to validate.
 * @returns A function that takes in schemas, req, res, and next.
 */
export const validator = (schemas) => {
  return async (req, res, next) => {
    try {
      await Promise.all(schemas.map((schema) => schema.run(req)));
      const result = validationResult(req);
      if (result.isEmpty()) return next();
      const { errors } = result;
      throw new ValidationError('Validation errors within your requests!', errors);
    } catch (err) {
      next(err);
    }
  };
};

/**
 * It takes a function as an argument, and returns a new function that wraps the original function in a try/catch block
 * @param fn - The function that we want to wrap in a try/catch block.
 * @returns A function that takes in a function as an argument and returns a function that takes in req, res, and next as arguments.
 */
export const catchAsyncErrors = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
