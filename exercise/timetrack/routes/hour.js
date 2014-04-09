/*
 * GET users listing.
 */

// var orm = require('orm');
var formidable = require('formidable');

exports.list = function(req, res) {

	req.models.item.find({}, function(err, items) {


		req.models.hour.find({
			// surname: "Doe"
		}, function(err, hours) {
			var hoursInfo = [];
			// hoursInfo.push([ 'item', 'hours']);
			for (var i = 0; i < hours.length; i++) {
				var hourItem =  [parseInt(hours[i].item_id), parseInt(hours[i].num)];
				// var hourItem = [""+hours[i].loggedFor+"", hours[i].item_id, hours[i].num];
				hoursInfo.push(hourItem);
			}
			console.log(hoursInfo);

			res.render('hours', {
				title: 'Hours',
				hours: hours,
				items: items
			});
		});
	});

};


exports.addGet = function(req, res) {

	req.models.item.find({
		//
	}, function(err, items) {

		res.render('hours/addHours', {
			title: 'Log Hours',
			items: items
		});
	});

};

exports.addPost = function(req, res) {
	var form = new formidable.IncomingForm();
	var util = require('util');

	form.parse(req, function(err, fields, files) {

		req.models.hour.create({
			num: fields.numOfHour,
			loggedFor: fields.logForDate,
			item_id: fields.item
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