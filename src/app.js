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

			// Start Angular.js
			angular.element(function() {
				angular.bootstrap(document, ['app']);
			});
		},

		initRouter: function(){
		}
	}

	// Return the application
	return app;
});
