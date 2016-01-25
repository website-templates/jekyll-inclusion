// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= deploy.js %>',
			src: ['*.js', '!*.min.js'],
			dest: '<%= deploy.js %>',
			ext: '.min.js'
		}]
	}
}
