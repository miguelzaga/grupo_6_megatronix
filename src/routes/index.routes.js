const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller')

router.get('/', controller.index);
router.get('/register', controller.register);
router.get('/login', controller.login);

// *Rutas de producto
// Lista de productos
router.get('/products', controller.products);
// Formulario de creación de productos
router.get('/products/create', controller.createProduct);
router.post('/products', controller.storeProduct);
// Detalle de producto 
router.get('/products/:id', controller.productDetail);
router.get('/productCart', controller.productCart);
router.get('/editProduct', controller.editProduct);

module.exports = router;