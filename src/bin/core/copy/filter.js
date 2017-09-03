'use strict';

import fs from 'fs';
import process from 'process';
import inquirer from 'inquirer';

export default async output => {
  const defaultCheck = output.reduce((result, data, index) => {
    result[index.toString()] = true;
    return result;
  }, {});
  const check = {
    ...defaultCheck,
    ...(await inquirer.prompt(
      output.map(({target}, index) => ({
        type: 'confirm',
        name: index.toString(),
        message: `${target.replace(`${process.cwd()}/`, '')} exists. Are you sure?`,
        when: fs.existsSync(target)
      }))
    ))
  };

  return output.filter((result, index) => {
    return check[index.toString()];
  });
};
