//Watch for changes
module.exports = {
	all: {
		files: ['<%= dev.html %>/**/*.html',
				'<%= dev.styles %>/**/*.sass',
				'!<%= dev.styles %>/components/**/*.sass',
				'<%= dev.css %>/*.css',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}',
				'<%= dev.templates %>/**/*.{jade,md,markdown}',
				'<%= dev.php %>/**/*.php',
				'<%= dev.fonts %>/**/*.{eot,svg,ttf,woff}',
				'<%= dev.helpers %>/**/*.*',
				'<%= dev.helpers %>/**/.htaccess',
				'<%= dev.helpers %>/**/CNAME'],
		tasks: ['default'],
		options: {
		  spawn: false
		}
	},
	style: {
		files: ['<%= dev.styles %>/**/*.sass',
				'!<%= dev.styles %>/components/**/*.sass',
				'<%= dev.css %>/*.css',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}'],
		tasks: ['theme'],
		options: {
		  spawn: false
		}
	}
}
