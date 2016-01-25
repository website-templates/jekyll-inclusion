//Minify *.html files
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= deploy.html %>',
			src: '**/*.html',
			dest: '<%= deploy.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
