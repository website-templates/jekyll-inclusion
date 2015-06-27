//Uglify assembled *.js file
module.exports = {
	options: {
		mangle: false
	},
	build: {
		files:[{
			expand: true,
			cwd: '<%= build.js %>/',
			src: ['**/*.js', '!**/*.min.js', '!live.js'],
			dest: '<%= build.js %>/',
			ext: '.min.js'
		}]
	}
}
