//Delete some dev code and references from files
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= paths.jekyll.deploy %>',
			src: '**/*.html',
			dest: '<%= paths.jekyll.deploy %>',
			ext: '.html'
		}],
	}
}
