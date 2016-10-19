const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://heroku_tvn52127:spjlatsbs95sfi17uif8m7lp0k@ds061506.mlab.com:61506/heroku_tvn52127');

app.use(morgan('combined')); // Middleware for logging
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: '*/*' })); // Middleware parses incoming requests into JSON
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

router(app);  // makes our app available to all of our routes

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
