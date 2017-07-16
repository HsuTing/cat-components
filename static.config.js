'use strict';

const fs = require('fs');
const path = require('path');
const {combineReducers} = require('redux');

const useUrls = require('./lib/utils/useUrls').default;

const languageData = require('./docs/public/i18n/en-us.json');
const {formReducer} = require('./lib/input-redux');

const getCode = relativePath => {
  const data = {};
  const folderPath = path.resolve(__dirname, relativePath);

  fs.readdirSync(folderPath)
    .forEach(file => {
      if((/Use/).test(file))
        data[file.replace(/.js/, '')] = fs.readFileSync(
          path.resolve(folderPath, file),
          {encoding: 'utf-8'}
        );
    });

  return data;
};

const data = Object.assign({},
  getCode('./docs/src/components/'),
  getCode('./docs/src/components/multiple')
);

module.exports = useUrls(['/', '/multiple/'], {
  name: 'docs',
  component: './lib/docs/components/index/Index',
  redux: true,
  js: 'index',
  languageData: JSON.stringify(languageData),
  data: JSON.stringify(data),
  props: {
    defaultData: languageData,
    data,
    redux: {
      reducer: combineReducers(formReducer)
    }
  }
});
