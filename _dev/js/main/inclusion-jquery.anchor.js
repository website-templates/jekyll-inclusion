(function() {
  (function($, window, document, undefined_) {
    "use strict";
    return $.fn.anchorScroll = function() {
      var $this;
      $this = this;
      $this.click(function() {
        var anchor, target, targetOffset, windowScroll;
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
          anchor = $(this.hash);
          target = (anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]"));
          targetOffset = target.offset().top;
          windowScroll = $(window).scrollTop();
          if (Math.abs(targetOffset - windowScroll) > 20) {
            if (target.length) {
              $("html,body").animate({
                scrollTop: targetOffset
              }, 1000);
              return false;
            }
          }
        }
      });
      return this;
    };
  })(jQuery, window, document);

}).call(this);
