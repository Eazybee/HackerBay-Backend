import express from 'express';
import validateImage from '../middlewares/imageValidation';
import imageThumbnail from '../controlllers/imageThumbnail';

const router = express.Router();

router.get('/thumbnail', validateImage, imageThumbnail);

export default router;
