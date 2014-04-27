var obj = {};
console.log(obj);
obj.prototype = {
	name: 'jobs'
};
console.log(obj.prototype);
console.log(obj.name);


var Person = function(name, age) {
	var name, age;
	this.name = name;
	this.age = age;
};

Person.prototype = {
	sayHello: function() {
		console.log('Hello. I\'m ' + this.name + '.');
	}
};

var jobs = new Person('jobs', 55);
jobs.sayHello();

var a = new Array();
console.log(a.__proto__);

var d = new Date();
console.log(d.__proto__);
console.log(Array.prototype);


console.log('=============================');
var o = new Object();
console.log(o.__proto__);
console.log(Object.prototype);
console.log(Date.prototype);


var o1 = Object.create({
	x: 1,
	y: 2
});
console.log(o1.__proto__);
console.log(o1.toString());

var o2 = Object.create(null);
console.log(o2.__proto__);

var o3 = Object.create(Object.prototype);
console.log(o3.__proto__);
console.log(Object.prototype);

var o = {
	x: 1
}
console.log("x" in o); // true: o has an own property "x"
console.log("y" in o); // false: o doesn't have a property "y"
console.log("toString" in o); // true: o inherits a toString property
console.log(o.hasOwnProperty("x")); // true: o has an own property x
console.log(o.hasOwnProperty("y")); // false: o doesn't have a property y
console.log(o.hasOwnProperty("toString")); // false: toString is an inherited property


console.log('=============================');
var o = {
	x: 1,
	y: 2,
	z: 3
}; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for (p in o) // Loop through the properties
{

	console.log(p); // Prints x, y, and z, but not toString
	// console.log(o.p);
	console.log(o[p]);
}
console.log(o);
o.p=555;
console.log(o);

for (p in o) // Loop through the properties
{

	console.log(p); // Prints x, y, and z, but not toString
	console.log(o.p);
	console.log(o[p]);
}