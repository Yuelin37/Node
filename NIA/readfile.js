var fs = require('fs');
fs.readFile('./resource.json', 'utf-8', function(er, data) {
	console.log(data);
})