#!/usr/bin/env node
'use strict';

import 'babel-polyfill';
import nodeFs from 'fs';
import path from 'path';
import process from 'process';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import chalk from 'chalk';
import inquirer from 'inquirer';

import core from './core/copy';

const targetRootPath = process.cwd();
const templateFolder = path.resolve(__dirname, './../../temp');

(async () => {
  try {
    const {template, targetPath} = await inquirer.prompt([{
      type: 'list',
      name: 'template',
      message: 'Choose you need',
      choices: nodeFs.readdirSync(templateFolder)
        .reduce((choices, folderName) => {
          return [
            ...choices,
            ...(nodeFs.readdirSync(path.resolve(templateFolder, folderName))
              .reduce((items, itemName) => {
                if(['style', 'temp'].includes(itemName))
                  return items;

                return [
                  ...items,
                  `[${folderName}] ${itemName}`
                ];
              }, [])
            )
          ];
        }, [])
    }, {
      name: 'targetPath',
      message: 'Give a root path',
      default: './src/components',
      validate: target => (
        nodeFs.existsSync(path.resolve(targetRootPath, target)) ?
          true :
          'The folder does not exist.'
      ),
      filter: target => path.resolve(targetRootPath, target)

    }]);

    const result = await core(template, targetPath);

    result.forEach(({target, template}) => {
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
