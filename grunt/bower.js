// Manage bower dependencies
module.exports = {
	// Copy bower files into js vendor folder
	vendor: {
		dest: '<%= dev.js %>/vendor',
		options: {
			checkExistence: true,
			overrides: {
				jquery: {
					main: "dist/jquery.js"
				},
				html5shiv: {
					ignore: true
				},
				respond: {
					ignore: true
				}
			}
		}
	},

	// Copy bower files into js ie folder
	ie: {
		dest: '<%= dev.js %>/ie',
		options: {
			checkExistence: true,
			overrides: {
				jquery: {
					ignore: true
				},
				html5shiv: {
					main: "dist/html5shiv.js"
				},
				respond: {
					main: "src/respond.js"
				}
			}
		}
	}
}
