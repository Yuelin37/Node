/*String.prototype.report = function(){
	console.log('test');
};

"order01".report();*/

Number.prototype.days_after = function(cb){
	setTimeout(cb, this*1000);
};

var i=5;
i.days_after(function(){
	console.log('test');
});