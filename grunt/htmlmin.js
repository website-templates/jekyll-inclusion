//Minify *.html files
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= paths.jekyll.deploy %>',
			src: '**/*.html',
			dest: '<%= paths.jekyll.deploy %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
