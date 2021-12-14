const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:"false"}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'))


app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'ejs')

 // Routes
const routes = require('./routes/index.routes')
const userRoutes = require('./routes/users.routes');
const productRoutes = require('./routes/products.routes');

app.use('/', routes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})