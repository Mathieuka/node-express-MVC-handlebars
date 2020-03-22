const rootDir = require('./util/path');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars');
const app = express();



app.engine('hbs',  expressHbs({
    extname: "hbs",
    defaultLayout: "",
    layoutsDir: "",
 }));
 
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found'});
})

app.listen(3000);