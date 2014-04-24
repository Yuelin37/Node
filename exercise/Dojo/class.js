/*function Class() {
	return function() {};
}

module.exports = Class;*/

module.exports = (function(m) {
	function Class() {
		return function klass() {
			if (typeof klass.initialize === 'function')
				klass.initialize.apply(this, arguments);
		};
	}
	return Class;
})();