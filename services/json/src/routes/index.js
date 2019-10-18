import express from 'express';
import validateJson from '../middlewares/jsonValidation';
import jsonPatch from '../controlllers/jsonPatch';

const router = express.Router();

router.patch('/api/v1/json', validateJson, jsonPatch);

router.use((req, res) => res.status(404).send({
  status: 'error',
  error: 'you have entered an incorrect route',
}));

export default router;
