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
    - [Grunt tasks](#grunt-tasks)
* [TODO](#todo)
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
There are two branches: master branch and gh-pages.
Project's development based on [frontend-scaffold](https://github.com/orlovmax/front-end-scaffold) and located in master branch:

`/_dev/` folder - contains source code.
`/_build/` folder - build version

gh-pages branch contains pure html/css/js site compiled by jekyll. This is for common user repository. For organization repository deploy branch should be `master` This brunch located in deploy folder:

`/_deploy/` folder - generated site, ready for deploy

You shoul  read [this article](http://www.aymerick.com/2014/07/22/jekyll-github-pages-bower-bootstrap.html) about creating dev and deploy branches for your blog. 

## Development and blogging
At first we need to make some fixes to Gruntfile:
- remove `gruntBase = '../../../';` this string - it used for grunt-collection plugin.
- remove this task  `grunt.loadNpmTasks('grunt-collection');`
- uncomment other `grunt.loadNpmTasks`... strings

Install dependencies:
* npm install
* bower install

Than you can use next tasks for grunt:

### Grunt tasks
* Helper tasks:
    - `grunt bower-dev` - copies bower dependencies in right folders
* Site dev tasks:
    - `grunt init` - compiles source files, generates site with jekyll, but only once. Doesn't watch for changes. Useful for the first time project initialization to avoid broken path errors.
    - `grunt` - default task for development, compiles source files, generates site with jekyll, watches for changes. Note that this task watches and processes only changed files, thanks to `newer` option
    - `grunt build` - minifies assets and generates site with jekyll, also processes and mififies generated markup 
* Jekyll tasks:
    - `grunt jekyll-build` - task for blogging, generates site with jekyll, processes and minifies generated markup
    - `grunt jekyll-deploy` - task for deploy, runs `rakeDeploy` through `grunt-shell` plugin: commits source files, commits deploy files and push all this stuff to remote repo.

## Changelog
* (December 30, 2014)
  - Added Disqus coments
* (December 05, 2014)
  - Custom theme developed, ready for blogging
* (November 29, 2014)
  - Basic theme with lorem ipsum installed
* (November 28, 2014)
  - Powered by Grunt, Bower, Jade, Sass
* (November 17, 2014)
  - Moved to jekyll
* (November 15, 2014)
  - Initial commit

## Credits
* [Lazy load plugin](http://www.appelsiini.net/projects/lazyload)
* [Intense Image Viewer](http://tholman.com/intense-images/)
* [Prism syntax highlighter](http://prismjs.com/download.html) 
* [Detect Mobile Browsers](http://detectmobilebrowsers.com/)
* [Clean blog jekyll theme](https://github.com/IronSummitMedia/startbootstrap-clean-blog-jekyll)

## License
[MIT](http://opensource.org/licenses/MIT)