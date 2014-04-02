/*
 * GET users listing.
 */

// var orm = require('orm');

exports.list = function(req, res) {
	req.models.person.find({
		surname: "Doe"
	}, function(err, people) {
		// SQL: "SELECT * FROM person WHERE surname = 'Doe'"

		console.log("People found: %d", people.length);
		console.log("First person: %s, age %d", people[0].fullName(), people[0].age);
		people[0].remove();
		res.render('users', {
			title: 'Photos',
			users: people
		});
	});
};

exports.add = function(req, res) {
	req.models.person.create({
		name: "Yan",
		surname: "Doe",
		age: 100
	}, function(err, people) {
		if (err) throw err;

		// db.close()
		console.log("Done!");
		people.age = 25;
		people.save();
		res.end('Done.');
	});
};