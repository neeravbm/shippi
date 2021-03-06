/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio, E-commerce and Blog Theme.
 * Version: 1.7
 * Author: @htmlstream
 * Website: http://htmlstream.com
*/


var App = function () {

    //Fixed Header
    function handleHeader() {
         jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop()){
                jQuery(".header-fixed .header-sticky").addClass("header-fixed-shrink");
            }
            else {
                jQuery(".header-fixed .header-sticky").removeClass("header-fixed-shrink");
            }
        });
    }

    //Header Mega Menu
    function handleMegaMenu() {
        jQuery(document).on('click', '.mega-menu .dropdown-menu', function(e) {
            e.stopPropagation();
        })
    }


    //Search Box v1 (Header v5)
    function handleSearchV1() {
        jQuery('.header-v5 .search-button').click(function () {
            jQuery('.header-v5 .search-open').slideDown();
        });

        jQuery('.header-v5 .search-close').click(function () {
            jQuery('.header-v5 .search-open').slideUp();
        });

        jQuery(window).scroll(function(){
          if(jQuery(this).scrollTop() > 1) jQuery('.header-v5 .search-open').fadeOut('fast');
        });
    }

    // Search Box v2 (Header v8)
    function handleSearchV2() {
        jQuery(".blog-topbar .search-btn").on("click", function() {
          if (jQuery(".topbar-search-block").hasClass("topbar-search-visible")) {
            jQuery(".topbar-search-block").slideUp();
            jQuery(".topbar-search-block").removeClass("topbar-search-visible");
          } else {
            jQuery(".topbar-search-block").slideDown();
            jQuery(".topbar-search-block").addClass("topbar-search-visible");
          }
        });
        jQuery(".blog-topbar .search-close").on("click", function() {
          jQuery(".topbar-search-block").slideUp();
          jQuery(".topbar-search-block").removeClass("topbar-search-visible");
        });
        jQuery(window).scroll(function() {
          jQuery(".topbar-search-block").slideUp();
          jQuery(".topbar-search-block").removeClass("topbar-search-visible");
        });
    }

    // TopBar (Header v8)
    function handleTopBar() {
        jQuery(".topbar-toggler").on("click", function() {
          if (jQuery(".topbar-toggler").hasClass("topbar-list-visible")) {
            jQuery(".topbar-menu").slideUp();
            jQuery(this).removeClass("topbar-list-visible");
          } else {
            jQuery(".topbar-menu").slideDown();
            jQuery(this).addClass("topbar-list-visible");
          }
        });
    }

    // TopBar SubMenu (Header v8)
    function handleTopBarSubMenu() {
        jQuery(".topbar-list > li").on("click", function(e) {
          if (jQuery(this).children("ul").hasClass("topbar-dropdown")) {
            if (jQuery(this).children("ul").hasClass("topbar-dropdown-visible")) {
              jQuery(this).children(".topbar-dropdown").slideUp();
              jQuery(this).children(".topbar-dropdown").removeClass("topbar-dropdown-visible");
            } else {
              jQuery(this).children(".topbar-dropdown").slideDown();
              jQuery(this).children(".topbar-dropdown").addClass("topbar-dropdown-visible");
            }
          }
          //e.preventDefault();
        });
    }

    //Sidebar Navigation Toggle
    function handleToggle() {
        jQuery('.list-toggle').on('click', function() {
            jQuery(this).toggleClass('active');
        });

        /*
        jQuery('#serviceList').on('shown.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
        }

        jQuery('#serviceList').on('hidden.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
        }
        */
    }

    //Equal Height Columns
    function handleEqualHeightColumns() {
        var EqualHeightColumns = function () {
            jQuery(".equal-height-columns").each(function() {
                heights = [];
                jQuery(".equal-height-column", this).each(function() {
                    jQuery(this).removeAttr("style");
                    heights.push(jQuery(this).height()); // write column's heights to the array
                });
                jQuery(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
            });
        }

        EqualHeightColumns();
        jQuery(window).resize(function() {
            EqualHeightColumns();
        });
        jQuery(window).load(function() {
            EqualHeightColumns("img.equal-height-column");
        });
    }

    //Hover Selector
    function handleHoverSelector() {
        jQuery('.hoverSelector').on('hover', function(e) {
            jQuery('.hoverSelectorBlock', this).toggleClass('show');
            e.stopPropagation();
        });
    }

    //Bootstrap Tooltips and Popovers
    function handleBootstrap() {
        /*Bootstrap Carousel*/
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });

        /*Tooltips*/
        jQuery('.tooltips').tooltip();
        jQuery('.tooltips-show').tooltip('show');
        jQuery('.tooltips-hide').tooltip('hide');
        jQuery('.tooltips-toggle').tooltip('toggle');
        jQuery('.tooltips-destroy').tooltip('destroy');

        /*Popovers*/
        jQuery('.popovers').popover();
        jQuery('.popovers-show').popover('show');
        jQuery('.popovers-hide').popover('hide');
        jQuery('.popovers-toggle').popover('toggle');
        jQuery('.popovers-destroy').popover('destroy');
    }

    return {

        init: function () {
            handleBootstrap();
            handleSearch();
            handleSearchV1();
            handleSearchV2();
            handleTopBar();
            handleTopBarSubMenu();
            handleToggle();
            handleHeader();
            handleMegaMenu();
            handleHoverSelector();
            handleEqualHeightColumns();
        },

        //Counters
        //initCounter: function () {
        //    jQuery('.counter').counterUp({
        //        delay: 10,
        //        time: 1000
        //    });
        //},

        //Parallax Backgrounds
        initParallaxBg: function () {
            jQuery(window).load(function() {
                jQuery('.parallaxBg').parallax("50%", 0.2);
                jQuery('.parallaxBg1').parallax("50%", 0.4);
            });
        },

        //Scroll Bar
        initScrollBar: function () {
            jQuery('.mCustomScrollbar').mCustomScrollbar({
                theme:"minimal",
                scrollInertia: 200,
                scrollEasing: "linear"
            });
        },

        // Sidebar Menu Dropdown
        initSidebarMenuDropdown: function() {
          function SidebarMenuDropdown() {
            jQuery('.header-v7 .dropdown-toggle').on('click', function() {
              jQuery('.header-v7 .dropdown-menu').stop(true, false).slideUp();
              jQuery('.header-v7 .dropdown').removeClass('open');

              if (jQuery(this).siblings('.dropdown-menu').is(":hidden") == true) {
                jQuery(this).siblings('.dropdown-menu').stop(true, false).slideDown();
                jQuery(this).parents('.dropdown').addClass('open');
              }
            });
          }
          SidebarMenuDropdown();
        },

        //Animate Dropdown
        initAnimateDropdown: function() {
          function MenuMode() {
            jQuery('.dropdown').on('show.bs.dropdown', function() {
              jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
            });
            jQuery('.dropdown').on('hide.bs.dropdown', function() {
              jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            });
          }

          jQuery(window).resize(function() {
            if (jQuery(window).width() > 768) {
              MenuMode();
            }
          });

          if (jQuery(window).width() > 768) {
            MenuMode();
          }
        },

    };

}();

//Counters
function counter() {
    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}

counter();

//Parrallax Background.

//Parallax Backgrounds
function parralaxBg() {
    jQuery(window).load(function() {
        jQuery('.parallaxBg').parallax("50%", 0.2);
        jQuery('.parallaxBg1').parallax("50%", 0.4);
    });
}

parralaxBg();

//Vertical Progress-bar
function progressVertical() {
    jQuery(document).ready(function () {
        jQuery('.progress').each(function () {
            jQuery(this).appear(function() {
                jQuery(this).animate({opacity:1,left:"0px"},800);
                var b = jQuery(this).find(".progress-bar").attr("data-height");
                jQuery(this).find(".progress-bar").animate({
                    height: b + "%"
                }, 100, "linear");
            });
        });
    });
}

progressVertical();

//Bootstrap Tooltips and Popovers
function handleBootstrap() {
    jQuery(document).ready(function (){
        /*Tooltips*/
        jQuery('.tooltips').tooltip();
        jQuery('.tooltips-show').tooltip('show');
        jQuery('.tooltips-hide').tooltip('hide');
        jQuery('.tooltips-toggle').tooltip('toggle');
        jQuery('.tooltips-destroy').tooltip('destroy');
    });
}
//handleBootstrap();


//Search Box (Header)
function handleSearch() {
    jQuery('.search').click(function () {
        if(jQuery('.search-btn').hasClass('fa-search')){
            jQuery('.search-open').fadeIn(500);
            jQuery('.search-btn').removeClass('fa-search');
            jQuery('.search-btn').addClass('fa-times');
        } else {
            jQuery('.search-open').fadeOut(500);
            jQuery('.search-btn').addClass('fa-search');
            jQuery('.search-btn').removeClass('fa-times');
        }
        jQuery()
    });
}

handleSearch();