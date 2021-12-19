const users=require('../model/users.json')

function userLoggedMid(req, res, next){
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail;
    let userCookie = users.find(user => user.email == emailCookie);

    if(userCookie){
        req.session.userLogged = userCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMid