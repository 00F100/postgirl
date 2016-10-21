;"use strict";

// Configure Require.js
requirejs.config({
	// Clean cache of javascript's...
	urlArgs: "v=" + new Date().getTime(),
	// Base path of scripts
    baseUrl: '../',
    paths: {

        // Controllers
        // homeController: 'src/controllers/HomeController',
        // collectionsController: 'src/controllers/CollectionsController',
        // historyController: 'src/controllers/HistoryController',


    	// jQuery minify
        jquery: 'node_modules/jquery/dist/jquery.min',
        // Bootstrap minify
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        // Angular.js minify
        angular: 'node_modules/angular/angular.min',
        // Angular.js Material
        ngRoute: 'node_modules/angular-route/angular-route.min',
        // Angular.js Animate
        ngAnimate: 'node_modules/angular-animate/angular-animate.min',
        // Angular.js Animate
        ngAria: 'node_modules/angular-aria/angular-aria.min',
        // Angular.js Material
        ngMaterial: 'node_modules/angular-material/angular-material.min',
        // The application
        app: 'src/app'
    },
    shim: {
    	// Export jQuery as $
        jquery: {
            exports: '$'
        },
        // Export Bootstrap - depends "jquery"
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        // Export Angular.js - depends "jquery, ngRoute"
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        // Export Angular.js Animate - depends "angular"
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute'
        },
        // Export Angular.js Animate - depends "angular"
        ngAnimate: {
            deps: ['angular'],
            exports: 'ngAnimate'
        },
        // Export Angular.js Aria - depends "angular"
        ngAria: {
            deps: ['angular'],
            exports: 'ngAria'
        },
        // Export Angular.js Material - depends "ngAnimate, ngAria"
        ngMaterial: {
            deps: ['ngAnimate', 'ngAria', 'ngRoute'],
            exports: 'ngMaterial'
        },
        // Export Angular.js Material - depends "ngMaterial"
        app: {
            deps: ['ngMaterial'],
            exports: 'app'
        },

        // Export Controllers
        // homeController: {
        //     exports: 'homeController'
        // },
        // collectionsController: {
        //     exports: 'collectionsController'
        // },
        // historyController: {
        //     exports: 'historyController'
        // }
    }
});

// Start the application
requirejs(['app'], function (app) {
	return app.init();
});