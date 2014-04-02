module.exports = function (orm, db) {
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
};