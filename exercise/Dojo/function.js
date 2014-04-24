// 3 ways to define a function
// #1
var func1 = new Function("console.log('log1')");
func1();
console.log(typeof(func1));

// #2
var func2 = function() {
	console.log('log2');
}
func2();
console.log(typeof(func2));

// #3
function func3() {
	console.log('log3');
}
func3();
console.log(typeof(func3));


// 4 ways to call a function
// #1
func1();

// #2
console.log('func1.call(this)');
func1.call(this);
console.log('func1.apply(this, [])');
func1.apply(this, []);

// #3
console.log('new func1()');
var a = new func1();
console.log(a);

var o = {
	name: 'jobs',
	age: 55,
	sayHello: function(){
		console.log('Hello, World!');
	}
};

console.log(o);
// #4
o.sayHello();