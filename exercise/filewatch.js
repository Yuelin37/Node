var fs = require('fs');
var preLen = 0;
var curLen = 0;
fs.watchFile('./my.txt', function(curr, prev) {
	if (curr.mtime.getTime() !== prev.mtime.getTime()) {
		console.log('"my.txt" has been modified');
		fs.readFile('./my.txt',"utf-8", function(er, data) {
			curLen = data.length;
			if (preLen < curLen){
				data = data.substring(preLen,curLen);
			}
			console.log(data);
		})
	}
});
