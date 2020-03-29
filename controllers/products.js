const create = require('../models/product');
const Product = create.product();

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		title: 'Add Product',
		buttonName: 'Add',
		navBar: { shop: 'Shop', addProduct: 'Add Product' },
		activeAddProduct: true,
		addProductCSS: true,
		shopCSS: true,
		errorCSS: true
	});
};

exports.postAddProduct = (req, res, next) => {
	Product.save({ name: req.body.title });
	res.redirect('/');
};

exports.getProductsList = async (req, res, next) => {
	const products =  await Product.fetchAll();
	res.render('shop', {
		products: products,
		hasProducts: products.length > 0,
		activeShop: true,
		addProductCSS: true,
		shopCSS: true
	});
};
