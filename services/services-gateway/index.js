import path from 'path';
import dotenv from 'dotenv';
import gateway from 'express-gateway';

dotenv.config({ path: '../../.env' });
gateway()
  .load(path.join(__dirname, 'config'))
  .run();
