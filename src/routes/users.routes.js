const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const userController = require('../controller/usersController');


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

router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register',uploadFile.single('img_perfil'),userController.processRegister);

module.exports = router;