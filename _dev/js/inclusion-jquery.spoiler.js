/* 
 * Simple spoiler
*/

;(function ( $, window, document, undefined ) {
    var defaults = {
        spoilerPanel: "js-panel",
        spoilerClosed: "is-closed",
        state: "closed"      
    };

    function SimpleSpoiler( element, options ) {
        this.options = $.extend( {}, defaults, options) ;
        this.element = element;     
        this.init();
    }

    SimpleSpoiler.prototype.init = function () {
        var $this = $(this.element),
            $spoilerPanel = $this.find("." + this.options.spoilerPanel),
            cond = this.options.state;

        // Looking for condition from settings, if it closed - add appropriate classes 
        // to our spoiler  
        if ((! cond || cond == "closed") && (!($this.hasClass(this.options.spoilerClosed)))){
            $this.addClass(this.options.spoilerClosed);
        }     

        //Toggle closed class on spoiler panel click
        $spoilerPanel.on('click', $.proxy(function(e){
            e.preventDefault();            
            $this.toggleClass(this.options.spoilerClosed);
        }, this));        
    };

    $.fn.simpleSpoiler = function ( options ) {
        return this.each(function () {          
            new SimpleSpoiler( this, options );
        });
    };

})( jQuery, window, document );