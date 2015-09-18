(function() {
  (function($, window, document, undefined_) {
    var SearchForm, defaults;
    SearchForm = function(element, options) {
      this.options = $.extend({}, defaults, options);
      this.element = element;
      return this.init();
    };
    defaults = {
      searchIcon: "js-searchtoggle",
      state: "closed"
    };
    SearchForm.prototype.init = function() {
      var $searchIcon, $this, cond;
      $this = $(this.element);
      $searchIcon = $("." + this.options.searchIcon);
      cond = this.options.state;
      if (!cond || cond === "closed") {
        $this.slideToggle();
        $searchIcon.show();
      }
      return $searchIcon.on("click", $.proxy(function(e) {
        e.preventDefault();
        return $this.slideToggle();
      }, this));
    };
    return $.fn.searchForm = function(options) {
      return this.each(function() {
        return new SearchForm(this, options);
      });
    };
  })(jQuery, window, document);

}).call(this);
