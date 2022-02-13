const express = require('express');
const router = express.Router();

const {uploadFileProduct, authMid, guestMid} = require('../middleware');
const {productController} = require('../controller');

router.get('/', productController.products);
router.get('/productCart', productController.productCart);
router.get('/create', authMid, productController.create);
router.post('/', uploadFileProduct.single('image'), productController.store);
router.get('/:id', productController.productDetail);
router.get('/:id/edit', authMid, productController.edit);
router.put('/:id', authMid, uploadFileProduct.single('image'), productController.update);
router.delete('/:id', authMid, productController.destroy)

module.exports = router;