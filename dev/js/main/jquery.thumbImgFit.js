(function() {
  (function($, window, document) {
    var ThumbImgFit, defaults;
    defaults = {
      thumb: 'js-thumb',
      thumbImg: 'js-thumb-img',
      thumbImgHor: 'is-horizontal',
      thumbImgVer: 'is-vertical'
    };
    ThumbImgFit = function(element, options) {
      this.options = $.extend({}, defaults, options);
      this.element = element;
      this.init();
    };
    ThumbImgFit.prototype.init = function() {
      var $this, $thumb, $thumbImg, thumbAspect, thumbImgAspect;
      $this = $(this.element);
      $thumb = $this.parent('.' + this.options.thumb);
      $thumbImg = $('.' + this.options.thumbImg);
      thumbAspect = $thumb.outerWidth() / $thumb.outerHeight();
      thumbImgAspect = $this.outerWidth() / $this.outerHeight();
      if (thumbImgAspect >= thumbAspect) {
        $this.addClass(this.options.thumbImgHor);
      } else if (thumbImgAspect < thumbAspect) {
        $this.addClass(this.options.thumbImgVer);
      }
    };
    $.fn.thumbImgFit = function(options) {
      return this.each(function() {
        new ThumbImgFit(this, options);
      });
    };
  })(jQuery, window, document);

}).call(this);
