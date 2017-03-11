const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: [
    './main.js',
  ],

  output: {
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader'],
    }, {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loaders: 'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true',
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:3000'})
  ],
};