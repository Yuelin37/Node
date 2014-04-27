// function Person (name, age) {
// 	var name, age;
// 	this.name = name;
// 	this.age = age;
// };

// // console.log(Object.prototype);
// // console.log(Object);
// // console.log(Person.prototype);
// // console.log(Person);


// // Object.prototype = { // this doesn't work
// // 	category: 'blah'
// // }

// var o = new Object();
// o.__proto__ = {
// 	category: 1
// }

// Person.prototype = {
// 	category: 'hahah',
// 	sayHello: function() {
// 		console.log('hhhhhhh');
// 	}
// }
// var jobs = new Person('jobs', 55);


// console.log(Object.getPrototypeOf(jobs));
// console.log(Person.prototype);
// console.log(jobs.__proto__);
// console.log(jobs.constructor.prototype);
// console.log(jobs.constructor);
// console.log(jobs.constructor.toString());


// var p = {x:1}; // Define a prototype object.
// var o = Object.create(p); // Create an object with that prototype.
// console.log(p.isPrototypeOf(o)); // => true: o inherits from p
// console.log(Object.prototype.isPrototypeOf(o)); // => true: p inherits from Object.prototype

// console.log(Object.prototype.toString.call(jobs).slice(8,-1));

console.log(Object.prototype.toString());
console.log(Object.prototype);

var o={};
console.log(o.toString());