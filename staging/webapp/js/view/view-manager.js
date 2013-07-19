/**
 * view-manager.js
 * File the manage the views instances.
 */

define([
        'jquery',       
        'backbone'        
        ], 
    function($, Backbone) {
		
		var ViewManager = Backbone.Model.extend({
			
			defaults: {
                currentView:null
			},
	
			/**
			 * Method that initialize the view manager instance.
			 */
			initialize: function() {
            },


            showView : function(view){
                if (this.currentView && view != this.currentView){
                    this.currentView.close();
                }
                if (view.navigationType == 'home'){
                    console.log("home");
                }
                
                this.currentView = view;
                this.currentView.render();

                  $("#backbone-wrapper").html(this.currentView.el);
              }     
		});

		
		return ViewManager;
	});