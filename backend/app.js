import express from 'express';
import cors from 'cors';
import apiConfig from './config/apiConfig.js';

import getQuestionsRoutes from './routes/questionsRoutes.js';
import getCategoresRoutes from './routes/categoriesRoutes.js';
import getInvalidRoutes from './routes/invalidRoutes.js';

const app = express();

app.use(cors());

app.use(apiConfig.prefix, getQuestionsRoutes());
app.use(apiConfig.prefix, getCategoresRoutes());
app.use('/*', getInvalidRoutes());

export default app;