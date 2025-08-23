const express = require('express');
const { userController } = require('../controllers/user-controller');
const { productController } = require('../controllers/product-controller');
const { createUserController } = require('../controllers/createUser-controller');

const router = express.Router();

router.get("/", userController)
router.post('/', createUserController)
router.get('/products', productController)

module.exports = router;
