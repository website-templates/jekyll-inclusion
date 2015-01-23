(function() {
  (function($, window, document, undefined_) {
    var SimpleSpoiler, defaults;
    SimpleSpoiler = function(element, options) {
      this.options = $.extend({}, defaults, options);
      this.element = element;
      return this.init();
    };
    defaults = {
      spoilerPanel: "js-panel",
      spoilerClosed: "is-closed",
      state: "closed"
    };
    SimpleSpoiler.prototype.init = function() {
      var $spoilerPanel, $this, cond;
      $this = $(this.element);
      $spoilerPanel = $this.find("." + this.options.spoilerPanel);
      cond = this.options.state;
      if ((!cond || cond === "closed") && (!($this.hasClass(this.options.spoilerClosed)))) {
        $this.addClass(this.options.spoilerClosed);
      }
      return $spoilerPanel.on("click", $.proxy(function(e) {
        e.preventDefault();
        return $this.toggleClass(this.options.spoilerClosed);
      }, this));
    };
    return $.fn.simpleSpoiler = function(options) {
      return this.each(function() {
        return new SimpleSpoiler(this, options);
      });
    };
  })(jQuery, window, document);

}).call(this);
