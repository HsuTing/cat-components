#!/bin/env node

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _htmlMinifier = require('html-minifier');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _radium = require('./../radium');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = _process2.default.cwd();
var config = require(_path2.default.resolve(root, _process2.default.argv[2]));
_nunjucks2.default.configure(_path2.default.resolve(root, './views'));

var copyFile = function copyFile(html, options) {
  options.content = html;

  var filename = (options.name === 'index' ? '' : options.name + '/') + 'index.html';
  var output = _nunjucks2.default.render(options.template ? options.template : 'template.html', _extends({}, options, {
    ENV: _process2.default.env.NODE_ENV === 'production'
  }));

  _fs2.default.writeFile(_path2.default.resolve(root, filename), (0, _htmlMinifier.minify)(output, _process2.default.env.NODE_ENV === 'production' ? {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyURLs: true,
    minifyJS: true
  } : {}), function (err) {
    if (err) throw err;

    console.log(_chalk2.default.green('rendered ') + _chalk2.default.cyan(filename));
  });
};

var render = function render(component, options) {
  var html = (0, _server.renderToStaticMarkup)(component);
  if (options.name !== 'index') {
    _fs2.default.mkdir(options.name, function (err) {
      if (err) throw err;

      copyFile(html, options);
    });
  } else copyFile(html, options);
};

var radium = function radium(component) {
  return _react2.default.createElement(_radium.Wrapper, null, component);
};

var redux = function redux(component, options) {
  var Provider = require('react-redux').Provider;
  var createStore = require('redux').createStore;
  var reducer = require(options.reducer).default;

  return _react2.default.createElement(Provider, {
    store: options.data ? createStore(reducer, options.data) : createStore(reducer)
  }, component);
};

var router = function router(component, options) {
  var match = require('react-router').match;
  var RouterContext = require('react-router').RouterContext;

  match({ routes: component, location: options.location }, function (error, redirextLocation, renderProps) {
    if (renderProps) {
      var output = _react2.default.createElement(RouterContext, renderProps);

      if (options.redux) output = redux(output, options);

      render(radium(output), options);
    } else render('not find', options);
  });
};

config.forEach(function (options) {
  options.component = require(options.component).default;

  if (options.router) return router(options.component, options);

  var output = _react2.default.createElement(options.component);

  if (options.redux) output = redux(output, options);

  render(radium(output), options);
});