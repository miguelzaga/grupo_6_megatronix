const { dbProduct, dbCategory, dbDestacados } = require('../model');

const productsApi = {
    list: async (req, res) => {
        try {
            let dbProductos = await dbProduct.getAll();
            let dbProduByCate = await dbProduct.countByCategory();
            let dbCate = await dbCategory.getAll();
           
            let Categorias = [];
            dbCate.map(item => {
                let product = item.dataValues;
                Categorias.push(product);
                })
            
            let Catego = [];
            dbProduByCate.map(item1 => {
                let id = item1.dataValues.product_category_id;
                let count = item1.dataValues.Count;
                let Cat = Categorias.find(cat => cat.id === id)
                let nameCat = Cat.category
                let objeto = {idCategory: id, Category: nameCat, Count:count};
                Catego.push(objeto);
            })

            let productos = [];
            const protocol = req.protocol;
            const host = req.headers.host;
            dbProductos.map((product) => {
                let producto = {
                   id: product.id,
                   name: product.name,
                   description:product.description_short,
                   detail: protocol + "://" + host + "/products/" + product.id,
                   detailApi: protocol + "://" + host + "/api/products/" + product.id
                }
                productos.push(producto)
            })

            let ultimo = dbProductos[dbProductos.length - 1];
            let latestProduct = {
                id: ultimo.id,
                name: ultimo.name,
                description:ultimo.description_short,
                image: protocol + "://" + host + "/images/products/" + ultimo.image,
                detail: protocol + "://" + host + "/products/" + ultimo.id
            };

            return res.status(200).json({
                countProducts: dbProductos.length,
                countCategories: dbCate.length,
                latest: latestProduct,
                countByCategory: Catego,
                data: productos,
                status: 200
            })
        } catch (error) {
            console.error(error)
            res.render('error');
        }
    },
    getById: async (req, res) => {
        try {
            let dbProductos = await dbProduct.getByPk(req.params.id);
            const protocol = req.protocol;
            const host = req.headers.host;
            let producto = {
                   id: dbProductos.id,
                   name: dbProductos.name,
                   description:dbProductos.description_short,
                   image: protocol + "://" + host + "/images/products/" + dbProductos.image,
                   detail: protocol + "://" + host + "/products/" + dbProductos.id
                }
            
            return res.status(200).json({
                product: producto,
                status: 200
            })
        } catch (error) {
            console.log(error);
            res.render('error');
        }
    }

}

module.exports = productsApi;