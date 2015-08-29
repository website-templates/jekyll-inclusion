//Delete .gitkeep files. If you don't use Bower - just run `grunt clean`
module.exports = {
	debug: ['<%= build.js %>/**/*.js',
			'!<%= build.js %>/**/*.min.js',
			'<%= build.css %>/**/*.css',
			'!<%= build.css %>/**/*.min.css'],
	build: ['<%= build.js %>/**/*.min.js',
			'<%= build.css %>/**/*.min.css'],
	bower: 'bower_components'
}
