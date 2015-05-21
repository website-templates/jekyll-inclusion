// Run deploy script from Rakefile
module.exports = {
	// Build jekyll website
	jekyllBuild: {
		command: 'jekyll build'
	},
	// Deploy only jekyll website
	rakeJekyllDeploy: {
		command: 'rake jekyllDeploy'
	},
	// Deploy dev version and jekyll website
	rakeDeploy: {
		command: 'rake deploy'
	}
}
