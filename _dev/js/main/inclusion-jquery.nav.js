(function() {
  (function($, window, document, undefined_) {
    var NavKit, defaults;
    NavKit = function(element, options) {
      this.options = $.extend({}, defaults, options);
      this.element = element;
      return this.init();
    };
    defaults = {
      navAnchor: "js-anchor",
      navLink: "js-link",
      navIcon: "js-navtoggle",
      iconOpen: "is-open",
      activeLink: "is-active",
      state: "closed"
    };
    NavKit.prototype.init = function() {
      var $navAnchor, $navIcon, $navLink, $this, aArray, ahref, cond, i, link, navHeight;
      $this = $(this.element);
      $navAnchor = $("." + this.options.navAnchor);
      $navLink = $("." + this.options.navLink);
      $navIcon = $("." + this.options.navIcon);
      cond = this.options.state;
      navHeight = $this.show().height();
      aArray = [];
      i = void 0;
      if (!cond || cond === "closed") {
        $this.slideToggle();
        $navIcon.show();
      } else {
        $navIcon.show().addClass(this.options.iconOpen);
      }
      $navIcon.on("click", $.proxy(function(e) {
        e.preventDefault();
        $navIcon.toggleClass(this.options.iconOpen);
        return $this.slideToggle();
      }, this));
      $navAnchor.click(function() {
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
      i = 0;
      while (i < $navLink.length) {
        link = $navLink[i];
        ahref = $(link).attr("href");
        aArray.push(ahref);
        i += 1;
      }
      return $(window).scroll($.proxy(function() {
        var $firstSection, docHeight, sectHeight, sectPos, theID, windowHeight, windowPos;
        windowPos = $(window).scrollTop();
        windowHeight = $(window).height();
        docHeight = $(document).height();
        $firstSection = $("section").eq(0);
        i = 0;
        while (i < aArray.length) {
          theID = aArray[i];
          sectPos = $(theID).offset().top - navHeight;
          sectHeight = $(theID).height();
          if (windowPos >= sectPos && windowPos < (sectPos + sectHeight)) {
            $navLink.filter("[href='" + theID + "']").addClass(this.options.activeLink);
          } else {
            $navLink.filter("[href='" + theID + "']").removeClass(this.options.activeLink);
          }
          i += 1;
        }
        if (windowPos + windowHeight === docHeight) {
          if (!$this.find("li").filter(":last-child").find($navLink).hasClass(this.options.activeLink)) {
            $navLink.filter("." + this.options.activeLink).removeClass(this.options.activeLink);
            $this.find("li").filter(":last-child").find($navLink).addClass(this.options.activeLink);
          }
        }
        if (windowPos < $firstSection.offset().top) {
          if (!$this.find("li").filter(":first-child").find($navLink).hasClass(this.options.activeLink)) {
            $navLink.filter("." + this.options.activeLink).removeClass(this.options.activeLink);
            return $this.find("li").filter(":first-child").find($navLink).addClass(this.options.activeLink);
          }
        }
      }, this));
    };
    return $.fn.navKit = function(options) {
      return this.each(function() {
        return new NavKit(this, options);
      });
    };
  })(jQuery, window, document);

}).call(this);
