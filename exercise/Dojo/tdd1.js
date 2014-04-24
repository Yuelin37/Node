var assert = require('assert'),
	Class = require('./class1'),
	should = require('should');



describe('类的框架测试', function() {
	it('要有类', function() {
		var Model = new Class();
		var article = new Model();
		article.should.be.ok;
	});
	it('要有构造函数', function() {
		var Model = new Class();
		// console.log(Class.prototype);
		Model.prototype.initialize = function(subject, content) {
			this.subject = subject;
			this.content = content;
		};
		var article = new Model('s', 'c');
		article.subject.should.eql('s');
		article.content.should.eql('c');
	});
	it('要有继承', function(){
		var Model = new Class();
		Model.prototype = {
			CRUD: function(){},
			Ajax: function(){}
		}
		var Article = new Class();
		Article.inherits(Model);
		var article = new Article();
		article.should.have.property('CRUD');
		article.should.have.property('Ajax');
	});
});