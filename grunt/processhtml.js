//Delete some dev code and references from files
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= deploy.main %>',
			src: '**/*.html',
			dest: '<%= deploy.main %>',
			ext: '.html'
		}],
	}
}
