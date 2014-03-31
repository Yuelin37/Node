var fs = require('fs');
fs.readFile('./my.txt', "utf-8", function(er, data) {
	console.log(data);
})