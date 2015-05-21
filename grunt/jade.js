//Compile *.jade files
module.exports = {
	main: {
		options: {
				client: false,
				pretty: true
		},
		files: [ {
			cwd: '<%= paths.dev.templates %>/pages',
			src: '**/*.jade',
			dest: '<%= paths.dev.html %>/',
			expand: true,
			ext: '.html'
		} ]
	}
}
