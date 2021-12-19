const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const userController = require('../controller/usersController');

const validateLogin = require('../middleware/validateLoginMid')
const validateRegister = require('../middleware/validateRegisterMid')
const guestMid = require('../middleware/guestMid');
const authMid = require('../middleware/authMid');

const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users'))
    },
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage })

router.get('/login', guestMid, userController.login);
router.post('/login', validateLogin, userController.loginProcess);
router.get('/register', guestMid, userController.register);
router.post('/register',uploadFile.single('image'), validateRegister, userController.registerProcess);
router.get('/profile', authMid, userController.profile)
router.get('/logout', authMid, userController.logout)

module.exports = router;