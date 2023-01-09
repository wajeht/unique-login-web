import express from 'express';
const app = express.Router();

import * as appControllers from './app.controllers.js';

app.get('/health-check', appControllers.getHealthCheck);

export default app;
