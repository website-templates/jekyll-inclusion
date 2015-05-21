//Compile *.sass files
module.exports = {
	main: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= dev.styles %>',
			src: '**/*.{sass,scss}',
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
