//Watch for changes
module.exports = {
	all: {
		files: ['<%= paths.dev.html %>/**/*.html',
				'<%= paths.dev.styles %>/**/*.sass',
				'!<%= paths.dev.styles %>/components/**/*.sass',
				'<%= paths.dev.css %>/*.css',
				'<%= paths.dev.js %>/**/*.js',
				'<%= paths.dev.img %>/**/*.{png,jpg,gif}',
				'<%= paths.dev.templates %>/**/*.{jade,md,markdown}',
				'<%= paths.dev.php %>/**/*.php',
				'<%= paths.dev.fonts %>/**/*.{eot,svg,ttf,woff}',
				'<%= paths.dev.helpers %>/**/*.*',
				'<%= paths.dev.helpers %>/**/.htaccess',
				'<%= paths.dev.helpers %>/**/CNAME'],
		tasks: ['default'],
		options: {
		  spawn: false
		}
	},
	style: {
		files: ['<%= paths.dev.styles %>/**/*.sass',
				'!<%= paths.dev.styles %>/components/**/*.sass',
				'<%= paths.dev.css %>/*.css',
				'<%= paths.dev.js %>/**/*.js',
				'<%= paths.dev.img %>/**/*.{png,jpg,gif}'],
		tasks: ['theme'],
		options: {
		  spawn: false
		}
	}
}
