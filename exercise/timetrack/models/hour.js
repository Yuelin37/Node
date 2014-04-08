module.exports = function(orm, db) {
    var Hour = db.define("hour", {
        num: {
            type: 'number',
            required: true
        },
        loggedFor: {
            type: 'date',
            required: true,
            time: true
        }
    }, {
        methods: {
            // fullName: function() {
            //     return this.name + ' ' + this.surname;
            // }
        },
        validations: {
            num: orm.enforce.ranges.number(0, undefined, "Must be greater than 0.")
        }
    });
    Hour.hasOne('item', db.models.item, {
        required: true,
        reverse: 'hours',
        autoFetch: true
    });
};