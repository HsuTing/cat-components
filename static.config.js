'use strict';

const {combineReducers} = require('redux');

const languageData = require('./docs/public/i18n/en-us.json');
const {form} = require('./lib/utils/inputRedux');

module.exports = [{
  redux: true,
  component: './lib/components/Index',
  js: 'index',
  name: 'docs',
  languageData: JSON.stringify(languageData),
  props: {
    defaultData: languageData,
    redux: {
      reducer: combineReducers({form})
    }
  }
}];
