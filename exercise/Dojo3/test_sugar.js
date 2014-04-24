var assert = require('assert'),
	should = require('should'),
	Class = require('./Class');

describe('framework', function() {
	it('extend', function() {
		var Model = new Class();
		Model.prototype = {
			init:function(name){
				this.name = name;
			}
		};
		var Article = Model.extend({
			Append: function() {},
			Render: function() {},
			init: function(name, content) {
				this.__super__.init(name);
				this.content = content;
			}

		});
		var article = new Article('s','c');
		article.name.should.eql('s');
		article.content.should.eql('c');
		article.should.have.property('Append');
		article.should.have.property('Render');

		// var Article = new Class();
		// Article.inherits(Model);
	});
});