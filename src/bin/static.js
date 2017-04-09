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
const store = memFs.create();
const fs = editor.create(store);
const ENV = process.env.NODE_ENV === 'production';

const render = (component, options) => {
  nunjucks.configure(path.resolve(root, options.root || './views'));
  options.content = renderToStaticMarkup(component);

  const filename = (options.name === 'index' ? '' : options.name + '/') + 'index.html';
  const output = nunjucks.render(
    options.template ? options.template : 'template.html',
    Object.assign({}, options, {
      ENV
    })
  );

  fs.write(
    path.resolve(root, filename),
    minify(output, ENV ? {
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

config.forEach(options => {
  const componentPath = path.resolve(root, options.component);

  options.component = require(componentPath).default || require(componentPath);
  render(radium(
    React.createElement(options.component)
  ), options);
});
