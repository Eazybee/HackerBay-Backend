import Validator from 'validatorjs';


/**
 * @description Validates the login data schema
 *
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 * @param {function} next - The next middleware to be invoked
 *
 * @returns {object} res
*/
const validateLogin = (req, res, next) => {
  const loginRules = {
    username: 'required|alpha',
    password: 'required|string',
  };

  const validation = new Validator(req.body, loginRules);

  if (validation.passes()) {
    next();
  } else {
    res.status(400).json({
      status: 'error',
      error: validation.errors.all(),
    });
  }
};

export default validateLogin;
