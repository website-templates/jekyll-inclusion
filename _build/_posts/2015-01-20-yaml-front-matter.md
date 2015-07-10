---
layout: post
title: "Demo post &mdash; YAML front matter"
description: "Some explanations for otions in _config.yml and post/page front matter"
date: 2015-01-20
tags: 
- Lorem ipsum
- test 
- demo
- YAML front matter
category:
- technologies
thumb_img: "img/post/lorem/meta/cm-10.jpg"
start_img: "img/post/lorem/meta/common-10.jpg"
start_attribution: "Photo from unsplash.com"
---
Hi, this is an additional post, that I've wrote to explain some specifics of yaml front matter options that were used in current theme. Let's start from _config.yml file

<figure class="code_center">
	<pre><code class="language-yaml">
	# Site settings
	# General settings
	lang: en #Site language
	title: Inclusion jekyll theme #Site title
	email: mail@orlovmax.com #Site author email
	author: Maxim Orlov #Site author name
	description: "Responsive blog theme for jekyll website generator" #Site common description
	keywords: "jekyll theme, jekyll template, responsive jekyll theme" #Site common keywords
	# URL settings
	baseurl: "/jekyll-inclusion" # the subpath of your site, e.g. /blog/
	url: "http://website-templates.github.io" # the base hostname & protocol for your site
	home-repo: "https://github.com/website-templates/jekyll-inclusion" #Site repository
	# Social usernames
	twitter_username: orlovmax_im
	github_username:  orlovmax
	# fb_username:
	# vk_username:
	gplus_username: 104202961668156466871
	# skype_username:
	bitbucket_username: orlovmax
	# linkedin_username:
	# Multilanguage blog settings: names, base url and current lang
	# langs:
	#   "en": "http://blog.orlovmax.com"
	#   "ru": "http://rublog.orlovmax.com"
	#   "ua": "http://uablog.orlovmax.com"
	# lang_current: "ua"
	# Default src
	start_img: "img/bg/index-header.jpg" #Image for the first screen of the page or post
	end_img: "img/bg/index-end.jpg" #Image for the last screen of the page or post
	thumb_img: "img/pic.jpg"  #Image for the post preview
	# disqus-code: # Disqus comments code
	# Build settings
	markdown: kramdown
	permalink: /:year/:month/:day/:title/ # Post permalink pattern
	paginate: 3 # Post count per page in pagination mode
	paginate_path: "page-:num/" # Post pagination pattern
	exclude: [
	'node_modules',
	'bower_components',
	'Gruntfile.js',
	'package.json',
	'bower.json',
	'README.md',
	'Rakefile'
	]
	source: _build # Jekyll source folder
	destination: _deploy # Generated website folder
	# Category pages settings
	categories:
	  url: /category/
	  slug: ''
	  title_prefix: 'Category: '
	  descr_prefix: 'Blog posts in category «'
	  descr_postfix: '», page '
	  layout: category.html
	# Tag pages settings
	tags:
	  url: /tag/
	  slug: ''
	  title_prefix: 'Tag: '
	  descr_prefix: 'Posts tagged «'
	  descr_postfix: '», page '
	  layout: tag.html
	# Layout common texts
	scroll-next: 'Let`s go!'
	menu-text: 'Menu'
	pager:
	  page-next: 'Newer posts ›'
	  page-prev: '‹ Older posts'
	  post-next: 'Next post ›'
	  post-prev: '‹ Previous post'
	meta:
	  author: 'Author'
	  translator: 'translator'
	  source: 'Source'
	  date: 'published'
	  tags: 'Tags'
	  category: 'Category'
	end:
	  title: 'Let`s get in touch!'
	  descr: 'If you have any questions, please do not hesitate to contact me'
	social:
	  rss: 'News feed'
	  twitter: 'Follow me on twitter'
	  facebook: 'My Facebook'
	  vkontakte: 'I`m Vkontakte'
	  gplus: 'My Google+'
	  mail: 'Shoot me an email'
	  skype: 'Add me to Skype contacts'
	  git: 'My projects on github'
	  bitbucket: 'Some of my projects on Bitbucket'
	  linkedin: 'My Linkedin profile'
	</code></pre>
	<figcaption>_config.yml settings</figcaption>
</figure>

Ok, I think that's clear, we've alredy checked general settings. And now let's talk about YAML fromt matter block for posts or pages. Here is a code from _draft.md - template for the new posts.

<figure class="code_center">
	<pre><code class="language-yaml">
	---
	layout: post # Layout of the page
	title: "" # Page title
	description: "" # Page description
	date: y-m-d # Post date
	tags: 
	-
	- 
	category:
	- 
	thumb_img: "img/post/_PATH/meta/thumb.jpg" # Image for the first screen of the page or post
	start_img: "img/post/_PATH/meta/start.jpg" # Image for the last screen of the page or post
	start_attribution: "" # Attribution for start image
	start_blur: true # Add blur for the first screen of post or page
	end_img: "img/post/_PATH/meta/end.jpg" # Image for the post preview
	end_attribution: "" # Attribution for end image
	end_blur: true # Add blur for the last screen of post or page
	langs: # URL's for different languages
	  "en": "/"
	permalink: # Custom page permalink
	comments: true # Enable or disable disqus comments
	---		
	</code></pre>
	<figcaption>YAML Front Matter block</figcaption>
</figure>

And I think that's all. Of course there are a few extra options, like this:

<figure class="code_center">
	<pre><code class="language-yaml">
	---		
	color: light # set color scheme for the first and last screens (might be light or dark)
	type: page # helper for switching components between different layouts
	regenerate: true # page force regenerating while using jekyll incremental build
	---
	</code></pre>
	<figcaption>Additional options</figcaption>
</figure>

But you shouldn't worry about it, it's just internal things. After a while of usage of this theme I've almost forgot about them ;) Thanks for watching
