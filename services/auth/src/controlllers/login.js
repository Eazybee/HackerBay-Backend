import jwt from 'jsonwebtoken';

/**
 * @descriptionlogin data schema
 *
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 *
 * @returns {object} res - The HTTP request object
 */
const login = (req, res) => {
  const token = jwt.sign(
    { userName: req.body.username.toLowerCase() },
    process.env.JWT_SECRET || 'JWT_SECRET',
    { expiresIn: '2h' },
  );

  res.status(200).json({
    status: 'success',
    data: {
      token: `Bearer ${token}`,
    },
  });
};


export default login;
