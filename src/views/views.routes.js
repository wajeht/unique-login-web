import { StatusCodes } from 'http-status-codes';

/**
 * GET /
 * @tags default
 * @summary default home page
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
