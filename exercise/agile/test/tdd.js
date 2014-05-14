var should = require('should'),
	add = require('../src/add');

describe('framework', function() {
	it('1+1=2', function() {
		"2".should.eql(add());
	});
	it('arg++', function() {
		"3".should.eql(add(2));
	});
});