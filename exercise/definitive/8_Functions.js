var sum = function(x,y) { return x + y }; // Return the sum of 2 args
// Create a new function like sum, but with the this value bound to null
// and the 1st argument bound to 1. This new function expects just one arg.
var succ = sum.bind(null, 1);
console.log(succ(2)); // => 3: x is bound to 1, and we pass 2 for the y argument

function f(y,z) { return this.x + y + z }; // Another function that adds
var g = f.bind({x:1}, 2); // Bind this and y
console.log(g(3)); // => 6: this.x is bound to 1, y is bound to 2 and z is 3

scope = "global";
function constructFunction() {
var scope = "local";
return new Function("return scope"); // Does not capture the local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
console.log(constructFunction()()); // => "global"