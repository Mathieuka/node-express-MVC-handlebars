const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/404');

// Express middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());

// Template engine
app.engine(
	'hbs',
	expressHbs({
		layoutsDir: 'views/layouts/',
		defaultLayout: 'main-layout',
		extname: 'hbs'
	})
);
app.set('view engine', 'hbs');
app.set('views', 'views');

// Routes
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(errorRoutes.routes);

// Server
app.listen(3000);
