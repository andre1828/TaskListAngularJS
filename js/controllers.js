(function() {
	'use strict';

	angular
		.module("controllers", ["services"])
		.controller("ListCtrl", ["$scope", "TaskService", function($scope, EventService) {
			EventService.getAll()
				.success(function(response) {
					$scope.events = response;
				})
				.error(function(error) {
					alert("Deu ruim!");
				});
		}]);
})();