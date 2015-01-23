# 
# * Simple spoiler
#
(($, window, document, undefined_) ->
	SimpleSpoiler = (element, options) ->
		@options = $.extend({}, defaults, options)
		@element = element
		@init()
	defaults =
		spoilerPanel: "js-panel"
		spoilerClosed: "is-closed"
		state: "closed"

	SimpleSpoiler::init = ->
		$this = $(@element)
		$spoilerPanel = $this.find("." + @options.spoilerPanel)
		cond = @options.state
		
		# Looking for condition from settings, if it closed - add appropriate classes 
		# to our spoiler  
		$this.addClass @options.spoilerClosed  if (not cond or cond is "closed") and (not ($this.hasClass(@options.spoilerClosed)))
		
		#Toggle closed class on spoiler panel click
		$spoilerPanel.on "click", $.proxy((e) ->
			e.preventDefault()
			$this.toggleClass @options.spoilerClosed
		, this)

	$.fn.simpleSpoiler = (options) ->
		@each ->
			new SimpleSpoiler(this, options)

) jQuery, window, document