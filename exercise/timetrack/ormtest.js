var orm = require("orm");

orm.connect("mysql://root:root@localhost/timetrack", function(err, db) {
    if (err) throw err;

    var Person = db.define("person", {
        name: { type: 'text', required: true },
        surname: { type: 'text', required: true },
        age: { type: 'number', required: false }
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
    db.sync(function (err) {
      if (err) throw err;
      Person.create({
        name: "A", surname: "Doe", age: 38
    }, function (err, message) {
        if (err) throw err;

        db.close()
        console.log("Done!");
    });
  });
    Person.find({
        surname: "Doe"
    }, function(err, people) {
        // SQL: "SELECT * FROM person WHERE surname = 'Doe'"

        console.log("People found: %d", people.length);
        console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

        people[0].age = 16;
        people[0].save(function(err) {
            // err.msg = "under-age";
        });
    });
});