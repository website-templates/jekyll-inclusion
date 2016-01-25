// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= deploy.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= deploy.css %>',
			ext: '.min.css'
		}]
	}
}
