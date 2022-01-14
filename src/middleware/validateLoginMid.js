const {check} = require('express-validator')

let validateLoginMid = [
    check('email')
        .notEmpty().withMessage('Debes incluir un correo').bail()
        .isEmail().withMessage('Ingresa tu correo'),
    check('password')
        .notEmpty().withMessage('Ingresa tu contraseña')
]

module.exports = validateLoginMid;