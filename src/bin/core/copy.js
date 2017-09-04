'use strict';

import 'babel-polyfill';
import fs from 'fs';
import path from 'path';

import copyFile from './copy/copyFile';
import copyFolder from './copy/copyFolder';

const templateFolder = path.resolve(__dirname, './../../../temp');

export default async (template, targetPath) => {
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
