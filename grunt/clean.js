//Delete .gitkeep files. If you don't use Bower - just run `grunt clean`
module.exports = {
	debug: ['<%= paths.build.js %>/**/*.js',
			'!<%= paths.build.js %>/**/*.min.js',
			'<%= paths.build.css %>/**/*.css',
			'!<%= paths.build.css %>/**/*.min.css'],
	bower: 'bower_components'
}
