module.exports = function(grunt) {
  'use strict';
    // load tasks automatically
    require('load-grunt-tasks')(grunt);
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.license %> */\n',
        // Task configuration
        clean: {
          sencha: {
            src: ['public/Bookmarks/dist/common']
          }
        },

        jshint: {
          options: {
            reporter: require('jshint-stylish'),
            force: true,
            node: true,
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            unused: true,
            eqnull: true,
            browser: true,
            globals: {
              jQuery: true
            },
            boss: true
          },
          files: 'lib/**/*.js',
          gruntfile: {
            src: 'Gruntfile.js'
          }
        },

        // extract_required: {
        //   sencha: {
        //     files: [{
        //       src: 'public/Bookmarks/app/**/*.js',
        //       dest: 'public/Bookmarks/dist/common/required.js'
        //     }]
        //   }
        // },
        // concat: {
        //   js: {
        //     files: {
        //       'public/Bookmarks/dist/bundled/bundle.js': 'lib/**/*.js'
        //     }
        //   }
        // },

        browserify: {
          debug: {
            files: {
              'public/Bookmarks/dist/common/mytest.js' : ['lib/mytest.js', 'lib/modules/program.js']
            },
            options: {
              debug: true
            }
          }
        },

        // browserify: {
        //   sencha: {
        //     files: {
        //       'public/Bookmarks/dist/common/required-bundle.js': ['public/Bookmarks/dist/common/required.js']
        //     }
        //   },
        //   options: {
        //     standalone: 'require'
        //   }
        // },
        uglify: {
          release: {
            files: {
              'public/Bookmarks/dist/common/mytest.min.js': 'public/Bookmarks/dist/common/mytest.js'
            },
            options: {
              banner: '<%= banner %>'
            }
          },
        //   dist: {
        //     src: 'public/Bookmarks/dist/common/required-bundle.js',
        //     dest: 'public/Bookmarks/dist/common/required-bundle.min.js'
        //   }
        },

        watch: {
          sencha: {
            files: ['public/Bookmarks/app/**/*.js'],
            tasks: ['build']
          },
          gruntfile: {
            files: '<%= jshint.gruntfile.src %>',
            tasks: ['jshint:gruntfile']
          }
        }
      });

    grunt.registerTask('build', 'Lint and compile', [
      'clean', 'jshint', 'browserify', 'uglify:release'
      ]);
    grunt.registerTask('default', ['jshint', 'build']);

  };
