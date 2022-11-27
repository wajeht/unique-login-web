import Password from './password.model.js';
import { StatusCodes } from 'http-status-codes';

/**
 * It creates a new Password object, and then returns the default password
 * @param req - The request object.
 * @param res - The response object.
 */
export function getDefaultPassword(req, res) {
  const password = new Password();

  return res.status(StatusCodes.OK).json({
    success: true,
    request_url: req.originalUrl,
    password: password.getPassword(),
  });
}

/**
 * It takes a length parameter, creates a new Password object with that length, and returns the
 * password
 * @param req - The request object.
 * @param res - The response object.
 */
export function getDefaultPasswordByLength(req, res) {
  const { length } = req.params;
  const password = new Password({
    length: length,
  });

  return res.status(StatusCodes.OK).json({
    success: true,
    request_url: req.originalUrl,
    password: password.getPassword(),
  });
}

/**
 * It takes a length and a parameter, and returns a password with that length and that parameter
 * @param req - The request object.
 * @param res - The response object.
 */
export function getPasswordByLengthAndOneParam(req, res) {
  const { length, one } = req.params;
  const password = new Password({
    length: length,
    [one]: true,
  });

  return res.status(StatusCodes.OK).json({
    success: true,
    request_url: req.originalUrl,
    password: password.getPassword(),
  });
}

/**
 * Given a length and two parameters, return a password with those parameters.
 * @param req - The request object.
 * @param res - The response object.
 */
export function getPasswordByLengthAndTwoParams(req, res) {
  const { length, one, two } = req.params;
  const password = new Password({
    length: length,
    [one]: true,
    [two]: true,
  });

  return res.status(StatusCodes.OK).json({
    success: true,
    request_url: req.originalUrl,
    password: password.getPassword(),
  });
}

/**
 * It takes in a length and three parameters, and returns a password with those parameters
 * @param req - The request object.
 * @param res - The response object.
 */
export function getPasswordByLengthAndThreeParams(req, res) {
  const { length, one, two, three } = req.params;
  const password = new Password({
    length: length,
    [one]: true,
    [two]: true,
    [three]: true,
  });

  return res.status(StatusCodes.OK).json({
    success: true,
    request_url: req.originalUrl,
    password: password.getPassword(),
  });
}

/**
 * It takes in a length and four parameters, and returns a password with those parameters
 * @param req - The request object.
 * @param res - The response object.
 */
export function getPasswordByLengthAndFourParams(req, res) {
  const { length, one, two, three, four } = req.params;
  const password = new Password({
    length: length,
    [one]: true,
    [two]: true,
    [three]: true,
    [four]: true,
  });

  return res.status(StatusCodes.OK).json({
    success: true,
    request_url: req.originalUrl,
    password: password.getPassword(),
  });
}
