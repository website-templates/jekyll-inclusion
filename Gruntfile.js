module.exports = function(grunt) {
    // Set relative path to root folder from current dev folder
    // in case of general node_modules folder
    // Remove gruntBase path for standalone dev
    gruntBase = '../../../';

    grunt.initConfig({
      // Dev paths
      dev: {
        main: '_dev',
        js: '_dev/js',
        markup: '_dev/markup',
        styles: '_dev/styles',
        css: '_dev/css',
        html: '_dev/html',
        img: '_dev/img',
        fonts: '_dev/fonts',
        helpers: '_dev/helpers',
        php: '_dev/php',
        devtools: '_dev/devtools'
      },
      // Build paths
      build: {
        main: '_build',
        css: '_build/css',
        fonts: '_build/fonts',
        img: '_build/img',
        php: '_build/php',
        js: '_build/js'
      },
      jekyll: {
        deploy: '_deploy'
      },

      //Assemble *.js files
        concat: {
          main: {
            files: [{
              src: ['<%= dev.js %>/*.js', '!<%= dev.js %>/assembled.js'],
              dest: '<%= dev.js %>/assembled.js'
            }]
          },
          // head: {
          //   files: [{
          //     src: ['<%= dev.js %>/head/*.js', '!<%= dev.js %>/head/head.js'],
          //     dest: '<%= dev.js %>/head/head.js'
          //   }]
          // }
        },

      //Uglify assembled *.js file    
        uglify: {
          options: {
            mangle: false
          },
          vendor: {
            files: [{
                expand: true,
                cwd: '<%= dev.js %>/vendor',
                src: '**/*.js',
                dest: '<%= build.js %>/vendor',
                ext: '.min.js'
            }]
          },
          main: {
              files: {
                  '<%= build.js %>/assembled.min.js': '<%= dev.js %>/assembled.js'
              }
          },
          ie: {
            files: {
                '<%= build.js %>/ie/ie.min.js': '<%= dev.js %>/ie/ie.js'
            }
          },
          // head: {
          //   files: {
          //       '<%= build.js %>/head/head.min.js': '<%= dev.js %>/head/head.js'
          //   }
          // }
        },

      //Compile *.scss files  
        sass: {
          main: {
            options: {
              style: 'expanded',
              sourcemap: 'none'
            },
            files: [{
              expand: true,
              cwd: '<%= dev.styles %>',
              src: ['**/*.{sass,scss}', '!components/**/*.*'],
              dest: '<%= dev.css %>',
              ext: '.css'
            }]
          },
          // jekyll: {
          //   options: {
          //     style: 'expanded',
          //     sourcemap: 'none'
          //   },
          //   files: [{
          //     expand: true,
          //     cwd: '<%= dev.styles %>',
          //     src: ['**/*.{sass,scss}', '!components/**/*.*'],
          //     dest: '<%= jekyll.deploy %>/css',
          //     ext: '.css'
          //   }]
          // }
        },

      //Compile *.less files
        less: {
          main: {
            files: [{
              expand: true,
              cwd: '<%= dev.styles %>',
              src: ['**/*.less', '!components/**/*.*'],
              dest: '<%= dev.css %>',
              ext: '.css'
            }]
          }
        },

       //Compile *.styl files
        stylus: {
          main: {
            options: {
              linenos: false,
              compress: false
            },
            files: [{
              expand: true,
              cwd: '<%= dev.styles %>',
              src: [ '**/*.styl', '!components/**/*.*' ],
              dest: '<%= dev.css %>',
              ext: '.css'
            }]
          }
        },

      //Combine media queries in result *.css files   
        cmq: {
          options: {
            log: false
          },
          main: {
            files: {
              '<%= dev.css %>': ['<%= dev.css %>/*.css']
            }
          }
        },

      //Autoprefixer  
        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
            //By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
          },
          main: {
            files:[{
              expand: true,
              flatten: true,
              src: '<%= dev.css %>/*.css',
              dest: '<%= dev.css %>/'
            }]
          }
        },

      //Minify and organize *.css files  
        csso: {
          options: {
            keepSpecialComments: '*',
            restructure: false
          },
          main: {
            files:[{
              expand: true,
              cwd: '<%= dev.css %>/',
              src: ['*.css', '!*.min.css'],
              dest: '<%= build.css %>/',
              ext: '.min.css'
            }]
          }
        },

      //Compile *.jade files  
        jade: {
          main: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "<%= dev.markup %>",
              src: ['**/*.jade', '!components/**/*.*'],
              dest: "<%= dev.html %>/",
              expand: true,
              ext: ".html"
            } ]
          }
        },

      //Compile *.haml files  
        haml: {
          main: {
            files: [ {
              cwd: "<%= dev.markup %>",
              src: ['**/*.haml', '!components/**/*.*'],
              dest: "<%= dev.html %>/",
              expand: true,
              ext: ".html"
            } ]
          }
        },

      //Minify *.html files 
        htmlmin: {
            main: {
              options: {
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true
              },
              files: [ {
                cwd: "<%= jekyll.deploy %>",
                src: "**/*.html",
                dest: "<%= jekyll.deploy %>",
                expand: true,
                ext: ".html"
              } ]
            }
        },

      //Minify image files   
        imagemin: {
          main: {
            options: {
              optimizationLevel: 7
            },
            files: [{
              expand: true,
              cwd: '<%= dev.img %>',
              src: ['**/*.{png,jpg,gif}'],
              dest: '<%= build.img %>'
            }]
          }
        },

      //Copy some folders or files (ex. *.php) from dev to build
        copy: {
          // php: {
          //   files: [{
          //     expand: true, 
          //     cwd: '<%= dev.php %>/',
          //     src: '**', 
          //     dest: '<%= build.php %>'
          //   }]
          // },
          fonts: {
            files: [{
              expand: true,
              cwd: '<%= dev.fonts %>/',
              src: ['**/*.{eot,svg,ttf,woff}'],
              dest: '<%= build.fonts %>'
            }]
          },
          js: {
            files: [{
              expand: true,
              cwd: '<%= dev.js %>/',
              src: [
                '**/assembled.js',
                '**/vendor.js',
                '**/head.js',
                '**/ie.js'],
              dest: '<%= build.js %>/'
            }]
          },
          livejs: {
            files: [{
              expand: true,
              cwd: '<%= dev.devtools %>/',
              src: '**/live.js',
              dest: '<%= build.js %>/'
            }]
          },
          css: {
            files: [{
              expand: true,
              cwd: '<%= dev.css %>',
              src: ['**/*.css'],
              dest: '<%= build.css %>/'
            }]
          },
          markup: {
            files: [{
              expand: true,
              cwd: '<%= dev.markup %>',
              src: ['**/*.{md,markdown}'],
              dest: '<%= build.main %>'
            }]
          },
          html: {
            files: [{
              expand: true,
              cwd: '<%= dev.html %>',
              src: ['**/*.html'],
              dest: '<%= build.main %>'
            }]
          },
          helpers: {
            files: [{
              expand: true,
              cwd: '<%= dev.helpers %>',
              src: ['**/*.*', '**/.htaccess', '**/CNAME'],
              dest: '<%= build.main %>'
            }]
          }
        },

      //Assemble bower components in right order 
        bower_concat: {
          vendor: {
            dest: '<%= dev.js %>/vendor/vendor.js',
            exclude: ['respond', 'html5shiv'],
            bowerOptions: {
              relative: true
            }
          },
          ie: {
            dest: '<%= dev.js %>/ie/ie.js',
            exclude: ['jquery'],
            mainFiles: {
              'html5shiv': 'dist/html5shiv-printshiv.js'
            },
            bowerOptions: {
              relative: true
            }
          }
        },

      //Copy bower components to the custom folder   
        // bowercopy: {
        //   options: {
        //     // clean: true,
        //     ignore: ['modernizr', 'jquery']
        //   },
        //   js: {
        //     options: {
        //         destPrefix: '<%= dev.js %>'
        //     },
        //     files: {
        //         'bootstrap.js': 'bootstrap-sass-official/assets/javascripts/bootstrap.js'
        //     }
        //   },
        //   scss: {
        //     options: {
        //         destPrefix: '<%= dev.styles %>/components'
        //     },
        //     files: {
        //         bootstrap: 'bootstrap-sass-official/assets/stylesheets'
        //     }
        //   },
        //   fonts: {
        //     options: {
        //         destPrefix: '<%= dev.fonts %>'
        //     },
        //     files: {
        //         bootstrap: 'bootstrap-sass-official/assets/fonts/bootstrap'
        //     }
        //   }
        // },

      //Delete .gitkeep files. If you don't use Bower - just run `grunt clean`  
        clean: {
          gitkeep: ['<%= dev.main %>/**/.gitkeep', '<%= build.main %>/**/.gitkeep'],
          less: '<%= dev.styles %>/**/*.less',
          sass: '<%= dev.styles %>/**/*.scss',
          stylus: '<%= dev.styles %>/**/*.styl',
          haml: '<%= dev.markup %>/**/*.haml',
          jade: '<%= dev.markup %>/**/*.jade',
          debug: ['<%= build.js %>/**/*.js',
                  '!<%= build.js %>/**/*.min.js',
                  '<%= build.css %>/**/*.css',
                  '!<%= build.css %>/**/*.min.css'],
          bower: 'bower_components'
        },

      //Delete some dev code and references from files        
        processhtml: {
          dist: {
            files: [{
              expand: true,
              cwd: '<%= jekyll.deploy %>',
              src: ['**/*.html'],
              dest: '<%= jekyll.deploy %>',
              ext: '.html'
            }],
          }
        },

      // Build and serve jekyll blog
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            rakeDeploy: {
                command: 'rake deploy'
            }
        },

      //Watch for changes    
        watch: {
          all: {
            files: ['<%= dev.html %>/**/*.html',
                    '<%= dev.styles %>/**/*.{scss,less,styl}',
                    '<%= dev.css %>/*.css',
                    '<%= dev.js %>/**/*.js',
                    '<%= dev.img %>/**/*.{png,jpg,gif}',
                    '<%= dev.markup %>/**/*.{jade,md,markdown}',
                    '<%= dev.php %>/**/*.php',
                    '<%= dev.fonts %>/**/*.{eot,svg,ttf,woff}'],
            tasks: ['default'],
            options: {
              spawn: false
            },
          },
        }
    });

    

    // I use general node_modules directory for common projects, 
    // so for standalone dev you should remove grunt-collection task loading
    // and uncomment other tasks
    grunt.loadNpmTasks('grunt-collection');

    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-stylus');
    // grunt.loadNpmTasks('grunt-combine-media-queries');
    // grunt.loadNpmTasks('grunt-autoprefixer');
    // grunt.loadNpmTasks('grunt-csso');
    // grunt.loadNpmTasks('grunt-contrib-jade');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-newer');

    // grunt.loadNpmTasks('grunt-bower-concat');
    // // grunt.loadNpmTasks('grunt-bowercopy');
    // grunt.loadNpmTasks('grunt-contrib-clean');

    // grunt.loadNpmTasks('grunt-processhtml');
    // grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('bower-dev', ['bower_concat',
                                     // 'bowercopy',
                                     // 'clean:bower'
    ]);

    grunt.registerTask('init', ['concat',
                                'sass',
                                'less',
                                'stylus',
                                'jade',
                                // 'imagemin',
                                'copy',
                                'shell:jekyllBuild'
    ]);

    grunt.registerTask('default', ['newer:concat',
                                   'newer:sass',
                                   'newer:less',
                                   'newer:stylus',
                                   'newer:jade',
                                   'newer:imagemin',
                                   'newer:copy',
                                   'shell:jekyllBuild',
                                   'watch'
    ]);

    grunt.registerTask('build', ['cmq',
                                 'autoprefixer',
                                 'uglify',
                                 'csso',
                                 'clean:debug',
                                 'shell:jekyllBuild',
                                 'processhtml',
                                 'htmlmin'
    ]);

    grunt.registerTask('jekyll-build', ['newer:imagemin',
                                        'newer:copy:markup',
                                        'newer:copy:helpers',
                                        'shell:jekyllBuild',
                                        'processhtml',
                                        'htmlmin'
    ]);

    grunt.registerTask('jekyll-deploy', ['shell:rakeDeploy']);
};