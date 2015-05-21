//Combine media queries in result *.css files
module.exports = {
	options: {
		log: false
	},
	main: {
		files: {
			'<%= paths.dev.css %>': ['<%= paths.dev.css %>/*.css']
		}
	}
}
