const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../model/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const controller = {
    index: (req, res) => {
        let destacados = products.filter(product => product.category_sales == "destacado")
        let ofertas = products.filter(product => product.category_sales == "oferta")
        res.render('index', {destacados: destacados, ofertas: ofertas});
    }
}

module.exports = controller;