console.log("included api")

module.exports = function(app) {
	app.get('/birds', function(req, res) {
    res.send([ 'Owl', 'Hawk', 'Tweetie' ]);
  });

  app.get('/birds/:id', function(req, res) {
    res.send({ name: req.params.id });
  });
};