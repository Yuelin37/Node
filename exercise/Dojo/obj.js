var o = {
	name: 'jobs',
	show: function(){},
	toggle: function(){}
}


function Person (name){
	this.name = name;
	this.show = function(){};
	this.toggle = function(){};
}




o.show();
o['show']();


var Adobe = {
	Data: {

	},
	IO:{
		FS:{
			readFile:function(){};
		}
	},
	Net:{

	}
}

var Adobe = Adobe || {};