import { StatusCodes } from 'http-status-codes';

/**
 * If the request is not handled by any of the routes, then send the not-found.html file
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The not-found.html file
 */
export function notFoundHandler(req, res, next) {
  return res.status(StatusCodes.NOT_FOUND).render('not-found.html', {
    title: 'Unique Login: Not found',
  });
}

/**
 * If the request is not handled by any of the routes, then send the error.html file
 * @param req - The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The error.html file is being returned.
 */
export function errorHandler(req, res, next) {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).render('error.html', {
    title: 'Unique Login: Error',
  });
}
