const db = require('../database/models');

function userLoggedMid(req, res, next) {
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail;
    let userCookie = () => {
        try {
            db.User.findAll({
                where: {
                    email: emailCookie
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    if (userCookie) {
        req.session.userLogged = userCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMid