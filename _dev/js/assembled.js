/* $Intense
 * Awesome fulscreen image viever by Tim Holman
 * http://tholman.com
 *
 * https://github.com/tholman/intense-images
 * The MIT License (MIT)
*/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame          ||
        window.webkitCancelRequestAnimationFrame    ||
        window.mozCancelRequestAnimationFrame       ||
        window.oCancelRequestAnimationFrame     ||
        window.msCancelRequestAnimationFrame        ||
        clearTimeout
} )();


var Intense = (function() {

    'use strict';

    var KEYCODE_ESC = 27;

    // Track both the current and destination mouse coordinates
    // Destination coordinates are non-eased actual mouse coordinates
    var mouse = { xCurr:0, yCurr:0, xDest: 0, yDest: 0 };

    var horizontalOrientation = true;

    // Holds the animation frame id.
    var looper;
  
    // Current position of scrolly element
    var lastPosition, currentPosition = 0;
    
    var sourceDimensions, target;
    var targetDimensions = { w: 0, h: 0 };
  
    var container;
    var containerDimensions = { w: 0, h:0 };
    var overflowArea = { x: 0, y: 0 };

    // Overflow variable before screen is locked.
    var overflowValue;

    /* -------------------------
    /*          UTILS
    /* -------------------------*/

    //Detect ie
    function isIE () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    // Soft object augmentation
    function extend( target, source ) {

        for ( var key in source )

            if ( !( key in target ) )

                target[ key ] = source[ key ];

        return target;
    }

    // Applys a dict of css properties to an element
    function applyProperties( target, properties ) {

      for( var key in properties ) {
        target.style[ key ] = properties[ key ];
      }
    }

    // Returns whether target a vertical or horizontal fit in the page.
    // As well as the right fitting width/height of the image.
    function getFit( source ) {

      var heightRatio = window.innerHeight / source.h;

      if( (source.w * heightRatio) > window.innerWidth ) {
        return { w: source.w * heightRatio, h: source.h * heightRatio, fit: true };
      } else {
        var widthRatio = window.innerWidth / source.w;
        return { w: source.w * widthRatio, h: source.h * widthRatio, fit: false };
      }
    }

    /* -------------------------
    /*          APP
    /* -------------------------*/

    function startTracking( passedElements ) {

      var i;

      // If passed an array of elements, assign tracking to all.
      if ( passedElements ) {

        // Loop and assign
        for( i = 0; i < passedElements.length; i++ ) {
          track( passedElements[ i ] );
        }

      } else {
          track( passedElements );
      }
    }

    function track( element ) {

      // Element needs a src at minumun.
      if( element.getAttribute( 'data-image') || element.src ) {
        element.addEventListener( 'click', function() {
          init( this );
        }, false );
      }

      // Add some styles to a tracked elements
      var elementProperties = {
        'cursor': 'pointer',
        'webkitTransition': 'opacity 500ms',
        'MozTransition': 'opacity 500ms',
        'transition': 'opacity 500ms',
        'opacity': '1'
      }
      applyProperties( element, elementProperties );
      element.onmouseover = function(){
        this.style.opacity = '0.5';
      }
      element.onmouseout = function(){
        this.style.opacity = '1';
      }
    }
  
    function start() { 
      loop();
    }
   
    function stop() {
      cancelRequestAnimFrame( looper );
    }

    function loop() {
        looper = requestAnimFrame(loop);
        positionTarget();      
    }

    // Lock scroll on the document body.
    function lockBody() {

      overflowValue = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    // Unlock scroll on the document body.
    function unlockBody() {
      document.body.style.overflow = overflowValue;
    }

    function createViewer( title, caption ) {

      /*
       *  Container
       */
      var containerProperties = {
        'backgroundColor': 'rgba(0,0,0,0.8)',
        'width': '100%',
        'height': '100%',
        'position': 'fixed',
        'bottom': '0px',
        'right': '0px',
        'zIndex': '999999',
        'overflow': 'hidden',
        'margin': '0px',
        'padding': '0',
        'webkitTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
        'MozTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
        'transition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
        'opacity': '0'
      }
      var figureProperties= {
        'width': '100%',
        'height': '100%',        
        'overflow': 'auto'
      }

      //for ie9 create wrapper and set scroll for figure     
      if (isIE() && isIE () < 10){
        container = document.createElement( 'div' );
        figure = document.createElement( 'figure' );
        container.appendChild( figure );
        figure.appendChild( target );
        applyProperties( container, containerProperties ); 
        applyProperties( figure, figureProperties );     
      } else{
        container = document.createElement( 'figure' );
        container.appendChild( target );
        applyProperties( container, containerProperties ); 
      }
      

      var imageProperties = {
        'cursor': 'url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAP/SURBVHja5JpLaJ1FFMd/+YoKbSWNCS2aaJuQLmorPjbVlYsW1JK4srk2KuiyECgqRBNTfIAbcSvBhe1OF27Mo01MoWgWVbTWha+NTSmEiig2Si021/p3Mx8ch/uYme/m5hYPzOJ+9zz+/5n73TnnzLRJogHSDzwAPAx0u88dwGb3/RXgN+A8sAwsAueAH4sGbitAYCvwJDAEPARkkfbXgc+AD4EPgF+SUEiKHX2SJiX9ocbJ785nXyye2BV4DRgHbjLPVoEV4HPga+AHYAn4CbjsdDqA24E+YBdwP/AgsAW42fgqA28Crzd6Be6TdLbCrC1IGpG0O2EldzvbBefLypeS7g3xExJoSNI/xvmqpHlJJUntCcD90e58zTvfuVyXdLAogRFvZpYkvSRpWwOA+2Ob873kxRxJJXDEc/SppP1rANwf+10sK0diCRz0HExJ6m8C+Hz0u5hWngglsNMz/EhSdxPB56PbxbbSH0Lge2PwiSPEOo2dDkMu39UjMOG9sPvWEXw+9nkv9ng1Al1GqSxpVNKGFiCwwWEpG3ydlQi8axQ+ltQREeRpSZsj9G+V9EyEfofDlMukT6DTbFZX3MYS6vyos1uMsFl0NkcjbEoOW77JdVoCLxp2C26GQpxOeP8ScwE2c57NKxGrtmDsnrcEvnIPr9Xb+dxoqwA+hMRcFZsJ5zMkM7jmbM7mBO40jn6WtCfA0aE66fHJCjYn69gcCoi7x2HMpSd/AXOZDlzOnhqzWWkl5gN0ewJjTxu7pzJgr8muzwVm4cvAY8BsDZ1HgfeAY8AjNfRmna/lwNgW417/dzmU8D89W6ASm0mIN2R/qhmw3TC6kFCVDtRZiVozP5hgZzFuz4B28+BSYoE/GEliJhG8j7E9AzaZBysFOhyDwPEAvePA4wXiWIybMqAhjaG8TUOTJQOums9bCviaAZ4N0HvO6aaKxfhn5i3JHQXAD0S++KkkLMaVDLhoHvQmODwRCd6SOJFgZzFezFy/Mpe7E2b+QI3vj9V5sQ8krITFeB5JwwmpxF2STtXZpKarbP+V5JTzGZtKDKcmc6UI8KEkSqnJHKZtGJpO48q8SjJVw2aqis1oYEybTn9h64EXEguaMQ/IbELuNNaIguY2SX8nlpTjzu50hM3pSh2GiJKy7DD/p6ifLFDUlyRtjNDfGDlJflH/zo3eVumq1tgauwEaWy/Xay1+28KtxW9CeqO9Ldzc3RHaXh9owfb6QOwBx+EWOuA4/L88YrKnNeV1OORbrXYqE0sASfdIOtPEY9YzgUll9EH3KPAGcMsaHXT/BbwKvLWWVw16Jb0taaWBVw0uO5871vqqgZUuYLhBlz3eB35t9m2Vlrhu8+8ACTOGueBtHrIAAAAASUVORK5CYII=" ) 25 25, no-drop',
        'width': 'auto',
        'maxWidth': 'none'
      }
      applyProperties( target, imageProperties );

      /*
       *  Caption Container
       */
      var captionContainerProperties = {
        'fontFamily': 'Georgia, Times, "Times New Roman", serif',
        'position': 'fixed',
        'bottom': '10px',
        'left': '10px',
        'padding': '20px',
        'color': '#e2e2e2',
        'wordSpacing': '0.2px',
        'webkitFontSmoothing': 'antialiased',
        'textShadow': '1px 1px 1px #555'
      }
      var captionContainer = document.createElement( 'figcaption' );
      applyProperties( captionContainer, captionContainerProperties );

      /*
       *  Caption Title
       */
      if ( title ) {
        var captionTitleProperties = {
          'margin': '0px',
          'padding': '0px',
          'fontWeight': 'normal',
          'fontSize': '40px',
          'letterSpacing': '0.5px',
          'lineHeight': '35px',
          'textAlign': 'left'
        }
        var captionTitle = document.createElement( 'h1' );
        applyProperties( captionTitle, captionTitleProperties );
        captionTitle.innerHTML = title;
        captionContainer.appendChild( captionTitle );
      }

      if ( caption ) {
        var captionTextProperties = {
          'fontFamily': '"Open Sans Condensed", Georgia, Times, "Times New Roman", serif',  
          'margin': '0px',
          'padding': '0px',
          'fontWeight': 'normal',
          'fontSize': '30px',
          'letterSpacing': '0.1px',
          'maxWidth': '500px',
          'textAlign': 'left',
          'background': 'none',
          'marginTop': '5px'
        }
        var captionText = document.createElement( 'h2' );
        applyProperties( captionText, captionTextProperties );
        captionText.innerHTML = caption;
        captionContainer.appendChild( captionText );
      }
      if (isIE() && isIE () < 10){
        figure.appendChild( captionContainer );
      } else{
        container.appendChild( captionContainer );
      }  
      setDimensions();

      mouse.xCurr = mouse.xDest = window.innerWidth / 2;
      mouse.yCurr = mouse.yDest = window.innerHeight / 2;
      
      document.body.appendChild( container );
      setTimeout( function() {
        container.style[ 'opacity' ] = '1';
      }, 10);
    }

    function removeViewer() {

      unlockBody();
      unbindEvents();
      document.body.removeChild( container );
    }

    function setDimensions() {

      // Manually set height to stop bug where 
      var imageDimensions = getFit( sourceDimensions );
      target.width = imageDimensions.w;
      target.height = imageDimensions.h;
      horizontalOrientation = imageDimensions.fit;

      targetDimensions = { w: target.width, h: target.height };
      containerDimensions = { w: window.innerWidth, h: window.innerHeight };
      overflowArea = {x: containerDimensions.w - targetDimensions.w, y: containerDimensions.h - targetDimensions.h};

    }

    function init( element ) {

      var imageSource = element.getAttribute( 'data-image') || element.src;
      var title = element.getAttribute( 'data-title');
      var caption = element.getAttribute( 'alt');
      
      var img = new Image();
      img.onload = function() {

        sourceDimensions = { w: img.width, h: img.height }; // Save original dimensions for later.
        target = this;
        createViewer( title, caption );
        lockBody();
        bindEvents();
        loop();
      }

      img.src = imageSource;
    }

    function bindEvents() {

      container.addEventListener( 'mousemove', onMouseMove,   false );
      container.addEventListener( 'touchmove', onTouchMove,   false );
      window.addEventListener(    'resize',    setDimensions, false );
      window.addEventListener(    'keyup',     onKeyUp,       false );
      target.addEventListener(    'click',     removeViewer,  false );
    }

    function unbindEvents() {

      container.removeEventListener( 'mousemove', onMouseMove,   false );
      container.removeEventListener( 'touchmove', onTouchMove,   false);
      window.removeEventListener(    'resize',    setDimensions, false );
      window.removeEventListener(    'keyup',     onKeyUp,       false );
      target.removeEventListener(    'click',     removeViewer,  false )
    }
  
    function onMouseMove( event ) {

      mouse.xDest = event.clientX;
      mouse.yDest = event.clientY;
    }

    function onTouchMove( event ) {

      event.preventDefault(); // Needed to keep this event firing.
      mouse.xDest = event.touches[0].clientX;
      mouse.yDest = event.touches[0].clientY;
    }

    // Exit on excape key pressed;
    function onKeyUp( event ) {

      event.preventDefault();
      if ( event.keyCode === KEYCODE_ESC ) {
        removeViewer();
      } 
    }
  
    function positionTarget() {

      mouse.xCurr += ( mouse.xDest - mouse.xCurr ) * 0.05;
      mouse.yCurr += ( mouse.yDest - mouse.yCurr ) * 0.05;

      if ( horizontalOrientation === true ) {

        // HORIZONTAL SCANNING
        currentPosition += ( mouse.xCurr - currentPosition );
        if( mouse.xCurr !== lastPosition ) {
          var position = parseFloat( currentPosition / containerDimensions.w );
          position = overflowArea.x * position;
          target.style[ 'webkitTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
          target.style[ 'MozTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
          target.style[ 'msTransform' ] = 'translate3d(' + position + 'px, 0px, 0px)';
          lastPosition = mouse.xCurr;
        }
      } else if ( horizontalOrientation === false ) {

        // VERTICAL SCANNING
        currentPosition += ( mouse.yCurr - currentPosition );
        if( mouse.yCurr !== lastPosition ) {
          var position = parseFloat( currentPosition / containerDimensions.h );
          position = overflowArea.y * position;
          target.style[ 'webkitTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
          target.style[ 'MozTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
          target.style[ 'msTransform' ] = 'translate3d( 0px, ' + position + 'px, 0px)';
          lastPosition = mouse.yCurr;
        }
      }
    }

    function main( element ) {

      // Parse arguments

      if ( !element ) {
        throw 'You need to pass an element!';
      }

      startTracking( element );
    }

    return extend( main, {
        resize: setDimensions,
        start: start,
        stop: stop
    });

})();
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

/** $Prism
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 *
 */
(function(){
// IE etect util    
 function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
if ( !isIE () | isIE () > 8 ) {
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function() {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
        t = self.Prism = {
            util: {
                encode: function(e) {
                    return e instanceof n ? new n(e.type, t.util.encode(e.content)) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                },
                type: function(e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                },
                clone: function(e) {
                    var n = t.util.type(e);
                    switch (n) {
                        case "Object":
                            var r = {};
                            for (var a in e) e.hasOwnProperty(a) && (r[a] = t.util.clone(e[a]));
                            return r;
                        case "Array":
                            return e.slice()
                    }
                    return e
                }
            },
            languages: {
                extend: function(e, n) {
                    var r = t.util.clone(t.languages[e]);
                    for (var a in n) r[a] = n[a];
                    return r
                },
                insertBefore: function(e, n, r, a) {
                    a = a || t.languages;
                    var i = a[e],
                        o = {};
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            if (l == n)
                                for (var s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
                            o[l] = i[l]
                        }
                    return a[e] = o
                },
                DFS: function(e, n) {
                    for (var r in e) n.call(e, r, e[r]), "Object" === t.util.type(e) && t.languages.DFS(e[r], n)
                }
            },
            highlightAll: function(e, n) {
                for (var r, a = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), i = 0; r = a[i++];) t.highlightElement(r, e === !0, n)
            },
            highlightElement: function(r, a, i) {
                for (var o, l, s = r; s && !e.test(s.className);) s = s.parentNode;
                if (s && (o = (s.className.match(e) || [, ""])[1], l = t.languages[o]), l) {
                    r.className = r.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, s = r.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var c = r.textContent;
                    if (c) {
                        var g = {
                            element: r,
                            language: o,
                            grammar: l,
                            code: c
                        };
                        if (t.hooks.run("before-highlight", g), a && self.Worker) {
                            var u = new Worker(t.filename);
                            u.onmessage = function(e) {
                                g.highlightedCode = n.stringify(JSON.parse(e.data), o), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(g.element), t.hooks.run("after-highlight", g)
                            }, u.postMessage(JSON.stringify({
                                language: g.language,
                                code: g.code
                            }))
                        } else g.highlightedCode = t.highlight(g.code, g.grammar, g.language), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(r), t.hooks.run("after-highlight", g)
                    }
                }
            },
            highlight: function(e, r, a) {
                var i = t.tokenize(e, r);
                return n.stringify(t.util.encode(i), a)
            },
            tokenize: function(e, n) {
                var r = t.Token,
                    a = [e],
                    i = n.rest;
                if (i) {
                    for (var o in i) n[o] = i[o];
                    delete n.rest
                }
                e: for (var o in n)
                    if (n.hasOwnProperty(o) && n[o]) {
                        var l = n[o],
                            s = l.inside,
                            c = !!l.lookbehind,
                            g = 0;
                        l = l.pattern || l;
                        for (var u = 0; u < a.length; u++) {
                            var f = a[u];
                            if (a.length > e.length) break e;
                            if (!(f instanceof r)) {
                                l.lastIndex = 0;
                                var h = l.exec(f);
                                if (h) {
                                    c && (g = h[1].length);
                                    var d = h.index - 1 + g,
                                        h = h[0].slice(g),
                                        p = h.length,
                                        m = d + p,
                                        v = f.slice(0, d + 1),
                                        y = f.slice(m + 1),
                                        k = [u, 1];
                                    v && k.push(v);
                                    var b = new r(o, s ? t.tokenize(h, s) : h);
                                    k.push(b), y && k.push(y), Array.prototype.splice.apply(a, k)
                                }
                            }
                        }
                    }
                return a
            },
            hooks: {
                all: {},
                add: function(e, n) {
                    var r = t.hooks.all;
                    r[e] = r[e] || [], r[e].push(n)
                },
                run: function(e, n) {
                    var r = t.hooks.all[e];
                    if (r && r.length)
                        for (var a, i = 0; a = r[i++];) a(n)
                }
            }
        },
        n = t.Token = function(e, t) {
            this.type = e, this.content = t
        };
    if (n.stringify = function(e, r, a) {
        if ("string" == typeof e) return e;
        if ("[object Array]" == Object.prototype.toString.call(e)) return e.map(function(t) {
            return n.stringify(t, r, e)
        }).join("");
        var i = {
            type: e.type,
            content: n.stringify(e.content, r, a),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: r,
            parent: a
        };
        "comment" == i.type && (i.attributes.spellcheck = "true"), t.hooks.run("wrap", i);
        var o = "";
        for (var l in i.attributes) o += l + '="' + (i.attributes[l] || "") + '"';
        return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + o + ">" + i.content + "</" + i.tag + ">"
    }, !self.document) return self.addEventListener ? (self.addEventListener("message", function(e) {
        var n = JSON.parse(e.data),
            r = n.language,
            a = n.code;
        self.postMessage(JSON.stringify(t.tokenize(a, t.languages[r]))), self.close()
    }, !1), self.Prism) : self.Prism;
    var r = document.getElementsByTagName("script");
    return r = r[r.length - 1], r && (t.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism);;

Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/g,
    prolog: /<\?.+?\?>/,
    doctype: /<!DOCTYPE.+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,
        inside: {
            tag: {
                pattern: /^<\/?[\w:-]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
                inside: {
                    punctuation: /=|>|"/g
                }
            },
            punctuation: /\/?>/g,
            "attr-name": {
                pattern: /[\w:-]+/g,
                inside: {
                    namespace: /^[\w-]+?:/
                }
            }
        }
    },
    entity: /\&#?[\da-z]{1,8};/gi
}, Prism.hooks.add("wrap", function(t) {
    "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
});;
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//g,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
        inside: {
            punctuation: /[;:]/g
        }
    },
    url: /url\((["']?).*?\1\)/gi,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
    property: /(\b|\B)[\w-]+(?=\s*:)/gi,
    string: /("|')(\\?.)*?\1/g,
    important: /\B!important\b/gi,
    punctuation: /[\{\};:]/g,
    "function": /[-a-z0-9]+(?=\()/gi
}, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/gi,
        inside: {
            tag: {
                pattern: /<style[\w\W]*?>|<\/style>/gi,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.css
        }
    }
});;
Prism.languages.clike = {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
        lookbehind: !0
    },
    string: /("|')(\\?.)*?\1/g,
    "class-name": {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
    "boolean": /\b(true|false)\b/g,
    "function": {
        pattern: /[a-z0-9_]+\(/gi,
        inside: {
            punctuation: /\(/
        }
    },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g
};;
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: !0
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/gi,
        inside: {
            tag: {
                pattern: /<script[\w\W]*?>|<\/script>/gi,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.javascript
        }
    }
});;
Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/gi,
    constant: /\b[A-Z0-9_]{2,}\b/g,
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /(\?>|<\?php|<\?)/gi,
    variable: /(\$\w+)\b/gi,
    "package": {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
        lookbehind: !0,
        inside: {
            punctuation: /\\/
        }
    }
}), Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/g,
        lookbehind: !0
    }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
    "php" === e.language && (e.tokenStack = [], e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(n) {
        return e.tokenStack.push(n), "{{{PHP" + e.tokenStack.length + "}}}"
    }))
}), Prism.hooks.add("after-highlight", function(e) {
    if ("php" === e.language) {
        for (var n, a = 0; n = e.tokenStack[a]; a++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (a + 1) + "}}}", Prism.highlight(n, e.grammar, "php"));
        e.element.innerHTML = e.highlightedCode
    }
}), Prism.hooks.add("wrap", function(e) {
    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
    markup: {
        pattern: /<[^?]\/?(.*?)>/g,
        inside: Prism.languages.markup
    },
    php: /\{\{\{PHP[0-9]+\}\}\}/g
}));;
Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: !0
    },
    atrule: /@[\w-]+(?=\s+(\(|\{|;))/gi,
    url: /([-a-z]+-)*url(?=\()/gi,
    selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
}), Prism.languages.insertBefore("scss", "property", {
    variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
}), Prism.languages.insertBefore("scss", "ignore", {
    placeholder: /%[-_\w]+/i,
    statement: /\B!(default|optional)\b/gi,
    "boolean": /\b(true|false)\b/g,
    "null": /\b(null)\b/g,
    operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g
});;
};
})();
(function() {
  $(function() {
    $(".js-nav").navKit({
      state: "closed"
    });
    $(".js-search").searchForm({
      state: "closed"
    });
    $(function() {
      var lazyImage;
      lazyImage = $(".js-lazy");
      return lazyImage.lazyload({
        effect: "fadeIn",
        threshold: 200,
        load: function() {
          return $(this).thumbImgFit();
        }
      });
    });
    return $(".js-spoiler").simpleSpoiler({
      state: "closed"
    });
  });

  (function() {
    var elements, isIE;
    isIE = function() {
      var myNav;
      myNav = navigator.userAgent.toLowerCase();
      if (myNav.indexOf("msie") !== -1) {
        return parseInt(myNav.split("msie")[1]);
      } else {
        return false;
      }
    };
    window.mobilecheck = function() {
      var check;
      check = false;
      (function(a, b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/ |blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge   |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/ |plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino |android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)  |amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl( ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng) |dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze) |fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta) |hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/) |ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-  |kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(  01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )  |mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)  |nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(  ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55 \/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-  0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk) |tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)  |utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c (\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
          return check = true;
        }
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
    if (!window.mobilecheck()) {
      if (!isIE() | isIE() > 8) {
        elements = document.getElementsByClassName("js-view");
        return Intense(elements);
      }
    }
  })();

}).call(this);

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
