const express = require('express');
const router = express.Router();
const cors = require('cors');

const {usersApi, productsApi} = require('../api');

router.get('/', cors(), usersApi.error)
router.get('/users', usersApi.list );
router.get('/users/:id', usersApi.getById );

router.get('/products', productsApi.list );
router.get('/products/:id', productsApi.getById );


module.exports = router;