#!/usr/bin/env node
'use strict';

import 'babel-polyfill';
import nodeFs from 'fs';
import process from 'process';
import memFs from 'mem-fs';
import editor from 'mem-fs-editor';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

const store = memFs.create();
const fs = editor.create(store);
const templateMultipleRoot = path.resolve(__dirname, './../../templates-multiple');
const templateTemplateRoot = path.resolve(__dirname, './../../templates-templates');

(async () => {
  try {
    const {components} = await inquirer.prompt([{
      name: 'root',
      message: 'Root folder',
      default: './src/components',
      validate: path => nodeFs.existsSync(path) ? true : 'The folder does not exist.'
    }, {
      type: 'checkbox',
      name: 'components',
      message: 'Choose the components',
      choices: ({root}) => nodeFs.readdirSync(templateMultipleRoot)
        .filter(file => file !== 'style')
        .map(file => {
          const name = file.replace(/.js/, '');
          const styleName = name[0].toLowerCase() + name.slice(1);

          return {
            name,
            value: {
              root: path.resolve(root, './share'),
              name,
              styleName,
              templateComponentPath: path.resolve(templateMultipleRoot, `${name}.js`),
              templateStylePath: path.resolve(templateMultipleRoot, './style', `${styleName}.js`)
            }
          }
        })
        .concat(
          nodeFs.readdirSync(templateTemplateRoot)
            .filter(file => file !== 'style')
            .map(file => {
              const name = file.replace(/.js/, '');
              const styleName = name[0].toLowerCase() + name.slice(1);

              return {
                name,
                value: {
                  root,
                  name,
                  styleName,
                  templateComponentPath: path.resolve(templateTemplateRoot, `${name}.js`),
                  templateStylePath: path.resolve(templateTemplateRoot, './style', `${styleName}.js`)
                }
              }
            })
        )
    }]);

    let index = 0;
    while(index < components.length) {
      const {
        root,
        name,
        styleName,
        templateComponentPath,
        templateStylePath
      } = components[index];

      const componentPath = path.resolve(root, `${name}.js`);
      const stylePath = path.resolve(root, './style', `${styleName}.js`);

      const result = await inquirer.prompt([{
        type: 'confirm',
        name: 'addComponent',
        message: `Component: ${name} exist. Are you sue?`,
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

      await new Promise((resolve, reject) => {
        fs.commit(err => {
          if(err)
            reject(err);

          if(addComponent)
            console.log(chalk.green('copy ') + chalk.cyan(`${name}.js`));
          if(addStyle)
            console.log(chalk.green('copy ') + chalk.cyan(`style/${styleName}.js`));

          return resolve();
        });
      });

      index = index + 1;
    }
  } catch(e) {
    console.log(e);
  }

  process.exit();
})();
