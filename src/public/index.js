'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';

import Index from 'components/Index';
import {form} from 'utils/inputRedux';

const reducer = combineReducers({form});
const enhancer = createLogger({
  collapsed: true
});

(() => {
  ReactDOM.render(
    <Index defaultData={languageData}
      dirPath={languageDir}
      redux={{reducer, enhancer}}
    />,
    document.getElementById('root')
  );
})();
