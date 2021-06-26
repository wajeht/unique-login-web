const express = require('express');
const app = express();

const cors = require('cors');

const passwordRoutes = require('./routes/passwordRouter.js');

app.use(cors());
app.use(express.json());
app.use('/password', passwordRoutes);

module.exports = app;
