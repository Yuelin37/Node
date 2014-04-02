var express = require('express');
var orm = require('orm');
var app = express();

app.use(orm.express("mysql://root:root@localhost/timetrack", {
	define: function(db, models) {
		models.person = db.define("person", {
			name: {
				type: 'text',
				required: true
			},
			surname: {
				type: 'text',
				required: true
			},
			age: {
				type: 'number',
				required: false
			}
		}, {
			methods: {
				fullName: function() {
					return this.name + ' ' + this.surname;
				}
			},
			validations: {
				age: orm.enforce.ranges.number(18, undefined, "under-age")
			}
		});
	}
}));
app.listen(3000);

app.get("/", function(req, res) {
	// req.models is a reference to models used above in define()
	req.models.person.find({
		surname: "Doe"
	}, function(err, people) {
		console.log("People found: %d", people.length);
		console.log("First person: %s, age %d", people[0].fullName(), people[0].age);
	});
});