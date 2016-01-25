// Run deploy script from Rakefile
module.exports = {
	// Build jekyll website
	jekyllBuild: {
		command: 'jekyll build'
	},
	// Deploy ekyll website
	deploy: {
		command: 'rake deploy'
	},
	bower: {
		command: 'bower install'
	}
}
