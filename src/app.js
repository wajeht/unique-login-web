import path from 'path';

import expressLayouts from 'express-ejs-layouts';
import expressJSDocSwagger from 'express-jsdoc-swagger';
import ejs from 'ejs';
import express from 'express';

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import swaggerOptions from './config/swagger.js';
import rateLimit from './config/rateLimit.js';
import apiRoutes from './api/api.routes.js';
import appRoutes from './app.routes.js';
import { errorHandler, notFoundHandler } from './app.middlewares.js';
import { getHomePage } from './views/views.routes.js';

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.static(path.join(process.cwd(), 'public'), { maxAge: 31536000000 }));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(path.join(process.cwd(), 'src', 'views', 'pages')));
app.set('layout', '../layouts/main.html');

app.use(expressLayouts);
expressJSDocSwagger(app)(swaggerOptions);

app.use(appRoutes);
app.use(rateLimit);

app.use('/api', apiRoutes);
app.get('/', getHomePage);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
