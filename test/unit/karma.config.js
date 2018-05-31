
webpackTestConfig = require('../../build/webpack.test.config')
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
      files: [
          'species/**/*.spec.js'
      ],
      preprocessors: {
          '**/*.spec.js': ['webpack', 'sourcemap']
      },
      /*files: ['./index.js'],
      preprocessors: {
          './index.js': ['webpack', 'sourcemap']
      },*/
      webpack: webpackTestConfig,
      webpackMiddleware: {
          noInfo: true
      },
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
