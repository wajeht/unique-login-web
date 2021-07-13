const path = require('path');
const root = path.dirname(__dirname);

require('dotenv').config({
    path: path.join(root, '.env'),
});

const config = {
    PORT: process.env.PORT,
};

module.exports = config;
