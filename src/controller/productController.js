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

const controller = {
        // Vista listado de productos
        products: (req, res) => {
            res.render('products', { products: products, categories: productsCategories });
        },
        // Vista formulario de creación de productos
        create: (req, res) => {
            res.render('createProduct', { categories: productsCategories });
        },
        // Creación de producto
        store: (req, res) => {
            // lógica de creado
            let id = newId();
            let file = req.file;
            let newProduct = {};
    
            if (!file) {
                newProduct ={
                id: id,
                ...req.body,
                image : 'default-image.png'
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
        // Vista detalle de un producto particular
        productDetail: (req, res) => {
            let id = req.params.id
            let product = products.find(product => product.id == id)
            res.render('productDetail', { product: product });
        },
        // Vista formulario de edición de productos
        edit: (req, res) => {
            let id = req.params.id
            let product = products.find(product => product.id == id)
            res.render('editProduct', {
                product: product, categories: productsCategories
            });
        },
        // Edición de producto
        update: (req, res) => {
            let id = req.params.id
            // lógica para editar
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
            // lógica para borrar producto
            let filteredProducts = products.filter(product => product.id != id);
                
            let modifiedProducts = JSON.stringify(filteredProducts, null, 4);
            fs.writeFileSync(productsPath, modifiedProducts)
            res.redirect('/')
        }

}

module.exports = controller