const express = require('express');
const path = require('path');
const routes = require('./routes/index.routes')
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, '../public')));

app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'ejs')

app.use('/', routes);

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})