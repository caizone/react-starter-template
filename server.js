var express = require('express');
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.config.dev.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();

var compiler = webpack(webpackDevConfig);

var webpackDevOptions = {
    historyApiFallback: true,
    publicPath: webpackDevConfig.output.publicPath,
    filename: '[name].bundle.js',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

app.use(webpackDevMiddleware(compiler, webpackDevOptions));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/dist'));

var server = app.listen(3000, function () {
    console.log('Listening at http://localhost:3000');
});