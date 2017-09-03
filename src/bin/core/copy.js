'use strict';

import 'babel-polyfill';
import fs from 'fs';
import process from 'process';
import path from 'path';
import inquirer from 'inquirer';

import copyFile from './copy/copyFile';
import copyFolder from './copy/copyFolder';

const targetRootPath = process.cwd();
const templateFolder = path.resolve(__dirname, './../../../temp');

export default async () => {
  const {template, targetPath} = await inquirer.prompt([{
    type: 'list',
    name: 'template',
    message: 'Choose you need',
    choices: fs.readdirSync(templateFolder)
      .reduce((choices, folderName) => {
        return choices.concat(
          fs.readdirSync(path.resolve(templateFolder, folderName))
            .reduce((items, itemName) => {
              if(['style', 'temp'].includes(itemName))
                return items;

              return items.concat([`[${folderName}] ${itemName}`])
            }, [])
        );
      }, [])
  }, {
    name: 'targetPath',
    message: 'Give a root path',
    default: './src/components',
    validate: target => (
      fs.existsSync(path.resolve(targetRootPath, target)) ?
        true :
        'The folder does not exist.'
    ),
    filter: target => path.resolve(targetRootPath, target)

  }]);
  const [folderName, itemName] = template
    .replace(/\[|\]/g, '')
    .split(/ /g);
  const stats = fs.statSync(path.resolve(templateFolder, folderName, itemName));
  const templatePath = path.resolve(__dirname, './../../../temp/', folderName);

  if(stats.isDirectory())
    return copyFolder(targetPath, templatePath, itemName);
  else
    return copyFile(targetPath, templatePath, itemName);
};
