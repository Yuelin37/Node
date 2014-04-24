var assert = require('assert'),
	should = require('should'),
	Class = require('./Class');

describe ('framework', function(){
	it('extend', function(){
		var Model = new Class();
		Model.prototype = {
			CRUD: function(){}
		}

		// var Article = new Class();
		// Article.inherits(Model);
	});
});