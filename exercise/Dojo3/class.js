var Class = function() {
	var klass = function() {};
	klass.extend = function(options) {
		var child = function() {
			if (typeof this.init === 'function')
				this.init.apply(this, arguments);
			// if (typeof options[init] === 'function')
			// 	options[init].apply(this, arguments);
		};
		var F = function() {
			this.constructor = child;
		};
		F.prototype = this.prototype;
		child.prototype = new F();
		child.prototype.__super__= this.prototype;
		for (var prop in options) {
			child.prototype[prop] = options[prop];
		}
		return child;
	};
	return klass;
};

module.exports = Class;