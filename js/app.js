(function() {
	'use strict';

	angular
		.module("taskList", ["ui.router", "controllers"])
		.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

			$stateProvider
				.state("list", {
					url: "/list",
					templateUrl: "templates/taskListTeste.html",
					controller: "ListCtrl"
				});

			$urlRouterProvider.otherwise('/list');
		}]);
})()