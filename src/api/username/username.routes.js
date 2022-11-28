import { Router } from 'express';
const username = Router();

import { validator, catchAsyncErrors } from '../api.middlewares.js';

import * as UsernameController from './username.controller.js';
import * as UsernameValidator from './username.validator.js';

username.get('/', catchAsyncErrors(UsernameController.getUsernameByDefault));

username.get(
  '/:one',
  validator(UsernameValidator.getUsernameByOneParam),
  catchAsyncErrors(UsernameController.getUsernameByOneParam),
);

username.get(
  '/:one/:two',
  validator(UsernameValidator.getUsernameByTwoParam),
  catchAsyncErrors(UsernameController.getUsernameByTwoParam),
);

username.get(
  '/:one/:two/:three',
  validator(UsernameValidator.getUsernameByThreeParam),
  catchAsyncErrors(UsernameController.getUsernameByThreeParam),
);

username.get(
  '/:one/:two/:three/:four',
  validator(UsernameValidator.getUsernameByFourParam),
  catchAsyncErrors(UsernameController.getUsernameByFourParam),
);

export default username;
