var Top = function () {
	var Level1 = function(){
		console.log("Hello, World!");
	};

	Level1.prototype = {
		level: 'level1'
	}
	return Level1;
};

Top.prototype = {
	level: 'top'
}

var myTop = new Top();
var myLevel1 = new myTop();
