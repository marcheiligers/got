console.log("included web");

module.exports = function(app) {
	app.get('/', function(req, res) {
	  res.render('web/home', { title: 'Flappy' })
	});	
}
