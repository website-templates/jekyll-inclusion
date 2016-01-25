//Minify images
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= deploy.images %>',
			src: ['**/*.*'],
			dest: '<%= deploy.images %>'
		}]
	}
}
