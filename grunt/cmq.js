//Combine media queries in result *.css files
module.exports = {
	options: {
		log: false
	},
	main: {
		files: {
			'<%= dev.css %>': ['<%= dev.css %>/*.css']
		}
	}
}
