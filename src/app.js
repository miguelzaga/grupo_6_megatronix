const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const {userLoggedMid, cookieRecordarme} = require('./middleware');
const cors = require('cors');

app.use(
    cors({
        origin: 'https://localhost:3000',
        methods: 'GET'
    })
);
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'))
app.use(session({
    secret: "el mensaje secreto de Megatronix",
    resave: false,
    saveUninitialized: false
}))
app.use(cookies())
app.use(cookieRecordarme)
app.use(userLoggedMid)

app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'ejs')

// Routes
const routes = require('./routes/index.routes')
const userRoutes = require('./routes/users.routes');
const productRoutes = require('./routes/products.routes');
const apiRoutes = require('./routes/api.routes');

app.use('/', routes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/api', apiRoutes)

module.exports = app;
