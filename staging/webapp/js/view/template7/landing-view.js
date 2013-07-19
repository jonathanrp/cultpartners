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
    'text!templates/template-people/template-people.html'
    ], 
    
    function($, _, Backbone, LoadData, GlobalFunctionality, template) {

    /**
     * LandingView definition.
     */
    var LandingView = Backbone.View.extend({
        orderNumber : 7,

        /**
         * Method that initialize the LandingView.
         */
        initialize : function() {
           
        },
        /**
         * Render method of LandingView.
         */
        render : function(element) {

            LoadData.loadJSON('people',this.onLoaded);
            $el = element;

        },
        /**
         * When JSON loaded attach to template
         */
        onLoaded : function(data) {
            this.compiledTemplate = _.template(template, data);
            $el.append(this.compiledTemplate);

            GlobalFunctionality.loadSlides($('#slides'));
            GlobalFunctionality.showMenuSelected($("#menuItem7"));
            GlobalFunctionality.navigateToNextPage("#template8");
            GlobalFunctionality.navigateToPrevPage("#template6");
            GlobalFunctionality.addCustomNavPeople();

            $('.peopleLink').on('click', function(e){
                e.preventDefault();
                var index = parseFloat($(this).attr("data-index")) + 1;

                $('.slidesjs-pagination li a').eq(index).click();
                $('#customNavPrevBlock').fadeOut();

                if(index == LoadData.getLastItem()){
                    $('#customNavNextBlock').fadeIn();
                }

            })

        },
        
        /**
         * Events associated with the elements in home template.
         */
        events : {

        }
    });

    return LandingView;
});
