var express = require('express');
var app = express.createServer();
app.get('/about', function(req, res) {
	res.send(+'<html>' + '<body>' + '<div>' + '<h1>About</h1>' + '</div>' + '</body>' + '</html>');
});
module.exports = app;