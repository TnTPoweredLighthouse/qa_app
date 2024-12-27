import express from 'express';
import apiConfig from './config/apiConfig.js';

import getApiRoutes from './routes/apiRoutes.js';
import getInvalidRoutes from './routes/invalidRoutes.js';

const app = express();

app.use(apiConfig.prefix, getApiRoutes());
app.use('/*', getInvalidRoutes());

export default app;