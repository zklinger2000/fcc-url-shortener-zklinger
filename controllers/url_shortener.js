const request = require('request');

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
      error: 'malformed url'
    });
  }
};
