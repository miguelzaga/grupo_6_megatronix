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
    create:(req, res) => {
        res.render('createProduct');
    },
    // Creación de un nuevo producto
    store:(req, res) => {
        // lógica de creado
        res.send(req.body);// test, pero no esta saliendo nada en el req.body
        // res.redirect('/');
    },
    // Vista detalle de un producto particular
    productDetail: (req, res) => {
        let id = req.params.id
        let product = productsdb.find(product => product.id == id)
        res.render('productDetail', {product: product});
    },
    edit:(req, res) =>{
        let id = req.params.id
        let product = productsdb.find(product => product.id == id)
        res.render('editProduct', {product: product});
    },
    update:(req, res) =>{
        let id = req.params.id
        // lógica para editar
        res.send(req.body);// test, pero no esta saliendo nada en el req.body
        // res.redirect('/');
    },
    destroy:(req, res) =>{
        let id = req.params.id
        // lógica para borrar producto
        res.redirect('/')
    }
}

module.exports = controller;