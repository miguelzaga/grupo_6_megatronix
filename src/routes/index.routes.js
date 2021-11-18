const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller')

router.get('/', controller.index);
router.get('/register', controller.register);
router.get('/login', controller.login);

// *Rutas de producto
// Lista de productos
router.get('/products', controller.products);
// Detalle de producto 
// router.get('/productDetail', controller.productDetail);
router.get('/products/:id', controller.productDetail);
router.get('/productCart', controller.productCart);
router.get('/createProduct', controller.createProduct);
router.get('/editProduct', controller.editProduct);

module.exports = router;