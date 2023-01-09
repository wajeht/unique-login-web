/**
 * It returns a JSON object with a message and the current date
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON object with a message and date.
 */
export function getHealthCheck(req, res) {
  return res.json({
    message: 'ok',
    date: new Date(),
  });
}
