#!/usr/bin/env node
'use strict';

import 'babel-polyfill';
import process from 'process';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import chalk from 'chalk';

import core from './core/copy';

(async () => {
  try {
    (await core())
      .forEach(({target, template}) => {
        const store = memFs.create();
        const fs = editor.create(store);

        fs.copy(template, target);

        fs.commit(err => {
          if(err)
            throw new Error(err);

          console.log(chalk.green('build ') + chalk.cyan(target.replace(`${process.cwd()}/`, '')));
        });
      });
  } catch(err) {
    throw new Error(err);
  }
})();
