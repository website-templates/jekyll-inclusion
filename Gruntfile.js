module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: '_dev',
				coffee: '<%= dev.main %>/coffee',
				js: '<%= dev.main %>/js',
				templates: '<%= dev.main %>/templates',
				styles: '<%= dev.main %>/styles',
				css: '<%= dev.main %>/css',
				html: '<%= dev.main %>/html',
				img: '<%= dev.main %>/img',
				fonts: '<%= dev.main %>/fonts',
				helpers: '<%= dev.main %>/helpers',
				ruby: '<%= dev.main %>/ruby',
				devtools: '<%= dev.main %>/devtools'
			},
			publ: {
				main: '_publ',
				img: '<%= publ.main %>/img',
				data: '<%= publ.main %>/data',
				pages: '<%= publ.main %>/pages'
			},
			build: {
				main: '_build',
				css: '<%= build.main %>/css',
				fonts: '<%= build.main %>/fonts',
				img: '<%= build.main %>/img',
				plugins: '<%= build.main %>/_plugins',
				data: '<%= build.main %>/_data',
				js: '<%= build.main %>/js'
			},
			deploy: {
				main: '_deploy'
			}
		}
	});
};
