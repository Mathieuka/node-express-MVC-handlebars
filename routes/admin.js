const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {    
    products.push({name: req.body.title}); 
    console.log('admin.js => ', products)
    res.redirect('/');
});


exports.routes = router;
exports.products = products;