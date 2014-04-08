module.exports = function (orm, db) {
  var Item = db.define("item", {
        itemname: { type: 'text', required: true }
    }, {
        methods: {
            // fullName: function() {
            //     return this.name + ' ' + this.surname;
            // }
        },
        validations: {
            // age: orm.enforce.ranges.number(0, undefined, "Must be greater than 0.")
        }
    });
};