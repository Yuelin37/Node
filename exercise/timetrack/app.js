
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var models = require('./models');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var orm = require('orm');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(orm.express("mysql://root:root@localhost/timetrack", {
    define: function (db, models, next) {
        models.person = db.define("person", {
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
        next();
    }
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// app.get('/', routes.index);
app.get('/users', user.list);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });



app.listen(3000);

// app.get('/users', function (req, res) {
//     // req.models is a reference to models used above in define()
//     req.models.person.find({
//         surname: "Doe"
//     }, function(err, people) {
//         // SQL: "SELECT * FROM person WHERE surname = 'Doe'"

//         console.log("People found: %d", people.length);
//         console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

//         people[0].age = 16;
//         people[0].save(function(err) {
//             // err.msg = "under-age";
//         });

//         res.end(people[0].fullName() + ':' + people[0].age);
//     });
// });