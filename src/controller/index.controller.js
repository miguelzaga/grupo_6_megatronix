const path = require('path');
const productsdb = require('../model/products.json')
const usersdb = require('../model/users.json')

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
        res.render('products', {products : productsdb});
    },
    // Vista formulario de creación de productos
    createProduct:(req, res) => {
        res.render('createProduct');
    },
    // Creación de un nuevo producto
    storeProduct:(req, res) => {
        // lógica de creado
        res.redirect('/');
    },
    // Vista detalle de un producto particular
    productDetail: (req, res) => {
        let id = req.params.id
        let product = productsdb.find(product => product.id == id)
        res.render('productDetail', {product: product});
    },
    editProduct:(req, res) =>{
        res.render('editProduct');
    }
}

module.exports = controller;