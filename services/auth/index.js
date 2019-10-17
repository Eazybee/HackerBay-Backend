import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import router from './src/routes';
import createLogger from './src/helpers/logger';

dotenv.config({ path: '../../.env' });
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);

const port = process.env.PORT || 3000;
const logger = createLogger('Auth Service');
app.listen(port, () => logger.info(`Listening on port ${port}!`));

export default app;
