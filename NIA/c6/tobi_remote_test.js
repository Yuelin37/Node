var tobi = require('tobi');
var browser = tobi.createBrowser(3000, '127.0.0.1');
browser.get('/', function(res, $) {
	$('form')
		.fill({
			item: 'Floss the cat'
		})
		.submit(function(res, $) {
			$('ul')
				.html()
				.indexOf('Floss the cat')
				.should.not.equal(-1);
		});
});