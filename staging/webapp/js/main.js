/*!
 * main
 * runs the main application
 */
requirejs.config({
    paths : {
        jquery:	"libs/jquery",	
        text: "libs/text", 
        backbone: "libs/backbone",
        underscore: 'libs/underscore-min',
        jquerySlides: 'libs/jquery.slides.min',
        loadData: 'helper/load-data',
        loadDataPortfolio: 'helper/load-data-portfolio',
        globalFunctionality: 'helper/global-functionality',
        transitionManager: 'helper/transition-manager',
        templates: '../templates', 
        template1LandingView: 'view/template1/landing-view',
        template3LandingView: 'view/template3/landing-view',
        template2LandingView: 'view/template2/landing-view',
        template4LandingView: 'view/template4/landing-view',
        template5LandingView: 'view/template5/landing-view',
        template6LandingView: 'view/template6/landing-view',
        template7LandingView: 'view/template7/landing-view',
        template8LandingView: 'view/template8/landing-view',
        template9LandingView: 'view/template9/landing-view'
    },
    shim : {
        'backbone': {
            // These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            // Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquerySlides': {
            deps: ['jquery'],
            exports: 'jquerySlides'
        }
    }
});

/**
 * Initialization of the app.
 */
requirejs([
         'app',
         ], 
    function(App){
        App.initialize();
    }
);
