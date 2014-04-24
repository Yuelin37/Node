function setup(num) {
	var num = num;

	return function() {
		num++;
		return num;
	}
}

var next = setup(6);
console.log(next());
console.log(next());

// var next = (function(num){
//            var num = num;

//            return function() {
//                            num ++;
//                            return num;
//            }
// })(6);

// console.log(next());
// console.log(next());

// var next = (function(num){
//            var num = num;

//            return function() {
//                            num ++;
//                            return num;
//            }
// }).call(this, 6);

// console.log(next());
// console.log(next());