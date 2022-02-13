const { dbUser } = require('../model');

function userLoggedMid(req, res, next) {
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail;
        let userCookie = async function(){
            try {
                return await dbUser.getByEmail(emailCookie)
            } catch (error) {
                console.log(error);
            }
        }
    
    if (userCookie && emailCookie) {
        req.session.userLogged = userCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedMid