console.log("included index");

module.exports = function(app) {
	require('./api')(app);
	require('./web')(app);
}
