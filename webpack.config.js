'use strict';

var webpack = require('webpack');
var glob = require("glob-all");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = function () {
    var config = {};
    config.plugins = [];
    config.entry = isTest ? void 0 :
        glob.sync([
            "./src/app/**/*.js",
            "./src/assets/css/*.css"
        ]);

    config.output = isTest ? {} : {
        path: __dirname + '/dist',
        publicPath: isProd ? '/' : 'http://localhost:8080/',
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    };

    if (isProd) {
        config.devtool = 'inline-source-map';
    }
    else if (isTest) {
        config.devtool = 'source-map';
    }

    config.module = {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: /node_modules/,
            include: /assets/
        }, {
            test: /\.(png|ico|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader',
            exclude: /node_modules/,
            include: /assets/
        },
        {
            test: /\.html$/,
            loader: 'raw-loader',
            include: /app/
        }]
    };

    if (!isTest) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: './src/index.html',
                inject: 'body'
            })
        )
    }

    if (isProd) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin()
        )
    }

    config.devServer = {
        contentBase: './src/assets',
        stats: 'minimal'
    };

    return config;
}();