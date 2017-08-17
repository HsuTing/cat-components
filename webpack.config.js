'use strict';

const path = require('path');
const process = require('process');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV === 'production';
const src = './docs/src/public';

module.exports = {
  entry: {
    index: path.resolve(src, './index.js'),
    login: path.resolve(src, './templates/login.js'),
    dashboard: path.resolve(src, './templates/dashboard.js'),
    common: [
      'radium',
      'radium-normalize',
      'prop-types',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router-dom'
    ]
  },
  output: {
    filename: ENV ? '[name].min.js' : '[name].js',
    chunkFilename: ENV ? '[name].min.js' : '[name].js',
    publicPath: ENV ? '/cat-components/public/js/' : '/assets/',
    path: path.resolve(__dirname, './docs/public/js')
  },
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  },
  plugins: ENV ? [
    new webpack.DefinePlugin({'process.env': {
      NODE_ENV: JSON.stringify('production'),
      TYPE: JSON.stringify('client')
    }}),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.min.js'}),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: true})
  ] : [
    new webpack.DefinePlugin({'process.env': {
      TYPE: JSON.stringify('client')
    }}),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.js'}),
    new webpack.HotModuleReplacementPlugin()
  ]
};
