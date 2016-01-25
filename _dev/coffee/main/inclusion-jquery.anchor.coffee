#
# * jQuery anchorScroll plugin for smooth scrollin to anchor, fallback script for pages without general nav but with standalone anchor links
#
(($, window, document, undefined_) ->
	"use strict"
	$.fn.anchorScroll = ->
		$this = this

		# Smooth anchor scroll, targeted to our nav anchors
		# Actually this thing was modified on csstricks
		$this.click ->
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

		this
) jQuery, window, document
