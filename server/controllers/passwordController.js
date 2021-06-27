const Password = require('../models/Password.js');

// exports.getDefaultPassword = (req, res) => {
//     res.json({
//         password: Password.getPassword(),
//     });
// };

exports.getDefaultPasswordByLength = (req, res) => {
    const { length } = req.params;
    Password.defaultLength = length;

    res.json({
        password: Password.getPassword(),
    });
};

// exports.getDefaultPasswordByParam = (req, res) => {
//     const { param } = req.params;
//     console.log(param);
// };

exports.getPasswordByLengthAndParam = (req, res) => {
    const { length, param } = req.params;

    Password.defaultLength = length;
    Password.isUppercase = param;

    if (param === 'uppercase') {
        Password.isUppercase = true;
    } else if (param === 'lowercase') {
        Password.isLowercase = true;
    } else if (param === 'number') {
        Password.isNumber = true;
    } else if (param === 'special') {
        Password.isSpecial = true;
    }
    res.json({
        password: Password.getPassword(),
    });
};
