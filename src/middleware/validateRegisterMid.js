// Validacion de formulario de registro
const path = require('path');
const {check} = require('express-validator');

const validateRegisterMid = [
    check('first_name').notEmpty().withMessage('Debes completar el nombre'),
    check('last_name').notEmpty().withMessage('Debes completar el apellido'),
    check('email')
        .notEmpty().withMessage('Debes escribir un email').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    check('password')
        .notEmpty().withMessage('Debes incluir una contraseña').bail()
        .isLength({min: 5}).withMessage('Debe contener al menos 5 carácteres'),
    check('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if(!file){
            throw new Error('Debes subir una imagen');
        } else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    })
]

module.exports = validateRegisterMid;