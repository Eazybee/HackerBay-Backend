import express from 'express';
import validateJson from '../middlewares/jsonValidation';
import jsonPatch from '../controlllers/jsonPatch';

const router = express.Router();

router.patch('/', validateJson, jsonPatch);

export default router;
