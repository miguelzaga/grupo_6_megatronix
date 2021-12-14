const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const { render, map } = require('../app');

const usersPath = path.join(__dirname, '../model/users.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const { runInNewContext } = require('vm');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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

const controller={
    // Captura de datos
    processRegister : (req, res) =>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		};

        let id = newId();
        let file = req.file;
        let newUser = {};

        if (!file) {
            newUser ={
            id: id,
            ...req.body,
            image : 'default-image.png'
        }
        }
        else {
            newUser ={
            id: id,
            ...req.body,
            image : req.file.filename}
        }
        console.log(newUser)
        users.push(newUser);
        let modifiedUsers = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersPath, modifiedUsers)
        res.redirect('/');

    },

}

module.exports = controller;