var tobi = require('tobi');
var app = require('./app');
var browser = tobi.createBrowser(app);
browser.get('/about', function(res, $) {
	res.should.have.status(200);
	$('div').should.have.one('h1', 'About');
	app.close();
});