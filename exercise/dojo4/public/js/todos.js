define(['backbone'], function() {
	var Todo = Backbone.Model.extend({
		url: '/todos'
	});

	var Todo_List = Backbone.Collection.extend({
		model: Todo,
		url: '/todos'
	});

	var todos = new Todo_List();

	var Todo_Item = Backbone.View.extend({
		tagName: 'li',
		initialize: function(todo) {
			this.model = todo;
			this.render();
		},
		tmpl: Handlebars.compile($('#todo-tmpl').html()),
		render: function() {
			this.$el.html(this.tmpl(this.model.toJSON()));
		}
	});

	var Todo_View = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, 'add_all_todo')
			todos.bind('reset', this.add_all_todo);
			todos.bind('add', this.append_todo);
			todos.fetch({
				reset: true
			});
		},
		el: $('#todoapp'),
		events: {
			"keypress #new-todo": "add_todo"
		},
		add_all_todo: function() {
			var that = this;
			todos.each(function(todo) {
				that.append_todo(todo);
			});
		},
		append_todo: function(todo) {
			var li = new Todo_Item(todo);
			var todo_list = $('#todo-list');
			todo_list.append(li.$el);
		},
		add_todo: function(e) {
			if (e.charCode != 13)
				return;
			var todo = new Todo({
				title: $('#new-todo').val()
			});
			todos.create(todo);
			// this.append_todo(todo); 
			$('#new-todo').val('');
		}
	});
	return {
		Todo: Todo,
		Todo_List: Todo_List,
		Todo_View: Todo_View,
		Todo_Item: Todo_Item
	}

});