import { Router } from 'express';
const password = Router();

import * as PasswordController from './password.controller.js';

password.get('/', PasswordController.getDefaultPassword); // prettier-ignore
password.get('/:length', PasswordController.getDefaultPasswordByLength); // prettier-ignore
password.get('/:length/:one', PasswordController.getPasswordByLengthAndOneParam); // prettier-ignore
password.get('/:length/:one/:two', PasswordController.getPasswordByLengthAndTwoParams); // prettier-ignore
password.get('/:length/:one/:two/:three', PasswordController.getPasswordByLengthAndThreeParams); // prettier-ignore
password.get('/:length/:one/:two/:three/:four', PasswordController.getPasswordByLengthAndFourParams); // prettier-ignore

export default password;
