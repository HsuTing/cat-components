'use strict';

import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {formReducer} from 'cat-components/lib/input-redux';

export default {
  reducer: combineReducers(formReducer),
  enhancer: createLogger({collapsed: true})
};
