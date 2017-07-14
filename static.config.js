'use strict';

const fs = require('fs');
const path = require('path');
const {combineReducers} = require('redux');

const languageData = require('./docs/public/i18n/en-us.json');
const {formReducer} = require('./lib/input-redux');

const data = {};
const folderPath = path.resolve(__dirname, './docs/src/components/');
fs.readdirSync(folderPath)
  .forEach(file => {
    if((/Use/).test(file))
      data[file.replace(/.js/, '')] = fs.readFileSync(
        path.resolve(folderPath, file),
        {encoding: 'utf-8'}
      );
  });

module.exports = [{
  redux: true,
  component: './lib/docs/components/index/Index',
  js: 'index',
  name: 'docs',
  languageData: JSON.stringify(languageData),
  data: JSON.stringify(data),
  props: {
    defaultData: languageData,
    data,
    redux: {
      reducer: combineReducers(formReducer)
    }
  }
}];
