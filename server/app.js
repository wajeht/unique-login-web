const express = require('express');
const app = express();

const cors = require('cors');

const passwordRoutes = require('./routes/passwordRouter.js');
const usernameRoutes = require('./routes/usernameRouter.js');

app.use(cors());
app.use(express.json());
app.use('/api/password', passwordRoutes);
app.use('/api/username', usernameRoutes);

module.exports = app;
