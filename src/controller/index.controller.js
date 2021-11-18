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
    productDetail: (req, res) => {
        let id = req.params.id
        let product = productsdb.find(product => product.id == id)
        res.render('productDetail', {product: product});
    },
    createProduct:(req, res) => {
        res.render('createProduct');
    },
    editProduct:(req, res) =>{
        res.render('editProduct');
    }
}

module.exports = controller;