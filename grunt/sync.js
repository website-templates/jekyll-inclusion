// Copy some folders or files (ex. *.php) from dev to build
module.exports = {
	imagesDev: {
		files: [{
			expand: true,
			cwd: '<%= dev.images %>',
			src: ['**/*.*'],
			dest: '<%= build.images %>'
		}]
	},
	fontsDev: {
		files: [{
			expand: true,
			cwd: '<%= dev.fonts %>',
			src: ['**/*.{eot,svg,ttf,otf,woff,woff2}'],
			dest: '<%= build.fonts %>'
		}]
	},
	helpersDev: {
		files: [{
			expand: true,
			cwd: '<%= dev.helpers %>',
			src: ['**/*.*', '*/.htaccess', '*/CNAME'],
			dest: '<%= build.main %>'
		}]
	},
	rubyDev: {
		files: [{
			expand: true,
			cwd: '<%= dev.ruby %>',
			src: ['**/*.rb'],
			dest: '<%= build.plugins %>'
		}]
	},
	mainPubl: {
		files: [{
			expand: true,
			cwd: '<%= publ.main %>',
			src: ['**/*.*'],
			dest: '<%= build.main %>'
		}]
	},
	cssTheme: {
		files: [{
			expand: true,
			cwd: '<%= build.css %>',
			src: ['*.css'],
			dest: '<%= deploy.css %>'
		}]
	},
	jsTheme: {
		files: [{
			expand: true,
			cwd: '<%= build.js %>',
			src: ['*.js'],
			dest: '<%= deploy.js %>'
		}]
	}
}
