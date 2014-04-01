var photos1 = [];
photos1.push({
	name: 'Node.js Logo',
	path: 'http://nodejs.org/images/logos/nodejs-green.png'
});
photos1.push({
	name: 'Ryan Speaking',
	path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

exports.list = function(req, res, next) {
	Photo.find({}, function(err, photos) {
		if (err) return next(err);
		res.render('photos', {
			title: 'Photos',
			photos: photos
		});
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

exports.submit = function(dir) {
	return function(req, res, next) {
		var img = req.files.photo.image;
		var name = req.body.photo.name || img.name;
		var path = join(dir, img.name);

		var is = fs.createReadStream(img.path);
		var os = fs.createWriteStream(path);

		is.pipe(os);
		is.on('end', function() {
			fs.unlinkSync(img.path);
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

exports.download = function(dir) {
	return function(req, res, next) {
		var id = req.params.id;
		Photo.findById(id, function(err, photo) {
			if (err) return next(err);
			var path = join(dir, photo.path);
			res.download(path);
		});
	};
};