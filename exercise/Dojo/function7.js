function Person (name) {
	this.name = name;
}
Person.prototype.sayHello = function(){
	console.log(this.name);
};

var jobs = new Person('jobs');

jobs.sayHello();