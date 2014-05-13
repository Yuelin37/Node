var express = require('express');
var app = express();
var jsonBody = require("body/json");
var mongoose = require('mongoose');
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todos');
var Todo = mongoose.model('todos', new mongoose.Schema({
	title: String,
	content: String
}));

app.get('/todos', function(req, res) {
	Todo.find(function(err, data) {
		res.send(data);
	});
});

app.post('/todos', function(req, res) {
	jsonBody(req, res, function(err, body) {
		var todo = new Todo(body);
		todo.save(function() {
			console.log(body);
			res.send(body);
		});
	});
});

app.listen(9432);
console.log('localhost:9432 running...');