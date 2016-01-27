#
# * Search form toggle plugin
#
(($, window, document, undefined_) ->
	SearchForm = (element, options) ->
		@options = $.extend({}, defaults, options)
		@element = element
		@init()
	defaults =
		searchIcon: "js-searchtoggle"
		state: "closed"

	SearchForm::init = ->
		$this = $(@element)
		$searchIcon = $("." + @options.searchIcon)
		cond = @options.state

		# Looking for condition from settings, if it closed - add appropriate classes
		# to icon, menu and container
		if not cond or cond is "closed"
			$this.slideToggle()
			$searchIcon.show()

		#toggle search
		$searchIcon.on "click", $.proxy((e) ->
			e.preventDefault()
			$this.slideToggle()
		, this)

	$.fn.searchForm = (options) ->
		@each ->
			new SearchForm(this, options)

) jQuery, window, document
