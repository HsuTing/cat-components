#!/usr/bin/env node
'use strict';

import path from 'path';
import process from 'process';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import chalk from 'chalk';

import core from './core/static';

const root = process.cwd();

core(require(path.resolve(root, process.argv[2])))
  .map(({filename, content}) => {
    const store = memFs.create();
    const fs = editor.create(store);

    fs.write(
      path.resolve(root, filename),
      content
    );

    fs.commit(err => {
      if(err)
        throw new Error(err);

      console.log(chalk.green('build ') + chalk.cyan(filename));
    });
  });
