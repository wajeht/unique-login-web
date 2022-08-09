import { Router } from 'express';
const api = Router();

import PasswordRoutes from './password/password.routes.js';
import UsernameRoutes from './username/username.routes.js';

api.use('/password', PasswordRoutes);
api.use('/username', UsernameRoutes);

export default api;
