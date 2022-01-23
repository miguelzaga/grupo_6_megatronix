const { promiseImpl } = require('ejs');
const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../model/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const db = require('../database/models');

const indexController = {
    index: (req, res) => {

        let promesaDestacados =
            db.Product.findAll({
                include: {
                    model: db.ProductPromotion,
                    as: "ProductPromotions",
                    where: {
                        promotion: "destacado"
                    }
                },
                limit: 4
            })
            
            let promesaOfertas =
            db.Product.findAll({
                include: {
                    model: db.ProductPromotion,
                    as: "ProductPromotions",
                    where: {
                        promotion: "oferta"
                    }
                },
                limit: 4
            })

        Promise.all([promesaDestacados, promesaOfertas])
            .then(arr => {
                res.render('index', { destacados: arr[0], ofertas: arr[1] })
            })
            .catch(error => {console.log(error)})
    }
}

module.exports = indexController;