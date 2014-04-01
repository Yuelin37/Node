var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('./index.html', 'utf8');

function handler(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html, 'utf8'));
	res.end(html);
}

function startWatch() {
	var fs = require('fs');
	var preLen = 0;
	var curLen = 0;
	fs.watchFile('./my.txt', function(curr, prev) {
		if (curr.mtime.getTime() !== prev.mtime.getTime()) {
			var now = new Date().toUTCString();
			console.log('"my.txt" has been modified');
			fs.readFile('./my.txt', "utf-8", function(er, data) {
				curLen = data.length;
				// console.log("pre: %s; cur: %s\n", curLen, preLen);
				if (preLen < curLen) {
					data = '[' + now + ']: ' + data.substring(preLen, curLen);
					io.sockets.send(data);
				}
				console.log(data);
				preLen = curLen;
			})
		}
	});


}
startWatch();
app.listen(3000, function() {
	console.log('Express server listening on port 3000');
});