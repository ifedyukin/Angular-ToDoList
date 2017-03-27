module.exports = function (config) {
    var configuration = {
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-babel-preprocessor',
            'karma-spec-reporter'
        ],
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-route/angular-route.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './src/app/**/*.js',
            './tests/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            'src/**/!(*.spec|*.mock|*-mock|*.e2e|*.po|*.test).js': ['webpack', 'sourcemap']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            }
        },
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        singleRun: true,
        concurrency: Infinity,
        webpack: require('./webpack.config'),
        webpackMiddleware: {
            noInfo: true
        }
    };

    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_travis_ci'];
    }

    config.set(configuration);
}