# Jekyll blog theme

Simple and nice blog theme based on Inclusion framework.

Proudly built with [Jekyll](http://jekyllrb.com/) and [Grunt](http://gruntjs.com/), hosted on [Github](https://github.com).
Compatible browsers: IE8+, Firefox, Chrome, Opera, Yandex.browser, Safari

Check out [quick demo](http://website-templates.github.io/jekyll-inclusion/) of this theme

---

##Contents
* [Requirements](#requirements)
* [Structure](#structure)
* [Development and blogging](#development-and-blogging)
	- [Editorconfig](#editorconfig)
	- [Grunt tasks](#grunt-tasks)
	- [Data driven nav](#data-driven-nav)
	- [Post creation](#post-creation)
* [Changelog](#changelog)
* [Credits](#credits)
* [License](#license)

## Requirements:

- [Ruby](http://www.ruby-lang.org/)
- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/) (`npm install -g grunt-cli`)
- [Bower](http://bower.io/) (`npm install -g bower`)
- [Python](http://www.python.org/) with [pip](http://www.pip-installer.org/)

## Structure
There are two branches: master branch and gh-pages. Master is a main develop branch.
Project based on [Synteagle general project template](https://github.com/synteagle/se-general-template)
```
./
├── .editorconfig
├── Gruntfile.js
├── package.json
├── bower.json
├── README.md
├── CHANGELOG.md
├── Rakefile
├── Gemfile
├── _config.yml
├── post.sh
├──grunt/                                      * grunt tasks
|   ├── task.js
│   └── aliases.yml 
|
├── dev/                                       * site source
|   ├── coffee/                                * coffee scripts
|	│   └── main/                              * main scripts
|	│
│   ├── images/                                * image sources
|	│
│   ├── jade/                                  * templates
|	|	├── blocks/                            * blocks library
|	│   |   └── block.jade
|	│   ├── helpers/                           * helper mixins
|	│   ├── vendor/                            * third-party code
|	│   ├── layouts/                           * page layouts
|	│   └── pages/                             * main pages templates
|	│
│   ├── js/                                    * compiled and source js
|	|   ├── main/                              * main site scripts
|	│   ├── ie/                                * ie compat scripts
|	│   └── vendor/                            * vendor scripts
|	│
|	├── sass/                                  * sass preprocessor styles
|	|	├── blocks/                            * blocks library
|	│   |   └── block.sass
|	│   ├── helpers/                           * mixins and vars
|	│   ├── vendor/                            * third-party code
|	│   └── screen.sass
|	│
│   ├── ruby/                                  * jekyll plugins
|	│
│   ├── helpers/                               * helper files
|	│
│   ├── fonts/                                 * font sources
|	│
│   └── devtools/                              * some dev tools
│
├── build/                                     * built source
|	├── index.html
|	├── _data/                                 * jekyll data (i18n, locales)
|	|
|	├── _drafts/                               * drafts
|	|
|	├── _layouts/                              * layouts for jekyll generation
|	|
|	├── _plugins/                              * jekyll plugins
|	|
|	├── _posts/                                * posts (*.md)
|	|
|	└── static/                                * static assets
|		├── css/                               * minified styles
|		|
|		├── images/                            * minified images
|		│
|		├── js/                                * minified assembled js
|		|
|		└── fonts/                             * @font-face-ready webfonts
│
└── publ/                                      * generated website
	├── _data/                                 * jekyll data (i18n, locales)
	|
	├── _drafts/                               * drafts
	|
	├── _posts/                                * posts (*.md)
	|
	└── static/                                * static assets
		└── images/                            * post and pages images

```

Take a look at [this article](http://www.aymerick.com/2014/07/22/jekyll-github-pages-bower-bootstrap.html) about creating dev and deploy branches for your blog. 

NOTE: this example use in _config.yml use baseurl option, so after domain there is path: /jekyll-inclusion. If you want to run this example on the local machine you should comment or remove this line in _config.yml file.

## Development and blogging

### Editorconfig
This project contains .editorconfig file. It describes codestyle like indentation, trailing whitespaces etc. See more details [here](http://editorconfig.org/) 

### Grunt tasks
Here comes groups of grunt tasks with some explanations

#### Start 
`grunt start` - Install bower dependencies and place them to dev folders
```
- 'shell:bower'                          Install bower components
- 'bower:ie'                             Copy ie components to js folder
- 'bower:vendor'                         Copy vendor  components to js folder
```

#### Dev
`gulp dev` - Dev task with static server
```
- 'coffee:main'                          Compile main coffescripts
- 'concat:main'                          Concatenate main javascripts
- 'concat:ie'                            Concatenate ie javascripts
- 'concat:vendor'                        Concatenate vendor javascripts
- 'sass'                                 Compile Sass stylesheets
- 'jade'                                 Compile Jade templates
- 'sync:imagesDev'                       Sync images
- 'sync:fontsDev'                        Sync fonts
- 'sync:helpersDev'                      Sync helpers and other assets
- 'sync:rubyDev'                         Sync jekyll plugins
- 'sync:mainPubl'                        Sync posts and pages from publ folder
- 'shell:jekyllBuild'                    Generate site using Jekyll.rb
- 'browserSync:dev'                      Run dev server with watch option
- 'watch:dev'                            Watch for changes and run dev task
```

#### Build 
`grunt build` - Build task
```
- 'shell:jekyllBuild'                    Generate site using Jekyll.rb
- 'imagemin'                             Minify images
- 'cmq'                                  Combine media queries in css files
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascript files
- 'csso'                                 Minify stylesheets
- 'processhtml'                          Replace assets paths in html
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
- 'browserSync:test'                     Run test server without watch
```

#### Rebuild 
`grunt rebuild` - Regenerate and build project by running all tasks
```
- 'coffee:main'                          Compile main coffescripts
- 'concat:main'                          Concatenate main javascripts
- 'concat:ie'                            Concatenate ie javascripts
- 'concat:vendor'                        Concatenate vendor javascripts
- 'sass'                                 Compile Sass stylesheets
- 'jade'                                 Compile Jade templates
- 'sync:imagesDev'                       Sync images
- 'sync:fontsDev'                        Sync fonts
- 'sync:helpersDev'                      Sync helpers and other assets
- 'sync:rubyDev'                         Sync jekyll plugins
- 'sync:mainPubl'                        Sync posts and pages from publ folder
- 'shell:jekyllBuild'                    Generate site using Jekyll.rb
- 'imagemin'                             Minify images
- 'cmq'                                  Combine media queries in css files
- 'autoprefixer'                         Add vendor prefixes in css
- 'csscomb'                              Applie styleguide to stylesheets
- 'uglify'                               Minify javascript files
- 'csso'                                 Minify stylesheets
- 'processhtml'                          Replace assets paths in html
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
```

#### Theme
`grunt theme` - Theme styles and scripts fixing
```
- 'coffee:main'                          Compile main coffescripts
- 'concat:main'                          Concatenate main javascripts
- 'concat:ie'                            Concatenate ie javascripts
- 'concat:vendor'                        Concatenate vendor javascripts
- 'sass'                                 Compile Sass stylesheets
- 'sync:cssTheme'                        Sync css with Jekyll generated assets
- 'sync:jsTheme'                         Sync js with Jekyll generated assets
- 'browserSync:theme'                    Run dev server with watch option
- 'watch:theme'                          Watch for changes and run theme task
```

#### Template
`grunt template` - Theme templates fixing
```
- 'jade'                                 Compile Jade templates
- 'shell:jekyllBuild'                    Generate site using Jekyll.rb
```

#### Publish
`grunt publish` - Copy posts, pages and images and generates website
```
- 'sync:mainPubl'                        Copy posts, pages and images
- 'shell:jekyllBuild'                    Generate site using Jekyll.rb
- 'processhtml'                          Replace assets paths in html
- 'htmlmin'                              Minify html
- 'clean:dev'                            Remove dev things
```

#### Deploy 
`grunt deploy` - Deploy project by running Rakefile: git or ftp push
```
- 'shell:deploy'                         Deploy generated site to gh-pahes
```

#### Server 
`grunt server` - Run server without watching for changes
```
- 'browserSync:test'                     Run test server without watch
```

### Data driven nav
This theme use special data from _data/nav.yml to generate navigation. It's useful when you need to create nested menu. Also each page have menu option and if it will turn to true - this page will appear in menu.

### Post creation
There is a [simple bash script](https://gist.github.com/orlovmax/f1b73a5fd01fc4b917c2) that allows us to create new posts. I've put it in the root of the website, so just execute it, like `bash post.sh your-post-name` or `post.sh your-post-name` and it will create new *.md file at `_publ/pages/_posts` with predefined draft layout from `_draft` directory and also it will create folder in `_publ/img/posts/` with name `your-post-name` for your post images. It's pretty simple and useful.

## Changelog
Youc can find full changelog [HERE](https://github.com/website-templates/jekyll-inclusion/blob/master/CHANGELOG.md)

## Credits
* [JADE bemto mixin](https://github.com/kizu/bemto)
* [Lazy load plugin](http://www.appelsiini.net/projects/lazyload)
* [Intense Image Viewer](http://tholman.com/intense-images/)
* [Prism syntax highlighter](http://prismjs.com/download.html) 
* [Detect Mobile Browsers](http://detectmobilebrowsers.com/)
* [Clean blog jekyll theme](https://github.com/IronSummitMedia/startbootstrap-clean-blog-jekyll)
* [Strip.rb - strip newlines after for loop](https://github.com/aucor/jekyll-plugins)
* [Tag pages generator](https://github.com/ilyakhokhryakov/jekyll-tagging-pagination)
* [Tag and Category pages pagination](https://github.com/realjenius/realjenius.com/blob/master/_plugins/cat_and_tag_generator.rb)
* [Jekyll i18n filter](https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb)

## License
[MIT](http://opensource.org/licenses/MIT)
