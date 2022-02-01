const { dbProduct, dbCategory, dbDestacados } = require('../model')

const productController = {
    products: async (req, res) => {
        try {
            let products = await dbProduct.findAll();
            let category = await dbCategory.findAll();
            let destacados = await dbDestacados.findAll(1); // 1 Ninguna - 2 Destacado - 3 Oferta
            res.render('products/products', {
                products: products,
                categories: category,
                destacados: destacados
            });
        } catch (error) {
            res.render('error');
        }
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    create: async (req, res) => {
        try {
            let products = await dbProduct.findAll();
            let category = await dbCategory.findAll();
            let destacados = await dbDestacados.findAll();
            res.render('products/createProduct', {
                products: products,
                categories: category,
                promotions: destacados
            });
        } catch (error) {
            res.render('error');
        }
    },
    store: async (req, res) => {
        try {
            let image;
            if (!req.file) {
                image = 'default.png'
            } else {
                image = req.file.filename
            }
            let { name, description_short, description_long, price } = req.body;
            dbProduct.create(name, description_short, description_long, price, image);
            res.redirect('/products')
        } catch (error) {
            res.render('error');
        }

    },
    productDetail: async (req, res) => {
        try {
            let destacados = await dbDestacados.findAll(1); // 1 Ninguna - 2 Destacado - 3 Oferta
            let productDetail = await dbProduct.findByPk(req.params.id);
            res.render('products/productDetail', { product: productDetail, destacados: destacados });
        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        try {
            let products = await dbProduct.findByPk(req.params.id);
            let category = await dbCategory.findAll();
            let destacados = await dbDestacados.findAll();
            res.render('products/editProduct', {
                product: products,
                categories: category,
                promotions: destacados
            });
        } catch (error) {
            res.render('error');
        }
    },
    update: async (req, res) => {
        try {
            let image;
            if (!req.file) {
                image = 'default.png'
            } else {
                image = req.file.filename
            }
            let { name, description_short, description_long, price } = req.body;
            let id = req.params.id;
            dbProduct.update(name, description_short, description_long, price, image, id);
            res.redirect('/products')
        } catch (error) {
            res.render('error');
        }

    },
    destroy: async (req, res) => {
        try {
            let id = req.params.id
            dbProduct.delete(id);
            res.redirect('/products');
        } catch (error) {
            res.render('error');
        }
    }
}

module.exports = productController;