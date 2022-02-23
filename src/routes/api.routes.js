const express = require('express');
const router = express.Router();
const cors = require('cors');

const {usersApi, productsApi} = require('../api');

router.get('/', cors(), usersApi.error)
router.get('/users', cors(), usersApi.list );
router.get('/users/:id', cors(), usersApi.getById );

router.get('/products', cors(), productsApi.list );
router.get('/products/:id', cors(), productsApi.getById );


module.exports = router;