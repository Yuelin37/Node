var Todo = Backbone.Model.extend({
	url: '/todos'
});

var Todo_List = Backbone.Collection.extend({
	model: Todo,
	url: '/todos'
});

var todos = new Todo_List();

var Todo_View = Backbone.View.extend({
	initialize: function() {
		todos.bind('reset', this.add_all_todo);
		todos.fetch({
			reset: true
		});
	},
	el: $('#todoapp'),
	events: {
		"keypress #new-todo": "add_todo"
	},
	add_all_todo: function() {
		console.log(this);
	},
	add_todo: function(e) {
		if (e.charCode != 13)
			return;
		todos.create({
			title: $('#new-todo').val()
		});
		console.log($('#new-todo').val());
		$('#new-todo').val('');
	}
});

var Todo_View = new Todo_View();