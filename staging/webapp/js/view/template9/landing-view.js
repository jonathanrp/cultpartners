/**
 * landing-view.js
 * File that defines the View for Desing section.
 * This file uses the Design template in templates/design/design.html
 */

define([
    'jquery', 
    'underscore', 
    'backbone', 
    'loadDataPortfolio',
    'globalFunctionality',
    'text!templates/template9/template9.html'
    ], 
    
    function($, _, Backbone, LoadDataPortfolio, GlobalFunctionality, template) {

    /**
     * LandingView definition.
     */
    var LandingView = Backbone.View.extend({
        orderNumber : 9,

        /**
         * Method that initialize the LandingView.
         */
        initialize : function() {
           
        },
        /**
         * Render method of LandingView.
         */
        render : function(element) {

            LoadDataPortfolio.loadJSON(this.onLoaded);
            $el = element;

        },
        /**
         * When JSON loaded attach to template
         */
        onLoaded : function(data) {
            //this.compiledTemplate = _.template(template, data);
            //$el.append(this.compiledTemplate);
            console.log(data);
        },
        
        /**
         * Events associated with the elements in home template.
         */
        events : {

        }
    });

    return LandingView;
});
