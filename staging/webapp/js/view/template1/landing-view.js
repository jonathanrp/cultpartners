/**
 * landing-view.js
 * File that defines the View for Home section.
 * This file uses the Home template in templates/home/home.html
 */

define([
    'jquery', 
    'underscore', 
    'backbone', 
    'loadData',
    'globalFunctionality',
    'text!templates/template-slider/template-slider.html'
    ],

    function($, _, Backbone, LoadData, GlobalFunctionality, template) {

    /**
     * LandingView definition.
     */
    var LandingView = Backbone.View.extend({
        
        navigationType : 'home',
        orderNumber : 1,

        /**
         * Method that initialize the LandingView.
         */
        initialize : function() {
            
        },
        /**
         * Render method of LandingView.
         */
        render : function(element) {
            LoadData.loadJSON('project-wine',this.onLoaded);
            $el = element;
        },
        /**
         * When JSON loaded attach to template
         */
        onLoaded : function(data) {
            this.compiledTemplate = _.template(template, data);
            $el.append(this.compiledTemplate);

            GlobalFunctionality.loadSlides($('#slides'));
            GlobalFunctionality.showMenuSelected($("#menuItem1"));
            GlobalFunctionality.navigateToNextPage("#template2");
            GlobalFunctionality.navigateToPrevPage("#template8");
            GlobalFunctionality.addCustomNavHome();

        },

        /**
         * Events associated with the elements in home template.
         */
        events : {

        }
    });

    return LandingView;
});
