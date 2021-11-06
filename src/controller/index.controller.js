const path = require('path');

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
    productDetail: (req, res) => {
        res.render('productDetail');
    },
    register: (req, res) => {
        res.render('register');
    },
    productList: (req, res) => {
        res.render('productList');
    },
    createProduct:(req, res) => {
        res.render('createProduct');
    },
    editProduct:(req, res) =>{
        res.render('editProduct');
    }
}

module.exports = controller;