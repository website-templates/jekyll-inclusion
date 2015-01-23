###
$Lazy load
Lazy Load - jQuery plugin for lazy loading images

Copyright (c) 2007-2013 Mika Tuupola

Licensed under the MIT license:
http://www.opensource.org/licenses/mit-license.php

Project home:
http://www.appelsiini.net/projects/lazyload

Version:  1.9.3
###
(($, window, document, undefined_) ->
	$window = $(window)
	$.fn.lazyload = (options) ->
		update = ->
			counter = 0
			elements.each ->
				$this = $(this)
				return  if settings.skip_invisible and not $this.is(":visible")
				if $.abovethetop(this, settings) or $.leftofbegin(this, settings)

				
				# Nothing. 
				else if not $.belowthefold(this, settings) and not $.rightoffold(this, settings)
					$this.trigger "appear"
					
					# if we found an image we'll load, reset the counter 
					counter = 0
				else
					false  if ++counter > settings.failure_limit

		elements = this
		$container = undefined
		settings =
			threshold: 0
			failure_limit: 0
			event: "scroll"
			effect: "show"
			container: window
			data_attribute: "src"
			skip_invisible: true
			appear: null
			load: null
			placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"

		if options
			
			# Maintain BC for a couple of versions. 
			if `undefined` isnt options.failurelimit
				options.failure_limit = options.failurelimit
				delete options.failurelimit
			if `undefined` isnt options.effectspeed
				options.effect_speed = options.effectspeed
				delete options.effectspeed
			$.extend settings, options
		
		# Cache container as jQuery as object. 
		$container = (if (settings.container is `undefined` or settings.container is window) then $window else $(settings.container))
		
		# Fire one scroll event per scroll. Not one scroll event per image. 
		if 0 is settings.event.indexOf("scroll")
			$container.bind settings.event, ->
				update()

		@each ->
			self = this
			$self = $(self)
			self.loaded = false
			
			# If no src attribute given use data:uri. 
			$self.attr "src", settings.placeholder  if $self.is("img")  if $self.attr("src") is `undefined` or $self.attr("src") is false
			
			# When appear is triggered load original image. 
			$self.one "appear", ->
				unless @loaded
					if settings.appear
						elements_left = elements.length
						settings.appear.call self, elements_left, settings
					
					# Remove image from array so it is not looped next time. 
					$("<img />").bind("load", ->
						original = $self.attr("data-" + settings.data_attribute)
						$self.hide()
						if $self.is("img")
							$self.attr "src", original
						else
							$self.css "background-image", "url('" + original + "')"
						$self[settings.effect] settings.effect_speed
						self.loaded = true
						temp = $.grep(elements, (element) ->
							not element.loaded
						)
						elements = $(temp)
						if settings.load
							elements_left = elements.length
							settings.load.call self, elements_left, settings
					).attr "src", $self.attr("data-" + settings.data_attribute)

			
			# When wanted event is triggered load original image 
			
			# by triggering appear.                              
			if 0 isnt settings.event.indexOf("scroll")
				$self.bind settings.event, ->
					$self.trigger "appear"  unless self.loaded


		
		# Check if something appears when window is resized. 
		$window.bind "resize", ->
			update()

		
		# With IOS5 force loading images when navigating with back button. 
		
		# Non optimal workaround. 
		if (/(?:iphone|ipod|ipad).*os 5/g).test(navigator.appVersion)
			$window.bind "pageshow", (event) ->
				if event.originalEvent and event.originalEvent.persisted
					elements.each ->
						$(this).trigger "appear"


		
		# Force initial check if images should appear. 
		$(document).ready ->
			update()

		this

	
	# Convenience methods in jQuery namespace.           
	
	# Use as  $.belowthefold(element, {threshold : 100, container : window}) 
	$.belowthefold = (element, settings) ->
		fold = undefined
		if settings.container is `undefined` or settings.container is window
			fold = ((if window.innerHeight then window.innerHeight else $window.height())) + $window.scrollTop()
		else
			fold = $(settings.container).offset().top + $(settings.container).height()
		fold <= $(element).offset().top - settings.threshold

	$.rightoffold = (element, settings) ->
		fold = undefined
		if settings.container is `undefined` or settings.container is window
			fold = $window.width() + $window.scrollLeft()
		else
			fold = $(settings.container).offset().left + $(settings.container).width()
		fold <= $(element).offset().left - settings.threshold

	$.abovethetop = (element, settings) ->
		fold = undefined
		if settings.container is `undefined` or settings.container is window
			fold = $window.scrollTop()
		else
			fold = $(settings.container).offset().top
		fold >= $(element).offset().top + settings.threshold + $(element).height()

	$.leftofbegin = (element, settings) ->
		fold = undefined
		if settings.container is `undefined` or settings.container is window
			fold = $window.scrollLeft()
		else
			fold = $(settings.container).offset().left
		fold >= $(element).offset().left + settings.threshold + $(element).width()

	$.inviewport = (element, settings) ->
		not $.rightoffold(element, settings) and not $.leftofbegin(element, settings) and not $.belowthefold(element, settings) and not $.abovethetop(element, settings)

	
	# Custom selectors for your convenience.   
	
	# Use as $("img:below-the-fold").something() or 
	
	# $("img").filter(":below-the-fold").something() which is faster 
	$.extend $.expr[":"],
		"below-the-fold": (a) ->
			$.belowthefold a,
				threshold: 0


		"above-the-top": (a) ->
			not $.belowthefold(a,
				threshold: 0
			)

		"right-of-screen": (a) ->
			$.rightoffold a,
				threshold: 0


		"left-of-screen": (a) ->
			not $.rightoffold(a,
				threshold: 0
			)

		"in-viewport": (a) ->
			$.inviewport a,
				threshold: 0


		
		# Maintain BC for couple of versions. 
		"above-the-fold": (a) ->
			not $.belowthefold(a,
				threshold: 0
			)

		"right-of-fold": (a) ->
			$.rightoffold a,
				threshold: 0


		"left-of-fold": (a) ->
			not $.rightoffold(a,
				threshold: 0
			)

) jQuery, window, document