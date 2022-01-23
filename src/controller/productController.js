const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../model/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const productsCategories = require('../model/categorias.json');

const db = require('../database/models')

const newId = () => {
    let greater = 0;
    products.forEach(product => {
        if (greater < product.id) {
            greater = product.id;
        }
    });
    greater++;
    return greater
}

let promesaCategorias = db.ProductCategory.findAll()
let promesaPromociones = db.ProductPromotion.findAll()
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

const productController = {
    products: (req, res, next) => {
        let promesaProductos = db.Product.findAll()

        Promise.all([promesaProductos, promesaCategorias, promesaDestacados])
            .then(function (arr) {
                console.log(arr[1])
                res.render('products/products', {
                    products: arr[0],
                    categories: arr[1],
                    destacados: arr[2]
                });
            })
            .catch(error => console.log(error))
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    create: (req, res) => {
        res.render('products/createProduct', { categories: productsCategories });
    },
    store: (req, res) => {
        let id = newId();
        let file = req.file;
        let newProduct = {};

        if (!file) {
            newProduct = {
                id: id,
                ...req.body,
                image: 'default.png'
            }
        }
        else {
            newProduct = {
                id: id,
                ...req.body,
                image: req.file.filename
            }
        }

        products.push(newProduct);
        let modifiedProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsPath, modifiedProducts)
        res.redirect('/products/' + id);
    },
    productDetail: (req, res) => {
        let promesaProducto = db.Product.findByPk(req.params.id)

        Promise.all([promesaProducto, promesaDestacados])
            .then(arr => {
                res.render('products/productDetail', { product: arr[0], destacados: arr[1] });
            })
    },
    edit: (req, res) => {
        let promesaProducto = db.Product.findByPk(req.params.id)

        Promise.all([promesaProducto, promesaCategorias, promesaPromociones])
            .then(arr => {
                res.render('products/editProduct', { product: arr[0], categories: arr[1], promotions: arr[2] });
            })
    },
    update: (req, res) => {
        let id = req.params.id
        let file = req.file;

        products.map(function (product) {
            if (product.id == id) {
                Object.keys(req.body).forEach(key => product[key] = req.body[key])
                if (file) {
                    product.image = file.filename
                }
            }
            return product
        })

        let modifiedProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsPath, modifiedProducts)
        res.redirect('/products/' + id);

    },
    destroy: (req, res) => {
        let id = req.params.id
        let filteredProducts = products.filter(product => product.id != id);

        let modifiedProducts = JSON.stringify(filteredProducts, null, 4);
        fs.writeFileSync(productsPath, modifiedProducts)
        res.redirect('/')
    }

}
/*
const { dbProduct, dbCategory, dbDestacados } = require('../model');

const productController = {
    products: (req, res, next) => {
        dbProduct
            .findAll()
            .then(function (products) {
                res.render('products/products', { products: products, destacados: dbDestacados, categories: dbCategory });
            })
    },
    productCart: (req, res, next) => {
        res.render('products/productCart');
    },
    create: (req, res, next) => {
        res.render('products/createProduct', { categories: dbCategory });
    },
    store: (req, res, next) => {
        dbProduct
            .create({
                name: req.body.name,
                description_short = req.body.description_short,
                description_long = req.body.description_long,
                category = req.body.category,
                category_sales = req.body.category_sales,
                price = req.body.price,
                image = req.body.image,
            });

        res.redirect('/products')
    },
    productDetail: (req, res, next) => {
        dbProduct
            .findByPk(req.params.id, {
                include: [{ association: "Relaciones" }]
            })
            .then((product) => {
                res.render('products/productDetail', { product: product, destacados: dbDestacados });
            })
    },
    edit: (req, res, next) => {
        dbProduct
            .findByPk(req.params.id, {
                include: [{ association: "Relaciones" }]
            })
            .then((product) => {
                res.render('products/editProduct', { product: product, categories: dbCategory });
            })
    },
    update: (req, res, next) => {
        dbProduct
            .update({
                name: req.body.name,
                description_short = req.body.description_short,
                description_long = req.body.description_long,
                category = req.body.category,
                category_sales = req.body.category_sales,
                price = req.body.price,
                image = req.body.image,
            }, {
                where: {
                    id: req.params.id
                }
            });

        res.redirect('/products/' + req.params.id)
    },
    destroy: (req, res, next) => {
        dbProduct
            .destroy({
                where: {
                    id = req.params.id
                }
            });
        res.redirect('/products');
    }

}
*/

module.exports = productController;