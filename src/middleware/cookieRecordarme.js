const {dbUser} = require('../model');

function recordarme(req, res, next){
    console.log("Cookie"+req.cookies.recordarme)
    console.log("Session"+req.session.userLogged )
    if(req.cookies.recordarme !== undefined && req.session.userLogged == undefined){
        console.log('Ahora aca')
        let usuarioLogueado = async function(){
            try{
                return await dbUser.getByEmail(req.cookies.recordarme)
            }catch(error) {
                console.log(error);
            }
        }
        console.log(usuarioLogueado)
        
        req.session.userLogged = usuarioLogueado;
    }
    next();
}

module.exports = recordarme;