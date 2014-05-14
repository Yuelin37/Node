/*function loadJS(path,func) {
	$.get(path, function(data) {
		var script = document.createElement('script');
		var js_script = $(script);
		js_script.attr('src', path);
		var head = $('head');
		head.append(js_script);
		func();
	});
}

loadJS('js/libs/underscore.js', function(){
	loadJS('js/libs/backbone.js', function() {
		console.log('done!');
	})
});*/

require.config({
	paths:{
		jQuery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		handlebars: 'libs/handlebars',
		todos: 'todos'
	},
	shim:{
		backbone:['jQuery', 'underscore'],
		todos:['handlebars', 'backbone']
	}
});

require(['todos'], function(Adobe){
	new Adobe.Todo_View();

});