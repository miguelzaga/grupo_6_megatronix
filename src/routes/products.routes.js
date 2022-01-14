const express = require('express');
const router = express.Router();

// Middlewares
const {uploadFileProduct} = require('../middleware');

// Controlador
const {productController} = require('../controller');


// Lista de productos
router.get('/', productController.products);

// Carrito de compras
router.get('/productCart', productController.productCart);

// Formulario de creación de productos
router.get('/create', productController.create);
router.post('/', uploadFileProduct.single('image'), productController.store);

// Detalle de producto 
router.get('/:id', productController.productDetail);

// Formulario de edición de productos
router.get('/:id/edit', productController.edit);
router.put('/:id', uploadFileProduct.single('image'), productController.update);

// Acción de borrado
router.delete('/:id', productController.destroy)

module.exports = router;