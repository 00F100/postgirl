// Dependency of app.js
;define(['ngRoute', 'ngMaterial', 'vAccordion'], function(){

	"use strict";
	
	var app = {

		app: null,
		// Start the application
		init: function(){
			this.initAngular();
			this.initRouter();
		},

		initAngular: function(){

			// Init module app
			this.app = angular.module('app', ['ngRoute', 'ngMaterial', 'vAccordion']);
			
			// Add controllers
			// this.app.controller('homeController', homeController);
			// this.app.controller('collectionsController', collectionsController);
			// this.app.controller('historyController', historyController);

			// Start Angular.js
			angular.element(function() {
				angular.bootstrap(document, ['app']);
			});
		},

		initRouter: function(){
			// this.app.config(function ($routeProvider) {
		 //        $routeProvider.when("/", {
		 //            templateUrl: 'views/home/collections.html',
		 //            controller: 'homeController'
		 //        });
		 //        $routeProvider.when("/home/collections", {
		 //            templateUrl: 'views/home/collections.html',
		 //            controller: 'collectionsController'
		 //        });
		 //        $routeProvider.when("/home/history", {
		 //            templateUrl: 'views/home/history.html',
		 //            controller: 'historyController'
		 //        });
		 //    });
		}
	}

	// Return the application
	return app;
});
