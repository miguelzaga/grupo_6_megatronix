const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../model/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const db = require('../database/models');

const indexController = {
    index: (req, res) => {

        // ---- Test de modelos -----

        // db.User.findByPk(1,
        //     {
        //         include: ['UserCategories', 'UserCarts']
        //     })
        //     .then(result => console.log(result.dataValues))
        //     .catch(error => console.log(error))


        // db.UserCart.findByPk(1,
        //     {
        //         include: ['Users', 'Products']
        //     })
        //     .then(result => console.log(result.dataValues))
        //     .catch(error => console.log(error))

        // db.Product.findByPk(1,
        //     {
        //         include: ['ProductCategories', 'ProductPromotions']
        //     })
        //     .then(result => console.log(result.dataValues))
        //     .catch(error => console.log(error))


        let destacados = products.filter(product => product.category_sales == "destacado")
        let ofertas = products.filter(product => product.category_sales == "oferta")
        res.render('index', {destacados: destacados, ofertas: ofertas});
    }
}

module.exports = indexController;