// Bust static assets from the cache using content hashing
module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 16,
		ignorePatterns: ['ico'],
		deleteOriginals: true,
		rename: true
	},
	assets: {
		files: [{
			expand: true,
        	cwd: '<%= build.main %>',
        	baseDir: '<%= build.main %>',
			src: ['**/*.html']
		}]
	}
}
