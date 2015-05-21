//Copy some folders or files (ex. *.php) from dev to build
module.exports = {
	fonts: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.fonts %>/',
			src: ['**/*.{eot,svg,ttf,woff}'],
			dest: '<%= paths.build.fonts %>'
		}]
	},
	js: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.js %>/',
			src: [
				'**/assembled.js',
				'**/vendor.js',
				'**/head.js',
				'**/ie.js'],
			dest: '<%= paths.build.js %>/'
		}]
	},
	livejs: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.devtools %>/',
			src: '**/live.js',
			dest: '<%= paths.build.js %>/'
		}]
	},
	css: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.css %>',
			src: ['**/*.css'],
			dest: '<%= paths.build.css %>/'
		}]
	},
	templates: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.templates %>/pages',
			src: ['**/*.{md,markdown}'],
			dest: '<%= paths.build.main %>'
		}]
	},
	html: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.html %>',
			src: ['**/*.html'],
			dest: '<%= paths.build.main %>'
		}]
	},
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.helpers %>',
			src: ['**/*.*', '**/.htaccess', '**/CNAME'],
			dest: '<%= paths.build.main %>'
		}]
	},
	jekyllStyles: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.css %>/',
			src: ['**/*.css'],
			dest: '<%= paths.jekyll.deploy %>/css/'
		}]
	},
	jekyllScripts: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev.js %>/',
			src: [
				'**/assembled.js',
				'**/vendor.js',
				'**/head.js',
				'**/ie.js'],
			dest: '<%= paths.jekyll.deploy %>/js/'
		}]
	}
}
