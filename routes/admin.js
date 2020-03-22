const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
	console.log('In another middleware');
	res.render('add-product', {
		title: 'Add Product',
		buttonName: 'Add',
		navBar: { shop: 'Shop', addProduct: 'Add Product' },
		activeAddProduct: true,
		addProductCSS: true,
		shopCSS: true,
		errorCSS: true
	});
});

router.post('/add-product', (req, res, next) => {
	products.push({ name: req.body.title });
	console.log('admin.js => ', products);
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
