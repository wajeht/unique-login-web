const Password = require('../models/Password.js');

exports.getDefaultPassword = (req, res) => {
    res.json({
        password: Password.getPassword(),
    });
};

exports.getDefaultPasswordByLength = (req, res) => {
    const { length } = req.params;
    Password.defaultLength = length;

    res.json({
        password: Password.getPassword(),
    });
};
