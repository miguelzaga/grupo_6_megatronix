const db = require('../database/models')

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
    products: (req, res) => {
        let promesaProductos = db.Product.findAll()

        Promise.all([promesaProductos, promesaCategorias, promesaDestacados])
            .then(function (arr) {
                res.render('products/products', {
                    products: arr[0],
                    categories: arr[1],
                    destacados: arr[2]
                });
            })
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    create: (req, res) => {
        Promise.all([promesaCategorias, promesaPromociones])
            .then(arr => res.render('products/createProduct', { categories: arr[0], promotions: arr[1] }))
    },
    store: (req, res) => {
        let image;
        if (!req.file) {
            image = 'default.png'
        } else {
            image = req.file.filename
        }

        db.Product
            .create({
                ...req.body,
                image: image,
            })
            .then(result => {
                console.log(`El id del nuevo producto es ${result.id}`)
                res.redirect('/products')
            })
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
        db.Product
            .update({ ...req.body}, {
                where: { id: req.params.id}
            }
                )
            .then(() => {res.redirect('/products')})
    },
    destroy: (req, res) => {
        db.Product
            .destroy({
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/products');
    }
}

module.exports = productController;