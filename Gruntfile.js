module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: '_dev',
				data: '_dev/data',
				coffee: '_dev/coffee',
				js: '_dev/js',
				templates: '_dev/templates',
				styles: '_dev/styles',
				css: '_dev/css',
				html: '_dev/html',
				img: '_dev/img',
				fonts: '_dev/fonts',
				helpers: '_dev/helpers',
				ruby: '_dev/ruby',
				devtools: '_dev/devtools'
			},
			publ: {
				img: '_publ/img',
				pages: '_publ/pages'
			},
			build: {
				main: '_build',
				css: '_build/css',
				fonts: '_build/fonts',
				img: '_build/img',
				plugins: '_build/_plugins',
				data: '_build/_data',
				js: '_build/js'
			},
			deploy: {
				main: '_deploy'
			}
		}
	});
};
