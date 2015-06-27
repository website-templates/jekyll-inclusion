//Autoprefixer
module.exports = {
	options: {
		browsers: ['last 2 versions', 'ie 8', 'ie 9']
		//By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
	},
	main: {
		files:[{
			expand: true,
			flatten: true,
			cwd: '<%= build.css %>/',
			src: ['**/*.css', '!*.min.css'],
			dest: '<%= build.css %>/'
		}]
	}
}
