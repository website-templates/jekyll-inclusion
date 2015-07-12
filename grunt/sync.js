// Sync folders or files (ex. *.php) from dev to build
module.exports = {
	fonts: {
		files: [{
			expand: true,
			cwd: '<%= dev.fonts %>/',
			src: ['**/*.{eot,svg,ttf,woff}'],
			dest: '<%= build.fonts %>'
		}],
		verbose: true
	},
	js: {
		files: [{
			expand: true,
			cwd: '<%= dev.js %>/',
			src: [
				'**/assembled.js',
				'**/vendor.js',
				'**/head.js',
				'**/ie.js'],
			dest: '<%= build.js %>/'
		}],
		verbose: true
	},
	livejs: {
		files: [{
			expand: true,
			cwd: '<%= dev.devtools %>/',
			src: '**/live.js',
			dest: '<%= build.js %>/'
		}],
		verbose: true
	},
	css: {
		files: [{
			expand: true,
			cwd: '<%= dev.css %>',
			src: ['**/*.css'],
			dest: '<%= build.css %>/'
		}],
		verbose: true
	},
	html: {
		files: [{
			expand: true,
			cwd: '<%= dev.html %>',
			src: ['**/*.html'],
			dest: '<%= build.main %>'
		}],
		verbose: true
	},
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= dev.helpers %>',
			src: ['**/*.*', '**/.htaccess', '**/CNAME'],
			dest: '<%= build.main %>'
		}],
		verbose: true
	},
	data: {
		files: [{
			expand: true,
			cwd: '<%= publ.data %>',
			src: ['**/*.*'],
			dest: '<%= build.data %>'
		}],
		verbose: true
	},
	local: {
		files: [{
			expand: true,
			cwd: '<%= publ.local %>',
			src: ['**/*.yml'],
			dest: '<%= build.local %>'
		}],
		verbose: true
	},
	ruby: {
		files: [{
			expand: true,
			cwd: '<%= dev.ruby %>',
			src: ['**/*.rb'],
			dest: '<%= build.plugins %>'
		}],
		verbose: true
	},
	publ: {
		files: [{
			expand: true,
			cwd: '<%= publ.pages %>',
			src: ['**/*.*'],
			dest: '<%= build.main %>'
		}],
		verbose: true
	},
	jekyllStyles: {
		files: [{
			expand: true,
			cwd: '<%= dev.css %>/',
			src: ['**/*.css'],
			dest: '<%= deploy.main %>/css/'
		}],
		verbose: true
	},
	jekyllScripts: {
		files: [{
			expand: true,
			cwd: '<%= dev.js %>/',
			src: [
				'**/assembled.js',
				'**/vendor.js',
				'**/head.js',
				'**/ie.js'],
			dest: '<%= deploy.main %>/js/'
		}],
		verbose: true
	}
}
