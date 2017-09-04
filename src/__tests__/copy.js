'use strict';

import path from 'path';
import process from 'process';

import copy from './../bin/core/copy';

const getPath = new_path => path.resolve(process.cwd(), new_path);

describe('copy', () => {
  it('# copy file', async () => {
    expect(await copy('[multiple] InputDate.js', './'))
      .toMatchObject(
        [
          'InputDate.js',
          'style/inputDate.js'
        ].map(file_path => ({
          target: getPath(`./${file_path}`),
          template: getPath(`./temp/multiple/${file_path}`)
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
        ].map(file_path => ({
          target: getPath(`./dashboard/${file_path}`),
          template: getPath(`./temp/templates/dashboard/${file_path}`)
        }))
      );
  });
});
