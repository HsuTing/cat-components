#!/usr/bin/env node
'use strict';

import 'babel-polyfill';
import nodeFs from 'fs';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

const store = memFs.create();
const fs = editor.create(store);
const templateRoot = path.resolve(__dirname, './../../templates');

(async () => {
  try {
    const {root, components} = await inquirer.prompt([{
      name: 'root',
      message: 'Root folder',
      default: './src/components/share',
      validate: path => nodeFs.existsSync(path) ? true : 'The folder does not exist.'
    }, {
      type: 'checkbox',
      name: 'components',
      message: 'Choose the components',
      choices: nodeFs.readdirSync(templateRoot)
        .filter(file => file !== 'style')
        .map(file => file.replace(/.js/, '').replace(/Use/, ''))
    }]);

    components.forEach(async component => {
      try {
        const styleName = component[0].toLowerCase() + component.slice(1);
        const templateComponentPath = path.resolve(templateRoot, `Use${component}.js`);
        const templateStylePath = path.resolve(templateRoot, './style', `${styleName}.js`);
        const componentPath = path.resolve(root, `${component}.js`);
        const stylePath = path.resolve(root, './style', `${styleName}.js`);

        const result = await inquirer.prompt([{
          type: 'confirm',
          name: 'addComponent',
          message: `Component: ${component} exist. Are you sue?`,
          when: fs.exists(componentPath)
        }, {
          type: 'confirm',
          name: 'addStyle',
          message: `Style: ${styleName} exist. Are you sue?`,
          when: fs.exists(stylePath)
        }]);

        const addComponent = result.addComponent === undefined || result.addComponent;
        const addStyle = result.addStyle === undefined || result.addStyle;

        if(addComponent)
          fs.copy(templateComponentPath, componentPath);
        if(addStyle)
          fs.copy(templateStylePath, stylePath);

        fs.commit(err => {
          if(err)
            throw new Error(err);

          if(addComponent)
            console.log(chalk.green('copy ') + chalk.cyan(`${component}.js`));
          if(addStyle)
            console.log(chalk.green('copy ') + chalk.cyan(`style/${styleName}.js`));
        });
      } catch(e) {
        console.log(e);
      }
    });
  } catch(e) {
    console.log(e);
  }
})();
