const express = require('express');
const router = express.Router();

const usernameController = require('../controllers/usernameController.js');

router.get('/', usernameController.getUsernameByDefault);
router.get('/:one', usernameController.getUsernameByOneParam);
router.get('/:one/:two', usernameController.getUsernameByTwoParam);
router.get('/:one/:two/:three', usernameController.getUsernameByThreeParam);
router.get('/:one/:two/:three/:four', usernameController.getUsernameByFourParam);

module.exports = router;
