'use strict';

import path from 'path';

import filter from './filter';

export default async (targetPath, templatePath, itemName) => {
  const output = ([
    `./${itemName}`,
    `./style/${itemName[0].toLowerCase() + itemName.slice(1)}`
  ]).reduce((result, filePath) => {
    return result.concat([{
      target: path.resolve(targetPath, filePath),
      template: path.resolve(templatePath, filePath)
    }]);
  }, []);

  return await filter(output);
};
