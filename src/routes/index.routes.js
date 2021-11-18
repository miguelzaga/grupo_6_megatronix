const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller')

router.get('/', controller.index);
router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/productCart', controller.productCart);

// *Rutas de producto
// Lista de productos
router.get('/products', controller.products);

// Detalle de producto 
router.get('/products/:id', controller.productDetail);

// Formulario de creación de productos
router.get('/products/create', controller.create);
router.post('/products', controller.store);

// Formulario de edición de productos
router.get('/products/:id/edit', controller.edit);
router.put('/products/:id', controller.update);

// Acción de borrado
router.delete('/products/:id', controller.destroy)


module.exports = router;