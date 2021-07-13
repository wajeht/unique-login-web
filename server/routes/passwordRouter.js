const express = require('express');
const router = express.Router();

const passwordController = require('../controllers/passwordController.js');

router.get('/', passwordController.getDefaultPassword);
router.get('/:length', passwordController.getDefaultPasswordByLength);
router.get('/:length/:param', passwordController.getPasswordByLengthAndOneParam);
router.get('/:length/:one/:two', passwordController.getPasswordByLengthAndTwoParams);
router.get('/:length/:one/:two/:three', passwordController.getPasswordByLengthAndThreeParams);
router.get('/:length/:one/:two/:three/:four', passwordController.getPasswordByLengthAndFourParams);

module.exports = router;
