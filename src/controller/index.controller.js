const fs = require('fs');
const path = require('path');

const productsPath = path.resolve(__dirname, '../model/products.json')
const products = require(productsPath)

const users = require('../model/users.json')
const productsCategories = require('../model/categorias.json');
const { runInNewContext } = require('vm');

const newId = () => {
    let greater = 0;
    products.forEach(product => {
        if (greater < product.id) {
            greater = product.id;
        }
    });
    greater++;
    return greater
}

const controller = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('login');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    register: (req, res) => {
        res.render('register');
    },
    // Vista listado de productos
    products: (req, res) => {
        res.render('products', { products: products, categories: productsCategories });
    },
    // Vista formulario de creación de productos
    create: (req, res) => {
        res.render('createProduct', { categories: productsCategories });
    },
    // Creación de producto
    store: (req, res) => {
        // lógica de creado
        let id = newId();
        let file = req.file;
        let newProduct = {
            id: id,
            ...req.body
        };

        if (!file) {
            newProduct.image = 'default-image.png'
        } else {
            newProduct.image = file.filename
        }

        // tests
        // console.log(req.file)
        // return res.send({newProduct});

        products.push(newProduct);
        let modifiedProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsPath, modifiedProducts)
        res.redirect('/products/' + id);
    },
    // Vista detalle de un producto particular
    productDetail: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('productDetail', { product: product });
    },
    // Vista formulario de edición de productos
    edit: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('editProduct', {
            product: product, categories: productsCategories
        });
    },
    // Edición de producto
    update: (req, res) => {
        let id = req.params.id
        // lógica para editar
        let file = req.file;
        let editedProduct = products.find(product => product.id == id);

        Object.keys(req.body).forEach(key => editedProduct[key] = req.body[key])

        if (file) {
            editedProduct.image = file.filename
        }

        // tests
        // console.log(req.file)
        // return res.send({editedProduct});

        products.push(editedProduct);
        let modifiedProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsPath, modifiedProducts)
        res.redirect('/products/' + id);

    },
    destroy: (req, res) => {
        let id = req.params.id
        // lógica para borrar producto
        res.redirect('/')
    }
}

module.exports = controller;