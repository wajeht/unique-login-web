const express = require('express');
const app = express();

const cors = require('cors');

const passwordRoutes = require('./routes/passwordRouter.js');
const usernameRoutes = require('./routes/usernameRouter.js');

app.use(cors());
app.use(express.json());
app.use('/password', passwordRoutes);
app.use('/username', usernameRoutes);

module.exports = app;
