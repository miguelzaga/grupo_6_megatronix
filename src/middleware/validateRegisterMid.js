const {check} = require('express-validator')

let validateRegisterMid = [
    check('first_name')
        .notEmpty().withMessage('Debes completar el nombre'),
    check('last_name')
        .notEmpty().withMessage('Debes completar el apellido'),
    check('email')
        .notEmpty().withMessage('Debes incluir un correo').bail()
        .isEmail().withMessage('Debes completar el correo'),
    check('password')
        .notEmpty().withMessage('Debes incluir una contraseña').bail()
        .isLength({ min: 5}).withMessage('La contraseña debe ser de 5 carácteres mínimo')
]

module.exports = validateRegisterMid;