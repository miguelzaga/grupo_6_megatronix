const path = require('path');
const multer = require('multer');

// Multer
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

module.exports = uploadFile;