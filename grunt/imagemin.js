//Minify image files
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= paths.dev.img %>',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= paths.build.img %>'
		}]
	}
}
