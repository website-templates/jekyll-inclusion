//Minify and organize *.css files
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.dev.css %>/',
			src: ['*.css', '!*.min.css'],
			dest: '<%= paths.build.css %>/',
			ext: '.min.css'
		}]
	}
}
