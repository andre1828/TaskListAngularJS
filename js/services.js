(function() {
    'use strict';

	angular
		.module("services", [])
		.factory("TaskService", ["$http", function($http) {

			return {
				getAll: function() {
					return $http.get("mocks/tasks.json");
				}
			};
		}]);
})()
