const express = require('express');
const router = express.Router();

const passwordController = require('../controllers/passwordController.js');

router.get('/:length', passwordController.getDefaultPasswordByLength);
router.get('/', passwordController.getDefaultPassword);

module.exports = router;
