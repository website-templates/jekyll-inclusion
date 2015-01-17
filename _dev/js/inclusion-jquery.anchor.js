/* 
 * jQuery anchorScroll plugin for smooth scrollin to anchor, fallback script for pages without general nav but with standalone anchor links 
 */
;(function( $, window, document, undefined ) {  
  'use strict';
  $.fn.anchorScroll = function(){
    var $this = this;

    // Smooth anchor scroll, targeted to our nav anchors 
    // Actually this thing was modified on csstricks
      $this.click(function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && 
            location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
            $("html,body").animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });   
    return this;
  };         
})( jQuery, window, document );