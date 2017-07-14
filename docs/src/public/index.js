'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {form} from 'cat-components/lib/input-redux';

import Index from './../components/index/Index';

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
