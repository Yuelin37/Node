var photos1 = [];
photos1.push({
	name: 'Node.js Logo',
	path: 'http://nodejs.org/images/logos/nodejs-green.png'
});
photos1.push({
	name: 'Ryan Speaking',
	path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

exports.list = function(req, res) {
	res.render('photos', {
		title: 'My Photos',
		photos2: photos1
	});
};

exports.form = function(req, res) {
	res.render('photos/upload', {
		title: 'Photo upload'
	});
};

var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;
var util = require('util');
exports.submit = function(dir) {
	return function(req, res, next) {
		var img = req.files.photo.image;
		var name = req.body.photo.name || img.name;
		var path = join(dir, img.name);

		var readStream = fs.createReadStream(img.path)
		var writeStream = fs.createWriteStream(path);

		util.pump(readStream, writeStream, function() {
			fs.unlinkSync(img);

			Photo.create({
				name: name,
				path: img.name
			}, function(err) {
				if (err) return next(err);
				res.redirect('/');
			});
		});


	};
};