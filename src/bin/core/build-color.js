'use strict';

import fs from 'fs';
import path from 'path';

const colorFolder = path.resolve(__dirname, './../../../data/color');

export default () => {
  return fs.readdirSync(colorFolder)
    .map(name => {
      const options = {};

      fs.readFileSync(path.resolve(colorFolder, name), 'utf-8')
        .split(/\n/)
        .forEach(d => {
          const [key, value] = d.split(/\#/); // eslint-disable-line no-useless-escape

          if(!value || value.length !== 6)
            return;

          options[`_${key}_`] = `#${value}`;
        });

      return {
        name,
        options
      };
    });
};
