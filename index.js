const express = require('express');
const morgan = require('morgan');
const request = require('request');

const app = express();

app.use(morgan('combined')); // Middleware for logging
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/url/*', function(req, res) {
  function checkFormat(params) {
    const original_url = params[0];

    if (typeof original_url === 'string') {
      if (original_url.slice(0, 7) === 'http://' || original_url.slice(0, 8) === 'https://') {
        return original_url;
      }
    }
    return null;
  }

  const original_url = checkFormat(req.params);

  if (original_url) {
    request(original_url, function(error, response) {
      if (error) {
        return res.json({
          error: 'bad link'
        });
      } else if (res.statusCode >= 200 && res.statusCode < 400) {
        // TODO: Attach mongoLab db
        // If the url already exists in the db
          // Then, return the url of the existing API endpoint
        // Else
          // Create a new short_url
          // Return the url of the new API endpoint
        return res.json({
          original_url: original_url,
          short_url: 'https://fcc-url-shortener-zklinger.herokuapp.com/25'
        });
      }
    });
  } else {
    res.status(400).json({
      error: 'missing http:// or https://'
    });
  }
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
