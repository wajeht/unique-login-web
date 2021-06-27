const express = require('express');
const router = express.Router();

const passwordController = require('../controllers/passwordController.js');

router.get('/', passwordController.getDefaultPassword);
router.get('/:param', passwordController.getDefaultPasswordByParam);
router.get('/:length', passwordController.getDefaultPasswordByLength);
router.get('/:length/:param', passwordController.getPasswordByLengthAndParam);

module.exports = router;
