'use strict';

import path from 'path';
import process from 'process';

import copy from './../bin/core/copy';

const getPath = newPath => path.resolve(process.cwd(), newPath);

describe('copy', () => {
  it('# copy file', async () => {
    expect(await copy('[multiple] InputDate.js', './'))
      .toMatchObject(
        [
          'InputDate.js',
          'style/inputDate.js'
        ].map(filePath => ({
          target: getPath(`./${filePath}`),
          template: getPath(`./temp/multiple/${filePath}`)
        }))
      );
  });

  it('# copy folder', async () => {
    expect(await copy('[templates] dashboard', './'))
      .toMatchObject(
        [
          'Dashboard.js',
          'Menu.js',
          'style/dashboard.js',
          'style/menu.js'
        ].map(filePath => ({
          target: getPath(`./dashboard/${filePath}`),
          template: getPath(`./temp/templates/dashboard/${filePath}`)
        }))
      );
  });
});
