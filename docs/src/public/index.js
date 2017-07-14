'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';

import Index from 'components/Index';

import {form} from './../Input-Redux';

const redux = {
  reducer: combineReducers(form),
  enhancer: createLogger({collapsed: true})
};

(() => {
  ReactDOM.render(
    <Index defaultData={languageData}
      dirPath={languageDir}
      redux={redux}
    />,
    document.getElementById('root')
  );
})();
