require "rubygems"

desc "Deploy to Github Pages"
task :deploy do
	cd "deploy" do
		puts "## Deploying build version"
		system "git add --all"

		message = "Site updated at #{Time.now.utc}"
		puts "## Commiting: #{message}"
		system "git commit -m \"#{message}\""

		puts "## Pushing generated site"
		system "git push origin gh-pages"

		cd ".." do
			puts "## Generated site Deploy Complete!"
		end
	end
end
