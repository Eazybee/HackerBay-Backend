import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import router from './routes';
import createLogger from './helpers/logger';

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);

const port = process.env.PORT || 3000;
const logger = createLogger('App');
app.listen(port, () => logger.info(`App listening on port ${port}!`));

export default app;
