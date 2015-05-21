//Assemble *.js files
module.exports = {
	main: {
		files: [{
			src: ['<%= paths.dev.js %>/*.js', '!<%= paths.dev.js %>/assembled.js'],
			dest: '<%= paths.dev.js %>/assembled.js'
		}]
	},
	// head: {
	// 	files: [{
	// 		src: ['<%= paths.dev.js %>/head/*.js', '!<%= paths.dev.js %>/head/head.js'],
	// 		dest: '<%= paths.dev.js %>/head/head.js'
	// 	}]
	// }
}
