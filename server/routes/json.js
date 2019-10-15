import express from 'express';
import validateLogin from '../middlewares/jsonValidation';
import jsonPatch from '../controlllers/jsonPatch';

const router = express.Router();

router.patch('/', validateLogin, jsonPatch);

export default router;
