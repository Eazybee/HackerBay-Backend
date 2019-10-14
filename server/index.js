import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

dotenv.config();
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));

export default app;
