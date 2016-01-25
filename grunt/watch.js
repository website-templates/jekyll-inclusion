//Watch for changes
module.exports = {
	dev: {
		files: [
			'<%= dev.sass %>/*.{sass,scss}',
			'<%= dev.coffee %>/**/*.coffee',
			'<%= dev.js %>/**/*.js',
			'<%= dev.jade %>/*.jade',
			'<%= dev.images %>/**/*.*',
			'<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}',
			'<%= dev.helpers %>/**/*.*',
			'<%= dev.helpers %>/.htaccess',
			'<%= dev.helpers %>/CNAME',
			'<%= dev.ruby %>/**/*.rb'
		],
		tasks: [
			'newer:coffee:main',
			'newer:concat:main',
			'newer:concat:ie',
			'newer:concat:vendor',
			'newer:sass',
			'newer:jade',
			'sync:imagesDev',
			'sync:fontsDev',
			'sync:helpersDev',
			'sync:rubyDev',
			'sync:mainPubl',
			'shell:jekyllBuild'
		],
		options: {
			spawn: false,
		}
	},
	theme: {
		files: [
			'<%= dev.sass %>/*.{sass,scss}',
			'<%= dev.coffee %>/**/*.coffee',
			'<%= dev.js %>/**/*.js',
			'<%= dev.images %>/**/*.*',
			'<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'
		],
		tasks: [
			'newer:coffee:main',
			'newer:concat:main',
			'newer:concat:ie',
			'newer:concat:vendor',
			'newer:sass',
			'sync:cssTheme',
			'sync:jsTheme'
		],
		options: {
			spawn: false,
		}
	}
}
