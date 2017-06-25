'use strict';

const languageData = require('./docs/public/i18n/en-us.json');

module.exports = [
  {
    component: './lib/components/Index',
    js: 'index',
    name: 'docs',
    languageData: JSON.stringify(languageData),
    props: {
      defaultData: languageData
    }
  }
];
