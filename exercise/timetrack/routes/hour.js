/*
 * GET users listing.
 */

// var orm = require('orm');
var formidable = require('formidable');
var format = require('date-format');

exports.list = function(req, res) {

	req.models.item.find({}, function(err, items) {


		req.models.hour.find({
			// surname: "Doe"
		}, function(err, hours) {
			var hoursInfo = [];
			var itemsInfo = [];
			// hoursInfo.push([ 'item', 'hours']);
			for (var i = 0; i < hours.length; i++) {
				var hourItem = [parseInt(hours[i].item_id), parseInt(hours[i].num), format.asString('yyyy-MM-dd', hours[i].loggedFor)];
				// var hourItem = [""+hours[i].loggedFor+"", hours[i].item_id, hours[i].num];
				hoursInfo.push(hourItem);
			}

			for (var i = 0; i < items.length; i++) {
				var itemItem = [parseInt(items[i].id), items[i].itemname];
				itemsInfo.push(itemItem);
			}
			console.log(JSON.stringify(hoursInfo));
			console.log(JSON.stringify(itemsInfo));

			res.render('hours', {
				title: 'Hours',
				hours: hours,
				items: items,
				itemsInfo: JSON.stringify(itemsInfo),
				hoursdata: JSON.stringify(hoursInfo)
				// itemsInfo: itemsInfo,
				// hoursdata: hoursInfo
			});
		});
	});

};

exports.listws = function(req, res) {

	req.models.item.find({}, function(err, items) {


		req.models.hour.find({
			// surname: "Doe"
		}, function(err, hours) {

			var hoursInfo = [];
			var itemsInfo = [];
			// hoursInfo.push([ 'item', 'hours']);
			for (var i = 0; i < hours.length; i++) {
				var hourItem = [parseInt(hours[i].item_id), parseInt(hours[i].num), format.asString('yyyy-MM-dd', hours[i].loggedFor)];
				// var hourItem = [""+hours[i].loggedFor+"", hours[i].item_id, hours[i].num];
				hoursInfo.push(hourItem);
			}

			for (var i = 0; i < items.length; i++) {
				var itemItem = [parseInt(items[i].id), items[i].itemname];
				itemsInfo.push(itemItem);
			}
			// console.log(JSON.stringify(hoursInfo));
			// console.log(JSON.stringify(itemsInfo));

			var response = {
				title: 'Hours',
				hours: hours,
				items: items,
				// itemsInfo: JSON.stringify(itemsInfo),
				// hoursdata: JSON.stringify(hoursInfo)
				itemsInfo: itemsInfo,
				hoursdata: hoursInfo
			};
/*			sleep(5000, function() {
				res.json(response);

			});*/

			res.json(response);
		});
	});

};

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}


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

exports.logGet = function(req, res) {

	res.sendfile('./public/logHour.html');

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

exports.ajaxaddPost = function(req, res) {
	// console.log(req.body['postData']);
	req.models.hour.create({
		num: req.body['postData'][1].value,
		loggedFor: req.body['postData'][2].value,
		item_id: req.body['postData'][0].value
	}, function(err, people) {
		if (err) throw err;

		res.send({
			data: 'success!'
		});

	});

};

exports.updateGet = function(req, res) {

	req.models.hour.find({
		//
	}, function(err, hours) {

		res.render('hours/updateHours', {
			title: 'Update Hours',
			hours: hours
		});
	});

};