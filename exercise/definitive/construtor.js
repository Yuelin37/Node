function Person (name, age) {
	this.name = name;
	this.age = age;
};


// Person.prototype = {
// 	sayHello: function() {
// 		console.log('hello');
// 	},
// 	constructor: Person
// }
var jobs = new Person('jobs', 55);
console.log(jobs.constructor.prototype);


// console.log(Object.getPrototypeOf(jobs));
// console.log(Person.prototype);
// console.log(jobs.__proto__);
// console.log(jobs.constructor.prototype);
// console.log(jobs.constructor);
// console.log(jobs.constructor.prototype);
// console.log(jobs.constructor.toString());

