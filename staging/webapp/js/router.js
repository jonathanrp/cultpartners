/**
 * router.js
 * File that defines the routes of the app.
 */

define([
        'jquery',
        'underscore',
        'backbone',
        'transitionManager',
        'template1LandingView',
        'template2LandingView',
        'template3LandingView',
        'template4LandingView',
        'template5LandingView',
        'template6LandingView',
        'template8LandingView',
        'template7LandingView',
        'template9LandingView'
        ], 
    function(
        $, 
        _, 
        Backbone, 
        TransitionManager,
        Template1LandingView,
        Template2LandingView,
        Template3LandingView,
        Template4LandingView,
        Template5LandingView,
        Template6LandingView,
        Template8LandingView,
        Template7LandingView,
        Template9LandingView
        ) {

        /**
         * Routes definition for the different URLs of the app.
         */
        var AppRouter = Backbone.Router.extend({
            routes: {
                'template1': 'showTemplate1View',
                'template2': 'showTemplate2View',
                'template3': 'showTemplate3View',
                'template4': 'showTemplate4View',
                'template5': 'showTemplate5View',
                'template6': 'showTemplate6View',
                'template7': 'showTemplate7View',
                'template8': 'showTemplate8View',
                'template9': 'showTemplate9View',
                '': 'showTemplate1View'
            }
        });
    
        /**
         * Initialize function of the Router.
         */
        var initialize = function() {
            var app_router = new AppRouter;           
            var currentView = null;

            app_router.on('route:showTemplate1View', function() { 
                var template1LandingView =  template1LandingView || new Template1LandingView();
                TransitionManager.changeView(currentView , template1LandingView);
                currentView = template1LandingView;
            });

            app_router.on('route:showTemplate2View', function() { 
                var template2LandingView =  template2LandingView || new Template2LandingView();
                TransitionManager.changeView(currentView , template2LandingView);
                currentView = template2LandingView;
            });

            app_router.on('route:showTemplate3View', function() {
                var template3LandingView =  template3LandingView || new Template3LandingView();
                TransitionManager.changeView(currentView , template3LandingView);
                currentView = template3LandingView;
            });

            app_router.on('route:showTemplate4View', function() {
                var template4LandingView =  template4LandingView || new Template4LandingView();
                TransitionManager.changeView(currentView , template4LandingView);
                currentView = template4LandingView;
            });

            app_router.on('route:showTemplate5View', function() {
                var template5LandingView =  template5LandingView || new Template5LandingView();
                TransitionManager.changeView(currentView , template5LandingView);
                currentView = template5LandingView;
            });

            app_router.on('route:showTemplate6View', function() {
                var template6LandingView =  template6LandingView || new Template6LandingView();
                TransitionManager.changeView(currentView , template6LandingView);
                currentView = template6LandingView;
            });

            app_router.on('route:showTemplate7View', function() {
                var template7LandingView =  template7LandingView || new Template7LandingView();
                TransitionManager.changeView(currentView , template7LandingView);
                currentView = template7LandingView;
            });

            app_router.on('route:showTemplate8View', function() {
                var template8LandingView =  template8LandingView || new Template8LandingView();
                TransitionManager.changeView(currentView , template8LandingView);
                currentView = template8LandingView;
            });

            app_router.on('route:showTemplate9View', function() {
                var template9LandingView =  template9LandingView || new Template9LandingView();
                TransitionManager.changeView(currentView , template9LandingView);
                currentView = template9LandingView;
            });

            // Initialization of the Backbone history
            Backbone.history.start();
        };

        return { 
            initialize: initialize
        };
    }
);
