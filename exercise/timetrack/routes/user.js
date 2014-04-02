
/*
 * GET users listing.
 */

// var orm = require('orm');

exports.list = function(req, res){
	// req.models.user.find().limit(4).order('-id').all(function(err, messages) {
 //      if (err) return next(err);

 //      var items = messages.map(function(m) {
 //        return m.serialize();
 //      });

 //      res.send({
 //        items: items
 //      });
 //    });
  // res.send("respond with a resource");

  req.models.person.find({
        surname: "Doe"
    }, function(err, people) {
        // SQL: "SELECT * FROM person WHERE surname = 'Doe'"

        console.log("People found: %d", people.length);
        console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

        people[0].age = 16;
        people[0].save(function(err) {
            // err.msg = "under-age";
        });

        res.end(people[0].fullName() + ':' + people[0].age + 'hehe...');
    });
};