#!/usr/bin/env node
'use strict';

import path from 'path';
import process from 'process';
import nunjucks from 'nunjucks';
import chalk from 'chalk';
import {minify} from 'html-minifier';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import Wrapper from './../Wrapper';

const root = process.cwd();
const config = require(path.resolve(root, process.argv[2]));
nunjucks.configure(path.resolve(root, './views'));
const store = memFs.create();
const fs = editor.create(store);

const render = (component, options) => {
  options.content = renderToStaticMarkup(component);

  const filename = (options.name === 'index' ? '' : options.name + '/') + 'index.html';
  const output = nunjucks.render(
    options.template ? options.template : 'template.html',
    Object.assign({}, options, {
      ENV: process.env.NODE_ENV === 'production'
    })
  );

  fs.write(
    path.resolve(root, filename),
    minify(output, process.env.NODE_ENV === 'production' ? {
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyURLs: true,
      minifyJS: true
    }: {})
  );

  fs.commit(err => {
    if(err)
      throw new Error(err);

    console.log(chalk.green('rendered ') + chalk.cyan(filename));
  });
};

const radium = component => {
  return React.createElement(Wrapper, null, component);
};

const redux = (component, options) => {
  const Provider = require('react-redux').Provider;
  const createStore = require('redux').createStore;
  const reducerPath = path.resolve(root, options.reducer);
  const reducer = require(reducerPath).default || require(reducerPath);

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
  const componentPath = path.resolve(root, options.component);
  options.component = require(componentPath).default || require(componentPath);

  if(options.router)
    return router(options.component, options);

  let output = React.createElement(options.component);

  if(options.redux)
    output = redux(output, options);

  render(radium(output), options);
});
