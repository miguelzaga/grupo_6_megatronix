const {check} = require('express-validator')

let validateLogin = [
    check('email')
        .notEmpty().withMessage('Debes incluir un correo').bail()
        .isEmail().withMessage('Ingresa tu correo'),
    check('password')
        .notEmpty().withMessage('Ingresa tu contraseña')
]

module.exports = validateLogin