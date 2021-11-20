const fs = require('fs');
const path = require('path');

const productsPath = path.resolve(__dirname, '../model/products.json')
const products = require(productsPath)

const users = require('../model/users.json')
const productsCategories = require('../model/categorias.json')

const newId = () => {
    let greater = 0;
    products.forEach(product => {
        if(greater < product.id){
            greater = product.id;
        }
    });
    greater ++;
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
    // Creación de un nuevo producto
    store: (req, res) => {
        // lógica de creado
        let id = newId();
        let file = req.file;
        let newProduct = {};

        if(!file){
            newProduct = {
                id: id,
                ...req.body,
                image: 'default-image.png'
            }
        } else {
            newProduct = {
                id: id,
                ...req.body,
                image: file.filename
            }
        }

        console.log(req)

        return res.send({newProduct});

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
    edit: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('editProduct', { product: product });
    },
    update: (req, res) => {
        let id = req.params.id
        // lógica para editar
        res.send(req.body);
        // res.redirect('/');
    },
    destroy: (req, res) => {
        let id = req.params.id
        // lógica para borrar producto
        res.redirect('/')
    }
}

module.exports = controller;