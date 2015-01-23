
/*
$Lazy load
Lazy Load - jQuery plugin for lazy loading images

Copyright (c) 2007-2013 Mika Tuupola

Licensed under the MIT license:
http://www.opensource.org/licenses/mit-license.php

Project home:
http://www.appelsiini.net/projects/lazyload

Version:  1.9.3
 */

(function() {
  (function($, window, document, undefined_) {
    var $window;
    $window = $(window);
    $.fn.lazyload = function(options) {
      var $container, elements, settings, update;
      update = function() {
        var counter;
        counter = 0;
        return elements.each(function() {
          var $this;
          $this = $(this);
          if (settings.skip_invisible && !$this.is(":visible")) {
            return;
          }
          if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {

          } else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
            $this.trigger("appear");
            return counter = 0;
          } else {
            if (++counter > settings.failure_limit) {
              return false;
            }
          }
        });
      };
      elements = this;
      $container = void 0;
      settings = {
        threshold: 0,
        failure_limit: 0,
        event: "scroll",
        effect: "show",
        container: window,
        data_attribute: "src",
        skip_invisible: true,
        appear: null,
        load: null,
        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
      };
      if (options) {
        if (undefined !== options.failurelimit) {
          options.failure_limit = options.failurelimit;
          delete options.failurelimit;
        }
        if (undefined !== options.effectspeed) {
          options.effect_speed = options.effectspeed;
          delete options.effectspeed;
        }
        $.extend(settings, options);
      }
      $container = (settings.container === undefined || settings.container === window ? $window : $(settings.container));
      if (0 === settings.event.indexOf("scroll")) {
        $container.bind(settings.event, function() {
          return update();
        });
      }
      this.each(function() {
        var $self, self;
        self = this;
        $self = $(self);
        self.loaded = false;
        if ($self.attr("src") === undefined || $self.attr("src") === false) {
          if ($self.is("img")) {
            $self.attr("src", settings.placeholder);
          }
        }
        $self.one("appear", function() {
          var elements_left;
          if (!this.loaded) {
            if (settings.appear) {
              elements_left = elements.length;
              settings.appear.call(self, elements_left, settings);
            }
            return $("<img />").bind("load", function() {
              var original, temp;
              original = $self.attr("data-" + settings.data_attribute);
              $self.hide();
              if ($self.is("img")) {
                $self.attr("src", original);
              } else {
                $self.css("background-image", "url('" + original + "')");
              }
              $self[settings.effect](settings.effect_speed);
              self.loaded = true;
              temp = $.grep(elements, function(element) {
                return !element.loaded;
              });
              elements = $(temp);
              if (settings.load) {
                elements_left = elements.length;
                return settings.load.call(self, elements_left, settings);
              }
            }).attr("src", $self.attr("data-" + settings.data_attribute));
          }
        });
        if (0 !== settings.event.indexOf("scroll")) {
          return $self.bind(settings.event, function() {
            if (!self.loaded) {
              return $self.trigger("appear");
            }
          });
        }
      });
      $window.bind("resize", function() {
        return update();
      });
      if (/(?:iphone|ipod|ipad).*os 5/g.test(navigator.appVersion)) {
        $window.bind("pageshow", function(event) {
          if (event.originalEvent && event.originalEvent.persisted) {
            return elements.each(function() {
              return $(this).trigger("appear");
            });
          }
        });
      }
      $(document).ready(function() {
        return update();
      });
      return this;
    };
    $.belowthefold = function(element, settings) {
      var fold;
      fold = void 0;
      if (settings.container === undefined || settings.container === window) {
        fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
      } else {
        fold = $(settings.container).offset().top + $(settings.container).height();
      }
      return fold <= $(element).offset().top - settings.threshold;
    };
    $.rightoffold = function(element, settings) {
      var fold;
      fold = void 0;
      if (settings.container === undefined || settings.container === window) {
        fold = $window.width() + $window.scrollLeft();
      } else {
        fold = $(settings.container).offset().left + $(settings.container).width();
      }
      return fold <= $(element).offset().left - settings.threshold;
    };
    $.abovethetop = function(element, settings) {
      var fold;
      fold = void 0;
      if (settings.container === undefined || settings.container === window) {
        fold = $window.scrollTop();
      } else {
        fold = $(settings.container).offset().top;
      }
      return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };
    $.leftofbegin = function(element, settings) {
      var fold;
      fold = void 0;
      if (settings.container === undefined || settings.container === window) {
        fold = $window.scrollLeft();
      } else {
        fold = $(settings.container).offset().left;
      }
      return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };
    $.inviewport = function(element, settings) {
      return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    return $.extend($.expr[":"], {
      "below-the-fold": function(a) {
        return $.belowthefold(a, {
          threshold: 0
        });
      },
      "above-the-top": function(a) {
        return !$.belowthefold(a, {
          threshold: 0
        });
      },
      "right-of-screen": function(a) {
        return $.rightoffold(a, {
          threshold: 0
        });
      },
      "left-of-screen": function(a) {
        return !$.rightoffold(a, {
          threshold: 0
        });
      },
      "in-viewport": function(a) {
        return $.inviewport(a, {
          threshold: 0
        });
      },
      "above-the-fold": function(a) {
        return !$.belowthefold(a, {
          threshold: 0
        });
      },
      "right-of-fold": function(a) {
        return $.rightoffold(a, {
          threshold: 0
        });
      },
      "left-of-fold": function(a) {
        return !$.rightoffold(a, {
          threshold: 0
        });
      }
    });
  })(jQuery, window, document);

}).call(this);
