const {dbDestacados } = require('../model');

const indexController = {
    index: async function (req, res){
        try {
            let destacados = await dbDestacados.getAll(2); // 1 Ninguna - 2 Destacado - 3 Oferta
            let ofertas = await dbDestacados.getAll(3); // 1 Ninguna - 2 Destacado - 3 Oferta
            res.render('index', {
                destacados: destacados,
                ofertas: ofertas,
            });
        } catch (error) {
            res.render('error');
        }
    }
}

module.exports = indexController;