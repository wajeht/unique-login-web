const express = require('express');
const app = express();

const compression = require('compression');
const cors = require('cors');

const passwordRoutes = require('./routes/passwordRouter.js');
const usernameRoutes = require('./routes/usernameRouter.js');

app.use(cors());
app.use(compression());
app.use(express.json());
app.use('/api/password', passwordRoutes);
app.use('/api/username', usernameRoutes);

module.exports = app;
