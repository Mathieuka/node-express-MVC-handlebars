const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
	const { products } = adminData;
	res.render('shop', {
		products: products,
		hasProducts: products.length > 0,
        activeShop: true,
        addProductCSS: true,
        shopCSS: true,
	});
});

module.exports = router;
