// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	test:{
		options: {
			server: {
				baseDir: '<%= deploy.main %>'
			}
		}
	},
	dev:{
		bsFiles: {
			src: [
				'<%= deploy.js %>/*.js',
				'<%= deploy.css %>/*.css',
				'<%= deploy.images %>/**/*.*',
				'<%= deploy.html %>/**/*.html'
			]
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%= deploy.main %>'
			}
		}
	},
	theme:{
		bsFiles: {
			src: [
				'<%= deploy.js %>/*.js',
				'<%= deploy.css %>/*.css'
			]
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%= deploy.main %>'
			}
		}
	}
}
