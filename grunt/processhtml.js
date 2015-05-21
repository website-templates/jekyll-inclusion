//Delete some dev code and references from files
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= jekyll.deploy %>',
			src: '**/*.html',
			dest: '<%= jekyll.deploy %>',
			ext: '.html'
		}],
	}
}
