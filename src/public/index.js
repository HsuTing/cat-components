'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';

import Index from 'components/Index';
import {form} from 'utils/inputRedux';

import Wrapper from './../Wrapper';

const reducer = combineReducers({form});
const store = createStore(
  reducer,
  applyMiddleware(createLogger({
    collapsed: true
  }))
);

(() => {
  ReactDOM.render(
    <Wrapper>
      <Provider store={store}>
        <Index leng='en-us'
          defaultData={languageData}
          dirPath={languageDir}
        />
      </Provider>
    </Wrapper>,
    document.getElementById('root')
  );
})();
