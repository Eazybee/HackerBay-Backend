import validateSchema from '../helpers/utils';


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
    userName: 'required|alpha',
    password: ['required', 'min:8'],
  };

  if (validateSchema(req.body, loginRules, res)) {
    next();
  }
};

export default validateLogin;
