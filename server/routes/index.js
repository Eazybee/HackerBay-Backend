import express from 'express';
import auth from './auth';
import json from './json';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome To The HackerBay Backend Application</h1>');
});

router.use('/login', auth);
router.use('/json', json);

router.use((req, res) => res.status(404).send({
  status: 'error',
  message: 'you have entered an incorrect route',
}));

export default router;
