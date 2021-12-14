const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../model/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('index');
    }
}

module.exports = controller;