import Username from './username.model.js';

/**
 * It creates a new instance of the Username class, and then returns a JSON object with the username
 * @param req - The request object
 * @param res - The response object.
 */
export function getUsernameByDefault(req, res) {
  const username = new Username({
    adjectives: true,
    animals: true,
  });

  return res.status(200).json({
    username: username.getUsername(),
  });
}

/**
 * It takes a single parameter, `one`, and returns a username with that parameter set to `true`
 * @param req - The request object.
 * @param res - The response object.
 */
export function getUsernameByOneParam(req, res) {
  const { one } = req.params;
  const username = new Username({
    [one]: true,
  });

  return res.status(200).json({
    username: username.getUsername(),
  });
}

/**
 * It takes two parameters, and returns a username based on those two parameters
 * @param req - The request object.
 * @param res - The response object.
 */
export function getUsernameByTwoParam(req, res) {
  const { one, two } = req.params;
  const username = new Username({
    [one]: true,
    [two]: true,
  });

  return res.status(200).json({
    username: username.getUsername(),
  });
}

/**
 * It takes in three parameters, and returns a username based on those three parameters
 * @param req - The request object.
 * @param res - The response object.
 */
export function getUsernameByThreeParam(req, res) {
  const { one, two, three } = req.params;
  const username = new Username({
    [one]: true,
    [two]: true,
    [three]: true,
  });

  return res.status(200).json({
    username: username.getUsername(),
  });
}

/**
 * It takes in four parameters, and returns a username that is made up of those four parameters
 * @param req - The request object.
 * @param res - The response object.
 */
export function getUsernameByFourParam(req, res) {
  const { one, two, three, four } = req.params;
  const username = new Username({
    [one]: true,
    [two]: true,
    [three]: true,
    [four]: true,
  });

  return res.status(200).json({
    username: username.getUsername(),
  });
}
