(($, window, document) ->
	defaults =
		thumb: 'js-thumb'
		thumbImg: 'js-thumb-img'
		thumbImgHor: 'is-horizontal'
		thumbImgVer: 'is-vertical'

	ThumbImgFit = (element, options) ->
		@options = $.extend({}, defaults, options)
		@element = element
		@init()
		return

	ThumbImgFit::init = ->
		$this = $(@element)
		$thumb = $this.parent('.' + @options.thumb)
		$thumbImg = $('.' + @options.thumbImg)
		thumbAspect = $thumb.outerWidth() / $thumb.outerHeight()
		thumbImgAspect = $this.outerWidth() / $this.outerHeight()
		if thumbImgAspect >= thumbAspect
			$this.addClass @options.thumbImgHor
		else if thumbImgAspect < thumbAspect
			$this.addClass @options.thumbImgVer
		return

	$.fn.thumbImgFit = (options) ->
		@each ->
			new ThumbImgFit(this, options)
			return

	return
) jQuery, window, document
