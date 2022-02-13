const {dbUser} = require('../model');

function recordarme(req, res, next){
    if(req.cookies.recordarme !== undefined && req.session.usuarioLogueado == undefined){
        let usuarioLogueado = dbUser.getByEmail(req.cookies.recordarme)
        req.session.usuarioLogueado = usuarioLogueado;
    }
    next();
}

module.exports = recordarme;