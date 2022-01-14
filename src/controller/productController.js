const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../model/products.json')
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const productsCategories = require('../model/categorias.json');

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

const productController = {
        products: (req, res) => {
            let destacados = products.filter(product => product.category_sales == "destacado")
            res.render('products/products', { products: products, destacados: destacados, categories: productsCategories });
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
                newProduct ={
                id: id,
                ...req.body,
                image : 'default.png'
            }
            }
            else {
                newProduct ={
                id: id,
                ...req.body,
                image : req.file.filename}
            }
    
            products.push(newProduct);
            let modifiedProducts = JSON.stringify(products, null, 4);
            fs.writeFileSync(productsPath, modifiedProducts)
            res.redirect('/products/' + id);
        },
        productDetail: (req, res) => {
            let id = req.params.id
            let product = products.find(product => product.id == id)
            let destacados = products.filter(product => product.category_sales == "destacado")
            res.render('products/productDetail', { product: product, destacados: destacados });
        },
        edit: (req, res) => {
            let id = req.params.id
            let product = products.find(product => product.id == id)
            res.render('products/editProduct', {
                product: product, categories: productsCategories
            });
        },
        update: (req, res) => {
            let id = req.params.id
            let file = req.file;
    
            products.map(function(product){
                if(product.id == id){
                    Object.keys(req.body).forEach(key => product[key] = req.body[key])
                    if (file){
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

module.exports = productController;