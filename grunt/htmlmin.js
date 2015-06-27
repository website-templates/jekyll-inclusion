//Minify *.html files
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= deploy.main %>',
			src: '**/*.html',
			dest: '<%= deploy.main %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
