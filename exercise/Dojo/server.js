var http = require('http'),
	url = require('url'),
	fs = require('fs');

http.createServer(function(req, res) {
	var path = url.parse(req.url).pathname.slice(1);
	fs.exists(path, function(exist){
		if(exist){
			fs.readFile(path, 'utf-8', function(err,content) {
				// res.setHeader("Content-Type", "text/plain");
				res.write(content);
				res.end();
			});
		}
	})
}).listen(4321);

console.log('localhost:4321')