
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var models = require('./models');
var user = require('./routes/user');
var item = require('./routes/item');
var hour = require('./routes/hour');
var http = require('http');
var path = require('path');
var orm = require('orm');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(function (req, res, next) {
      models(function (err, db) {
        if (err) return next(err);

        req.models = db.models;
        req.db     = db;

        return next();
      });
    }),

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/users', user.list);
app.get('/add', user.add);
app.post('/add', user.addPost);
app.get('/item', item.list);
app.get('/item/ws', item.listws);
app.get('/item/ajaxlist', item.ajaxlist);
app.post('/item/add', item.addPost);
app.get('/hour', hour.list);
app.get('/hour/list', hour.list);
app.get('/hour/add', hour.addGet);
app.post('/hour/add', hour.addPost);
app.get('/hour/update', hour.updateGet);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });

app.listen(3000);
