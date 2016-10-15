;(function( undefined ) {
  'use strict';

    requirejs.config({
        baseUrl: '../',
        paths: {
            // Dependencies
            'jquery': '../node_modules/jquery/dist/jquery.min',
            'angular': '../node_modules/angular/angular.min',
            'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',

            'app': '../src/app/app'
        }
    });

    require([ 'jquery', 'angular', 'bootstrap' ], function( $ ) {
        require([ 'app' ], function(app) {
            console.log(app);
        });
        // app.init();
        // var app = require([ 'app' ]);
        // console.log(app);
    });
})( document );