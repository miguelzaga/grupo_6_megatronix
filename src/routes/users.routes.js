const express = require('express');
const router = express.Router();

const {uploadFileUser, validateLoginMid, validateRegisterMid, guestMid, authMid } = require('../middleware');
const {usersController} = require('../controller');

router.get('/login', guestMid, usersController.login);
router.post('/login', validateLoginMid, usersController.loginProcess);
router.get('/register', guestMid, usersController.register);
router.post('/register',uploadFileUser.single('image'), validateRegisterMid, usersController.registerProcess);
router.get('/profile', authMid, usersController.profile);
router.put('/profile/:id/edit',uploadFileUser.single('image'), usersController.update);
router.delete('/profile/:id/delete', usersController.destroy);
router.get('/logout', authMid, usersController.logout);
router.get('/list', usersController.list); // hay que agregalre un auth middleware de un admin para acceder

module.exports = router;