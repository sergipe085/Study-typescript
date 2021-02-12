import express from 'express'

import { a } from './routes';

const app = express();

app.get('/', a);

app.listen(3333);