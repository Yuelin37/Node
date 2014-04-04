/*
 * GET users listing.
 */

// var orm = require('orm');
var formidable = require('formidable');

exports.list = function(req, res) {
	req.models.item.find({
		// surname: "Doe"
	}, function(err, items) {
		// SQL: "SELECT * FROM person WHERE surname = 'Doe'"

		// console.log("People found: %d", people.length);
		// console.log("First person: %s, age %d", people[0].fullName(), people[0].age);
		// people[0].remove();
		res.render('items', {
			title: 'Items',
			items: items
		});
	});
};


exports.add = function(req, res) {
	// res.setHeader("Content-Type", "text/html");
	// res.end(
	// 	'<form action="/add" enctype="multipart/form-data" method="post">' +
	// 	'<input type="text" name="name"><br>' +
	// 	'<input type="text" name="surname"><br>' +
	// 	'<input type="text" name="age"><br>' +
	// 	'<input type="submit" value="Upload">' +
	// 	'</form>'
	// );
	res.sendfile('./public/additem.html');
	
};

exports.addPost = function(req, res) {
	var form = new formidable.IncomingForm();
	var util = require('util');

	form.parse(req, function(err, fields, files) {

		req.models.item.create({
			name: fields.name
		}, function(err, people) {
			if (err) throw err;

			res.writeHead(200, {
				'content-type': 'text/plain'
			});
			res.write('received upload:\n\n');
			res.end(util.inspect({
				fields: fields,
				files: files
			}));

		});

	});
};