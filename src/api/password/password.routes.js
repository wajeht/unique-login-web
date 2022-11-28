import { Router } from 'express';
const password = Router();

import { validator, catchAsyncErrors } from '../api.middlewares.js';

import * as PasswordController from './password.controller.js';
import * as PasswordValidator from './password.validator.js';

password.get('/', PasswordController.getDefaultPassword);

password.get(
  '/:length',
  validator(PasswordValidator.getDefaultPasswordByLength),
  catchAsyncErrors(PasswordController.getDefaultPasswordByLength),
);

password.get(
  '/:length/:one',
  validator(PasswordValidator.getPasswordByLengthAndOneParam),
  PasswordController.getPasswordByLengthAndOneParam,
);

password.get(
  '/:length/:one/:two',
  validator(PasswordValidator.getPasswordByLengthAndTwoParams),
  PasswordController.getPasswordByLengthAndTwoParams,
);

password.get(
  '/:length/:one/:two/:three',
  validator(PasswordValidator.getPasswordByLengthAndThreeParams),
  PasswordController.getPasswordByLengthAndThreeParams,
);

password.get(
  '/:length/:one/:two/:three/:four',
  validator(PasswordValidator.getPasswordByLengthAndFourParams),
  PasswordController.getPasswordByLengthAndFourParams,
);

export default password;
