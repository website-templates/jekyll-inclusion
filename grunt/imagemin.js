//Minify image files
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= dev.img %>',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= build.img %>'
		}]
	}
}
