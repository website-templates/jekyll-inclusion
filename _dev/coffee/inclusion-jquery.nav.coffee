#
# * navigation script: sticky nav, anchor smooth scrolling, selecting current nav item
#
(($, window, document, undefined_) ->
	NavKit = (element, options) ->
		@options = $.extend({}, defaults, options)
		@element = element
		@init()
	defaults =
		navAnchor: "js-anchor"
		navLink: "js-link"
		navIcon: "js-navtoggle"
		iconOpen: "is-open"
		activeLink: "is-active"
		state: "closed"

	NavKit::init = ->
		$this = $(@element)
		$navAnchor = $("." + @options.navAnchor)
		$navLink = $("." + @options.navLink)
		$navIcon = $("." + @options.navIcon)
		cond = @options.state
		navHeight = $this.show().height()
		aArray = []
		i = undefined

		# Looking for condition from settings, if it closed - add appropriate classes
		# to icon, menu and container
		if not cond or cond is "closed"
			$this.slideToggle()
			$navIcon.show()
		else
			$navIcon.show().addClass @options.iconOpen

		#toggle nav onclick
		$navIcon.on "click", $.proxy((e) ->
			e.preventDefault()
			$navIcon.toggleClass @options.iconOpen
			$this.slideToggle()
		, this)

		# Smooth anchor scroll, targeted to our nav anchors
		# Actually this thing was modified on csstricks
		$navAnchor.click ->
			if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and location.hostname is @hostname
				anchor = $(@hash)
				target = (if anchor.length then anchor else $("[name=" + @hash.slice(1) + "]"))
				targetOffset = target.offset().top
				windowScroll = $(window).scrollTop()

				if Math.abs(targetOffset - windowScroll) > 20
					if target.length
						$("html,body").animate
							scrollTop: targetOffset
						, 1000
						false


		#Highlight nav list item when current section visible
		#Originally this way is belong to http://www.callmenick.com
		i = 0
		while i < $navLink.length
			link = $navLink[i]
			ahref = $(link).attr("href")
			aArray.push ahref
			i += 1
		# this for loop fills the aArray with attribute href values
		$(window).scroll $.proxy(->
			windowPos = $(window).scrollTop() # get the offset of the window from the top of page
			windowHeight = $(window).height() # get the height of the window
			docHeight = $(document).height()
			$firstSection = $("section").eq(0)
			i = 0
			while i < aArray.length
				theID = aArray[i]
				sectPos = $(theID).offset().top - navHeight # get the offset of the div from the top of page + except nav height
				sectHeight = $(theID).height() # get the height of the div in question
				if windowPos >= sectPos and windowPos < (sectPos + sectHeight)
					$navLink.filter("[href='" + theID + "']").addClass @options.activeLink
				else
					$navLink.filter("[href='" + theID + "']").removeClass @options.activeLink
				i += 1

			#highlight last nav list item on last section
			if windowPos + windowHeight is docHeight
				unless $this.find("li").filter(":last-child").find($navLink).hasClass(@options.activeLink)
					$navLink.filter("." + @options.activeLink).removeClass @options.activeLink
					$this.find("li").filter(":last-child").find($navLink).addClass @options.activeLink

			#highlight first nav item when first section has some top offset
			if windowPos < $firstSection.offset().top
				unless $this.find("li").filter(":first-child").find($navLink).hasClass(@options.activeLink)
					$navLink.filter("." + @options.activeLink).removeClass @options.activeLink
					$this.find("li").filter(":first-child").find($navLink).addClass @options.activeLink
		, this)

	$.fn.navKit = (options) ->
		@each ->
			new NavKit(this, options)

) jQuery, window, document
