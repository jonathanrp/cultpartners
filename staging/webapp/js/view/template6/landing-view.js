/**
 * landing-view.js
 * File that defines the View for Desing section.
 * This file uses the Design template in templates/design/design.html
 */

define([
    'jquery', 
    'underscore', 
    'backbone', 
    'loadData',
    'globalFunctionality',
    'text!templates/template-about/template-about.html'
    ], 
    
    function($, _, Backbone, LoadData, GlobalFunctionality, template) {

    /**
     * LandingView definition.
     */
    var LandingView = Backbone.View.extend({
        orderNumber : 6,

        /**
         * Method that initialize the LandingView.
         */
        initialize : function() {
           
        },
        /**
         * Render method of LandingView.
         */
        render : function(element) {

            LoadData.loadJSON('about',this.onLoaded);
            $el = element;

        },
        /**
         * When JSON loaded attach to template
         */
        onLoaded : function(data) {
            this.compiledTemplate = _.template(template, data);
            $el.append(this.compiledTemplate);

            GlobalFunctionality.loadSlides($('#slides'));
            GlobalFunctionality.showMenuSelected($("#menuItem6"));
            GlobalFunctionality.navigateToNextPage("#template7");
            GlobalFunctionality.navigateToPrevPage("#template5");
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
