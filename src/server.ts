import express from 'express';
import 'express-async-errors'
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHander from './errors/handler';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHander);
app.use(cors());
app.listen(3333);