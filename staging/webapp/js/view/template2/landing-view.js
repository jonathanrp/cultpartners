/**
 * landing-view.js
 * File that defines the View for Accommodation section.
 * This file uses the Accommodation template in templates/accommodations/accommodation.html
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
        orderNumber : 2,

        /**
         * Method that initialize the LandingView.
         */
        initialize : function() {
            
        },
        /**
         * Render method of LandingView.
         */
        render : function(element) {

            LoadData.loadJSON('project-food',this.onLoaded);
            $el = element;

        },
        /**
         * When JSON loaded attach to template
         */
        onLoaded : function(data) {
            this.compiledTemplate = _.template(template, data);
            $el.append(this.compiledTemplate);

            GlobalFunctionality.loadSlides($('#slides'));
            GlobalFunctionality.showMenuSelected($("#menuItem2"));
            GlobalFunctionality.navigateToNextPage("#template3");
            GlobalFunctionality.navigateToPrevPage("#template1");
            GlobalFunctionality.addCustomNav();

        },
        /**
         * Events associated with the elements in home template.
         */
        events : {

        }
    });

    return LandingView;
});
