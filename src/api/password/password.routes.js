import { Router } from 'express';
const password = Router();

import { validator, catchAsyncErrors } from '../api.middlewares.js';

import * as PasswordController from './password.controller.js';
import * as PasswordValidator from './password.validator.js';

/**
 * GET /api/password
 * @tags password
 * @summary get a mixed password with default length of 14
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/password",
 *  "password": "cWrQqEvtQQTuMEuiMPsf"
 * }
 */
password.get('/', catchAsyncErrors(PasswordController.getDefaultPassword));

/**
 * GET /api/password/{length}
 * @tags password
 * @param {number} length.path.required - the length of the password
 * @summary get a mixed password with specific length
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/password/20",
 *  "password": "cWrQqEvtQQTuMEuiMPsf"
 * }
 */
password.get(
  '/:length',
  validator(PasswordValidator.getDefaultPasswordByLength),
  catchAsyncErrors(PasswordController.getDefaultPasswordByLength),
);

/**
 * GET /api/password/{length}/{character}
 * @tags password
 * @param {number} length.path.required - the length of the password
 * @param {string} character.path.required - the type of the character
 * @summary get a mixed password with specific length and a specific character
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/password/20",
 *  "password": "cWrQqEvtQQTuMEuiMPsf"
 * }
 */
password.get(
  '/:length/:one',
  validator(PasswordValidator.getPasswordByLengthAndOneParam),
  PasswordController.getPasswordByLengthAndOneParam,
);

/**
 * GET /api/password/{length}/{first}/{second}
 * @tags password
 * @param {number} length.path.required - the length of the password
 * @param {string} first.path.required - the type of the character
 * @param {string} second.path.required - the type of the character
 * @summary get a mixed password with specific length and two specific characters
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/password/20/uppercase/lowercase"
 *  "password": "cWrQqEvtQQTuMEuiMPsf"
 * }
 */
password.get(
  '/:length/:one/:two',
  validator(PasswordValidator.getPasswordByLengthAndTwoParams),
  PasswordController.getPasswordByLengthAndTwoParams,
);

/**
 * GET /api/password/{length}/{first}/{second}/{third}
 * @tags password
 * @param {number} length.path.required - the length of the password
 * @param {string} first.path.required - the type of the character
 * @param {string} second.path.required - the type of the character
 * @param {string} third.path.required - the type of the character
 * @summary get a mixed password with specific length and three specific characters
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/password/20/uppercase/lowercase/number",
 *  "password": "cWrQqEvtQQTuMEuiMPsf"
 * }
 */
password.get(
  '/:length/:one/:two/:three',
  validator(PasswordValidator.getPasswordByLengthAndThreeParams),
  PasswordController.getPasswordByLengthAndThreeParams,
);

/**
 * GET /api/password/{length}/{first}/{second}/{third}/{fourth}
 * @tags password
 * @param {number} length.path.required - the length of the password
 * @param {string} first.path.required - the type of the character
 * @param {string} second.path.required - the type of the character
 * @param {string} third.path.required - the type of the character
 * @param {string} fourth.path.required - the type of the character
 * @summary get a mixed password with specific length and four specific characters
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/password/20/uppercase/numbers/lowercase/special",
 *  "password": "cWrQqEvtQQTuMEuiMPsf"
 * }
 */
password.get(
  '/:length/:one/:two/:three/:four',
  validator(PasswordValidator.getPasswordByLengthAndFourParams),
  PasswordController.getPasswordByLengthAndFourParams,
);

export default password;
