const rootDir = require('./util/path');
const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views/404.html'));
})
app.listen(3000);