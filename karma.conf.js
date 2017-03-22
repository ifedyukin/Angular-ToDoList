// Karma configuration
// Generated on Sun Mar 12 2017 21:48:38 GMT+0300 (RTZ 2 (зима))

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-babel-preprocessor',
            'karma-spec-reporter',
            'karma-coverage'
        ],

        // list of files / patterns to load in the browser
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './src/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/!(*.spec|*.mock|*-mock|*.e2e|*.po|*.test).js': ['webpack', 'sourcemap']
        },

        // Babel preprocessor specific configuration
        babelPreprocessor: {
            options: {
                presets: ['es2015'], // use the es2015 preset
                sourceMap: 'inline' // inline source maps inside compiled files
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],

        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'report-html'
                },
                {
                    type: 'lcov',
                    subdir: 'report-lcov'
                },
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.txt'
                }
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        webpack: require('./webpack.config'),
        webpackMiddleware: {
            noInfo: true
        }
    })
}
