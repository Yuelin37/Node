// for (var i = 0; i < 10; i++) {
// 	setTimeout(function (){
// 		console.log(i);
// 	}, 10);
// };

/*for (var i = 0; i < 10; i++) {
	function bar() {

		var h = i;
		setTimeout(function() {
			console.log(Date());
		}, 1000*h);
	};
	bar();
}*/


var i = 0;

var theEnd = setInterval(function() {
	console.log(Date());
	i++;
	if (i===10){
		console.log(i);
		clearInterval(theEnd);
	}
}, 1000);