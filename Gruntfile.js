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
        cleanBowerDir: true,
        cleanup: true

      }
    },

    clean: ['libs', 'lib'],

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      html: {
        files: ['demo/index.html'],
        options: {
          livereload: {
            port: 9000
          }
        },
      },
      js: {
        files: ['src/js/angular-backtop.js'],
        tasks: ['copy', 'uglify'],
        options: {
          livereload: {
            port: 9000
          }
        },
      },
      less: {
        files: ['src/less/**/*.less'],
        tasks: ['less'],
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

    less: {
      development: {
        options: {
          compress: true,
          paths: ['src/less/*/']
        },
        files: {
          'dist/angular-backtop.css': 'src/less/main.less',
        }
      }
    },

    uglify: {
      js: {
        files: {
          'dist/angular-backtop.min.js': 'dist/angular-backtop.js'
        }
      }
    },

    copy: {
      js: {
        files: [{
          src: 'src/js/angular-backtop.js',
          dest: 'dist/angular-backtop.js'
        }]
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
      unit: {
        configFile: 'karma.conf.js'
      }
    },

  });

  grunt.registerTask('build', function() {
    grunt.task.run([
      'clean',
      'bower:install',
      'copy',
      'uglify',
      'less',
      'karma:unit',
      'coveralls'
    ]);
  });

  grunt.registerTask('serve', function() {
    grunt.task.run([
      'clean',
      'bower:install',
      'copy',
      'uglify',
      'less',
      'connect:server',
      'watch'
    ]);
  });
};
