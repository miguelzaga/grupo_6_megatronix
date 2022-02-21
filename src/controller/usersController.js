const { validationResult } = require('express-validator')
const { dbUser } = require('../model');
const bcrypt = require('bcrypt');

const userController = {
    login: (req, res) => {
        res.render('users/login');
    },
    loginProcess: async function (req, res){
        try {
            let user = await dbUser.confirmed(req.body.email)
            let errors = validationResult(req)
            console.log(errors)
            if (errors.isEmpty()) {
                let access = ((user != undefined) && (bcrypt.compareSync(req.body.password, user.password)))
                if (access) {
                    req.session.userLogged = user;

                    if (req.body.recordarUser) {
                        res.cookie('recordarme', req.body.email, { maxAge: (1000 * 60) * 5 }) //Guarda la cookie en el navegador durante 5 minutos
                    }
                    return res.redirect('/users/profile')
                } else {
                    res.render('users/login', {
                        errors: {
                            password: {
                                msg: "Correo o contraseña inválidos"
                            }
                        },
                        old: req.body
                    })
                }
            } else {
                res.render('users/login', {
                    errors: errors.mapped(),
                    old: req.body
                })
            }
        } catch (error) {
            res.render('error');
        }
    },
    register: (req, res) => {
        res.render('users/register');
    },
    registerProcess: async function (req, res){
        try {
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                let image;
                if (req.file) {
                    image = req.file.filename
                } else {
                    image = 'default.png'
                }
                let user_category_id = 2;
                let {first_name, last_name, email, password} = req.body
                dbUser.create(first_name, last_name, email, password, image, user_category_id);
            
            } else {
                return res.render('users/register', {
                    errors: errors.mapped(),
                    old: req.body
                })
            }
        } catch (error) {
            res.render('error');
        }
         return res.redirect('login');
    },
    profile: (req, res) => {
        return res.render('users/profile');
    },

    logout: (req, res) => {
        res.clearCookie('recordarme')
        req.session.destroy();
        return res.redirect('/');
    },
    update: async function (req, res){
        try {
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                let image;
                if (req.file) {
                    image = req.file.filename
                }
                let id = req.params.id;
                let {first_name, last_name, email} = req.body;
                dbUser.update(first_name, last_name, email, image, id);
            } else {
                return res.render('users/profile', {
                    errors: errors.mapped(),
                })
            }
        } catch (error) {
            res.render('error');
        }
         return res.redirect('/');
    },
    destroy: async function(req, res){
        try{
            dbUser.delete({
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/');
        }catch (error) {
            res.render('error');
        }
    },
    list: async function (req, res) {
        try {
            dbUser.getAll()
            res.render('users/users', { users })
        }catch (error) {
            res.render('error');
        }
    }
}

module.exports = userController;