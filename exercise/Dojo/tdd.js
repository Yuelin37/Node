var assert = require('assert'),
	Class = require('./class'),
	should = require('should');



describe('类的框架测试', function() {
	it('要有类', function() {
		var Model = new Class();
		var article = new Model();
		article.should.be.ok;
	});
	it('要有构造函数', function() {
		var Model = new Class();
		Model.initialize = function(subject, content) {
			this.subject = subject;
			this.content = content;
		};
		var article = new Model('s', 'c');
		article.subject.should.eql('s');
		article.content.should.eql('c');
	});
});