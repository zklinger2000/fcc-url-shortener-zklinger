const request = require('request');
const ShortURL = require('../models/ShortURL');

exports.getShortUrlByID = function(req, res) {
  // See if a shortURL with the given slug exists
  ShortURL.findOne({ 'slug': req.params.slug }, function(err, shortURL) {
    if (err) return res.status(500).send({ error: err });
    // If a shortURL DOES exist update requestCount
    // Then, return the url of the existing API endpoint
    if (shortURL) {
      res.redirect(shortURL.url);
    } else {
      res.json({
        error: 'no matching short_url'
      });
    }
  });
};
