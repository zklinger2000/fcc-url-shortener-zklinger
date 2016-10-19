const url_shortener = require('./controllers/url_shortener');

module.exports = function(app) {
  // app.get('/', requireAuth, function(req, res) {
  //   res.send({ message: 'Super secret code is ABC123' });
  // });

  app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.get('/url/*', url_shortener.urlShortener);
  // app.param('postId', Blogger.blogPostById);
};
