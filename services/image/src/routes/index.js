import express from 'express';
import validateImage from '../middlewares/imageValidation';
import imageThumbnail from '../controlllers/imageThumbnail';

const router = express.Router();


router.get('/image/thumbnail', validateImage, imageThumbnail);

router.use((req, res) => res.status(404).send({
  status: 'error',
  error: 'you have entered an incorrect route',
}));

export default router;
