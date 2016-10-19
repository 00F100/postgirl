;// Configure Require.js
requirejs.config({
    baseUrl: '../',
    paths: {
    	// jQuery minify
        jquery: 'node_modules/jquery/dist/jquery.min',
        // Bootstrap minify
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        // Angular.js minify
        angular: 'node_modules/angular/angular.min',
        // Angular.js Material
        angularmaterial: 'node_modules/angular-material/angular-material.min',
        // Angular.js Animate
        angularanimate: 'node_modules/angular-animate/angular-animate.min',
        // Angular.js Animate
        angulararia: 'node_modules/angular-aria/angular-aria.min',
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
        // Export Angular.js - depends "jquery"
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        // Export Angular.js Animate - depends "jquery"
        angularanimate: {
            deps: ['angular'],
            exports: 'angularanimate'
        },
        // Export Angular.js Aria - depends "jquery"
        angulararia: {
            deps: ['angular'],
            exports: 'angulararia'
        },
        // Export Angular.js Material - depends "angular"
        angularmaterial: {
            deps: ['angularanimate', 'angulararia'],
            exports: 'angularmaterial'
        },
        // Export Angular.js Material - depends "angular"
        app: {
            deps: ['angularmaterial'],
            exports: 'app'
        }
    }
});

// Start the application
requirejs(['app'], function (app) {
	return app.init();
});