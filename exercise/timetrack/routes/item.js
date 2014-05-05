/*
 * GET users listing.
 */

// var orm = require('orm');
var formidable = require('formidable');

exports.list = function(req, res) {
	req.models.item.find({
		// surname: "Doe"
	}, function(err, items) {
		console.log(items);
		res.render('items', {
			title: 'Items',
			items: items
		});
	});
};

exports.listws = function(req, res) {
	req.models.item.find({
		// surname: "Doe"
	}, function(err, items) {
		console.log(items);
		// res.json({'title': 'items...', 'items': JSON.stringify(items)});
		res.json({
			'title': 'items...',
			'items': items
		});
		res.end();
	});
};

exports.ajaxlist = function(req, res) {
	res.sendfile('./public/ajax/core_ajax.html');
};


exports.add = function(req, res) {
	res.sendfile('./public/additem.html');

};

exports.ajaxadd = function(req, res) {
	res.sendfile('./public/ajax/ajaxadditem.html');

};

exports.addPost = function(req, res) {
	var form = new formidable.IncomingForm();
	var util = require('util');

	form.parse(req, function(err, fields, files) {

		req.models.item.create({
			itemname: fields.itemname
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

exports.ajaxaddPost = function(req, res) {
	// console.log(req.body['postData'][0].value);
	// res.send({
	// 	data: 'success!'
	// });

	req.models.item.create({
		itemname: req.body['postData'][0].value
	}, function(err, people) {
		if (err) throw err;

		res.send({
			data: 'success!'
		});
	});


};