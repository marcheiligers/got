console.log("included api")

module.exports = function(app) {
	app.get('/birds', function(req, res) {
    res.send([ 'Owl', 'Hawk', 'Tweetie' ]);
  });
};