'use strict';

module.exports = function(grunt) {
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
            '<%= pkg.license %> */\n',
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

    browserify: {
      debug: {
        files: {
          'public/Bookmarks/dist/common/bundle.js' : ['lib/mytest.js', 'lib/modules/program.js']
        },
        options: {
          debug: true
        }
      }
    },

    uglify: {
      release: {
        files: {
          'public/Bookmarks/dist/common/bundle.min.js': 'public/Bookmarks/dist/common/bundle.js'
        },
        options: {
          banner: '<%= banner %>'
        }
      }
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

  grunt.registerTask('build', 'Lint and compile', ['clean', 'jshint', 'browserify', 'uglify:release']);
  grunt.registerTask('default', ['jshint', 'build']);

};
