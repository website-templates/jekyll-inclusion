//Compile *.sass files
module.exports = {
	main: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= paths.dev.styles %>',
			src: '**/*.{sass,scss}',
			dest: '<%= paths.dev.css %>',
			ext: '.css'
		}]
	}
}
