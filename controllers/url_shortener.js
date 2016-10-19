const request = require('request');
const ShortURL = require('../models/ShortURL');

exports.urlShortener = function(req, res) {
  function checkFormat(params) {
    const url = params[0];
    if (typeof url === 'string' && !Number(url[7]) && !Number(url[8])) {
      if (url.slice(0, 7) === 'http://' || url.slice(0, 8) === 'https://') {
        return url;
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
        // Else
        // Create a new short_url
        // Return the url of the new API endpoint
        // See if a shortURL with the given url exists
        ShortURL.findOne({ 'url': original_url }, function(err, shortURL) {
          if (err) return res.status(500).send({ error: err });
          // If a shortURL DOES exist update requestCount
          // Then, return the url of the existing API endpoint
          if (shortURL) {
            shortURL.requestCount = shortURL.requestCount + 1;
            shortURL.save();
            return res.json({
              original_url: original_url,
              short_url: 'https://fcc-url-shortener-zklinger.herokuapp.com/' + shortURL.slug,
              request_count: shortURL.requestCount
            });
          } else {
            ShortURL.find({}).sort('-slug').limit(1).exec(function(err, urls) {
               // Create new shortURL and return token
              const newShortURL = new ShortURL({
                url: original_url,
                slug: urls[0].slug + 1
              });
              newShortURL.save();
              // res.send(newShortURL);
              return res.json({
                original_url: original_url,
                short_url: 'https://fcc-url-shortener-zklinger.herokuapp.com/' + newShortURL.slug,
                request_count: newShortURL.requestCount
              });
            });
          }
        });
      }
    });
  } else {
    res.status(400).json({
      error: 'malformed url'
    });
  }
};
