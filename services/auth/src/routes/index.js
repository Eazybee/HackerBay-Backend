import express from 'express';
import swaggerUi from 'swagger-ui-express';
import validateLogin from '../middlewares/authValidation';
import login from '../controlllers/login';
import swagger from '../../swagger.json';

const router = express.Router();

router.post('/api/v1/auth/login', validateLogin, login);
router.use('/docs/api/v1', swaggerUi.serve, swaggerUi.setup(swagger));
router.use((req, res) => res.status(404).send({
  status: 'error',
  error: 'you have entered an incorrect route',
}));

export default router;
