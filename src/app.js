import path from 'path';

import express, { json } from 'express';
const app = express();

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import rateLimit from './config/rateLimit.js';
import ApiRoutes from './api/api.routes.js';
import { getHomePage, errorHandler, notFoundHandler } from './app.controller.js';

app.use(cors());
app.use(compression());
app.use(json());
app.use(helmet({ contentSecurityPolicy: false })); // prettier-ignore
app.use(express.static(path.join(process.cwd(), 'src', 'web', 'public')));

app.use(rateLimit);

app.use('/api', ApiRoutes);
app.get('/', getHomePage);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
