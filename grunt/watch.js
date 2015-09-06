//Watch for changes
module.exports = {
	default: {
		files: ['<%= dev.html %>/**/*.html',
				'<%= dev.styles %>/*.sass',
				'<%= dev.coffee %>/**/*.coffee',
				'<%= dev.css %>/*.css',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}',
				'<%= dev.templates %>/pages/**/*.jade',
				'<%= dev.ruby %>/**/*.rb',
				'<%= dev.fonts %>/**/*.{eot,svg,ttf,woff}',
				'<%= dev.helpers %>/**/*.*',
				'<%= dev.helpers %>/**/.htaccess',
				'<%= dev.helpers %>/**/CNAME'],
		tasks: ['default'],
		options: {
		  spawn: false
		}
	},
	theme: {
		files: ['<%= dev.styles %>/*.sass',
				'<%= dev.coffee %>/**/*.coffee',
				'<%= dev.css %>/*.css',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}'],
		tasks: ['theme'],
		options: {
		  spawn: false
		}
	},
	publish: {
		files: ['<%= publ.img %>/**/*.{png,jpg,gif}',
				'<%= publ.pages %>/**/*.*'],
		tasks: ['publish'],
		options: {
		  spawn: false
		}
	}
}
