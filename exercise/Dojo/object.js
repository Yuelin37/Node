function Person (name, age){
	this.name = name;
	this.age = age;
	// this.sayHello = function(){
	// 	console.log(this.name + ":" + this.age);
	// };
}

Person.prototype.sayHello = function(){
	console.log(this.name + ":" + this.age);
}

var jobs = new Person('jobs', 55);
var gates = new Person('gates', 55);

console.log(jobs.sayHello===gates.sayHello);