const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer');
const controller = require('../controller/productController')

// Multer
const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: function(req, file, cb) {
        console.log(file)
        const newFile =file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null,newFile )
    }
})

const uploadFile = multer({ storage });

// Lista de productos
router.get('/', controller.products);

// Formulario de creación de productos
router.get('/create', controller.create);
router.post('/', uploadFile.single('image'), controller.store);

// Detalle de producto 
router.get('/:id', controller.productDetail);

// Formulario de edición de productos
router.get('/:id/edit', controller.edit);
router.put('/:id', uploadFile.single('image'), controller.update);

// Acción de borrado
router.delete('/:id', controller.destroy)

module.exports = router