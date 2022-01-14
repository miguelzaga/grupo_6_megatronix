const express = require('express');
const router = express.Router();

const {uploadFileProduct} = require('../middleware');
const {productController} = require('../controller');

router.get('/', productController.products);
router.get('/productCart', productController.productCart);
router.get('/create', productController.create);
router.post('/', uploadFileProduct.single('image'), productController.store);
router.get('/:id', productController.productDetail);
router.get('/:id/edit', productController.edit);
router.put('/:id', uploadFileProduct.single('image'), productController.update);
router.delete('/:id', productController.destroy)

module.exports = router;