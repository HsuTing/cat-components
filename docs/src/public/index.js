'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {formReducer} from 'cat-components/lib/input-redux';

import Index from './../components/index/Index';

const redux = {
  reducer: combineReducers(formReducer),
  enhancer: createLogger({collapsed: true})
};

(() => {
  ReactDOM.render(
    <Index defaultData={languageData}
      dirPath={languageDir}
      redux={redux}
      data={data}
    />,
    document.getElementById('root')
  );
})();
