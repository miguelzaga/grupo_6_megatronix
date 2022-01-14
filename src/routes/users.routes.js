const express = require('express');
const router = express.Router();

// Validaciones
const {uploadFileUser, validateLoginMid, validateRegisterMid, guestMid, authMid } = require('../middleware');

// Controlador
const {usersController} = require('../controller');

// Formulario de Registro
router.get('/login', guestMid, usersController.login);
// Procesar Registro
router.post('/login', validateLoginMid, usersController.loginProcess);

// Formulario de Login
router.get('/register', guestMid, usersController.register);
// Procesar Login
router.post('/register',uploadFileUser.single('image'), validateRegisterMid, usersController.registerProcess);

// Perfil de Usuario
router.get('/profile', authMid, usersController.profile)

// Cerrar Sesion
router.get('/logout', authMid, usersController.logout)

module.exports = router;