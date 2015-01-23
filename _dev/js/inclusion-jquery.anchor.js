(function() {
  (function($, window, document, undefined_) {
    "use strict";
    return $.fn.anchorScroll = function() {
      var $this;
      $this = this;
      $this.click(function() {
        var target;
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
          target = $(this.hash);
          target = (target.length ? target : $("[name=" + this.hash.slice(1) + "]"));
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
  })(jQuery, window, document);

}).call(this);
