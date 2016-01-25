// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= dev.coffee %>/main',
		src: ['*.coffee'],
		dest: '<%= dev.js %>/main',
		ext: '.js',
		extDot: 'last'
	},
	head: {
		expand: true,
		flatten: true,
		cwd: '<%= dev.coffee %>/head',
		src: ['*.coffee'],
		dest: '<%= dev.js %>/head',
		ext: '.js',
		extDot: 'last'
	},
	vendor: {
		expand: true,
		flatten: true,
		cwd: '<%= dev.coffee %>/vendor',
		src: ['*.coffee'],
		dest: '<%= dev.js %>/vendor',
		ext: '.js',
		extDot: 'last'
	}
}
