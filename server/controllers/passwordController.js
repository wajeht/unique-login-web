const Password = require('../models/Password.js');

exports.getDefaultPassword = (req, res) => {
    const password = new Password();
    res.json({
        password: password.getPassword(),
    });
};

exports.getDefaultPasswordByLength = (req, res) => {
    const { length } = req.params;
    const password = new Password({
        length: length,
    });

    res.json({
        password: password.getPassword(),
    });
};

exports.getDefaultPasswordByParam = (req, res) => {
    const { param } = req.params;
    const password = new Password({
        [param]: true,
    });

    res.json({
        password: password.getPassword(),
    });
};

exports.getPasswordByLengthAndParam = (req, res) => {
    const { length, param } = req.params;
    const password = new Password({
        length: length,
        [param]: true,
    });

    res.json({
        password: password.getPassword(),
    });
};
