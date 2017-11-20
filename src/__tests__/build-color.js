'use strict';

import fs from 'fs';
import path from 'path';

import buildColor from './../bin/core/build-color';

const colors = fs.readdirSync(path.resolve(__dirname, './../color'))
  .map(name => name.replace(/.js/g, ''))
  .sort();

describe('build color', () => {
  it('# run', () => {
    expect(
      buildColor().reduce((result, {name, options}) => {
        result[name] = Object.keys(options).length;
        return result;
      }, {})
    ).toMatchObject(
      colors.reduce((result, name) => {
        if(['white', 'black'].includes(name))
          return result;

        result[name] = 10;
        return result;
      }, {})
    );
  });

  it('# check color list', () => {
    expect(colors).toMatchObject([
      ...(fs.readdirSync(path.resolve(__dirname, './../../data/color'))),
      'white',
      'black'
    ].sort());
  });
});
