//Minify *.html files
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= jekyll.deploy %>',
			src: '**/*.html',
			dest: '<%= jekyll.deploy %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
