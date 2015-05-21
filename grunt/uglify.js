//Uglify assembled *.js file
module.exports = {
	options: {
		mangle: false
	},
	vendor: {
		files: [{
			expand: true,
			cwd: '<%= dev.js %>/vendor',
			src: '**/*.js',
			dest: '<%= build.js %>/vendor',
			ext: '.min.js'
		}]
	},
	main: {
			files: {
					'<%= build.js %>/assembled.min.js': '<%= dev.js %>/assembled.js'
			}
	},
	// head: {
	// 	files: {
	// 			'<%= build.js %>/head/head.min.js': '<%= dev.js %>/head/head.js'
	// 	}
	// },
	ie: {
		files: {
				'<%= build.js %>/ie/ie.min.js': '<%= dev.js %>/ie/ie.js'
		}
	}
}
