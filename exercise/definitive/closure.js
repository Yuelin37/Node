function counter() {
	var n = 0;
	return {
		count: function() {
			return n++;
		},
		reset: function() {
			n = 0;
		}
	};
}

var c = counter(), d = counter(); // Create two counters
c.count() // => 0
d.count() // => 0: they count independently
c.reset() // reset() and count() methods share state
console.log(c.count()); // => 0: because we reset c
console.log(d.count()); // => 1: d was not reset
d.n=100;
console.log(d.n);
console.log(d.count()); // => 1: d was not reset
console.log(d); // => 1: d was not reset
