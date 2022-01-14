const validateLoginMid = require('./validateLoginMid');
const validateRegisterMid = require('./validateRegisterMid');
const uploadFileProduct = require('./multerProducts');
const uploadFileUser = require('./multerUsers');
const authMid = require('./authMid');
const guestMid = require('./guestMid');
const userLoggedMid = require('./userLoggedMid');


module.exports = {
    validateLoginMid,
    validateRegisterMid,
    uploadFileProduct,
    uploadFileUser,
    authMid,
    guestMid,
    userLoggedMid
}