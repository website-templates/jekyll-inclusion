// Compile CoffeeScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.dev.coffee %>',
		src: ['**/*.coffee', '!components/**/*.*'],
		dest: '<%= paths.dev.js %>',
		ext: '.js',
		extDot: 'last'
	}
}
