'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    bower: {
      install: {
        targetDir: 'libs',
        verbose: true,
        cleanup: true
      }
    },

    clean: ['libs', 'lib'],

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      html: {
        files: ['demo/index.html', 'src/*.css', 'src/*.js' ],
        options: {
          livereload: {
            port: 9000
          }
        },
      }
    },

    // The actual grunt server settings
    connect: {
      server: {
        options: {
          port: 1337,
          hostname: '',
          livereload: 9000,
          open: true,
          base: '.'
        }
      }
    },

    uglify: {
      build: {
        files: {
          'js/build/app.min.js': 'js/build/app.min.js',
          'js/build/libs.min.js': 'js/build/libs.js'
        }
      }
    },

    coveralls: {
      options: {
        debug: true,
        coverage_dir: 'test-coverage',
        dryRun: false,
        force: true,
        recursive: true
      }
    },

    // Test settings
    karma: {
      configFile: 'karma.conf.js',
      singleRun: true
    },

  });

  grunt.registerTask('build', function() {
    grunt.task.run([
      'clean',
      'bower:install',
      'uglify:build',
      'karma:unit',
      'coveralls'
    ]);
  });

  grunt.registerTask('serve', function() {
    grunt.task.run([
      'clean',
      'bower:install',
      'connect:server',
      'watch'
    ]);
  });
};
