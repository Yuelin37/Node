/*function Class() {
	return function() {};
}

module.exports = Class;*/

module.exports = (function(m) {
	function Class() {
		function klass() {
			if (typeof this.initialize === 'function')
				this.initialize.apply(this, arguments);
		};
		klass.inherits = function(parent) {
			// klass.prototype.__proto__ = parent.prototype;

			// klass.prototype = new parent();

			// klass.prototype = parent.prototype;

			var F = function(){};
			F.prototype = parent.prototype;
			klass.prototype = new F();
		};
		return klass;
	}
	return Class;
})();