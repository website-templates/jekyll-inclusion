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