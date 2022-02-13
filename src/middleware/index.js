const validateLoginMid = require('./validateLoginMid');
const validateRegisterMid = require('./validateRegisterMid');
const uploadFileProduct = require('./multerProducts');
const uploadFileUser = require('./multerUsers');
const authMid = require('./authMid');
const guestMid = require('./guestMid');
const userLoggedMid = require('./userLoggedMid');
const cookieRecordarme = require('./cookieRecordarme')


module.exports = {
    validateLoginMid,
    validateRegisterMid,
    uploadFileProduct,
    uploadFileUser,
    authMid,
    guestMid,
    userLoggedMid,
    cookieRecordarme
}