//Minify image files
module.exports = {
	theme: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= dev.img %>',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '<%= build.img %>'
		}]
	},
	publ: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= publ.img %>',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '<%= build.img %>'
		}]
	}
}
