//Uglify assembled *.js file
module.exports = {
	options: {
		mangle: false
	},
	vendor: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.js %>/vendor',
			src: '**/*.js',
			dest: '<%= paths.build.js %>/vendor',
			ext: '.min.js'
		}]
	},
	main: {
			files: {
					'<%= paths.build.js %>/assembled.min.js': '<%= paths.dev.js %>/assembled.js'
			}
	},
	// head: {
	// 	files: {
	// 			'<%= paths.build.js %>/head/head.min.js': '<%= paths.dev.js %>/head/head.js'
	// 	}
	// },
	ie: {
		files: {
				'<%= paths.build.js %>/ie/ie.min.js': '<%= paths.dev.js %>/ie/ie.js'
		}
	}
}
