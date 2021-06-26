const express = require('express');
const cors = require('cors');

const app = express();

const passwordRoutes = require('./routes/passwordRouter.js');

app.use(cors());
app.use('/password', passwordRoutes);

module.exports = app;
