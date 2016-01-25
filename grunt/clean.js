// Clear files and folders
module.exports = {
	dev: ['<%= deploy.js %>/*.js',
			'!<%= deploy.js %>/*.min.*',
			'<%= deploy.css %>/*.css',
			'!<%= deploy.css %>/*.min.*'],
	cache: ['<%= build.js %>/*.min.*.js',
			'<%= build.css %>/*.min.*.css',
			'<%= build.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
