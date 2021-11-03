const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller')

router.get('/', controller.index);
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/productDetail', controller.productDetail);
router.get('/productCart', controller.productCart);

module.exports = router;