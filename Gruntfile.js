module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: 'dev',
				coffee: '<%= dev.main %>/coffee',
				js: '<%= dev.main %>/js',
				jade: '<%= dev.main %>/jade/pages',
				sass: '<%= dev.main %>/sass',
				images: '<%= dev.main %>/images',
				fonts: '<%= dev.main %>/fonts',
				helpers: '<%= dev.main %>/helpers',
				ruby: '<%= dev.main %>/ruby'
			},
			// Publiscation paths
			publ: {
				main: 'publ'
			},
			// Build paths
			build: {
				main: 'build',
				html: '<%= build.main %>',
				css: '<%= build.main %>/static/css',
				fonts: '<%= build.main %>/static/fonts',
				images: '<%= build.main %>/static/images',
				js: '<%= build.main %>/static/js',
				plugins: '<%= build.main %>/_plugins',
				data: '<%= build.main %>/_data'
			},
			// Generated site paths
			deploy: {
				main: 'deploy',
				html: '<%= deploy.main %>',
				css: '<%= deploy.main %>/static/css',
				images: '<%= deploy.main %>/static/images',
				js: '<%= deploy.main %>/static/js'
			},
			// By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
			browserlist: [
				'> 1%',
				'last 20 versions',
				'Opera 12.1',
				'Explorer > 7',
				'Safari >= 5'
			]
		},
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
