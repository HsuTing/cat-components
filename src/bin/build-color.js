#!/usr/bin/env node
'use strict';

import path from 'path';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import chalk from 'chalk';

import core from './core/build-color';

core().map(({name, options}) => {
  const store = memFs.create();
  const fs = editor.create(store);

  fs.copyTpl(
    path.resolve(__dirname, './../../data/templates/color.js'),
    path.resolve(__dirname, './../../color/', `${name}.js`),
    options
  );

  fs.commit(err => {
    if(err)
      throw new Error(err);

    console.log(chalk.green('build color done'));
  });
});
