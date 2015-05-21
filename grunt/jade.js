//Compile *.jade files
module.exports = {
	main: {
		options: {
				client: false,
				pretty: true
		},
		files: [ {
			cwd: '<%= dev.templates %>/pages',
			src: '**/*.jade',
			dest: '<%= dev.html %>/',
			expand: true,
			ext: '.html'
		} ]
	}
}
