module.exports = function(grunt) {
	// Set relative path to root folder from current dev folder
	// in case of general node_modules folder
	// Remove gruntBase path for standalone dev
	gruntBase = '../../../';

	grunt.initConfig(
		require('require-dir')('./grunt', {recurse: true})
	);
	// I use general node_modules directory for common projects,
	// so for standalone dev you should remove grunt-collection task loading
	// and uncomment other tasks
	grunt.loadNpmTasks('grunt-collection');

	// grunt.loadNpmTasks('grunt-contrib-coffee');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-combine-media-queries');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-csso');
	// grunt.loadNpmTasks('grunt-contrib-jade');
	// grunt.loadNpmTasks('grunt-contrib-htmlmin');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-newer');

	// grunt.loadNpmTasks('grunt-bower-concat');
	// grunt.loadNpmTasks('grunt-contrib-clean');

	// grunt.loadNpmTasks('grunt-processhtml');
	// grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('bower-dev', ['bower_concat',
								 // 'clean:bower'
	]);

	grunt.registerTask('testing', ['shell:test']);

	grunt.registerTask('regen', ['coffee',
								'concat',
								'sass',
								'jade',
								// 'imagemin',
								'copy:fonts',
								'copy:js',
								'copy:livejs',
								'copy:css',
								'copy:templates',
								'copy:html',
								'copy:helpers',
								'shell:jekyllBuild'
	]);

	grunt.registerTask('default', ['newer:coffee',
									 'newer:concat',
									 'newer:sass',
									 'newer:jade',
									 'newer:imagemin',
									 'newer:copy:fonts',
									 'newer:copy:js',
									 'newer:copy:livejs',
									 'newer:copy:css',
									 'newer:copy:templates',
									 'newer:copy:html',
									 'newer:copy:helpers',
									 'shell:jekyllBuild',
									 'watch:all'
	]);

	grunt.registerTask('theme', ['newer:sass',
								 'newer:coffee',
								 'newer:concat',
								 'newer:copy:jekyllStyles',
								 'newer:copy:jekyllScripts',
								 'watch:style'
	]);

	grunt.registerTask('build', ['cmq',
								 'autoprefixer',
								 'uglify',
								 'csso',
								 'clean:debug',
								 'shell:jekyllBuild',
								 'processhtml',
								 'htmlmin'
	]);

	grunt.registerTask('jekyll-build', ['newer:imagemin',
										'newer:copy:templates',
										'newer:copy:helpers',
										'shell:jekyllBuild',
										'processhtml',
										'htmlmin'
	]);

	grunt.registerTask('jekyll-deploy', ['shell:rakeJekyllDeploy']);
	grunt.registerTask('deploy', ['shell:rakeDeploy']);

};
