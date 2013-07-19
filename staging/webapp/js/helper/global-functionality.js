/**
 * menu-helper.js
 * helps the rendering of the sub menu
 */

define([
    'jquery',
    'loadData',
    'jquerySlides'
    ],

    function($, LoadData, jquerySlides) {

    /**
     * LandingView definition.
     */
    var GlobalFunctionality = {

        currentSlide : null,
        $nextBlock : $('#customNavNextBlock'),
        $prevBlock : $('#customNavPrevBlock'),
        $prevArrow : $('#customNavPrev'),
        $nextArrow : $('#customNavNext'),
        
        loadSlides : function(element) {

            var self = this;

            element.slidesjs({
                width: 1200,
                height: 900,

                effect: {
                  slide: {
                    speed: 800
                  }
                },

                pagination: {
                  active: true
                },

                callback: {
                  loaded: function() {
                    self.currentSlide = 1;
                    $('.customNavButton').fadeIn(0);
                    //self.addCustomNav();
                    self.hideBlockNavRight();
                    self.showBlockOnSingleItem();
                    self.showBlockPrevOnFirstItem();

                  },
                  complete: function(number) {

                    self.currentSlide = number;

                  }
                }
            });
        },

        addCustomNav : function(){
            var self =  this;

            this.$prevArrow.off();
            this.$prevArrow.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.slidesjs-previous').click();

                //console.log("actual: " + self.currentSlide);
                //console.log("total: " + LoadData.getLastItem());

                //Adds prevBlock when back to the first
                if(self.currentSlide == 2){
                    self.$prevBlock.fadeIn(0);
                }

                //Removes nextBlock on the peniltimate
                if(self.currentSlide == LoadData.getLastItem()){
                    self.$nextBlock.fadeOut(0);
                }

            })
            this.$nextArrow.off();
            this.$nextArrow.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.slidesjs-next').click();

                self.showBlockNextOnLastItem();
                self.hideBlockNavLeft();

                //console.log("actual: " + self.currentSlide);
                //console.log("total: " + LoadData.getLastItem());

            })
        },

        addCustomNavHome : function(){
            var self =  this;

            this.$prevArrow.fadeOut(0);
            this.$prevBlock.fadeOut(0);

            this.$prevArrow.off();
            this.$prevArrow.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.slidesjs-previous').click();

                //console.log("actual: " + self.currentSlide);
                //console.log("total: " + LoadData.getLastItem());

                //Adds prevBlock when back to the first
                if(self.currentSlide == 2){
                    self.$prevBlock.fadeIn(0);
                }

                if(self.currentSlide == 2){
                    self.$prevArrow.fadeOut();
                    self.$prevBlock.fadeIn(0);
                }

                //Removes nextBlock on the peniltimate
                if(self.currentSlide == LoadData.getLastItem()){
                    self.$nextBlock.fadeOut(0);
                }

            })
            this.$nextArrow.off();
            this.$nextArrow.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.slidesjs-next').click();

                self.showBlockNextOnLastItem();
                self.hideBlockNavLeft();

                if(self.currentSlide == 1){
                    self.$prevArrow.fadeIn();
                }

                //console.log("actual: " + self.currentSlide);
                //console.log("total: " + LoadData.getLastItem());

            })
        },

        addCustomNavPeople : function(){
            var self =  this;

            this.$prevArrow.off();
            this.$prevArrow.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.slidesjs-previous').click();

                //console.log("actual: " + self.currentSlide);
                //console.log("total: " + LoadData.getLastItem());

                //Adds prevBlock when back to the first
                if(self.currentSlide == 2){
                    self.$prevBlock.fadeIn(0);
                }

                //Removes nextBlock on the peniltimate
                if(self.currentSlide == LoadData.getLastItem()+1){
                    self.$nextBlock.fadeOut(0);
                }

            })

            this.$nextArrow.off();
            this.$nextArrow.on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.slidesjs-next').click();

                //self.showBlockNextOnLastItem();
                if(self.currentSlide == LoadData.getLastItem()){
                    self.$nextBlock.fadeIn();
                }
                self.hideBlockNavLeft();

                //console.log("actual: " + self.currentSlide);
                //console.log("total: " + LoadData.getLastItem());

            })
        },

        showBlockNextOnLastItem : function(){
            if(this.currentSlide == LoadData.getLastItem()-1){
                this.$nextBlock.fadeIn();
            }
        },

        showBlockPrevOnFirstItem : function(){
            if(this.currentSlide == 1){
                this.$prevBlock.fadeIn();
            }
        },

        showBlockOnSingleItem : function() {
            if(LoadData.getLastItem() == 1){
                this.$nextBlock.fadeIn();
            }
        },

        navigateToNextPage : function(destiny){
            this.$nextBlock.on('click', function(e){
                e.preventDefault();
                window.location.href = destiny;
            })
        },

        navigateToPrevPage : function(destiny){
            this.$prevBlock.on('click', function(e){
                e.preventDefault();
                window.location.href = destiny;
            })
        },

        hideBlockNavRight : function(){
            this.$nextBlock.fadeOut(0);
        },

        hideBlockNavLeft : function(){
            this.$prevBlock.fadeOut(0);
        },

        hideHomePrev : function(){
            this.$prevArrow.fadeOut();
        },

        showMenuSelected : function(element){
            $("#menu a").removeClass("menuSelected");
            element.addClass("menuSelected");
        }

    };
    return GlobalFunctionality;
});



