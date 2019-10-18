import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import router from './src/routes';
import createLogger from './src/configs/logger';

dotenv.config({ path: '../../.env' });
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);

const port = process.env.AUTH_PORT || 3009;
const logger = createLogger('Auth Service');
app.listen(port, () => logger.info(`Listening on port ${port}!`));

export default app;
