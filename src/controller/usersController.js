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
    register: (req, res) => {
        res.render('users/register');
    },

    // Captura de datos
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        };

        let id = newId();
        let file = req.file;
        let passEncriptada = bcrypt.hashSync(req.body.password, 10);
        let newUser = {
                id: id,
                ...req.body,
                image: 'perfil.png'
            }

        newUser.password = passEncriptada;

        if(file) {
            newUser.image =  req.file.filename
        }
        
        users.push(newUser);
        let modifiedUsers = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersPath, modifiedUsers)
        res.redirect('/');
    },

}

module.exports = controller;