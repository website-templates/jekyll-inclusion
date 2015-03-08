require "rubygems"

desc "Deploy to Github Pages and to dev repo"
task :deploy do
  puts "## Commiting source files"

  system "git add --all"

  message = "Source updated at #{Time.now.utc}"
  puts "## Commiting: #{message}"
  system "git commit -m \"#{message}\""

  puts "## Pushing source files"
  system "git push origin master"

  puts "## Source Deploy Complete!"

  cd "_deploy" do
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

desc "Deploy only Jekyll site to Github Pages"
task :jekyllDeploy do
  puts "## Commiting Jekyll website files"
  cd "_deploy" do
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