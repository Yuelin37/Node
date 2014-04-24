function Person(name) {
	this.name = name;
	var a = 'a';
	var b = {
		id: 1,
		fname: 'steve'
	};
	var inner = function() {
		b.id = 2;
		console.log(b.id);
	}
	inner();
	console.log(b.id);
}

Person('jobs');