const router = require('express').Router();

const {userController} = require('../controller');

router.get('/', userController.getAll);
router.post('/', userController.create)

module.exports = router
