//Delete some dev code and references from files
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= deploy.html %>',
			src: '**/*.html',
			dest: '<%= deploy.html %>',
			ext: '.html'
		}],
	}
}
