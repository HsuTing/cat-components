'use strict';

import fs from 'fs';
import path from 'path';

import filter from './filter';

const getFiles = (nowPath, templatePath) => fs.readdirSync(nowPath)
  .reduce((result, file) => {
    const childFilePath = path.resolve(nowPath, file);
    const stats = fs.lstatSync(childFilePath);

    if(stats.isDirectory())
      return result.concat(getFiles(childFilePath, templatePath));
    else {
      result.push(
        childFilePath.replace(`${templatePath}/`, './')
      );
    }

    return result;
  }, []);

export default async (targetPath, templatePath, itemName) => {
  const output = getFiles(
    path.resolve(templatePath, itemName),
    templatePath
  ).reduce((result, filePath) => {
    return result.concat([{
      target: path.resolve(targetPath, filePath),
      template: path.resolve(templatePath, filePath)
    }]);
  }, []);

  return await filter(output);
};
