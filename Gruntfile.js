module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: '_dev',
				coffee: '_dev/coffee',
				js: '_dev/js',
				templates: '_dev/templates',
				styles: '_dev/styles',
				css: '_dev/css',
				html: '_dev/html',
				img: '_dev/img',
				fonts: '_dev/fonts',
				helpers: '_dev/helpers',
				php: '_dev/php',
				devtools: '_dev/devtools'
			},
			 build: {
				main: '_build',
				css: '_build/css',
				fonts: '_build/fonts',
				img: '_build/img',
				php: '_build/php',
				js: '_build/js'
			 },
			 jekyll: {
				deploy: '_deploy'
			}
		}
	});
};
