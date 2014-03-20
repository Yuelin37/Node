function asyncFunction(callback) {
	setTimeout(function () {
		callback()
	}, 200);
}

var color = 'blue';
function showColor (color) {
	asyncFunction(function () {
		console.log('The color is ' + color);
	})
};

showColor(color);
color = 'green';
