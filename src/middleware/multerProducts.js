const path = require('path')
const multer = require('multer');

// Multer Productos
const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: function(req, file, cb) {
        console.log(file)
        const newFile =file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null,newFile )
    }
})

const uploadFile = multer({ storage });

module.exports = uploadFile;