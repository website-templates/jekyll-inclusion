//Minify and organize *.css files
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= dev.css %>/',
			src: ['*.css', '!*.min.css'],
			dest: '<%= build.css %>/',
			ext: '.min.css'
		}]
	}
}
