;"use strict";

// Dependency of app.js
define(['jquery', 'bootstrap', 'angular', 'ngRoute', 'ngMaterial', 'app'], function($, bootstrap, angular, ngRoute, ngMaterial){
	
	var app = {

		app: null,
		// Start the application
		init: function(){
			this.initAngular();
			// this.initRouter();
		},

		initAngular: function(){
			this.app = angular.module('app', ['ngMaterial']);
			// this.app.controller('homeController', 'demoController');
			this.app.controller('homeController', function($scope){
				$scope.currentNavItem = 'collections';
			});
			angular.element(function() {
				angular.bootstrap(document, ['app']);
			});
		},

		initRouter: function(){
			// $rootScope.$on('$routeChangeSuccess', function(event, current) {
			// 	$scope.currentLink = getCurrentLinkFromRoute(current);
			// });
		}
	}

	// Return the application
	return app;
});