const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const app = express();

app.use(morgan('combined')); // Middleware for logging
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

router(app);  // makes our app available to all of our routes

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
