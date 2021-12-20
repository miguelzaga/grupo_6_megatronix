const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const usersPath = path.join(__dirname, '../model/users.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const bcrypt = require('bcrypt');

const newId = () => {
    let greater = 0;
    users.forEach(user => {
        if (greater < user.id) {
            greater = user.id;
        }
    });
    greater++;
    return greater
}


const controller = {
    login: (req, res) => {
        res.render('users/login');
    },
    loginProcess: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let user = users.find(user => user.email == req.body.email)
            let access = (user != undefined && bcrypt.compareSync(req.body.password, user.password))
            if (access) {
                req.session.userLogged = user;

                if (req.body.recordarUser) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 5 }) //Guarda la cookie en el navegador durante 5 minutos
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

    },
    register: (req, res) => {
        res.render('users/register');
    },
    registerProcess: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            if(users.find(user => user.email == req.body.email) != undefined){
                return res.render('users/register',  {
                    errors: {
                        email: {
                            msg: "Este email ya está registrado"
                        }
                    },
                    old: req.body
                })
            }

            let id = newId();
            let file = req.file;
            let newUser = {
                    id: id,
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password, 10),
                    image: 'default.png'
                }
    
            if(file) {
                newUser.image =  req.file.filename
            }
            
            users.push(newUser);
            let modifiedUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(usersPath, modifiedUsers)
            res.redirect('login');
    
        } else {
            return res.render('users/register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    profile: (req, res) => {
        return res.render('users/profile');
    },

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;