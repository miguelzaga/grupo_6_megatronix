const { body } = require('express-validator');

let validateLoginMid = [
    body('email')
        .notEmpty().withMessage('Debes incluir un correo').bail()
        .isEmail().withMessage('Ingresa un correo correcto').bail(),
    body('password')
        .notEmpty().withMessage('Ingresa tu contraseña')
]

module.exports = validateLoginMid;