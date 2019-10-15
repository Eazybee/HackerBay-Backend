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
  const { userName, password } = req.body;
  const loginRules = {
    userName: 'required|alpha',
    password: ['required', 'min:8'],
  };

  const data = { userName, password };
  const validation = new Validator(data, loginRules);

  if (validation.fails()) {
    res.status(400).json({
      status: 'error',
      error: validation.errors.all(),
    });
  } else {
    next();
  }
};

export default validateLogin;
