#!/usr/bin/env node
'use strict';

const nodeFs = require('fs');
const path = require('path');
const memFs = require('mem-fs');
const editor = require('mem-fs-editor');
const chalk = require('chalk');

const store = memFs.create();
const fs = editor.create(store);

nodeFs.readdirSync(path.resolve(__dirname, './color'))
  .forEach(name => {
    const options = {};
    fs.read(path.resolve(__dirname, `./color/${name}`))
      .split(/\n/)
      .forEach(d => {
        const [key, value] = d.split(/\#/); // eslint-disable-line no-useless-escape

        if(!value)
          return;

        if(value.length !== 6)
          throw new Error(`${name}: #${value} is not a color`);

        options[`_${key}_`] = `#${value}`;
      });

    fs.copyTpl(
      path.resolve(__dirname, './templates/color.js'),
      path.resolve(__dirname, './../src/color', `${name}.js`),
      options
    );

  });

fs.commit(err => {
  if(err)
    throw new Error(err);

  console.log(chalk.green('build done'));
});
