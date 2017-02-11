#!/usr/bin/env node
'use strict';

import fs from 'fs';
import path from 'path';
import process from 'process';
import nunjucks from 'nunjucks';
import chalk from 'chalk';
import {minify} from 'html-minifier';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import {Wrapper} from './../radium';

const root = process.cwd();
const config = require(path.resolve(root, process.argv[2]));
nunjucks.configure(path.resolve(root, './views'));

const copyFile = (html, options) => {
  options.content = html;

  const filename = (options.name === 'index' ? '' : options.name + '/') + 'index.html';
  const output = nunjucks.render(
    options.template ? options.template : 'template.html',
    Object.assign({}, options, {
      ENV: process.env.NODE_ENV === 'production'
    })
  );

  fs.writeFile(
    path.resolve(root, filename),
    minify(output, process.env.NODE_ENV === 'production' ? {
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyURLs: true,
      minifyJS: true
    }: {}),
    err => {
      if(err)
        throw err;

      console.log(chalk.green('rendered ') + chalk.cyan(filename));
    }
  );
};

const render = (component, options) => {
  const html = renderToStaticMarkup(component);
  if(options.name !== 'index') {
    fs.mkdir(options.name, err => {
      if(err)
        throw err;

      copyFile(html, options);
    });
  } else
    copyFile(html, options);
};

const radium = component => {
  return React.createElement(Wrapper, null, component);
};

const redux = (component, options) => {
  const Provider = require('react-redux').Provider;
  const createStore = require('redux').createStore;
  const reducer = require(options.reducer).default || require(options.reducer);

  return React.createElement(Provider, {
    store: options.data ? createStore(reducer, options.data) : createStore(reducer)
  }, component);
};

const router = (component, options) => {
  const match = require('react-router').match;
  const RouterContext = require('react-router').RouterContext;

  match({routes: component, location: options.location}, (error, redirextLocation, renderProps) => {
    if(renderProps) {
      let output = React.createElement(RouterContext, renderProps);

      if(options.redux)
        output = redux(output, options);

      render(radium(output), options);
    } else
      render('not find', options);
  });
}

config.forEach(options => {
  options.component = require(options.component).default || require(options.component);

  if(options.router)
    return router(options.component, options);

  let output = React.createElement(options.component);

  if(options.redux)
    output = redux(output, options);

  render(radium(output), options);
});
