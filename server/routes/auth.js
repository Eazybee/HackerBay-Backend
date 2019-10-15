import express from 'express';
import validateLogin from '../middlewares/authValidation';
import login from '../controlllers/login';

const router = express.Router();

router.post('/', validateLogin, login);

export default router;
