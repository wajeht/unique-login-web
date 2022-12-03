import { Router } from 'express';
const username = Router();

import { validator, catchAsyncErrors } from '../api.middlewares.js';

import * as UsernameController from './username.controller.js';
import * as UsernameValidator from './username.validator.js';

/**
 * GET /api/username
 * @tags username
 * @summary get a mixed username
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/username",
 *  "password": "AutographedMoose"
 * }
 */
username.get('/', catchAsyncErrors(UsernameController.getUsernameByDefault));

/**
 * GET /api/password/{first}
 * @tags username
 * @param {string} first.path.required - the type of the character
 * @summary get a mixed username
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/username/animals",
 *  "password": "AutographedMoose"
 * }
 */
username.get(
  '/:one',
  validator(UsernameValidator.getUsernameByOneParam),
  catchAsyncErrors(UsernameController.getUsernameByOneParam),
);

/**
 * GET /api/password/{first}/{second}
 * @tags username
 * @param {string} first.path.required - the type of the character
 * @param {string} second.path.required - the type of the character
 * @summary get a mixed username
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/username/animals/nouns",
 *  "password": "AutographedMoose"
 * }
 */
username.get(
  '/:one/:two',
  validator(UsernameValidator.getUsernameByTwoParam),
  catchAsyncErrors(UsernameController.getUsernameByTwoParam),
);

/**
 * GET /api/password/{first}/{second}/{third}
 * @tags username
 * @param {string} first.path.required - the type of the character
 * @param {string} second.path.required - the type of the character
 * @param {string} third.path.required - the type of the character
 * @summary get a mixed username
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/username/animals/nouns/adjectives",
 *  "password": "AutographedMoose"
 * }
 */
username.get(
  '/:one/:two/:three',
  validator(UsernameValidator.getUsernameByThreeParam),
  catchAsyncErrors(UsernameController.getUsernameByThreeParam),
);

/**
 * GET /api/password/{first}/{second}/{third}/{fourth}
 * @tags username
 * @param {string} first.path.required - the type of the character
 * @param {string} second.path.required - the type of the character
 * @param {string} third.path.required - the type of the character
 * @param {string} fourth.path.required - the type of the character
 * @summary get a mixed username
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * {
 *  "success": true,
 *  "request_url": "/api/username/animals/nouns/adjectives/verbs",
 *  "password": "AutographedMoose"
 * }
 */
username.get(
  '/:one/:two/:three/:four',
  validator(UsernameValidator.getUsernameByFourParam),
  catchAsyncErrors(UsernameController.getUsernameByFourParam),
);

export default username;
