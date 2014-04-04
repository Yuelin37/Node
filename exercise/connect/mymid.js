exports.logger = function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
}

exports.hello = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world');
	// next();
}