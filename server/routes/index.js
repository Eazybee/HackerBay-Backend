import express from 'express';
import authRouter from './auth';
import jsonRouter from './json';
import imageRouter from './image';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome To The HackerBay Backend Application</h1>');
});

router.use('/login', authRouter);
router.use('/json', jsonRouter);
router.use('/image', imageRouter);

router.use((req, res) => res.status(404).send({
  status: 'error',
  message: 'you have entered an incorrect route',
}));

export default router;
