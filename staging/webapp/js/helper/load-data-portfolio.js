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
    var LoadDataPortfolio = {

        itemsCount : null,
        filteredCategoriesSlug : [],
        filteredCategoriesTitle : [],
        postsObject : {},

        loadJSON : function(callback) {

            var domain = window.location.origin,
                url = 'http://cultpartners.com/wordpress/?json=get_category_posts&slug=projects',
                self = this;

            $.ajax({
                url: url,
                type:'GET',
                dataType:'JSONP',
                success: function(data){

                    var _categoriesTitleArray = [],
                        _categoriesSlugArray = [];

                    //get all the categories
                    $(data.posts).each(function( index ) {
                        _categoriesTitleArray.push(data.posts[index].categories[0].title);
                        _categoriesSlugArray.push(data.posts[index].categories[0].slug);
                    });

                    //filter array to show unique categories
                    self.filteredCategoriesTitle = _categoriesTitleArray.filter(function(itm,i,a){
                        return i == a.indexOf(itm);
                    });
                    self.filteredCategoriesSlug = _categoriesSlugArray.filter(function(itm,i,a){
                        return i == a.indexOf(itm);
                    });

                    $(self.filteredCategoriesSlug).each(function( index ) {
                        $.ajax({
                            url: 'http://cultpartners.com/wordpress/?json=get_category_posts&slug='+self.filteredCategoriesSlug[index],
                            type: 'GET',
                            dataType: 'JSONP',
                            success: function(data){
                                $(data.posts).each(function( i ) {

                                    self.postsObject.categoriesSlug = self.filteredCategoriesSlug[index];
                                    self.postsObject.categoriesTitle = self.filteredCategoriesTitle[index];
                                    self.postsObject.title = data.posts[i].title;

                                    callback(self.postsObject);

                                })

                            }
                        })
                    });

                }
            });
        }
    };
    return LoadDataPortfolio;
});



