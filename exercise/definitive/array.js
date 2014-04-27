var a1 = [ 'a',,,]; // This array is [undefined, undefined, undefined]
var a2 = new Array(3); // This array has no values at all
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
console.log(0 in a1); // => true: a1 has an element with index 0
console.log(a2); // => false: a2 has no element with index 0

console.log(trees.class);
console.log(Array.prototype);