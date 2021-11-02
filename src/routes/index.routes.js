const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

router.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/register.html'))
});

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
});

router.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
});

router.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
});


module.exports = router;