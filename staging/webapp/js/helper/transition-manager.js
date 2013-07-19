/**
 * transition-manager.js
 * Manages the transitions between the views 
 */

define([
    'jquery'
    ],

    function($) {

    var TransitionManager = {
       
        viewsWrapperId : "#backbone-wrapper",
        prevContainerId : "#prevContainer",
        nextContainerId : "#nextContainer", 
        containerId : "#container",
        transitionTimeBetweenViews : 1000,
        prevContainerBasicContent : "<div id='prevContainer'></div>",
        nextContainerBasicContent : "<div id='nextContainer'></div>",

        changeView : function( currentView , newView) {
            if (currentView){
                var currentContainer = $(this.containerId); 
                thisHelper = this;

                var prevContainer = $(this.prevContainerId);
                newView.render(prevContainer);


                currentContainer.animate({"opacity": '0'}, this.transitionTimeBetweenViews,function(){
                    prevContainer.animate({"opacity": '1'}, this.transitionTimeBetweenViews);
                    currentContainer.unbind();
                    currentContainer.remove(); 
                    currentView.remove();
                    prevContainer.attr("id","container");
                    $(thisHelper.viewsWrapperId).prepend(thisHelper.prevContainerBasicContent);
                    newView.setElement($(thisHelper.containerId));
                });

                /*
                if (newView.orderNumber < currentView.orderNumber ){
                    
                    var prevContainer = $(this.prevContainerId);
                    newView.render(prevContainer);

                    prevContainer.animate({"opacity": '1'}, this.transitionTimeBetweenViews,function(){
                        currentContainer.animate({"opacity": '0'}, this.transitionTimeBetweenViews);
                        currentContainer.unbind();
                        currentContainer.remove(); 
                        currentView.remove();
                        prevContainer.attr("id","container");
                        $(thisHelper.viewsWrapperId).prepend(thisHelper.prevContainerBasicContent);
                        newView.setElement($(thisHelper.containerId));

                    });
                }
                else if (newView.orderNumber > currentView.orderNumber ){
                    
                    var nextContainer = $(this.nextContainerId);
                    newView.render(nextContainer);
                    currentContainer.animate({"opacity": '0'}, this.transitionTimeBetweenViews,function(){
                        currentContainer.animate({"opacity": '1'}, this.transitionTimeBetweenViews);
                        currentContainer.unbind();
                        currentContainer.remove(); 
                        currentView.remove();
                        nextContainer.attr("id","container");
                        $(thisHelper.viewsWrapperId).append(thisHelper.nextContainerBasicContent);
                        newView.setElement($(thisHelper.containerId));
                    });
                }
                */
            }
            else{
                newView.render($(this.containerId));
            }
        }
    };
    return TransitionManager;
});