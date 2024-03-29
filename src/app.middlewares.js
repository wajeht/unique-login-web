import { StatusCodes } from 'http-status-codes';

/**
 * If the request is not handled by any of the routes, then send the not-found.html file
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The not-found.html file
 */
// eslint-disable-next-line no-unused-vars
export function notFoundHandler(req, res, next) {
  const isApiPrefix = req.url.match(/\/api\//g);

  if (!isApiPrefix) {
    return res.status(StatusCodes.NOT_FOUND).render('not-found.html', {
      title: 'Unique Login: Not found',
    });
  }

  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    request_url: req.originalUrl,
    message: 'The resource does not exist!',
  });
}

/**
 * If the request is not handled by any of the routes, then send the error.html file
 * @param req - The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The error.html file is being returned.
 */
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const isApiPrefix = req.url.match(/\/api\//g);

  if (!isApiPrefix) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).render('error.html', {
      title: 'Unique Login: Error',
    });
  }

  if (err.name === 'CustomAPIError') {
    return res.status(err.statusCode).json({
      status: 'fail',
      request_url: req.originalUrl,
      message: process.env === 'development' ? err.stack : err.message,
      errors: err?.errors,
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    request_url: req.originalUrl,
    message:
      'The server encountered an internal error or misconfiguration and was unable to complete your request!',
  });
}
