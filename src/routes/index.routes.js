const express = require('express');
const router = express.Router();

// Controlador
const {indexController} =require('../controller')

router.get('/', indexController.index);

module.exports = router;