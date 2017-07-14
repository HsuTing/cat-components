'use strict';

const {combineReducers} = require('redux');

const languageData = require('./docs/public/i18n/en-us.json');
const {form} = require('./lib/input-redux');

module.exports = [{
  redux: true,
  component: './lib/docs/components/index/Index',
  js: 'index',
  name: 'docs',
  languageData: JSON.stringify(languageData),
  props: {
    defaultData: languageData,
    redux: {
      reducer: combineReducers(form)
    }
  }
}];
