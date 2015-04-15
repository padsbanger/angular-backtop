module.exports = function(config) {
  config.set({
    // Karma configuration

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // list of files / patterns to load in the browser
    files: [
      'libs/angular/angular.js',
      'libs/angular-mocks/angular-mocks.js',
      'src/js/angular-backtop.js',
      'test/*.js'
    ],

    preprocessors: {
      'src/js/angular-backtop.js': 'coverage'
    },

    frameworks: [
      'jasmine'
    ],

    coverageReporter: {
      type: 'lcov',
      dir: 'test-coverage/'
    },

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['progress', 'coverage'],

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true

  });
};