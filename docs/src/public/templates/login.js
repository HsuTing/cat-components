'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {formReducer} from 'cat-components/lib/input-redux';

import Login from './../../components/templates/Login';

const redux = {
  reducer: combineReducers(formReducer),
  enhancer: createLogger({collapsed: true})
};

(() => {
  ReactDOM.render(
    <Login redux={redux} />,
    document.getElementById('root')
  );
})();
