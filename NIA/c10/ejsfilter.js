var ejs = require('ejs');
var template = '<%=: movies | last %>';
var context = {
	'movies': [
		'Bambi',
		'Babe: Pig in the City',
		'Enter the Void'
	]
};
console.log(ejs.render(template, context));


var ejs = require('ejs');
var template = '<%=: name | capitalize %>';
var context = {
	name: 'bob'
};
console.log(ejs.render(template, context));

var ejs = require('ejs');
var template = '<%=: title | truncate:20 %>';
var context = {
	title: 'The Hills are Alive With the Sound of Critters'
};
console.log(ejs.render(template, context));

var ejs = require('ejs');
var template = "<%=: weight | replace:'kilogram','kg' %>";
var context = {
	weight: '40 kilogram'
};
console.log(ejs.render(template, context));

var ejs = require('ejs');
var template = '<%=: movies | sort | first %>';
var context = {
	'movies': [
		'Bambi',
		'Babe: Pig in the City',
		'Enter the Void'
	]
};
console.log(ejs.render(template, context));

var ejs = require('ejs');
var template = "<%=: movies | sort_by:'name' | first | get:'name' %>";
var context = {
	'movies': [{
		name: 'Babe: Pig in the City'
	}, {
		name: 'Bambi'
	}, {
		name: 'Enter the Void'
	}]
};
console.log(ejs.render(template, context));


var ejs = require('ejs');
var template = "<%=: movies | map:'name' | sort | first%>";
var context = {
	'movies': [{
		name: 'Babe: Pig in the City'
	}, {
		name: 'Bambi'
	}, {
		name: 'AEnter the Void'
	}]
};
console.log(ejs.render(template, context));
