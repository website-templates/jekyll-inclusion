//Combine media queries in result *.css files
module.exports = {
	options: {
		log: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= build.css %>/',
			src: ['**/*.css', '!*.min.css'],
			dest: '<%= build.css %>/'
		}]
	}
}
