import path from 'path';

/**
 * It returns the index.html file from the src/web/views folder
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you're done with your middleware.
 * @returns The index.html file
 */
export function getHomePage(req, res, next) {
  try {
    return res.sendFile(path.join(process.cwd(), 'src', 'web', 'views', 'index.html'));
  } catch (e) {
    next(e.message);
  }
}

/**
 * If the request is not handled by any of the routes, then send the not-found.html file
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The not-found.html file
 */
export function notFoundHandler(req, res, next) {
  return res.sendFile(path.join(process.cwd(), 'src', 'web', 'views', 'not-found.html'));
}

/**
 * If the request is not handled by any of the routes, then send the error.html file
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The error.html file is being returned.
 */
export function errorHandler(req, res, next) {
  return res.sendFile(path.join(process.cwd(), 'src', 'web', 'views', 'error.html'));
}
