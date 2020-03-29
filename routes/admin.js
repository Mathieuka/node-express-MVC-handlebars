const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

router.get('/products', productController.productsList);

router.post('/products', productController.productsList);

exports.routes = router;


