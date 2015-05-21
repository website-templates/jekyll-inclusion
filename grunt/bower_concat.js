//Assemble bower components in right order
module.exports = {
	vendor: {
		dest: '<%= dev.js %>/vendor/vendor.js',
		exclude: ['respond', 'html5shiv'],
		bowerOptions: {
			relative: true
		}
	},
	ie: {
		dest: '<%= dev.js %>/ie/ie.js',
		exclude: ['jquery'],
		mainFiles: {
			'html5shiv': 'dist/html5shiv-printshiv.js'
		},
		bowerOptions: {
			relative: true
		}
	}
}
