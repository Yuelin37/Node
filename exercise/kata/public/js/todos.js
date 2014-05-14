var todosApp = angular.module('todosApp', []);

todosApp.factory('todosService', ['$http',
	function(http) {
		return {
			init: function(options) {
				this.url = '/todos';
				for (var prop in options) {
					this[prop] = options[prop];
				}
			},
			find: function() {
				var that = this;
				http.get(this.url).success(function(data) {
					that.scope.todos = data;
				});
			},
			create: function(todo) {
				var that = this;
				http.post('/todos', todo).success(function(data) {
					that.scope.todos.push(todo);
					that.scope.title = '';
				});
			}
		}
	}
]);

todosApp.directive('keypress', function() {
	return {
		restrict: 'A',
		link: function(scope, ielement, iattrs) {
			var jqLite = angular.element;
			jqLite(ielement).bind('keypress', scope[iattrs['keypress']]);
		}
	}
});

todosApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/todos', {
			templateUrl: 'todo_list.html',
			controller: 'TodosController'
		}).when('/test', {
			template: 'test'
		}).otherwise({
			redirecTo: '/'
		})
	}
]);

todosApp.controller('TodosController', function TodosController($scope, $http, todosService) {
	todosService.init({
		url: '/todos',
		scope: $scope
	});
	todosService.find($scope);

	$scope.add_todo = function(e) {

		if (e.charCode != 13)
			return;
		var todo = {
			title: $scope.title
		}
		todosService.create(todo);
	};
});