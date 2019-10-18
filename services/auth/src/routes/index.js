import express from 'express';
import validateLogin from '../middlewares/authValidation';
import login from '../controlllers/login';

const router = express.Router();

router.post('/api/v1/auth/login', validateLogin, login);

router.use((req, res) => res.status(404).send({
  status: 'error',
  error: 'you have entered an incorrect route',
}));

export default router;
