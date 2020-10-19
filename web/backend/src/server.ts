import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database/connections';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';

const app = express();
//Get = buscando informação
//Post = criando uma informação
//Put = editar informação
//Delete =deletar informação
//driver nativo, Query Builder, Orm
app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler);
app.listen(3333);
