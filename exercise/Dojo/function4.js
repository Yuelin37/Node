/*var jobs = {
	setName: function(name) {
		this.name = name;
	}
}

var gates = {
	age:55
}

jobs.setName.call(gates, 'jobs');
jobs.setName.apply(gates, ['jobs']);*/
/*
function setup (num) {
	var num = num;
	return function(){
		num++;
		return num;
	}
}

var next = setup(6);
console.log(next());
console.log(next());*/


var next = (function (num) {
	var num = num;
	return function(){
		num++;
		return num;
	}
})();
console.log(next(6));