/**
 * menu-helper.js
 * helps the rendering of the sub menu
 */

define([
    'jquery'
    ],

    function($) {

    /**
     * LandingView definition.
     */
    var LoadData = {

        itemsCount : null,

        getLastItem : function () {
            return this.itemsCount;
        },

        loadJSON : function(category,callback) {

            var domain = window.location.origin,
                url = 'http://cultpartners.com/wordpress/?json=get_category_posts&slug='+category,
                $loadingIcon = $('#loadingIcon');
                self = this;

                $loadingIcon.fadeIn();

            $.ajax({
                url: url,
                type:'GET',
                dataType:'JSONP',
                success: function(data){

                    self.itemsCount = data.count;

                    $loadingIcon.fadeOut();

                    if(data.status == 'error'){
                        console.log("ERROR: No data available, check category name");
                    }else{
                        posts = $.map(data.posts, function(post,i){

                            if(post.thumbnail_images){
                                return {
                                    title : post.title,
                                    content : post.content,
                                    thumb : post.thumbnail_images.full.url,
                                    index : i
                                }
                            }else{
                                console.log("ERROR: Missing Featured Image")
                                return {
                                    title : post.title,
                                    content : post.content,
                                    thumb : 'http://cultpartners.com/img/missing-image.jpg',
                                    index : i
                                }
                            }

                        });
                        //Call onLoaded function once data is loaded and mapped
                        callback(posts);
                    }

                }
            });
        }
    };
    return LoadData;
});



