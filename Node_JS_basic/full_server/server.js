const express = require('express');
const routes = require('./routes/index.js');

const app = express();
app.use('/', routes);
app.listen(1245);

module.exports = app;
