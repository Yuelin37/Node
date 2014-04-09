exports.index = function(req, res) {

	var fs = require('fs');
	fs.readFile('mydata.json', 'utf-8', function(er, data) {
		console.log(data);
		res.render('index', {
			title: data
		});
	})


};