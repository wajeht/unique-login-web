import { StatusCodes } from 'http-status-codes';

/**
 * It returns the index.html file from the src/web/views folder
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you're done with your middleware.
 * @returns The index.html file
 */
export function getHomePage(req, res, next) {
  try {
    return res.status(StatusCodes.OK).render('index.html', {
      title: 'Unique Login',
    });
  } catch (e) {
    next(e.message);
  }
}
