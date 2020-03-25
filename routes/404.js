const express = require('express');
const router = express.Router()
const error = require('../controllers/error');

router.use(error.get404);

exports.routes = router;